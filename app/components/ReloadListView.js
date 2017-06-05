import React, { Component } from 'react';
import {
    ListView,
    View,
    Text,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import axios from 'axios';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ReloadListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUrl: props.fetchingUrl,
            isConnectionLost: false,
            refreshing: false,
            dataSource: ds.cloneWithRows(['loading'])
        };
    }

    componentWillMount() {
        this.loadListData(this.props.sortFunc);
    }

    loadListData(sortFunc) {
        this.setState({ refreshing: true });
        axios
            .get(this.state.fetchingUrl)
            .then((response) => {
                if (sortFunc) {
                    this.setState({
                        isConnectionLost: false,
                        dataSource: ds.cloneWithRows(response.data.sort(sortFunc)),
                        refreshing: false
                    });
                } else {
                    this.setState({
                        isConnectionLost: false,
                        dataSource: ds.cloneWithRows(response.data),
                        refreshing: false
                    });
                }
            })
            .catch(() => {
                this.setState({
                    isConnectionLost: true,
                    refreshing: false
                });
            });
    }

    showLostConnectionAlert() {
        if (this.state.isConnectionLost) {
            return (
                <View 
                    style={{ 
                        alignItems: 'center', 
                        backgroundColor: 'transparent', 
                        paddingTop: 40 }}
                >
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>
                        Network Error!
                    </Text>
                    <TouchableOpacity onPress={() => this.loadListData(this.props.sortFunc)}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: '#fff' }}>
                            Try again
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <View>
                {this.showLostConnectionAlert()}
                {
                    this.state.isConnectionLost ? null :
                        <ListView
                            dataSource={this.state.dataSource}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => this.loadListData(this.props.sortFunc)}
                                />
                            }
                            renderRow={this.props.renderRow}
                            renderSeparator={this.props.renderSeparator}
                        />
                }
            </View>
        );
    }
}

export default ReloadListView;
