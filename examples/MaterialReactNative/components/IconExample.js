import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text,
    ListView,
    InteractionManager
} from 'react-native';
import { TYPO, COLOR, ICON_NAME, Icon, List  } from 'mrn';

export default class IconExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(ICON_NAME)
    };

    render = () => {
        return (
            <ListView
                initialListSize={1}
                scrollRenderAheadDistance={1}
                removeClippedSubviews={true}
                dataSource={this.state.dataSource}
                renderRow={this.renderIconItem}
            />
        );
    };

    renderIconItem = (rowData) => {
        const { primary } = this.props;
        return (
            <List
                key={rowData}
                leftIcon={
                    <Icon name={rowData} size={24} color={COLOR[`${primary}500`].color}/>
                }
                primaryText={rowData}/>
        )
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    iconItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        margin: 16
    },
    text: {
        marginLeft: 16
    }
});