import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import {
    TYPO,
    COLOR,
    Subheader
} from 'mrn';

export default class SubheaderExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        const {
            primary
            } = this.props;
        return (
            <View>
                <Subheader text="Subheader normal"/>
                <Subheader text="Subheader with color" primaryColor={COLOR[`${primary}500`].color}/>
                <Subheader text="Subheader normal, inset"
                           inset={true}
                />
                <Subheader text="Subheader with color, inset"
                           primaryColor={COLOR[`${primary}500`].color}
                           inset={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});