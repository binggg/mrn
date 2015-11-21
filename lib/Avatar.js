import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Image
} from 'react-native';
import Icon, {glyphMap} from './Icon';

/**
 *
 */
export default class Avatar extends Component {
    /**
     * @param {object} props
     * @param {enum(keys of glyphMap)} props.icon - Icon name
     * @param {string} props.src - Image src
     * @param {number} [props.size=40] - Avatar size
     * @param {string} [props.color='#fff'] - Color of icon of Avatar. Accept a color string such as RGBA,RGB,HEX.
     * @param {string} [props.primaryColor='#bdbdbd'] -  Background color of Avatar. Only use with a icon prop.
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
        icon: PropTypes.oneOf(Object.keys(glyphMap)),
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