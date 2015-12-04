import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import {
    RadioButton,
    RadioButtonGroup,
    Button,
    TYPO,
    COLOR,
    Subheader
} from 'mrn';

var typographyStyle = StyleSheet.create(TYPO);

export default class RadioButtonExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        var { primary } =  this.props;
        return (
            <View>
                <Subheader text="Light Theme" />
                <View>
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
                        <Button primary={primary}  raised={true} value="Press to select 2"
                                onPress={()=>{this.refs.Group1.value = 2}}/>
                    </View>
                </View>

                <Subheader text="Dark Theme" />
                <View style={{
                            backgroundColor: COLOR.paperGrey900.color
                        }}>
                    <RadioButtonGroup checked="1" theme="dark" name="group2" primary={primary}>
                        <RadioButton value="1" label="RadioButton On" checked={true}/>
                        <RadioButton value="2" label="RadioButton Off"/>
                        <RadioButton value="3" label="RadioButton Off Disabled" disabled={true}/>
                        <RadioButton value="4" disabled={true}/>
                    </RadioButtonGroup>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});