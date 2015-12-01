import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import {
    Subheader,
    Avatar,
    COLOR,
    Menu
} from 'mrn';

export default class MenuExample extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        const {
            primary
            } = this.props;

        const toolbarMenuItems = [
            {
                text: 'Refresh'
            },
            {
                text: 'Help & feedback'
            },
            {
                text: 'Settings'
            },
            {
                text: 'Sign out'
            }
        ];
        return (
            <View>
                <Subheader>Normal Menu Width 3x</Subheader>
                <View style={styles.content}>
                    <Menu width={3} items={toolbarMenuItems}/>
                </View>

                <Subheader>Normal Menu Width 4x</Subheader>
                <View style={styles.content}>
                    <Menu width={4} items={toolbarMenuItems}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 16
    }
});