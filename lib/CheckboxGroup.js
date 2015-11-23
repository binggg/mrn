import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import Checkbox from './Checkbox';
import { THEME_NAME, COLOR_NAME } from './config';

export default class CheckboxGroup extends Component {
    /**
     * @param {object} props
     * @param {string} props.name - CheckboxGroup name. Often use in form
     * @param {enum(THEME_NAME)} [props.theme] - Checkbox theme option
     * @param {enum(COLOR_NAME)} [props.primary] - Checkbox primary color name. Specifies that which Checkbox should be pre-selected
     * @param {string[]} [props.value=[]] - A array save the values of checked Checkbox
     * @param {function(value:string)} [props.onSelect] - When CheckboxGroup value change will trigger this function
     *
     */
    constructor(props) {
        super(props);
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

    static defaultProps = {
        value: []
    };
    static propTypes = {
        name: PropTypes.string.isRequired,
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
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

    /**
     * Get the value of checked Checkbox in CheckboxGroup. Often use in form.
     * @returns {Array}
     */
    get value() {
        return this.state.selected
    }

    /**
     * Make CheckboxGroup set some checkbox checked
     * @param {string[]} value - An array of values of some Checkbox in　CheckboxGroup
     */
    set value(value) {
        this.setState({
            selected: value
        });

        const { onSelect } = this.props;
        onSelect && onSelect(this.value);
    }
}

const styles = StyleSheet.create({});