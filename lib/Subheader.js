import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';
import {
    TYPO
} from './config'

export default class Subheader extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {
        primaryColor: 'rgba(0,0,0,.54)',
        inset: false,
        theme: 'light'
    };
    static propTypes = {
        text: PropTypes.string.isRequired,
        primaryColor: PropTypes.string,
        inset: PropTypes.bool,
        theme: PropTypes.string
    };
    state = {};

    render = () => {
        const {
            text,
            primaryColor,
            inset,
            theme
            } = this.props;
        return (
            <View style={[styles.subheaderContainer,{
                paddingLeft: inset ? 72 : 16
            }]}>
                <Text style={[styles.text, {
                    color: primaryColor,
                    fontWeight: '500'
                }]}>
                    {text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subheaderContainer: {
        padding: 16
    },
    text: TYPO.paperFontBody1
});