import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const foclockStorage = new Storage({
    size: 100,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
    // sync : {

    // }
});

global.foclockStorage = foclockStorage;
