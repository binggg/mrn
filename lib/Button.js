/**
 * Created by binggg on 2015/11/13.
 */
import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';
import { TYPO, PRIMARY, COLOR } from './config';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        theme: 'light',
        primary: PRIMARY
    };
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        theme: PropTypes.string,
        primary: PropTypes.string
    };
    state = {};

    render = () => {
        const {
            value,
            theme,
            disabled,
            raised,
            primary
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
        }

        let type = disabled ? 'disabled' : 'normal';
        let shape = raised ? 'raised' : 'flat';

        let textStyle = this.textStyleMap[shape][theme][type];
        if (raised) {
            var buttonStyle = this.buttonStyleMap[shape][theme][type];
        }
        let rippleColor = this.rippleColorMap[shape][theme][type];

        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(String(rippleColor))}>
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