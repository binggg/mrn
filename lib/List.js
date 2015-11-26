import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { TYPO, COLOR } from './config';
import Icon from './Icon';
import Avatar from './Avatar';
import Ripple from './Ripple';

/**
 * List Compoent
 * @example
 *<Subheader text="Text only single-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.single.text.map(list => (
     <List
         primaryText={list.primaryText}/>
 ))}

 <Subheader text="Icon with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.single.iconText.map(list => (
     <List
         leftIcon={
             <Icon name={list.leftIcon} size={24}/>
         }
         primaryText={list.primaryText}/>
 ))}

 <Subheader text="Avatar with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.single.avatarText.map((user, i) =>(
     <List
         leftAvatar={
             <Avatar src={user.avatar}/>
         }
         primaryText={user.name}
         rightIcon={
             <Icon name="message" size={24} color={i < 2 ? primaryColor : undefined}/>
         }
     />
 ))}

 <Subheader text="Text only two-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.text.map(list => (
     <List
         primaryText={list.primaryText}
         secondaryText={list.secondaryText}
     />
 ))}

 <Subheader text="Icon with text two-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.iconText.map((list, i) => (
     <View>
         <List
             leftIcon={
             list.leftIcon ? (<Icon name={list.leftIcon} size={24} color={COLOR[`${primary}500`].color}/>) : (<View></View>)
         }
             onLeftIconClick={()=>{console.log(list.leftIcon)}}
             primaryText={list.primaryText}
             secondaryText={list.secondaryText}
             rightIcon={
             list.rightIcon && (<Icon name={list.rightIcon} size={24}  />)
         }
             onRightIconClick={()=>{console.log(list.rightIcon)}}
         />
         {i === 1 && <Divider inset={true}/>}
     </View>
 ))}

 <Subheader text="Avatar with text two-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.avatarText.map((mail, i) => (
     <View>
         <List
             primaryText={mail.name}
             leftAvatar={
             <Avatar src={mail.avatar}/>
         }
             secondaryText={
         <Text>
             <Text style={{color:'rgba(0,0,0,.87)'}}>{mail.subject}</Text>
             <Text> - {mail.body}</Text>
         </Text>
         }
             captionText={`${i * 6 + 1}min ago`}
         />
         {i < data.two.avatarText.length - 1 && <Divider inset={true}/>}
     </View>
 ))}

 <Subheader text="Avatar with text and icon two-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.avatarIconText.map((type, i)=>(
     <View>
         <Subheader text={type.name} inset={true}/>
         {type.files.map((file, j) =>(
             <View>
                 <List
                     leftAvatar={
                         <Avatar icon={file.icon} backgroundColor={file.color}/>
                     }
                     primaryText={file.name}
                     secondaryText={file.time}
                     rightIcon={
                         <Icon name="information" size={24}/>
                     }
                     onRightIconClick={()=>{console.log('information')}}
                 />
             </View>
         ))}
         {i < data.two.avatarIconText.length - 1 && <Divider inset={true}/>}
     </View>
 ))}

 <Subheader text="Text only three-line list"
 primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.avatarText.map((mail, i) => (
     <View>
         <List
             primaryText={mail.name}
             secondaryTextMoreLine={[
                 {
                     text: mail.subject,
                     style: {
                         color: 'rgba(0,0,0,.87)'
                     },
                 },
                 {
                     text: mail.body
                 }
             ]}
             lines={3}
             captionText={`${i * 6 + 1}min ago`}
         />
         {i < data.two.avatarText.length - 1 && <Divider/>}
     </View>
 ))}

 <Subheader text="Icon with text three-line list"
 primaryColor={COLOR[`${primary}500`].color}/>
 {data.three.textIcon.map((list) => (
     <List
         primaryText={list.primaryText}
         secondaryText={list.secondaryText}
         lines={3}
         leftIcon={
             <Icon name="checkbox-blank-outline" size={24}/>
         }
         onLeftIconClick={()=>{console.log('checked')}}
     />
 ))}

 <Subheader text="Avatar with text three-line list" primaryColor={COLOR[`${primary}500`].color}/>
 {data.two.avatarText.map((mail, i) => (
     <View>
         <List
             primaryText={mail.name}
             leftAvatar={
             <Avatar src={mail.avatar}/>
         }
             secondaryTextMoreLine={[
                 {
                     text: mail.subject,
                     style: {
                         color: 'rgba(0,0,0,.87)'
                     },
                 },
                 {
                     text: mail.body
                 }
             ]}
             lines={3}
             rightIcon={
                 i < 2 ?
                 <Icon name="star" size={24} color={primaryColor}/>
                 :
                 <Icon name="star-outline" size={24}/>
             }
             onRightIconClick={()=>{console.log('star')}}
             captionText={`${i * 6 + 1}min ago`}
         />
         {i < data.two.avatarText.length - 1 && <Divider inset={true}/>}
     </View>
 ))}*/


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
        leftIcon: PropTypes.element,
        rightIcon: PropTypes.element,
        leftAvatar: PropTypes.element,
        rightAvatar: PropTypes.element,
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
            <Ripple
                color='rgba(153,153,153,.4)'
                rippleOpacity={1}
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

                        {rightIcon && <Ripple onPress={onRightIconClicked}>
                            <View style={[styles.rightIcon, {flex: 1},lines > 2 &&{
                        paddingTop: 16,
                        alignSelf: 'flex-end',
                        justifyContent:'flex-end'

                    }]} onPress={onRightIconClicked}>
                                {rightIcon}
                            </View></Ripple>
                        }
                    </View>
                </View>
            </Ripple>
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