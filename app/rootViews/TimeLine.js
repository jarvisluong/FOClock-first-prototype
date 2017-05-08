import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import SingleEvent from '../components/SingleEvent';

class TimeLine extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    happening: true,
                    title: "title1",
                    content: "This shit is happening, go get some drink",
                },
                {
                    happening: false,
                    title: "title2",
                    content: "w8 m8",
                },
                {
                    happening: false,
                    title: "title3",
                    content: "w8 m8",
                },
                {
                    happening: false,
                    title: "title4",
                    content: "w8 m8",
                },
            ])
        };
    }

    showEventDetail(event) {
        this.props.navigator.push({
            screen: 'foclock.SingleEventDetail',
            title: event.title,
            passProps: {content: event.content},
            animated: true,     
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
                        <TouchableHighlight onPress={() => this.showEventDetail(rowData)}>
                            <View>
                                <SingleEvent happening={rowData.happening} />
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        );
    }
}

export default TimeLine;