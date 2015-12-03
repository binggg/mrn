import React, {
    Component,
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
    Text,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import configureStore from '../../configureStore';
import {
    TYPO,
    COLOR,
    Button,
    Icon,
    Toolbar,
    List
} from 'mrn';
import {
    changeRouter,
    changePrimary
} from '../modules/main';
import TypographyExample from '../../components/TypographyExample';
import ColorExample from '../../components/ColorExample';
import ButtonExample from '../../components/ButtonExample';
import RadioButtonExample from '../../components/RadioButtonExample';
import CheckboxExample from '../../components/CheckboxExample';
import IconExample from '../../components/IconExample';
import ListExample from '../../components/ListExample';
import SubheaderExample from '../../components/SubheaderExample';
import ChangeTheme from './ChangeTheme';
import AvatarExample from '../../components/AvatarExample';
import MenuExample from '../../components/MenuExample';
import ExpensiveScene from '../../components/ExpensiveScene';

const store = configureStore();
const routers = [
    {
        name: 'Color',
        icon: 'auto-fix'
    },
    {
        name: 'Typography',
        icon: 'format-text'
    },
    {
        name: 'Button',
    },
    {
        name: 'RadioButton',
        icon: 'radiobox-marked'
    },
    {
        name: 'Checkbox',
        icon: 'checkbox-marked'
    },
    {
        name: 'Icon',
        icon: 'flower'
    },
    {
        name: 'List',
        icon: 'view-list'
    },
    {
        name: 'Subheader',
        icon: ''
    },
    {
        name: 'ChangeTheme',
        icon: 'brush'
    },
    {
        name: 'Avatar'
    },
    {
        name: 'Menu'
    }
];
export default class Main extends Component {
    render = () => {
        let {
            main,
            dispatch
            } = this.props;
        let initialRoute = {name: main && main.currRouter};

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={ [styles.drawerCover,{backgroundColor: COLOR[`${main.primary}700`].color}]}>
                    <Icon name="google"
                          color='rgba(0,0,0,.30)'
                          size={140}
                          style={styles.google}/>
                    <Text style={[TYPO.paperFontDisplay2, COLOR[`${main.primary}300`]]}>
                        Material React Native
                    </Text>
                </View>
                <ScrollView style={styles.page}>
                    {routers.sort(function (a, b) {
                        return a.name > b.name ? 1 : -1
                    }).map(router => (
                        <List
                            primaryColor={main && router.name === main.currRouter ? COLOR[`${main.primary}500`].color: 'rgba(0,0,0,.87)'}
                            onPress={()=>{
                                this.drawerRef.closeDrawer();
                                this.navigatorRef.push({name:router.name});
                                dispatch(changeRouter(router.name));
                            }}
                            leftIcon={<Icon
                                name={router.icon || 'file-document'}
                                size={24}
                                color={main && router.name === main.currRouter ? COLOR[`${main.primary}500`].color: 'rgba(0,0,0,.54)'}
                            />}
                            primaryText={router.text || router.name}/>
                    ))}
                </ScrollView>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref={(drawer)=> {this.drawerRef = drawer}}
            >

                <Navigator
                    initialRoute={initialRoute}
                    configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                    renderScene={this.RouteMapper}
                />
            </DrawerLayoutAndroid>
        )
    };

    RouteMapper = (router, navigator) => {
        this.navigatorRef = navigator;

        const toolbarActions = [
            {title: 'Change theme'},
            {title: 'Change theme'},
            {title: 'Change theme'},
            {title: 'Github', icon: 'github-circle', show: 'always'},
        ];

        const sceneToolbar = (<Toolbar
            navIconName="menu"
            title={router.name}
            primary={this.props.main.primary}
            onIconClicked={()=>this.drawerRef.openDrawer()}
            actions={toolbarActions}
        />);


        switch (router.name) {
            case 'home':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title="Material React Native"
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>

                        </ScrollView>
                    </View>
                );
            case 'Color':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <ColorExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Typography':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <TypographyExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Button':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <ButtonExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'RadioButton':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <RadioButtonExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Checkbox':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <CheckboxExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Icon':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <IconExample primary={this.props.main.primary}/>
                    </View>
                );
            case 'List':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene loadingText="Waiting for a big wave components">
                                <ListExample primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Subheader':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <View style={styles.page}>
                            <SubheaderExample primary={this.props.main.primary}/>
                        </View>
                    </View>
                );
            case 'ChangeTheme':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <ScrollView style={styles.page}>
                            <ExpensiveScene>
                                <ChangeTheme dispatch={this.props.dispatch} primary={this.props.main.primary}/>
                            </ExpensiveScene>
                        </ScrollView>
                    </View>
                );
            case 'Avatar':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <View style={styles.page}>
                            <AvatarExample primary={this.props.main.primary}/>
                        </View>
                    </View>
                );
            case 'Menu':
                return (
                    <View style={styles.page}>
                        {sceneToolbar}
                        <View style={styles.page}>
                            <MenuExample primary={this.props.main.primary} />
                        </View>
                    </View>
                )
        }
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLOR.paperGrey100.color
    },
    content: {
        padding: 16
    },
    drawerCover: {
        height: 168,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    google: {
        position: 'absolute',
        bottom: 16,
    }
});


function mapStateToProps(state) {
    return {
        main
    } = state;
}

export default connect(mapStateToProps)(Main);