import React, {
    Component,
    StyleSheet,
    PropTypes,
    Text,
    View,
    Animated
} from 'react-native';
import { TYPO, PRIMARY, COLOR } from './config';
import Icon from './Icon';

const typos = StyleSheet.create(TYPO);

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
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
        theme: PropTypes.string,
        primary: PropTypes.string,
        onCheck: PropTypes.func,
        value: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
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
                <Icon name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                      size={24}
                      color={CURR_COLOR}
                      key={value}
                      style={{
                        opacity: OPACITY
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

        if (!disabled) {
            this.props.onCheck && this.props.onCheck(!checked, this.props.value);
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
        marginBottom: 16,
    },
    ripple: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#000',
        borderRadius: 56,
        top: -12,
        left: -12
    },
    label: {
        marginLeft: 16,
        opacity: COLOR.darkPrimaryOpacity.opacity
    }
});