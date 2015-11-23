import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';
import { TYPO, COLOR } from './config';
import Icon from './Icon';
import Avatar from './Avatar';

/**
 * List Compoent
 */
export default class List extends Component {
    /**
     *
     * @param {object} props
     * @param {string} props.primaryText - The primary text of a List
     * @param {string} [props.secondaryText] - The secondary text of a List
     * @param {string} [props.caption] - The least distinguishing content.
     * @param {Icon} [props.leftIcon] - Left icon. Size should be 24.
     * @param {Icon} [props.rightIcon] - Right icon. Size should be 24.
     * @param {Avatar} [props.leftAvatar] - Left avatar. Size should be 40.
     * @param {Avatar} [props.rightAvatar] - Right avatar. Size should be 40.
     * @param {number} [props.lines=1] - You must specify this prop when secondary lines large than 1. Lines = Secondary lines + 1.
     * @param {string} [props.primaryColor='rgba(0,0,0,.87)'] - The color of primary text.
     * @param {function} [props.onPress] - The primary action of a list. When user press the list will trigger this function.
     * @param {function} [props.onLeftIconClick] - The secondary action of a list. When user press the left icon will trigger this function.
     * @param {function} [props.onRightIconClick] - The secondary action of a list. When user press the right icon will trigger this function.
     * @param {{text: string, style: object} []} [props.secondaryTextMoreLine] - Pass an array when secondary text breaks some lines.
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        lines: 1,
        primaryColor: 'rgba(0,0,0,.87)'
    };
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        secondaryText: PropTypes.string,
        captionText: PropTypes.string,
        secondaryTextMoreLine: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            style: PropTypes.object
        })),
        leftIcon: PropTypes.instanceOf(Icon),
        rightIcon: PropTypes.instanceof(Icon),
        leftAvatar: PropTypes.instanceOf(Avatar),
        rightAvatar: PropTypes.instanceOf(Avatar),
        lines: PropTypes.number,
        primaryColor: PropTypes.string,
        onPress: PropTypes.func,
        onLeftIconClick: PropTypes.func,
        onRightIconClick: PropTypes.func
    };
    state = {};

    render = () => {
        const {
            primaryText,
            secondaryText,
            leftIcon,
            leftAvatar,
            rightAvatar,
            rightIcon,
            lines,
            onPress,
            primaryColor,
            onLeftIconClicked,
            onRightIconClicked,
            secondaryTextMoreLine,
            captionText
            } = this.props;

        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)')}
                onPress={onPress}
            >
                <View style={[styles.listContainer, {
                    height: lines > 2 ? ((lines -1) * 16 + 56) : (secondaryText ? 72 : (leftAvatar || rightAvatar ) ? 56 : 48)
                }]}>

                    {leftIcon && <TouchableWithoutFeedback onPress={onLeftIconClicked}>
                        <View style={[styles.leftIcon,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]}>
                            {leftIcon}
                        </View>
                    </TouchableWithoutFeedback>
                    }

                    {leftAvatar &&
                    <View style={[styles.leftAvatar,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]}>
                        {leftAvatar}
                    </View>
                    }

                    <View style={{flex:1,justifyContent:'center',}}>
                        <View style={styles.firstLine}>
                            <View style={styles.primaryTextContainer}>
                                <Text style={[styles.primaryText,{color: primaryColor}]}>{primaryText}</Text>
                            </View>
                            { (lines > 2 && !!rightIcon) || <View style={styles.captionTextContainer}>
                                <Text style={styles.captionText}>{captionText}</Text>
                            </View>}
                        </View>

                        {secondaryText &&
                        <View>
                            <Text
                                style={[{height:18},lines > 2 && {height: 22 * (lines - 1) -4},styles.secondaryText,]}>{secondaryText}</Text>
                        </View>}

                        {secondaryTextMoreLine &&
                        <View style={[{height:18},lines > 2 && {height: 22* (lines - 1) - 4}]}>
                            {secondaryTextMoreLine.map((line) =>(
                                <Text style={[styles.secondaryText,{height:22},line.style]}>{line.text}</Text>
                            ))}
                        </View>}
                    </View>

                    {rightAvatar &&
                    <View style={[styles.rightAvatar,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]}>
                        {rightAvatar}
                    </View>}
                    {}

                    <View style={{flexDirection: 'column'}}>
                        {lines > 2 && !!rightIcon && !!captionText && <View style={styles.captionTextContainer2}>
                            <Text>{captionText}</Text>
                        </View>}

                        {rightIcon && <TouchableWithoutFeedback onPress={onRightIconClicked}>
                            <View style={[styles.rightIcon, {flex: 1},lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-end',
                        justifyContent:'flex-end'

                    }]} onPress={onRightIconClicked}>
                                {rightIcon}
                            </View></TouchableWithoutFeedback>
                        }
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        height: 48,
        alignItems: 'center'
    },
    leftIcon: {
        width: 56,
    },
    rightIcon: {
        paddingLeft: 16,
    },
    leftAvatar: {
        width: 56,
    },
    rightAvatar: {
        width: 56,
    },
    primaryText: Object.assign({},
        TYPO.paperFontSubhead,
        {
            lineHeight: 24,
        }
    ),
    secondaryText: Object.assign({},
        TYPO.paperFontBody1,
        {
            lineHeight: 22,
            fontSize: 14,
            color: 'rgba(0,0,0,.54)'
        }
    ),
    firstLine: {
        flexDirection: 'row'
    },
    primaryTextContainer: {
        flex: 1
    },
    captionTextContainer: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    captionText: Object.assign({},
        TYPO.paperFontCaption
    ),
    captionTextContainer2: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    }
});