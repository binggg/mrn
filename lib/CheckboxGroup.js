import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import Checkbox from './Checkbox';

export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        let options = React.Children.map(this.props.children, (option) => {
            let {
                value,
                checked
                } = option.props;

            if (checked) {
                this.state = {
                    selected: [...this.state.selected, value]
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
        onSelect: PropTypes.func,
        value: PropTypes.array
    };
    state = {
        selected: []
    };

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

            return <Checkbox
                {...other}
                ref={value}
                name={name}
                key={'Group'+value}
                value={value}
                label={label}
                theme={theme}
                primary={primary}
                disabled={disabled}
                onCheck={this._onChange}
                checked={this.state.selected && this.state.selected.indexOf(value) !== -1}/>;
        }, this);

        return (
            <View>
                {options}
            </View>
        );
    };

    _onChange = (checked, value) => {
        const { selected } = this.state;

        if (checked) {
            this.setState({
                selected: [...selected, value]
            });
        } else {
            let index = selected.indexOf(value);
            this.setState({
                selected: [
                    ...selected.slice(0, index),
                    ...selected.slice(index+1)
                ]
            });
        }

        const { onSelect } = this.props;
        onSelect && onSelect(this.value);
    };

    get value() {
        return this.state.selected
    }

    set value(value) {
        this.setState({
            selected: value
        });

        const { onSelect } = this.props;
        onSelect && onSelect(this.value);
    }
}

const styles = StyleSheet.create({});