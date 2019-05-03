import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, Text, View, FlatList, Image } from 'react-native';
import { Button, Container, Body, Content, Header, Title, Left, Icon, Right, List, ListItem, Subtitle } from "native-base";
import { StackActions } from 'react-navigation';

import { startApiWatch, stopApiWatch } from '../../../Redux/Actions/Timer';
import { stateLogout } from '../../../Redux/Actions/Auth';

import styles from "./styles";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount() {
        this.props.startApiWatch()
        this.renderItems();
    }

    componentWillUnmount() {
        this.props.stopApiWatch()
    }

    renderItems() {
        user = this.props.authuser.role;
        this.setState({
            datas: [[
                {
                    name: "Employee",
                    route: "UserList",
                    icon: require("../../../Media/images/icon_staff.png"),
                }]]
        })
    }

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    renderMenuItem(items) {
        return items.map((item, index) => {
            return (
                <View key={index} style={[styles.box]}>
                    <Button primary onPress={() => this.props.navigation.navigate(item.route)} style={styles.iconButton} >
                        <Image source={item.icon} resizeMode={'cover'} style={[styles.icon]} />
                    </Button>
                    <Text style={styles.iconText}>{item.name}</Text>
                </View>
            )
        })
    }

    renderMenuItems() {
        return this.state.datas.map((items, index) => {
            return (
                <View key={index} style={styles.row}>
                    {this.renderMenuItem(items)}
                </View>
            )
        })
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{ textAlign: 'center', alignSelf: 'stretch' }} >Dashboard</Title>
                        <Text style={{ textAlign: 'center', alignSelf: 'stretch', color: '#fff', fontSize: 16, bottom: 2 }}>{this.props.authuser.name}</Text>
                    </Body>
                    <Right style={{ flex: 1 }}></Right>
                </Header>
                <Content padder style={styles.content}>
                    {this.renderMenuItems()}
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        authuser: state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(stateLogout()); },
        startApiWatch: () => { dispatch(startApiWatch()); },
        stopApiWatch: () => { dispatch(stopApiWatch()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);