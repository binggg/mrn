import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';
import { TYPO, COLOR } from './config';

export default class List extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {
        lines: 1,
        primaryColor: 'rgba(0,0,0,.87)'
    };
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        secondaryTwoLineText: PropTypes.string,
        leftIcon: PropTypes.object,
        leftAvatar: PropTypes.object,
        rightAvatar: PropTypes.object,
        rightIcon: PropTypes.object,
        lines: PropTypes.number,
        onPress: PropTypes.func,
        primaryColor: PropTypes.string,
        onLeftIconClicked: PropTypes.func,
        onRightIconClicked: PropTypes.func
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
            secondaryTextMoreLine
            } = this.props;

        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)')}
                onPress={onPress}
            >
                <View style={[styles.listContainer, {
                    height: lines > 2 ? ((lines -1) * 16 + 56) : (secondaryText ? 72 : (leftAvatar || rightAvatar ) ? 56 : 48)
                }]}>

                    {leftIcon &&
                    <View style={[styles.leftIcon,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]} onPress={onLeftIconClicked}>
                        {leftIcon}
                    </View>}

                    {leftAvatar &&
                    <View style={[styles.leftAvatar,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]}>
                        {leftAvatar}
                    </View>
                    }

                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={[styles.primaryText,{color: primaryColor}]}>{primaryText}</Text>
                        {secondaryText &&
                        <View style={[{height:16},lines > 2 && {height: 16* (lines - 1)}]}>
                            <Text
                                style={[{height:16},lines > 2 && {height: 16* (lines - 1)},styles.secondaryText,]}>{secondaryText}</Text>
                        </View>}
                        {secondaryTextMoreLine &&
                        <View style={[{height:16},lines > 2 && {height: 16* (lines - 1)}]}>
                            {secondaryTextMoreLine.map((line) =>(
                                <Text style={[styles.secondaryText,{height:16,paddingBottom: 2,lineHeight:16},line.style]}>{line.text}</Text>
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

                    {rightIcon &&
                    <View style={[styles.rightIcon,,lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-start'
                    }]} onPress={onRightIconClicked}>
                        {rightIcon}
                    </View>
                    }
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
            lineHeight: 16,
            paddingBottom: 8
        }
    ),
    secondaryText: Object.assign({},
        TYPO.paperFontBody1,
        {
            lineHeight: 18,
            fontSize: 14,
            color: 'rgba(0,0,0,.54)'
        }
    )
});