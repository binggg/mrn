import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import RadioButton from './RadioButton';
import { TYPO, PRIMARY, COLOR, COLOR_NAME, THEME_NAME} from './config';

/**
 * RadioButtonGroup Component
 * @example
 <RadioButtonGroup ref="Group1" primary={primary} name="group1" onSelect={(value) => {
                            this.setState({group1Selected: value});
                        }}>
     <RadioButton value="1" label="RadioButton On" checked={true}/>
     <RadioButton value="2" label="RadioButton Off"/>
     <RadioButton value="3" label="RadioButton Off Disabled" disabled={true}/>
     <RadioButton value="4" disabled={true}/>
 </RadioButtonGroup>

 <View style={[styles.content,styles.action]}>
     <Text style={{flex:1}}>Selected {this.state.group1Selected}</Text>
     <Button raised={true} value="Press to select 2"
     onPress={()=>{this.refs.Group1.value = 2}}/>
 </View>
 */

export default class RadioButtonGroup extends Component {
    /**
     * @param {object} props
     * @param {string} props.name - RadioButtonGroup name. Often use in form
     * @param {enum(THEME_NAME)} [props.theme] - RadioButton theme option
     * @param {enum(COLOR_NAME)} [props.primary] - RadioButton primary color name. Specifies that which RadioButton should be pre-selected
     * @param {string} [props.value] - The value of checked RadioButton
     * @param {function(value:string)} [props.onSelect] - When RadioButtonGroup value change will trigger this function
     *
     */
    constructor(props) {
        super(props);
        let options = React.Children.map(this.props.children, (option) => {
            let {
                value,
                checked,
                } = option.props;

            if (!this.state.selected && checked) {
                /**
                 *
                 * @type {{selected: *}}
                 */
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
        value: PropTypes.string,
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
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

        setTimeout(() => {
            const { onSelect } = this.props;
            onSelect && onSelect(this.value);
        },0)
    };

    /**
     * Get the value of checked RadioButton in RadioButtonGroup. Often use in form.
     * @returns {string}
     */
    get value() {
        return this.state.selected
    }

    /**
     * Specifies that which RadioButton should be pre-selected
     * @param {string} value
     */
    set value(value) {
        this._onChange(value);
    }
}

const styles = StyleSheet.create({});