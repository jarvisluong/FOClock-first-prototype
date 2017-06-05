import React, { Component } from 'react';
import {
    ScrollView,
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
    },
    smallP: {
        fontSize: 14,
        fontWeight: '300'
    } 
});

Colors.loadColors({
    black: '#000',
});

const backgroundImg = require('../../assets/partyimage.jpg');

const styles = StyleSheet.create({
    imgBannerWrapper: {
        height: 220,
        width: Dimensions.get('window').width,
        flexGrow: 1
    },
    imgBanner: {
        height: 220,
        width: Dimensions.get('window').width
    }
});

class SingleEventDetail extends Component {

    static navigatorStyle = {
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
        };
    }

    toggleConfirm() {
        const currentBuyState = this.state.buyPressed;
        this.setState({ buyPressed: !currentBuyState });
    }

    render() {
        const { eventName, eventPlace, eventTime, eventContent } = this.props.eventData;

        return (
            <View style={{ flex: 1 }}>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    showsPagination={false}
                    automaticallyAdjustContentInsets
                >
                    <ScrollView>
                        <View style={styles.imgBannerWrapper}>
                            <Image
                                source={backgroundImg}
                                style={styles.imgBanner}
                            />
                        </View>
                        <View padding-15>
                            <Text h1 black>{eventName}</Text>
                            <Text marginT-5 smallP black>{eventPlace}</Text>
                            <Text marginT-5 smallP black>{eventTime}</Text>
                            <Text marginT-15 p black>{eventContent}</Text>
                        </View>
                        <View center marginT-20>
                            {
                                this.state.buyPressed ?
                                <Button 
                                    onPress={this.toggleConfirm.bind(this)} 
                                    style={{ backgroundColor: '#000' }} 
                                    label="Confirm" 
                                /> :
                                <Button 
                                    onPress={this.toggleConfirm.bind(this)} 
                                    background-orange20 
                                    label="Buy ticket" 
                                />
                            }
                        </View>
                    </ScrollView>
                    <View padding-15>
                        <Text h1 black>PREPARTY {this.state.index}</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

export default SingleEventDetail;
