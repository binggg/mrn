import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import {
    Button,
    RadioButton,
    RadioButtonGroup,
    TYPO,
    COLOR  } from 'mrn';
import { typography,color } from 'react-native-material-design-styles'
import { CHANGE_PRIMARY, changePrimary } from '../modules/main';

var typographyStyle = StyleSheet.create(TYPO);
const COLOR_NAMES = ["googleBlue", "googleGreen", "googleGrey", "googleRed", "googleYellow", "paperAmber", "paperBlue", "paperBlueGrey", "paperBrown", "paperCyan", "paperDeepOrange", "paperDeepPurple", "paperGreen", "paperGrey", "paperIndigo", "paperLightBlue", "paperLightGreen", "paperLime", "paperOrange", "paperPink", "paperPurple", "paperRed", "paperTeal", "paperYellow"];

export default class ButtonExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        var { primary,dispatch } =  this.props;
        return (
            <View>
                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Primary</Text>
                </View>
                <View>
                    <RadioButtonGroup value={primary} primary={primary}
                      onSelect={c => {dispatch(changePrimary(c))}}
                    >
                        {COLOR_NAMES.map((C) =>
                            <RadioButton style={styles.radioButton} value={C} key={C} label={C} checked={primary === C}/>
                        )}
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
    radioButton: {
        margin: 16,
        backgroundColor:'#000'
    }
});