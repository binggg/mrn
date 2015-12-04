import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text,
    InteractionManager
} from 'react-native';
import {
    Checkbox,
    CheckboxGroup,
    Button,
    TYPO,
    COLOR,
    Subheader
} from 'mrn';

var typographyStyle = StyleSheet.create(TYPO);

export default class CheckboxExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        group2Selected: []
    };

    render = () => {
        var { primary } =  this.props;

        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }

        return (
            <View>
                <Subheader text="Light Theme" />
                <View>
                    <CheckboxGroup ref="CheckboxGroup1" name="group2" onSelect={(value) => {
                            this.setState({group2Selected: value});
                        }} primary={primary}>
                        <Checkbox value="1" label="Checkbox On" checked={true}/>
                        <Checkbox value="2" label="Checkbox Off"/>
                        <Checkbox value="3" label="Checkbox On Disabled" checked={true} disabled={true}/>
                        <Checkbox value="4" label="Checkbox Off Disabled" disabled={true}/>
                        <Checkbox value="5" checked={true}/>
                        <Checkbox value="6"/>
                    </CheckboxGroup>
                    <View style={[styles.content,styles.action]}>
                        <Text style={{flex:1}}>Selected {this.state.group2Selected.join(',')}</Text>
                        <Button raised={true} primary={primary} value="Press to select 1,2,6" onPress={()=>{this.refs.CheckboxGroup1.value = ['1','2','6']}} />
                    </View>

                </View>
                <Subheader text="Dark Theme" />
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                    }}>
                    <CheckboxGroup checked="1" theme="dark" name="group2" primary={primary}>
                        <Checkbox value="1" label="Checkbox On" checked={true}/>
                        <Checkbox value="2" label="Checkbox Off"/>
                        <Checkbox value="3" label="Checkbox On Disabled" checked={true} disabled={true}/>
                        <Checkbox value="4" label="Checkbox Off Disabled" disabled={true}/>
                        <Checkbox value="5" checked={true}/>
                        <Checkbox value="6"/>
                    </CheckboxGroup>
                </View>
            </View>
        );
    };
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