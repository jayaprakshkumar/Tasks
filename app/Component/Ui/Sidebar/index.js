import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import { Content, List, ListItem, Icon, Container, Left, Right, Body, Badge } from "native-base";

import styles from "./styles";
import { stateLogout } from '../../../Redux/Actions/Auth';

const drawerCover = require("../../../Media/images/background.jpg");
const drawerImage = require("../../../Media/images/logo-main.png");

const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },  
  {
    name: "Employee",
    route: "UserList",
    icon: "md-person",
    bg: "#477EEA"
  }]

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  userLogout(e) {
    this.props.onLogout();
    e.preventDefault();
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem button onPress={() => this.props.navigation.navigate(data.route)}>
                <Left>
                  <Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }}/>
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge style={{borderRadius: 3, height: 25, width: 72, backgroundColor: data.bg}}>
                      <Text style={styles.badgeText}>{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
          <ListItem  button onPress={() => { this.props.onLogout() }}>
            <Left>
              <Icon active name={'md-person'} style={{ color: "#777", fontSize: 26, width: 30 }}/>
              <Text style={styles.text}>Log Out</Text>
            </Left>
          </ListItem>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => { dispatch(stateLogout()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
