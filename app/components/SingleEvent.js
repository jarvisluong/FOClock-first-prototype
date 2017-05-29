import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    singleEventWrapper: {
        width: Dimensions.get('window').width,
        flexGrow: 1,
        height: 120
    },
    singleEventBackgroundImgWrapper: {
        height: 120,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    singleEventBackgroundImg: {
        width: Dimensions.get('window').width,
        height: 120
    },
    singleEventBackgroundImgColorLayer: {
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },
    singleEventContent: {
        elevation: 2,
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20
    },
    singleEventTitle: {
        fontSize: 23,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        paddingBottom: 10
    },

    singleEventMeta: {
        flexGrow: 1
    },
    singleEventPlace: {
        fontSize: 15,
        color: '#ddd'
    },
    singleEventDistance: {
        color: '#ddd',
        fontSize: 14,
    },
    singleEventTime: {
        fontSize: 15,
        color: '#FFFB38',
        fontWeight: 'bold',
    },
    singleEventIconsWrapper__left: {
        position: 'absolute',
        left: 20,
        bottom: 15,
    },
    singleEventIconsWrapper: {
        position: 'absolute',
        right: 20,
        bottom: 15,
    },
    singleEventIcon: {
        color: '#fff',
        opacity: 0.9,
        height: 20,
        fontSize: 14
    }
});

const backgroundImg = require('../../assets/single_event_header.jpg');

class SingleEvent extends Component {

    render() {
        return (
            <View style={[styles.singleEventWrapper, this.props.happening ? {height: 160} : {height: 120}]}>
                {/*<View style={[styles.singleEventBackgroundImgWrapper, this.props.happening ? {height: 160} : {height: 120}]}>
                    <Image
                        source={backgroundImg}
                        style={[styles.singleEventBackgroundImg, this.props.happening ? {height: 160} : {height: 120}]} />
                    <View style={[styles.singleEventBackgroundImgColorLayer, this.props.happening ? {height: 160} : {height: 120}]} />
                </View>*/}

                <View style={styles.singleEventContent}>
                    <Text style={styles.singleEventTitle}>{this.props.eventName}</Text>
                    <View style={styles.singleEventMeta}>
                        <Text style={styles.singleEventTime}>Event time</Text>
                        <Text style={styles.singleEventPlace}>Event location</Text>
                    </View>

                    <View style={styles.singleEventIconsWrapper__left}>
                        <Text style={styles.singleEventDistance}>10km</Text>
                    </View>

                    <View style={styles.singleEventIconsWrapper}>
                        {/*{item.teemu && <Text style={styles.singleEventIcon}>
                        <Icon name='school' size={15} /> Emäteemu!</Text>}*/}
                        <Text style={styles.singleEventIcon}>{this.props.happening? 'Ongoing!' : 'Coming soon'}</Text>
                        {/*{!pastEvent && timepoint.startsSoon && <Text style={styles.gridListItemIcon}>Starts soon!</Text>}*/}
                    </View>
                </View>
            </View>  
        )
    }
}

export default SingleEvent;