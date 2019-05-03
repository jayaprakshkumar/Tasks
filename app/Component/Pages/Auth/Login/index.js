import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, ScrollView, ImageBackground, Image, Text,  View, ActivityIndicator } from 'react-native';
import { Container, Form, Item,  Input, Button} from "native-base";

import { stateLogin } from 'app/Redux/Actions/Auth';
import { checkUserLogin, onSignIn } from "../../../../Services/AuthService";
import { fetchGet, fetchPost } from '../../../../Services/ApiService';
import styles from "./styles";

const launchscreenBg = require("app/Media/images/background.jpg");
const launchscreenLogo = require("app/Media/images/logo-main.png");



class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'admin',
            loading: false,
            message: "",
            errors: null,
        };
        this.afterUserLogin = this.afterUserLogin.bind(this)
        this.onLoginError = this.onLoginError.bind(this)
    }
 
    onUserLogin () {
        credentials = {username: this.state.username, password: this.state.password};
        this.setState({loading:true, message:"", errors:null});
        checkUserLogin(credentials,this.afterUserLogin,this.onLoginError);
    }

    afterUserLogin(user){
        onSignIn(user.token);
        this.setState({loading:false, message:"", errors:null});
        this.props.onLogin(user);
    }

    onLoginError(res){
        nstate = {loading:false, message:"", errors:null}
        if(res.message){
            nstate.message=res.message;
        }
        
        if(res.errors && res.errors.length>0){
            nstate.errors=res.errors;
        }
        this.setState(nstate);
    }

    renderForm(){
        if(this.state.loading){
            return (
                <ActivityIndicator size="large" color="#d8d8d8" />
            )
        }else{
            return (
                    <Form>
                        <Text style={styles.titleMessage}>{this.state.message}</Text>
                            <Item rounded style={styles.item}>
                                <Input placeholder='Username' ref={c => { this._inpUsername = c; }} maxLength={50} returnKeyType={"next"}
                                    value={this.state.username}
                                    onSubmitEditing={() => { this._inpPassword._root.focus() }}
                                    onChangeText={username => this.setState({ username })}
                                    rounded style={styles.formInput} />
                            </Item>
                            <Item rounded trasparant style={styles.item}>
                                <Input placeholder='Password' ref={c => { this._inpPassword = c; }} maxLength={50} secureTextEntry
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    rounded style={styles.formInput} />
                            </Item>                            
                            <Button rounded block  title={'Login In'} style={{ alignSelf: 'stretch',backgroundColor: '#075ebd', color : '#fff',textAlign: 'center', borderRadius: 50, padding: 10 , fontSize: 18 ,marginTop:10}} onPress={() => this.onUserLogin()}>
                                <Text style={{color:'#fff'}}>Login</Text>
                            </Button>                            
                    </Form>                    
                    
            )
        }
    }
 
    render () {
        
        return (            
            <Container>
                <View><StatusBar backgroundColor="#1079d4" barStyle="light-content" translucent={true} /></View>
                <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                <ScrollView style={styles.scrollContainer}>                  
                    <View style={styles.loginForm}>
                        {this.renderForm()}
                    </View>
                    </ScrollView>
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
        onLogin: (user) => { dispatch(stateLogin(user)); }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);