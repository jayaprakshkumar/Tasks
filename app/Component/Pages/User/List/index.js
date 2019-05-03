import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, ScrollView, ImageBackground, Image, Text, View, ActivityIndicator } from 'react-native';
import { Container, Button, Card, CardItem, Body, Header, Content, List, ListItem, Left, Right, Title, Fab, Icon } from 'native-base';
import { StackActions } from 'react-navigation';


import { getUserList } from '../../../../Model/User'

import styles from "./styles";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            message: "",
            loading: true
        };

        this.loadUserList = this.loadUserList.bind(this)
        this.afterUserLoading = this.afterUserLoading.bind(this)
        this.onUserLoadingError = this.onUserLoadingError.bind(this)
    }
    componentDidMount() {
        this.loadUserList()
    }

    loadUserList() {
        this.setState({ loading: true, message: "", errors: null });
        getUserList(this.afterUserLoading, this.onUserLoadingError);
    }

    afterUserLoading(res) {
        this.setState({ loading: false, message: "", items: res.users });
    }

    onUserLoadingError(res) {
        nstate = { loading: false, message: "" }
        if (res.message) {
            nstate.message = res.message;
        }
        this.setState(nstate);
    }
 

    renderUserList() {
        if (this.state.loading) {
            return (
                <ActivityIndicator size="large" color="#d8d8d8" />
            )
        }
        else {
            return (
                <List dataArray={this.state.items} renderRow={item =>
                    <Card  style={{ marginBottom: 20 , borderRadius: 3}}>
                        <CardItem button>
                            <Body style={{ flex: 2 }}>
                                <Text style={{ color: '#1079d4', paddingBottom: 5, fontSize: 18 }} >{item.name} </Text>
                                <Text>{item.role.charAt(0).toUpperCase() + item.role.slice(1)}</Text>
                                <View><Text>{item.email}</Text></View>
                            </Body>
                            <Right>
                                <Icon name="md-more" />
                            </Right>
                        </CardItem>
                    </Card>
                }>
                </List>
            )
        }
    }
    render() {
        return (
            <Container>
                
                <Header style={styles.header}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{ textAlign: 'center', alignSelf: 'stretch' }} >Staff</Title>
                        <Title style={{ textAlign: 'center', alignSelf: 'stretch', fontSize: 14 }} >List of Resources</Title>
                    </Body>
                    <Right style={{ flex: 1 ,paddingRight:10 }}>                       
                    </Right>
                </Header>
                <ScrollView style={styles.scrollContainer}>
                    <Content padder style={{paddingBottom:60}}>
                        {this.state.message != "" && <Text style={styles.titleMessage}>{this.state.message}</Text>}
                        {this.renderUserList()}
                    </Content>
                </ScrollView>
                <Fab style={{ backgroundColor: '#fd6478', left:15 }} position="bottomRight">
                    <Icon name="ios-add" />
                </Fab>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authuser: state.auth.user
    };
}

export default connect(mapStateToProps)(UserList);