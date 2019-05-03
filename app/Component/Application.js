import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import {createAppNavigation} from '../Navigations/AppNavigation';
 
class Application extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const AppNavigation = createAppNavigation(this.props.isAppLoading,this.props.isLoggedIn);
        return (
            <AppNavigation/>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAppLoading: state.application.isAppLoading
    };
} 
export default connect(mapStateToProps)(Application);