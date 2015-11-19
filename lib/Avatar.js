import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Image
} from 'react-native';

export default class Avatar extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {
        size: 40,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,.54)'
    };
    static propTypes = {
        icon: PropTypes.element,
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
            background
            } = this.props;
        if (src) {
            return (
                <Image style={{width:size,height:size,borderRadius: size / 2,borderColor:'rgba(0,0,0,.1)',borderWidth: 1}}
                       source={{uri:src}}
                />
            );
        }
    }
}

const styles = StyleSheet.create({});