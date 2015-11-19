import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Image
} from 'react-native';
import Icon from './Icon';

export default class Avatar extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {
        size: 40,
        color: '#fff',
        backgroundColor: '#bdbdbd'
    };
    static propTypes = {
        icon: PropTypes.string,
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
                <Image style={{width:size,height:size,borderRadius: size / 2,borderColor:'rgba(0,0,0,.1)',borderWidth: 1}}
                       source={{uri:src}}
                />
            );
        };
        if (icon) {
            return (
                <View style={{width:size,height:size,borderRadius: size / 2,backgroundColor: backgroundColor,alignItems:'center',justifyContent: 'center'}}>
                    <Icon name={icon} color={color} size={0.6*size}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({});