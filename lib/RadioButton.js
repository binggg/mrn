import React, {
    Component,
    StyleSheet,
    PropTypes,
    Text,
    View,
    Animated
} from 'react-native';
import Icon from './Icon';
import { TYPO, PRIMARY, COLOR, THEME_NAME, COLOR_NAME } from './config';

const typos = StyleSheet.create(TYPO);

/**
 * RadioButton Compoent
 */
export default class RadioButton extends Component {
    /**
     * @param {object} props
     * @param {string} [props.label] - RadioButton can have a label to describe it.
     * @param {enum(THEME_NAME)} [props.theme='light'] - Theme of RadioButton
     * @param {enum(COLOR_NAME)} [props.primary=PRIMARY] - Primary color name.
     * @param {string} props.value - RadioButton must have a value
     * @param {boolean} [props.checked] - Specifies that an RadioButton should be pre-selected
     * @param {boolean} [props.disabled] - Specifies that an RadioButton element should be disabled
     * @param {function(isChecked:boolean,value:string)} [props.onCheck] - Function will be triggered when check the RadioButton
     */
    constructor(props) {
        super(props);
        /**
         *
         * @type {{scaleValue: Animated.Value, opacityValue: Animated.Value}}
         */
        this.state = {
            scaleValue: new Animated.Value(0.001),
            opacityValue: new Animated.Value(0.1)
        };
    }

    static defaultProps = {
        theme: 'light',
        primary: PRIMARY
    };
    static propTypes = {
        label: PropTypes.string,
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        value: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onCheck: PropTypes.func,
    };

    render = () => {
        const {
            scaleValue,
            opacityValue
            } = this.state;
        let {
            theme,
            primary,
            checked,
            disabled,
            } = this.props;
        let primaryColor = COLOR[`${primary}500`].color;
        let status = (()=> {
            if (disabled) {
                return 'disabled'
            } else if (checked) {
                return 'checked'
            } else {
                return 'default'
            }
        })();
        let colorMap = {
            light: {
                disabled: '#000',
                checked: primaryColor,
                default: '#000'
            },
            dark: {
                disabled: '#fff',
                checked: primaryColor,
                default: '#fff'
            }
        };
        let opacityMap = {
            light: {
                checked: 1,
                default: 0.54,
                disabled: 0.26,
            },
            dark: {
                checked: 1,
                default: 0.7,
                disabled: 0.3,
            }
        };
        let labelColorMap = {
            light: '#000',
            dark: '#fff'
        };

        const CURR_COLOR = colorMap[theme][status];
        const OPACITY = opacityMap[theme][status];
        const LABEL_COLOR = labelColorMap[theme];

        return (
            <View style={[
                styles.container
            ]}
                  onStartShouldSetResponder={e=>true}
                  onResponderGrant={this._onGrant}
                  onResponderRelease={this._onRelease}>
                <Animated.View style={[styles.ripple,{
                    transform: [
                        {scale: scaleValue}
                    ],
                    opacity: opacityValue,
                    backgroundColor: CURR_COLOR
                }]}/>
                <Icon name={checked ? 'radiobox-marked' : 'radiobox-blank'}
                      size={24}
                      color={CURR_COLOR}
                      style={{
                        opacity: OPACITY,
                        margin: 16
                      }}
                />
                <View style={styles.labelContainer}>
                    <Text
                        style={[
                        typos.paperFontBody1,
                        styles.label,
                        COLOR[`${theme}PrimaryOpacity`],
                        disabled && COLOR[`${theme}DisabledOpacity`],
                        {
                            color: LABEL_COLOR,
                        }
                    ]}>
                        {this.props.label}
                    </Text>
                </View>
            </View>
        );
    };

    _onGrant = (e) => {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 150
            }
        ).start();
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: .1,
                duration: 100
            }
        ).start()
    };

    _onRelease = (e) => {
        let { checked, disabled } = this.props;

        if (!checked && !disabled) {
            this.props.onCheck && this.props.onCheck(this.props.value);
        }

        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 0.001,
                duration: 1500
            }
        ).start();
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: 0
            }
        ).start();

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ripple: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#000',
        borderRadius: 56,
        top: 4,
        left: 4
    },
    label: {
        marginLeft: 16,
        opacity: COLOR.darkPrimaryOpacity.opacity,
        flex:1
    }
});