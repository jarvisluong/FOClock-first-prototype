import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    Typography,
    Colors,
    Text,
    View,
    Button
} from 'react-native-ui-lib';
import Swiper from 'react-native-swiper';

Typography.loadTypographies({
    h1: {
        fontSize: 30,
        fontWeight: '500'
    },
    p: {
        fontSize: 18,
        fontWeight: '300'
    }
});

Colors.loadColors({
    black: '#000',
});

const backgroundImg = require('../../assets/single_event_header.jpg');

const styles = StyleSheet.create({
    imageBanner: {
        height: 220,
        width: Dimensions.get('window').width
    }
});

class SingleEventDetail extends Component {

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true,
        navBarButtonColor: '#fff'
    };

    static navigatorButtons = {
        rightButtons: [
            {
                id: 'goMap',
                title: 'Map'
            }
        ]
    };

    constructor() {
        super();
        this.state = {
            buyPressed: false
        }
    }

    toggleConfirm() {
        let currentBuyState = this.state.buyPressed;
        this.setState({buyPressed: !currentBuyState});
    }

    render() {
        return (
            <Swiper
                horizontal={false}
                loop={false}
                showsButtons={false}
                showsPagination={false}
            >
                <View>
                    <Image
                        source={backgroundImg}
                        style={styles.imageBanner}
                    />
                    <View padding-15>
                        <Text h1 black>{this.props.eventName}</Text>
                        <Text marginT-10 p black>Location - Time</Text>
                        <Text marginT-25 p black>This is the placeholder text for the description of the event, something
                            we can build more here. This is very funny lol. No actually not, this is stupid as shit.
                        </Text>
                    </View>
                    <View center marginT-40>
                        {this.state.buyPressed? 
                        <Button onPress={this.toggleConfirm.bind(this)} style={{backgroundColor: '#000'}} label="Confirm" /> : 
                        <Button onPress={this.toggleConfirm.bind(this)} background-orange20 label="Buy ticket" />}
                    </View>
                </View>
                <View padding-15>
                    <Text h1 black>PREPARTY {this.state.index}</Text>
                </View>
            </Swiper>
        );
    }
}

export default SingleEventDetail;