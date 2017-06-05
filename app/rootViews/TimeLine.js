import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import SingleEvent from '../components/SingleEvent';
import SingleEventHappening from '../components/SingleEventHappening';
import Background from '../components/Background';
import ReloadListView from '../components/ReloadListView';

const backgroundImg = require('../../assets/2.jpg');

class TimeLine extends Component {

    showEventDetail(event) {
        const { navigator } = this.props;
        if (event.happening) {
            navigator.push({
                screen: 'foclock.DrinkMenu',
                title: 'Menu',
                animated: true
            });
        } else {
            navigator.push({
                screen: 'foclock.SingleEventDetail',
                title: 'Details',
                passProps: {
                    eventData: event
                },
                animated: true,
            });
        }
    }

    render() {
        return (
            <View>
                <Background imgLink={backgroundImg} />
                <ReloadListView
                    fetchingUrl={'http://localhost:3000/events'}
                    renderRow={(rowData) => (
                        <TouchableOpacity onPress={() => this.showEventDetail(rowData)}>
                            <View style={{ backgroundColor: 'transparent' }}>
                                {rowData.happening ?
                                    <SingleEventHappening eventData={rowData} /> :
                                    <SingleEvent eventData={rowData} />
                                }
                            </View>
                        </TouchableOpacity>
                    )}
                    renderSeparator={() => (
                        <View 
                            style={{ 
                                height: 1, 
                                width: Dimensions.get('window').width, 
                                backgroundColor: '#fff' }} 
                        />
                    )}
                />
            </View>
        );
    }
}

export default TimeLine;
