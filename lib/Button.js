import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';
import { TYPO, PRIMARY, COLOR, THEME_NAME, COLOR_NAME } from './config';

/**
 * Button Component
 * @example
 *
 * <Subheader text="Light Theme"/>
    <View style={styles.content}>
        <Button value="NORMAL FLAT" primary={primary} onPress={()=> console.log(this.refs)}/>
        <Button value="DISABLED FLAT" disabled={true} primary={primary}/>
        <Button value="NORMAL RAISED" raised={true} primary={primary}/>
        <Button value="DISABLED RAISED" disabled={true} raised={true} primary={primary}/>
    </View>
    <Subheader text="Dark Theme"/>
    <View style={{
            backgroundColor: COLOR.paperGrey900.color,
            padding: 16,

        }}>
        <Button value="NORMAL FLAT" theme="dark" primary={primary}/>
        <Button value="DISABLED FLAT" disabled={true} theme="dark" primary={primary}/>
        <Button value="NORMAL RAISED" theme="dark" raised={true} primary={primary}/>
        <Button value="DISABLED RAISED" disabled={true} theme="dark" raised={true} primary={primary}/>
    </View>
 */

export default class Button extends Component {
    /**
     *
     * @param {object} props
     * @param {string} props.value - Button Text. If language is english, all letters should be capitalized.
     * @param {boolean} [props.disabled=false] - if `true`, Button can't be pressed
     * @param {enum(THEME_NAME)} [props.theme='light'] - Button Theme
     * @param {enum(COLOR_NAME)} [props.primary=PRIMARY] - Primary color name
     * @param {boolean} [props.raised=false] - Whether Button looks like raised or not. If in a Modal, should not be `true`
     * @param {function} [props.onPress] - Function will be triggered when click the Button
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        theme: 'light',
        primary: PRIMARY,
        disabled: false,
        raised: false
    };
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        raised: PropTypes.bool,
        onPress: PropTypes.func
    };
    state = {};

    render = () => {
        const {
            value,
            disabled,
            theme,
            primary,
            raised,
            onPress
            } = this.props;
        const {
            background
            } = this.state;

        this.textStyleMap = {
            flat: {
                light: {
                    normal: {
                        color: COLOR[`${primary}500`].color
                    },
                    disabled: {
                        color: 'rgba(0,0,0,.26)',
                    }
                },
                dark: {
                    normal: {
                        color: COLOR[`${primary}500`].color,
                    },
                    disabled: {
                        color: 'rgba(255,255,255,.3)',
                    }
                }
            },
            raised: {
                light: {
                    normal: {
                        color: 'rgba(0,0,0,.87)',
                    },
                    disabled: {
                        color: 'rgba(0,0,0,.26)',
                    }
                },
                dark: {
                    normal: {
                        color: '#fff'
                    },
                    disabled: {
                        color: 'rgba(255,255,255,.3)',
                    }
                }
            }
        };
        this.buttonStyleMap = {
            raised: {
                light: {
                    normal: {
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        borderColor: 'rgba(0,0,0,.12)',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(0,0,0,.12)',
                    },
                    disabled: {
                        backgroundColor: 'rgba(0,0,0,.12)',
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,.12)',
                    }
                },
                dark: {
                    normal: {
                        backgroundColor: COLOR[`${primary}500`].color,
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,.12)',
                    },
                    disabled: {
                        backgroundColor: 'rgba(255,255,255,.12)',
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,.12)',
                    }
                }
            }
        };

        this.rippleColorMap = {
            flat: {
                light: {
                    normal: 'rgba(153,153,153,.4)',
                    disabled: 'rgba(0,0,0,0)'
                },
                dark: {
                    normal: 'rgba(204,204,204,.25)',
                    disabled: 'rgba(255,255,255,0)'
                }
            },
            raised: {
                light: {
                    normal: 'rgba(153,153,153,.4)',
                    disabled: 'rgba(0,0,0,0)'
                },
                dark: {
                    normal: COLOR[`${primary}700`].color,
                    disabled: 'rgba(255,255,255,0)'
                }
            }
        };

        let type = disabled ? 'disabled' : 'normal';
        let shape = raised ? 'raised' : 'flat';

        let textStyle = this.textStyleMap[shape][theme][type];
        if (raised) {
            var buttonStyle = this.buttonStyleMap[shape][theme][type];
        }
        let rippleColor = this.rippleColorMap[shape][theme][type];

        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(String(rippleColor))}  onPress={disabled || onPress}>
                <View
                    style={[
                        styles.button,
                        buttonStyle,
                        {
                            backgroundColor: background ? background : (buttonStyle && buttonStyle.backgroundColor)
                        }
                ]}>
                    <Text style={[TYPO.paperFontButton, textStyle]}>{value}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    };
}

const styles = StyleSheet.create({
    button: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
    }
});