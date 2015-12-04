import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import { TYPO, COLOR  } from 'mrn';

export default class TypographyExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        return (
            <View style={styles.content}>
                <Text style={[TYPO.paperFontDisplay4]}>Display4</Text>
                <Text style={TYPO.paperFontDisplay3}>Display3</Text>
                <Text style={TYPO.paperFontDisplay2}>Display2</Text>
                <Text style={TYPO.paperFontDisplay1}>Display1</Text>
                <Text style={TYPO.paperFontHeadline}>Headline</Text>
                <Text style={TYPO.paperFontTitle}>Title</Text>
                <Text style={TYPO.paperFontSubhead}>Subhead</Text>
                <Text style={TYPO.paperFontBody2}>Body2</Text>
                <Text style={TYPO.paperFontBody1}>Body1</Text>
                <Text style={TYPO.paperFontCaption}>Caption</Text>
                <Text style={TYPO.paperFontButton}>Button</Text>
                <Text style={TYPO.paperFontCode2}>Code2</Text>
                <Text style={TYPO.paperFontCode1}>Code1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});