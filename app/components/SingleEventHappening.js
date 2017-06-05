import React from 'react';
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
        height: 160
    },
    singleEventBackgroundImgWrapper: {
        height: 160,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    singleEventBackgroundImg: {
        width: Dimensions.get('window').width,
        height: 160
    },
    singleEventBackgroundImgColorLayer: {
        backgroundColor: 'black',
        opacity: 0.3,
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
        fontSize: 27,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#FFFB38',
        paddingBottom: 10
    },

    singleEventMeta: {
        flexGrow: 1
    },
    singleEventPlace: {
        fontSize: 15,
        color: '#FFFB38'
    },
    singleEventDistance: {
        color: '#FFFB38',
        fontSize: 14,
    },
    singleEventIconsWrapper__left: {
        position: 'absolute',
        left: 20,
        bottom: 10,
    },
    singleEventIconsWrapper: {
        position: 'absolute',
        right: 20,
        bottom: 15,
    },
    singleEventIcon: {
        color: '#FFFB38',
        opacity: 0.9,
        height: 25,
        fontSize: 18
    }
});

const backgroundImg = require('../../assets/single_event_header.jpg');

const SingleEvent = (props) => {
    const { eventName, eventTime, eventPlace } = props.eventData;

    return (
        <View style={styles.singleEventWrapper}>
            <View style={styles.singleEventBackgroundImgWrapper}>
                    {/*<Image
                        source={backgroundImg}
                        style={[styles.singleEventBackgroundImg, props.happening ? {height: 160} : {height: 120}]} />*/}
                    <View style={styles.singleEventBackgroundImgColorLayer} />
                </View>

            <View style={styles.singleEventContent}>
                <Text style={styles.singleEventTitle}>{eventName}</Text>
                <View style={styles.singleEventMeta}>
                    <Text style={styles.singleEventPlace}>{String(eventPlace).split(',')[0]}</Text>
                </View>

                <View style={styles.singleEventIconsWrapper__left}>
                    <Text style={styles.singleEventDistance}>10km</Text>
                </View>

                <View style={styles.singleEventIconsWrapper}>
                    {/*{item.teemu && <Text style={styles.singleEventIcon}>
                        <Icon name='school' size={15} /> Emäteemu!</Text>}*/}
                    <Text style={styles.singleEventIcon}>Ongoing!</Text>
                    {/*{!pastEvent && timepoint.startsSoon && <Text style={styles.gridListItemIcon}>Starts soon!</Text>}*/}
                </View>
            </View>
        </View>
    )
}

export default SingleEvent;