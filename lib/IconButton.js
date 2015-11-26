import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import Icon from './Icon';
import Ripple from './Ripple';

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
            <Ripple
                onPress={onPressButton}>
                <View>
                    {children}
                </View>
            </Ripple>
        );
    }
}

const styles = StyleSheet.create({

});