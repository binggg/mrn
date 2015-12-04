import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    InteractionManager
} from 'react-native';

export default class ExpensiveScene extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {renderPlaceholderOnly: true};
    }

    componentDidMount = () => {
        console.log(this.state);
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    };

    static defaultProps = {
        loadingText: 'Loading...'
    };
    static propTypes = {
        loadingText: PropTypes.string
    };
    state = {};


    render = () => {
        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }

        const {
            children
            } = this.props;

        return (<View>{children}</View>)
    };


    _renderPlaceholderView = ()=> (
        <View style={{flex:1,alignItems:'center',padding:24}}>
            <Text>{this.props.loadingText}</Text>
        </View>
    );
}