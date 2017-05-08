import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SingleEventDetail extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.content}</Text>
            </View>
        );
    }
}

export default SingleEventDetail;