import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    TouchableNativeFeedback
} from 'react-native';
import Icon from './Icon';

export default class IconButton extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        const {
            onPressButton,
            children
            } = this.props;
        return (
            <TouchableNativeFeedback
                onPress={onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View>
                    {children}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({

});