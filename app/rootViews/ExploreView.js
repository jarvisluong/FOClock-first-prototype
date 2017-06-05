import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Search from 'react-native-search-box';

import Background from '../components/Background';

const backgroundImg = require('../../assets/5.jpg');

class ExploreView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Background imgLink={backgroundImg} />
                <Search />
            </View>
        );
    }
}

export default ExploreView;
