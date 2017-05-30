import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const backgroundImg = require('../../assets/2.jpg');

const styles = StyleSheet.create({
    leaderboardRowWrapper: {
        width: Dimensions.get('window').width,
        flexGrow: 1,
        height: 60,
        backgroundColor: 'transparent'
    },
    visualScoreWrapper: {
        height: 60,
        width: Dimensions.get('window').width,
        position: 'absolute'
    },
    singleEventBackgroundImg: {
        width: Dimensions.get('window').width,
        height: 60
    },
    visualScoreColorLayer: {
        opacity: 0.5,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },
    leaderboardRowContent: {
        elevation: 2,
        flexGrow: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leaderboardUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userProfilePic: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginRight: 15
    },
    leaderboardUsername: {
        fontSize: 20,
        color: '#fff'
    },
    leaderboardScore: {
        fontSize: 20,
        color: '#fff'
    },

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
        opacity: 0.2,
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0
    },
});

const dummyData = [
    {
        index: 4,
        name: 'Ta An Hai',
        score: 170
    },
    {
        index: 1,
        name: 'Luong Dang Hai',
        score: 140
    },
    {
        index: 2,
        name: 'Some other name',
        score: 150
    },
    {
        index: 3,
        name: 'Ankur Dahama',
        score: 160
    }
]

const sortData = (left, right) => right.score - left.score;

class LeaderBoard extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(dummyData.sort(sortData))
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
                        <View style={styles.leaderboardRowWrapper}>
                            <View style={styles.visualScoreWrapper}>
                                <View style={[
                                    styles.visualScoreColorLayer,
                                    {
                                        width: windowWidth * rowData.score / 200,
                                        backgroundColor: rowData.index % 2 === 0 ? '#FC5000' : '#00A3AD'
                                    }]} />
                            </View>
                            <View style={styles.leaderboardRowContent}>
                                <View style={styles.leaderboardUser}>
                                    <Image source={require('../../assets/profile_pic.jpg')} style={styles.userProfilePic}/>
                                    <Text style={styles.leaderboardUsername}>{rowData.name}</Text>
                                </View>
                                <Text style={styles.leaderboardScore}>{rowData.score}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default LeaderBoard;