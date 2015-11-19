import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';

export default class Divider extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
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