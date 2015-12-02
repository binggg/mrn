import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import List from './List';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        width: 2,
        multi: false
    };
    static propTypes = {
        width: PropTypes.number,
        items: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.element,
            disabled: PropTypes.bool,
            onItemSelected: PropTypes.arrayOf(PropTypes.func)
        })).isRequired,
        multi: PropTypes.bool,
        customStyle: PropTypes.shape({
            color: PropTypes.string,
            backgroundColor: PropTypes.string,
            disabledColor: PropTypes.string
        })
    };
    state = {};

    render = () => {
        const {
            width,
            items,
            style,
            customStyle
            } = this.props;

        const assginedStyle = Object.assign({}, {
            width: 56 * width,
            borderWidth: 1,
            backgroundColor: '#fff',
            borderColor: 'rgba(0,0,0,.12)',
            paddingVertical: 8,
            borderRadius: 2
        }, style)
        return (
            <View style={assginedStyle}>
                {
                    items.map((item) => (
                        <List primaryText={item.text} leftIcon={item.icon}/>
                    ))
                }
            </View>
        );
    }
}