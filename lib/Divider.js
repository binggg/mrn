import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';

export default class Divider extends Component {
    /**
     *
     * @param {object} props
     * @param {boolean} [props.inset=false] - Whether the divider have a 72 dp marginLeft or not
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        inset: false
    };
    static propTypes = {
        inset: PropTypes.bool
    };
    state = {};

    render = () => {
        const {
            inset
            } = this.props;

        return (
            <View style={[styles.divider,inset && {
                marginLeft: 72
            }]} />
        );
    }
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: 'rgba(0,0,0,.12)',
        height:1
    }
});