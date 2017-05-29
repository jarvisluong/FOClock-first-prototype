import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

const backgroundImg = require('../../assets/5.jpg');

const styles = StyleSheet.create({
    mainBackgroundImgWrapper: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    mainBackgroundImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    mainBackgroundImgColorLayer: {
        backgroundColor: '#FC5000',
        opacity: 0.75,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },

    profileWrapper: {
        width: Dimensions.get('window').width,
        paddingTop: 30,
        backgroundColor: 'transparent',
        flexGrow: 1,
        alignItems: 'center'
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 20
    },
    profileAchievements: {
        width: Dimensions.get('window').width,
        height: 60,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    achievementDetails: {
        flex: 1,
        alignItems: 'center'
    },

    photoSwipe: {
        width: Dimensions.get('window').width,
        flexGrow: 1,
        alignItems: 'center'
    }
});

class ProfileUser extends Component {
    constructor() {
        super();
        this.state = {
            profilePic: require('../../assets/profile_pic.jpg'),
        }
    }

    render() {
        return (
            <View>
                <View style={styles.mainBackgroundImgWrapper}>
                    <Image source={backgroundImg}
                            style={styles.mainBackgroundImg}
                            />
                    <View style={styles.mainBackgroundImgColorLayer} />
                </View>
                <View>
                    <View style={styles.profileWrapper}>
                        <Image source={this.state.profilePic} style={styles.profilePic}/>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 12}}>Luong Dang Hai</Text>
                        <Text style={{color: '#fff', fontSize: 18, marginBottom: 20}}>Professional Programmer</Text>
                        <View style={styles.profileAchievements}>
                            <View style={styles.achievementDetails}>
                                <Text style={{color: '#fff'}}>33</Text>
                                <Text style={{color: '#fff'}}>Likes</Text>
                            </View>
                            <View style={styles.achievementDetails}>
                                <Text style={{color: '#fff'}}>94</Text>
                                <Text style={{color: '#fff'}}>Following</Text>
                            </View>
                            <View style={styles.achievementDetails}>
                                <Text style={{color: '#fff'}}>300</Text>
                                <Text style={{color: '#fff'}}>Followers</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.photoSwipe}>
                        <Swiper
                            width={Dimensions.get('window').width*0.8}
                            height={200}
                            showsButtons={true}
                            autoplay={true}
                        >
                            <View><Text>1</Text></View>
                            <View><Text>2</Text></View>
                            <View><Text>3</Text></View>
                            <View><Text>4</Text></View>
                        </Swiper>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProfileUser;