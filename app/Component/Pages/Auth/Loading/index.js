import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar,  ImageBackground, Image, Text,  View, ActivityIndicator } from 'react-native';
import { Container} from "native-base";

import { stateLogin } from "../../../../Redux/Actions/Auth";
import { stateAppLoading } from "../../../../Redux/Actions/Application";
import { loadUser } from "../../../../Services/AuthService";
import styles from "./styles";


const launchscreenBg = require("../../../../Media/images/background.jpg");



class Loading extends Component {

    constructor(props) {
      super(props);
      this.state = {
          message: 'Connecting...',
          error:false
      };
      
      this.onLoadUser = this.onLoadUser.bind(this) 
      this.errorInConnection = this.errorInConnection.bind(this)       
    }

    componentDidMount(){        
        loadUser(this.onLoadUser,this.errorInConnection);
    }

    onLoadUser(user){
        if(user){
            this.props.onLogin(user);
            this.props.onAppLoading(false);
            //this.props.navigation.navigate('User');
        }else{
            this.props.onAppLoading(false);
            //this.props.navigation.navigate('Gust');
        }
    }

    //Show connection related error
    errorInConnection(res){
        this.setState({error:true, message:res.message})
        //Toast.show({ text: "Unable to connect server:", position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 5000 });
    }
    
 
    render () {
        const { message } = this.state;
        return (
            <Container>
                <View><StatusBar backgroundColor="#1079d4" barStyle="light-content" translucent={true} /></View>
                <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>                      
                        <ActivityIndicator size="large" color="#d8d8d8" />
                        <Text style={{color:'#ffffff', textAlign:'center'}}>{message}</Text>  
                    </View>                                      
                </ImageBackground>
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
        onLogin: (user) => { dispatch(stateLogin(user)); },
        onAppLoading: (state) => { dispatch(stateAppLoading(state)); }        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Loading);