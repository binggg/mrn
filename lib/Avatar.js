import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Image
} from 'react-native';
import Icon from './Icon';
import { ICON_NAME } from './config';

/**
 * Avatar Component
 * @example
 <Subheader text="Avatar use image"/>
 <View style={styles.avatarContainer}>
     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/>
     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg"/>
     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg"/>
     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg"/>
 </View>

 <Subheader text="Avatar use icon"/>
 <View style={styles.avatarContainer}>
     <Avatar icon="google"/>
     <Avatar icon="folder"/>
     <Avatar icon="phone" backgroundColor={COLOR.paperGreen500.color}/>
     <Avatar icon="plus" backgroundColor={COLOR[`${primary}500`].color}/>
 </View>

 <Subheader text="Avatar with different size"/>
 <View style={styles.avatarContainer}>
     <Avatar src="http://mrn.js.org/user/image/favicon.png"/>
     <Avatar size={60} src="http://mrn.js.org/user/image/favicon.png"/>
     <Avatar size={80} src="http://mrn.js.org/user/image/favicon.png"/>
     <Avatar size={120} src="http://mrn.js.org/user/image/favicon.png"/>
 </View>
 */
export default class Avatar extends Component {
    /**
     * @param {object} props
     * @param {enum(ICON_NAME)} props.icon - Icon name
     * @param {string} props.src - Image src
     * @param {number} [props.size=40] - Avatar size
     * @param {string} [props.color='#fff'] - Color of icon of Avatar. Accept a color string such as RGBA,RGB,HEX.
     * @param {string} [props.backgroundColor='#bdbdbd'] -  Background color of Avatar. Only use with a icon prop.
     * Accept a color string such as RGBA,RGB,HEX.
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        size: 40,
        color: '#fff',
        backgroundColor: '#bdbdbd'
    };
    static propTypes = {
        icon: PropTypes.oneOf(ICON_NAME),
        src: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        backgroundColor: PropTypes.string
    };
    state = {};

    render = () => {
        const {
            icon,
            src,
            size,
            color,
            backgroundColor
            } = this.props;
        if (src) {
            return (
                <Image
                    style={{width:size,height:size,borderRadius: size / 2,borderColor:'rgba(0,0,0,.1)',borderWidth: 1}}
                    source={{uri:src}}
                />
            );
        }
        if (icon) {
            return (
                <View style={{
                width:size,
                height:size,
                borderRadius: size / 2,
                backgroundColor: backgroundColor,
                alignItems:'center',
                justifyContent: 'center'}}>
                    <Icon name={icon} color={color} size={0.6*size}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({});