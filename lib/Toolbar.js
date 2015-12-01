import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';
import { TYPO, PRIMARY, COLOR } from './config';
import Icon from './Icon';
import IconButton from './IconButton';

const typos = StyleSheet.create(TYPO);

/**
 * Toolbar Component
 */
export default class Toolbar extends Component {
    /**
     *
     * @param {object} props
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        theme: 'dark',
        primary: PRIMARY
    };
    static propTypes = {
        theme: PropTypes.string,
        primary: PropTypes.string,
        navIconName: PropTypes.string,
        onIconClicked: PropTypes.func,
        title: PropTypes.string,
        titleColor: PropTypes.string,
        actions: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.string,
            show: PropTypes.oneOf(['ifRoom', 'always', 'never'])
        })),
        onActionSelected: PropTypes.func
    };
    state = {};

    render = () => {
        var {
            title,
            theme,
            primary,
            titleColor,
            navIconName,
            onIconClicked,
            actions
            } = this.props;

        var themeMap = {
            light: {
                backgroundColor: '#fff',
                color: 'rgba(0,0,0,.87)',
                iconColor: 'rgba(0,0,0,.54)',
            },
            dark: {
                backgroundColor: COLOR[`${primary}500`].color,
                color: '#rgba(255,255,255,.87)',
                iconColor: 'rgba(255,255,255,.87)',
            }
        };

        var themeStyle = themeMap[theme];
        const actionsFiltered = {};

        for (let action of actions) {
            switch (action.show) {
                case 'always':
                    actionsFiltered.out = actionsFiltered.out ? [...actionsFiltered.out, action] : [action];
                    break;
                default:
                    actionsFiltered.menu = actionsFiltered.menu ? [...actionsFiltered.menu, action] : [action];
                    break;
            }
        }

        return (
            <View style={[
                styles.toolbar,{backgroundColor :themeStyle.backgroundColor}]}>

                <IconButton onPressButton={onIconClicked}>
                    <Icon name={ navIconName || 'menu' }
                          size={24}
                          color={themeStyle.iconColor}
                          style={styles.icon}/>
                </IconButton>

                <Text style={[
                    styles.title,
                    TYPO.paperFontTitle,
                    {
                        color: themeStyle.color
                    }

                ]} numberOfLines={1}>{title}</Text>

                {actionsFiltered.out.map((action => {
                    if (action.icon) {
                        return <IconButton key={action.icon} onPressButton={action.onActionSelected}>
                            <Icon name={action.icon}
                                  size={24}
                                  color={themeStyle.iconColor}
                                  style={styles.icon}/>
                        </IconButton>
                    }

                    if (action.title) {
                        return <Text key={action.title} style={[styles.title,TYPO.paperFontSubhead,
                    {
                        color: themeStyle.color
                    }]} numberOfLines={1}>
                            {action.title}
                        </Text>
                    }
                }))}

                {actionsFiltered.menu && <IconButton>
                    <Icon name="dots-vertical"
                          size={24}
                          color={themeStyle.iconColor}
                          style={styles.icon}/>
                </IconButton>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        marginLeft: 16
    },
    icon: {
        margin: 16,
    }
});