import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Text,
    InteractionManager
} from 'react-native';
import {
    TYPO,
    COLOR,
    List,
    Icon,
    Subheader,
    Avatar,
    Divider,
    Button
} from 'mrn';

export default class ListExample extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        renderPlaceholderOnly: true
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    render = () => {
        const {
            primary
            } = this.props;
        const primaryColor = COLOR[`${primary}500`].color;

        if(this.state.renderPlaceholderOnly) {
            this._renderPlaceholderView();
        }

        return (
            <View style={{backgroundColor: '#fff'}}>
                <Subheader text="Text only single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.text.map(list => (
                    <List
                        primaryText={list.primaryText}/>
                ))}

                <Subheader text="Icon with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.iconText.map(list => (
                    <List
                        leftIcon={
                            <Icon name={list.leftIcon} size={24}/>
                        }
                        primaryText={list.primaryText}/>
                ))}

                <Subheader text="Avatar with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.avatarText.map((user, i) =>(
                    <List
                        leftAvatar={
                            <Avatar src={user.avatar}/>
                        }
                        primaryText={user.name}
                        rightIcon={
                            <Icon name="message" size={24} color={i < 2 ? primaryColor : undefined}/>
                        }
                    />
                ))}

                <Subheader text="Text only two-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.text.map(list => (
                    <List
                        primaryText={list.primaryText}
                        secondaryText={list.secondaryText}
                    />
                ))}

                <Subheader text="Icon with text two-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.iconText.map((list, i) => (
                    <View>
                        <List
                            leftIcon={
                            list.leftIcon ? (<Icon name={list.leftIcon} size={24} color={COLOR[`${primary}500`].color}/>) : (<View></View>)
                        }
                            onLeftIconClick={()=>{console.log(list.leftIcon)}}
                            primaryText={list.primaryText}
                            secondaryText={list.secondaryText}
                            rightIcon={
                            list.rightIcon && (<Icon name={list.rightIcon} size={24}  />)
                        }
                            onRightIconClick={()=>{console.log(list.rightIcon)}}
                        />
                        {i === 1 && <Divider inset={true}/>}
                    </View>
                ))}

                <Subheader text="Avatar with text two-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.avatarText.map((mail, i) => (
                    <View>
                        <List
                            primaryText={mail.name}
                            leftAvatar={
                            <Avatar src={mail.avatar}/>
                        }
                            secondaryText={
                        <Text>
                            <Text style={{color:'rgba(0,0,0,.87)'}}>{mail.subject}</Text>
                            <Text> - {mail.body}</Text>
                        </Text>
                        }
                            captionText={`${i * 6 + 1}min ago`}
                        />
                        {i < data.two.avatarText.length - 1 && <Divider inset={true}/>}
                    </View>
                ))}

                <Subheader text="Avatar with text and icon two-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.avatarIconText.map((type, i)=>(
                    <View>
                        <Subheader text={type.name} inset={true}/>
                        {type.files.map((file, j) =>(
                            <View>
                                <List
                                    leftAvatar={
                                        <Avatar icon={file.icon} backgroundColor={file.color}/>
                                    }
                                    primaryText={file.name}
                                    secondaryText={file.time}
                                    rightIcon={
                                        <Icon name="information" size={24}/>
                                    }
                                    onRightIconClick={()=>{console.log('information')}}
                                />
                            </View>
                        ))}
                        {i < data.two.avatarIconText.length - 1 && <Divider inset={true}/>}
                    </View>
                ))}

                <Subheader text="Text only three-line list"
                           primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.avatarText.map((mail, i) => (
                    <View>
                        <List
                            primaryText={mail.name}
                            secondaryTextMoreLine={[
                                {
                                    text: mail.subject,
                                    style: {
                                        color: 'rgba(0,0,0,.87)'
                                    },
                                },
                                {
                                    text: mail.body
                                }
                            ]}
                            lines={3}
                            captionText={`${i * 6 + 1}min ago`}
                        />
                        {i < data.two.avatarText.length - 1 && <Divider/>}
                    </View>
                ))}

                <Subheader text="Icon with text three-line list"
                           primaryColor={COLOR[`${primary}500`].color}/>
                {data.three.textIcon.map((list) => (
                    <List
                        primaryText={list.primaryText}
                        secondaryText={list.secondaryText}
                        lines={3}
                        leftIcon={
                            <Icon name="checkbox-blank-outline" size={24}/>
                        }
                        onLeftIconClick={()=>{console.log('checked')}}
                    />
                ))}

                <Subheader text="Avatar with text three-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.two.avatarText.map((mail, i) => (
                    <View>
                        <List
                            primaryText={mail.name}
                            leftAvatar={
                            <Avatar src={mail.avatar}/>
                        }
                            secondaryTextMoreLine={[
                                {
                                    text: mail.subject,
                                    style: {
                                        color: 'rgba(0,0,0,.87)'
                                    },
                                },
                                {
                                    text: mail.body
                                }
                            ]}
                            lines={3}
                            rightIcon={
                                i < 2 ?
                                <Icon name="star" size={24} color={primaryColor}/>
                                :
                                <Icon name="star-outline" size={24}/>
                            }
                            onRightIconClick={()=>{console.log('star')}}
                            captionText={`${i * 6 + 1}min ago`}
                        />
                        {i < data.two.avatarText.length - 1 && <Divider inset={true}/>}
                    </View>
                ))}
            </View>
        );
    };

    _renderPlaceholderView = () => {
        const {
            primary
            } = this.props;
        const primaryColor = COLOR[`${primary}500`].color;
        return (
            <View>
                <Subheader text="Text only single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.text.map(list => (
                    <List
                        primaryText={list.primaryText}/>
                ))}

                <Subheader text="Icon with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.iconText.map(list => (
                    <List
                        leftIcon={
                            <Icon name={list.leftIcon} size={24}/>
                        }
                        primaryText={list.primaryText}/>
                ))}

                <Subheader text="Avatar with text single-line list" primaryColor={COLOR[`${primary}500`].color}/>
                {data.single.avatarText.map((user, i) =>(
                    <List
                        leftAvatar={
                            <Avatar src={user.avatar}/>
                        }
                        primaryText={user.name}
                        rightIcon={
                            <Icon name="message" size={24} color={i < 2 ? primaryColor : undefined}/>
                        }
                    />
                ))}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});

