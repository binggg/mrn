import React, {
    Component,
    AppRegistry,
    StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import Main from './redux/containers/Main';
const store = configureStore();

export default class MaterialReactNative extends Component {
    render = () => {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    };
}
AppRegistry.registerComponent('MaterialReactNative', () => MaterialReactNative);
