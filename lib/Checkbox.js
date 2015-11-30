import React, {
    Component,
    StyleSheet,
    PropTypes,
    Text,
    View,
    Animated
} from 'react-native';
import { TYPO, PRIMARY, COLOR, COLOR_NAME, THEME_NAME} from './config';
import Icon from './Icon';

const typos = StyleSheet.create(TYPO);

/**
 * Checkbox Component
 * @example
 * <Checkbox value="1" label="Checkbox On" checked={true}/>
 <Checkbox value="2" label="Checkbox Off"/>
 <Checkbox value="3" label="Checkbox On Disabled" checked={true} disabled={true}/>
 <Checkbox value="4" label="Checkbox Off Disabled" disabled={true}/>
 <Checkbox value="5" checked={true}/>
 <Checkbox value="6"/>
 */
export default class Checkbox extends Component {
    /**
     * @param {object} props
     * @param {string} [props.label] - Checkbox can have a label to describe it.
     * @param {enum(THEME_NAME)} [props.theme='light'] - Theme of Checkbox
     * @param {enum(COLOR_NAME)} [props.primary=PRIMARY] - Primary color name.
     * @param {string} props.value - Checkbox must have a value
     * @param {boolean} [props.checked] - Specifies that an Checkbox should be pre-selected
     * @param {boolean} [props.disabled] - Specifies that an Checkbox element should be disabled
     * @param {function(isChecked:boolean,value:string)} [props.onCheck] - Function will be triggered when check or
     * uncheck the Checkbox
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

        /**
         *
         * @type {{onStartShouldSetResponder: Checkbox._responder.onStartShouldSetResponder, onResponderGrant: Checkbox._highlight, onResponderRelease: Checkbox._handleResponderEnd, onResponderTerminate: Checkbox._unHighlight}}
         * @private
         */
        this._responder = {
            onStartShouldSetResponder: (e) => true,
            onResponderGrant: this._highlight,
            onResponderRelease: this._handleResponderEnd,
            onResponderTerminate: this._unHighlight,
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
        value: PropTypes.string.isRequired,
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
            value,
            } = this.props;


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
                checked: COLOR[`${primary}500`].color,
                default: '#000'
            },
            dark: {
                disabled: '#fff',
                checked: COLOR[`${primary}500`].color,
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
                {...this._responder}
            >
                <Animated.View style={[styles.ripple,{
                    transform: [
                        {scale: scaleValue}
                    ],
                    opacity: opacityValue,
                    backgroundColor: CURR_COLOR
                }]}/>
                <Icon name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                      size={24}
                      color={CURR_COLOR}
                      key={value}
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

    /**
     *
     * @private
     */
    _highlight = () => {
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

    /**
     *
     * @private
     */
    _unHighlight = () => {
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

    /**
     *
     * @private
     */
    _handleResponderEnd = () => {
        this._unHighlight();
        let { checked, disabled } = this.props;

        if (!disabled) {
            this.props.onCheck && this.props.onCheck(!checked, this.props.value);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
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
        flex: 1
    }
});