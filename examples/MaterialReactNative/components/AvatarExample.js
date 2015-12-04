import React, {
    Component,
    StyleSheet,
    PropTypes,
    View
} from 'react-native';
import {
    Subheader,
    Avatar,
    COLOR
} from 'mrn';

export default class AvatarExample extends Component {
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
        return (
            <View>
                <Subheader text="Avatar use image src"/>
                <View style={styles.avatarContainer}>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg"/>
                </View>

                <Subheader text="Avatar use icon"/>
                <View style={styles.avatarContainer}>
                    <Avatar icon="google"/>
                    <Avatar icon="folder"/>
                    <Avatar icon="phone" backgroundColor={COLOR.paperGreen500.color}/>
                    <Avatar icon="plus" backgroundColor={COLOR[`${primary}500`].color}/>
                </View>

                <Subheader text="Avatar with different size"/>
                <View style={styles.avatarContainer}>
                    <Avatar src="http://mrn.js.org/user/image/favicon.png"/>
                    <Avatar size={60} src="http://mrn.js.org/user/image/favicon.png"/>
                    <Avatar size={80} src="http://mrn.js.org/user/image/favicon.png"/>
                    <Avatar size={120} src="http://mrn.js.org/user/image/favicon.png"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    }
});