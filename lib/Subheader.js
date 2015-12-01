import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';
import {
    TYPO,
    THEME_NAME
} from './config'

/**
 * Subheader Component
 *
 * @example
 *
 * <Subheader text="Subheader normal"/>
 * <Subheader text="Subheader with color" primaryColor={COLOR[`${primary}500`].color}/>
 * <Subheader text="Subheader normal, inset" inset={true}/>
 * <Subheader text="Subheader with color, inset" primaryColor={COLOR[`${primary}500`].color}inset={true}/>
 */
export default class Subheader extends Component {
    /**
     *
     * @param {object} props
     * @param {string} props.text - Subheader text.
     * @param {string} [props.primaryColor='rgba(0,0,0,.54)'] - Primary color of Subheader. Accept a color string such
     * as RGBA,RGB,HEX.
     * @param {boolean} [props.inset=false] - If `true`, Subheader is aligned with the text content with 72dp paddingLeft.
     * Often with a left-aligned floating action button.
     * @param {enum(THEME_NAME)} [props.theme='light'] - The theme of Subheader.
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        primaryColor: 'rgba(0,0,0,.54)',
        inset: false,
        theme: 'light'
    };

    static propTypes = {
        text: PropTypes.string,
        primaryColor: PropTypes.string,
        inset: PropTypes.bool,
        theme: PropTypes.oneOf(THEME_NAME)
    };

    state = {};

    render = () => {
        const {
            text,
            primaryColor,
            inset,
            theme,
            children
            } = this.props;
        const title = text || typeof children == 'string' && children;

        return (
            <View style={[styles.subheaderContainer,{
                paddingLeft: inset ? 72 : 16
            }]}>
                <Text style={[styles.text, {
                    color: primaryColor,
                    fontWeight: '500'
                }]}>
                    {title}
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