const data = {
    single: {
        text: [
            {
                primaryText: 'Inbox'
            },
            {
                primaryText: 'Starred'
            },
            {
                primaryText: 'Sent mail'
            },
            {
                primaryText: 'Drafts'
            }
        ],
        iconText: [
            {
                primaryText: 'Inbox',
                leftIcon: 'inbox'
            },
            {
                primaryText: 'Outbox',
                leftIcon: 'outbox'
            },
            {
                primaryText: 'Trash',
                leftIcon: 'delete'
            },
            {
                primaryText: 'Spam',
                leftIcon: 'block-helper'
            }
        ],
        avatarText: [
            {name: 'Jsa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
            {name: 'Pixeliris', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'},
            {name: 'Ok', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'},
            {name: 'Marcosmoralez', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'},
            {name: 'Sindresorhus', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg'}
        ]
    },
    two: {
        text: [
            {
                primaryText: 'Profile photo',
                secondaryText: 'Change your Google+ profile photo'
            },
            {
                primaryText: 'Show your status',
                secondaryText: 'Your status is visible to everyone you use with'
            }
        ],
        iconText: [
            {
                leftIcon: 'phone',
                primaryText: '(650) 555-1234',
                secondaryText: 'Mobile',
                rightIcon: 'message-text'
            },
            {
                primaryText: '(323) 555-6789',
                secondaryText: 'Work',
                rightIcon: 'message-text'
            },
            {
                leftIcon: 'email',
                primaryText: 'being99@qq.com',
                secondaryText: 'Personal',
            },
            {
                primaryText: 'benzhao1988@gmail.com',
                secondaryText: 'Work',
            }
        ],
        avatarText: [
            {
                name: 'Pixeliris',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg',
                subject: 'Brunch this Weekend?',
                body: 'Hello！ I’ll be your neighbourhood. How about we have branch together in my home this weekend.'
            },
            {
                name: 'Jsa',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                subject: 'Verify Email',
                body: 'Hey Ben Zhao,Please click the link below to verify your account: '
            },
            {
                name: 'Ok',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
                subject: 'Please confirm your email',
                body: 'Hi Ben,Thanks so much for joining Pinterest! To finish signing up, you just need to confirm that we got your email right.'
            },
            {
                name: 'Marcosmoralez',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg',
                subject: '开始使用Airbnb',
                body: 'Airbnb欢迎您,在Airbnb，您可以向世界上任何一个地方的当地人预订房间、民宅、甚至城堡。'
            },
            {
                name: 'Sindresorhus',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
                subject: 'Welcome to Genymotion - User account activation',
                body: 'Hi benzhao,Your user account with the e-mail address benzhao1988@gmail.com has been created. '
            }
        ],
        avatarIconText: [
            {
                name: 'Folders',
                files: [
                    {
                        name: 'Photos',
                        time: 'Jan 9, 2014',
                        icon: 'folder'
                    },
                    {
                        name: 'Recipes',
                        time: 'Jan 17, 2014',
                        icon: 'folder'
                    },
                    {
                        name: 'Work',
                        time: 'Jan 28, 2014',
                        icon: 'folder'
                    }
                ]
            },
            {
                name: 'Files',
                files: [
                    {
                        name: 'Vacation itinerary',
                        time: 'Jan 20, 2014',
                        icon: 'file-document-box',
                        color: COLOR.paperBlue500.color
                    },
                    {
                        name: 'Kitchen remodel',
                        time: 'Jan 10, 2014',
                        icon: 'book',
                        color: COLOR.paperYellow500.color
                    }
                ]
            }
        ]
    },
    three: {
        textIcon: [
            {
                primaryText: 'Notifications',
                secondaryText: 'Notify me about updates of app or games I downloaded'
            },
            {
                primaryText: 'Sound',
                secondaryText: 'Auto-update apps at anytime. Data charges my apply'
            }
        ]
    }

};