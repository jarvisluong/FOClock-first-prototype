import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

class DevView extends Component {
    render() {
        return (
            <View style={{ padding: 15 }}>
                <TouchableOpacity 
                    onPress={
                        () => { 
                            global.foclockStorage.remove({ key: 'events' });
                            global.foclockStorage.remove({ key: 'leaderboard' });
                        }
                    }
                >
                    <View 
                        style={{ 
                            height: 30, 
                            borderRadius: 15, 
                            backgroundColor: '#FC5000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10 
                        }}
                    >
                        <Text style={{ color: '#FFF' }}>Remove Cache</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DevView;
