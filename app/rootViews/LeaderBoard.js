import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image
} from 'react-native';
import Background from '../components/Background';
import ReloadListView from '../components/ReloadListView';

const backgroundImg = require('../../assets/2.jpg');
const profilePicDemoImg = require('../../assets/profile_pic.jpg');

const windowWidth = Dimensions.get('window').width;

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
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
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
    }
});

const LeaderBoard = () => (
    <View>
        <Background imgLink={backgroundImg} opacity={0.2} />
        <ReloadListView
            fetchingUrl={'http://localhost:3000/leaderboard'}
            renderRow={(rowData, sectionID, rowID) => (
                <View style={styles.leaderboardRowWrapper}>
                    <View style={styles.visualScoreWrapper}>
                        <View
                            style={[
                                styles.visualScoreColorLayer,
                                {
                                    width: windowWidth * rowData.score * 0.005,
                                    backgroundColor: rowID % 2 === 0 ? '#FC5000' : '#00A3AD'
                                }]}
                        />
                    </View>
                    <View style={styles.leaderboardRowContent}>
                        <View style={styles.leaderboardUser}>
                            <Image 
                                source={profilePicDemoImg} 
                                style={styles.userProfilePic} 
                            />
                            <Text style={styles.leaderboardUsername}>{rowData.name}</Text>
                        </View>
                        <Text style={styles.leaderboardScore}>{rowData.score}</Text>
                    </View>
                </View>
            )}
            sortFunc={(left, right) => right.score - left.score}
        />
    </View>
);

export default LeaderBoard;
