import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    colorLayer: {
        backgroundColor: '#FC5000',
        opacity: 0.75,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },
})

const Background = (props) => {
    const { imgLink, opacity } = props;

    return (
        <View style={styles.wrapper}>
            <Image source={imgLink}
                style={styles.img}
            />
            <View style={[styles.colorLayer, opacity ? { opacity: opacity } : null]} />
        </View>
    );
}

export default Background;