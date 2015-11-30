import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Animated,
    Text
} from 'react-native';

/**
 * Ripple Components
 */
export default class Ripple extends Component {
    /**
     *
     * @param {object} props
     * @param {string} [props.color='#999'] - Ripple color
     * @param {string} [props.background='#999'] - Ripple background color
     * @param {string} [props.rippleOpacity=.2] - Ripple background color
     * @param {string} [props.backgroundOpacity=.2] - Ripple background color
     *
     */
    constructor(props) {
        super(props);
        /**
         *
         * @type {{scaleValue: Animated.Value}}
         */
        this.state = {
            scaleValue: new Animated.Value(0.001),
        };

        /**
         *
         * @type {{onStartShouldSetResponder: Ripple._responder.onStartShouldSetResponder, onResponderGrant: Ripple._highlight, onResponderRelease: Ripple._handleResponderEnd, onResponderTerminate: Ripple._unHighlight}}
         * @private
         */
        this._responder = {
            onStartShouldSetResponder: (e) => true,
            onResponderGrant: this._highlight,
            onResponderRelease: this._handleResponderEnd,
            onResponderTerminate: this._unHighlight,
        };
    }

    static
    defaultProps = {
        color: '#999',
        background: '#999999',
        rippleOpacity: .2,
        backgroundOpacity: .2
    };
    static
    propTypes = {
        color: PropTypes.string,
        background: PropTypes.string,
        rippleOpacity: PropTypes.number,
        backgroundOpacity: PropTypes.number
    };
    state = {
        rippling: false
    };


    render = () => {
        const {
            color,
            background,
            rippleOpacity,
            backgroundOpacity,
            children,
            style,
            ...other,
            } = this.props;
        const {
            rippling,
            size,
            pageX,
            pageY,
            scaleValue,
            location
            } = this.state;
        const assignStyle = Object.assign({}, styles.container, style);
        return (
            <View ref="container" style={assignStyle}
                {...this._responder}
                {...other}
            >
                <View style={[
                    styles.background,
                     {
                        backgroundColor: rippling ? background : 'transparent',
                        opacity: backgroundOpacity,
                    }
                    ]}/>
                <Animated.View style={[
                styles.ripple,
                location &&
                {
                    backgroundColor:color,
                    width: size,
                    height: size,
                    top: pageY - location.pageY - size /2,
                    left: pageX - location.pageX - size / 2,
                    borderRadius: size/2,
                    opacity: rippleOpacity
                },
                {
                    transform: [
                        {scale: scaleValue}
                    ],
                }
                ]}/>
                {children}
            </View>
        );
    };

    /**
     *
     * @param e
     * @private
     */
    _highlight = (e) => {
        const {
            pageX,
            pageY
            } = e.nativeEvent;

        this.setState({
            rippling: true,
            pageX,
            pageY
        });

        !!this.state.size || this._getContainerDimensions();

        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 500
            }
        ).start();
    };

    /**
     *
     * @private
     */
    _unHighlight = () => {
        this.setState({
            rippling: false
        });

        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 0.001,
                duration: 0
            }
        ).start();
    };

    /**
     *
     * @param e
     * @private
     */
    _handleResponderEnd = (e) => {
        var onPress = this.props.onPress;
        onPress && setTimeout(onPress.bind(this), 0)
        this._unHighlight();
    };

    /**
     *
     * @private
     */
    _getContainerDimensions = () => {
        this.refs.container.measure((x, y, width, height, pageX, pageY)=> {
            this.setState({
                size: 2 * (width > height ? width : height),
                location: {pageX, pageY}
            })
        })
    }

}

const styles = {
    container: {
        backgroundColor: 'rgba(0,0,0,0)',
        overflow: 'hidden'
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    ripple: {
        position: 'absolute',
    }
};