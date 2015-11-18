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
        secondaryText: PropTypes.string,
        secondaryTwoLineText: PropTypes.string,
        leftIcon: PropTypes.object,
        leftAvatar: PropTypes.object,
        rightAvatar: PropTypes.object,
        rightIcon: PropTypes.object,
        lines: PropTypes.number,
        onPress: PropTypes.func,
        primaryColor: PropTypes.string
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
            primaryColor
            } = this.props;
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)')}
                onPress={onPress}
            >
                <View style={[styles.listContainer]}>
                    {leftIcon &&
                    <View style={styles.leftIcon}>
                        {leftIcon}
                    </View>}
                    {leftAvatar &&
                    <View style={styles.leftAvatar}>
                        {leftAvatar}
                    </View>
                    }
                    <Text style={[styles.primaryText,{color: primaryColor}]}>{primaryText}</Text>

                    {leftAvatar &&
                    <View style={styles.rightAvatar}>
                        {rightAvatar}
                    </View>}
                    {rightIcon &&
                    <View>
                        {rightIcon}
                    </View>
                    }
                </View>
            </TouchableNativeFeedback>
        );
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
        paddingTop: 12,
        paddingBottom: 12
    },
    rightIcon: {
        paddingLeft: 16,
        paddingTop: 12,
        paddingBottom: 12
    },
    leftAvatar: {
        width: 56,
        paddingTop: 8,
        paddingBottom:8
    },
    rightAvatar: {
        width: 56,
        paddingTop: 8,
        paddingBottom:8
    },
    primaryText:Object.assign({},
        TYPO.paperFontSubhead,
        {
            flex: 1,
        }
    )
});