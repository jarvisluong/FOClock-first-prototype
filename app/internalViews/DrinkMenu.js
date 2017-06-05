import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Background from '../components/Background';

const backgroundImg = require('../../assets/4.jpg');

class DrinkMenu extends Component {
    static navigatorStyle = {
        navBarButtonColor: '#fff'
    };

    render() {
        return (
            <View>
                <Background imgLink={backgroundImg} />
            </View>
        );
    }
}

export default DrinkMenu;
