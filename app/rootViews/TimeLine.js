import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native';

import SingleEvent from '../components/SingleEvent';

const backgroundImg = require('../../assets/2.jpg');

const styles = StyleSheet.create({
    mainBackgroundImgWrapper: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    mainBackgroundImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    mainBackgroundImgColorLayer: {
        backgroundColor: '#FC5000',
        opacity: 0.75,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },
});

class TimeLine extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    happening: true,
                    eventName: 'ESN INTO PARTY',
                    content: "This shit is happening, go get some drink",
                },
                {
                    happening: false,
                    eventName: 'Fishing day',
                    content: "w8 m8",
                },
                {
                    happening: false,
                    eventName: 'Hiking trip',
                    content: "w8 m8",
                },
                {
                    happening: false,
                    eventName: 'Mistery Event?',
                    content: "w8 m8",
                },
            ])
        };
    }

    showEventDetail(event) {
        this.props.navigator.push({
            screen: 'foclock.SingleEventDetail',
            passProps: {
                happening: event.happening,
                eventName: event.eventName, 
                content: event.content
            },
            animated: true,     
        });
    }

    render() {
        return (
            <View>
                <View style={styles.mainBackgroundImgWrapper}>
                    <Image source={backgroundImg}
                            style={styles.mainBackgroundImg}
                            />
                    <View style={styles.mainBackgroundImgColorLayer} />
                </View>
                <View style={{flexGrow: 1, elevation: 2}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => (
                            <TouchableHighlight onPress={() => this.showEventDetail(rowData)}>
                                <View>
                                    <SingleEvent 
                                        happening={rowData.happening}
                                        eventName={rowData.eventName} />
                                </View>
                            </TouchableHighlight>
                        )}
                        renderSeparator={() => (
                            <View style={{height: 1, width: Dimensions.get('window').width, backgroundColor: '#fff'}} />
                        )}
                    />
                </View>
            </View>
        );
    }
}

export default TimeLine;