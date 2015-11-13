import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import RadioButton from './RadioButton';

export default class RadioButtonGroup extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        let options = React.Children.map(this.props.children, (option) => {
            let {
                value,
                checked,
                } = option.props;

            if (!this.state.selected && checked) {
                this.state = {
                    selected: value
                };

                const { onSelect } = this.props;
                onSelect && onSelect(this.value);
            }
        })
    }

    static defaultProps = {};
    static propTypes = {
        name: PropTypes.string.isRequired,
        theme: PropTypes.string,
        primary: PropTypes.string,
        onSelect: PropTypes.func
    };
    state = {};

    render = () => {
        let options = React.Children.map(this.props.children, (option) => {
            let {
                value,
                label,
                disabled,
                ...other,
                } = option.props;
            let {
                name,
                theme,
                primary
                } = this.props;

            return <RadioButton
                {...other}
                ref={value}
                name={name}
                key={'radioGroup'+value}
                value={value}
                label={label}
                theme={theme}
                primary={primary}
                disabled={disabled}
                onCheck={this._onChange}
                checked={this.state.selected && value == this.state.selected}/>;
        }, this);

        return (
            <View>
                {options}
            </View>
        );
    };

    _onChange = (value) => {
        this.setState({
            selected: value
        });

        const { onSelect } = this.props;
        onSelect && onSelect(this.value);
    };

    get value() {
        return this.state.selected
    }

    set value(value) {
        this._onChange(value);
    }
}

const styles = StyleSheet.create({});