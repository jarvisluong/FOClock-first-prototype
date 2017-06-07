import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Background from '../components/Background';
import ItemMenu from '../components/ItemMenu';

const backgroundImg = require('../../assets/4.jpg');
const beer = require('../../assets/beer.png');
const champagne = require('../../assets/champagne.png');
const milk = require('../../assets/milk.png');
const wine = require('../../assets/wine.png');

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    counterWrapper: {
        width: windowWidth * 0.3,
        backgroundColor: 'transparent',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterBtn: {
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A3AD'
    },
    buyBtn: {
        backgroundColor: '#00A3AD',
        width: 100,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class DrinkMenu extends Component {
    static navigatorStyle = {
        navBarButtonColor: '#fff'
    };

    constructor() {
        super();
        this.state = {
            currentSelectedIndex: 0,
            totalPrice: 0,
            buyPressed: false,
            itemDetails: [
                {
                    imgLink: beer,
                    itemName: 'Beer',
                    itemPrice: 15,
                    qualityBought: 0
                },
                {
                    imgLink: champagne,
                    itemName: 'Champagne',
                    itemPrice: 10,
                    qualityBought: 0
                },
                {
                    imgLink: milk,
                    itemName: 'Milk',
                    itemPrice: 7,
                    qualityBought: 0
                },
                {
                    imgLink: wine,
                    itemName: 'Wine',
                    itemPrice: 12,
                    qualityBought: 0
                }
            ]
        };
    }

    updateCurrentSelectedIndex(slideIndex) {
        this.setState({
            currentSelectedIndex: slideIndex
        });
    }

    resetBuy() {
        const { itemDetails } = this.state;
        const resetItemDetails = itemDetails.map((currentItem) => {
            const resetItem = currentItem;
            resetItem.qualityBought = 0;
            return resetItem;
        });
        this.setState({
            totalPrice: 0,
            itemDetails: resetItemDetails
        });
    }

    changeQualityBought(method) {
        if (method === '-') {
            const { currentSelectedIndex, itemDetails, totalPrice } = this.state;
            if (itemDetails[currentSelectedIndex].qualityBought <= 0) {
                return false;
            }
            itemDetails[currentSelectedIndex].qualityBought -= 1;
            this.setState({ 
                itemDetails,
                totalPrice: totalPrice - itemDetails[currentSelectedIndex].itemPrice
            });
        } else if (method === '+') {
            const { currentSelectedIndex, itemDetails, totalPrice } = this.state;
            itemDetails[currentSelectedIndex].qualityBought += 1;
            this.setState({ 
                itemDetails,
                totalPrice: totalPrice + itemDetails[currentSelectedIndex].itemPrice
            });
        }
    }

    renderMenuItems() {
        return this.state.itemDetails.map((entry, index) => {
            const { imgLink, itemName, itemPrice } = entry;
            return (
                <ItemMenu
                    key={`item-${index}`}
                    imgLink={imgLink}
                    itemName={itemName}
                    itemPrice={itemPrice}
                />
            );
        });
    }

    render() {
        const { currentSelectedIndex, itemDetails, totalPrice, buyPressed } = this.state;
        const currentQualityItem = itemDetails[currentSelectedIndex].qualityBought;

        return (
            <View style={{ paddingTop: 15, alignItems: 'center' }}>
                <Background imgLink={backgroundImg} />
                <Carousel
                    ref={(carousel) => { this.itemCarousel = carousel; }}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth * 0.70}
                    onSnapToItem={this.updateCurrentSelectedIndex.bind(this)}
                >
                    {this.renderMenuItems()}
                </Carousel>
                <View style={styles.counterWrapper}>
                    <TouchableOpacity 
                        onPress={() => this.changeQualityBought('-')}
                        disabled={currentQualityItem === 0}
                    >
                        <View style={styles.counterBtn}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>
                            {currentQualityItem}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => this.changeQualityBought('+')}>
                        <View style={styles.counterBtn}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        backgroundColor: 'transparent'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#fff'
                        }}
                    >
                        Total: {totalPrice}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={this.resetBuy.bind(this)}
                    >
                        <View>
                            <Text>Reset</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => this.setState({ buyPressed: !buyPressed })}
                        disabled={totalPrice === 0}
                    >
                        <View 
                            style={[
                                styles.buyBtn, 
                                { backgroundColor: buyPressed ? 'black' : '#00A3AD' }
                            ]}
                        >
                            <Text 
                                style={{ 
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            >
                                {buyPressed ? 'Confirm?' : 'Buy Now!'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default DrinkMenu;
