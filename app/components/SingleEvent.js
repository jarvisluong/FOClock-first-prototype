import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    singleEventWrapper: {
        width: Dimensions.get('window').width,
        flexGrow: 1,
        height: 200,
        backgroundColor: 'red'
    },
    singleEventWrapperHappenning: {
        width: Dimensions.get('window').width,
        flexGrow: 1,
        height: 200,
        backgroundColor: 'blue'
    },
    singleEventBackgroundImgWrapper: {
        height: 200,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    singleEventBackgroundImg: {
        width: Dimensions.get('window').width,
        height: 200
    },
    singleEventBackgroundImgColorLayer: {
        backgroundColor: '#444',
        opacity: 0.6,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    }
});

class SingleEvent extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <View style={this.props.happening? styles.singleEventWrapperHappenning : styles.singleEventWrapper} />
        )
    }
}

export default SingleEvent;