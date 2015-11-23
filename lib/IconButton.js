import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    TouchableNativeFeedback
} from 'react-native';
import Icon from './Icon';

/**
 * IconButton Component
 */
export default class IconButton extends Component {
    /**
     *
     * @param {object} props
     * @param {function} [props.onPressButton] - Function will be triggered on press icon button.
     */
    constructor(props) {
        super(props);
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