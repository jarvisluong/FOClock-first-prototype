import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions 
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.70,
        height: 200,
        flexGrow: 1,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderRadius: 5        
    },
    img: {
        width: windowWidth * 0.35,
        height: 200
    },
    details: {
        width: windowWidth * 0.35,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const ItemMenu = (props) => {
    const { imgLink, itemName, itemPrice } = props;
    return (
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={imgLink}
                resizeMode={'contain'}
            />
            <View style={styles.details}>
                <Text 
                    style={{
                        fontSize: 22,
                        fontWeight: '600'
                    }}
                >
                    {itemName}
                </Text>
                <Text>
                    {itemPrice}
                </Text>
            </View>
        </View>
    );
};

export default ItemMenu;
