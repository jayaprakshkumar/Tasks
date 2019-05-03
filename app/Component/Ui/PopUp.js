import React, { Component } from 'react';
import { TouchableWithoutFeedback, BackHandler, Platform, View, Dimensions, Animated } from 'react-native';
import PropTypes from 'prop-types';

const dim = Dimensions.get('window');
const popupHeight = (dim.width>dim.height?dim.height:dim.width)-50;


class PopUp extends Component {
    constructor(props) {        
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            active:false
        }
        this.anim=false;     
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', ()=>{ 
            if(this.props.visible){
                this.props.onBackPress(); 
                return true; 
            }
        });        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible!=this.props.visible){
            if(nextProps.visible){
                this.setState({active:true});
                this.anim = Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 400 }).start();
            }else{
                this.anim = Animated.timing(this.state.fadeAnim, {toValue: 0, duration: 400 }).start(()=>{ this.setState({active:false})});
            }
        }
    }
    
    componentWillUnmount() {
        this.backHandler.remove();
    }

    render(){

        if (!this.state.active) return null;
        
        styleOverlay = { ...styles.overlay, ...(this.props.styleOverlay?this.props.styleOverlay:{}), ...{width: '100%',  height:  '100%', opacity:this.state.fadeAnim}};//
        styleContainer = { ...styles.container, ...(this.props.style?this.props.style:{}) };   

        return(
            <TouchableWithoutFeedback onPress={()=>null}>
                <Animated.View style={styleOverlay}>
                    <View style={styleContainer}>{this.props.children}</View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}


PopUp.propTypes = {
    visible: PropTypes.bool,
    style: PropTypes.object,
    styleOverlay: PropTypes.object,
    onBackPress: PropTypes.func
};

PopUp.defaultProps = {
    visible:false,
    style: {},
    styleOverlay: {},
    onBackPress: () => {},
};

const styles = {
    container:{
        borderRadius:5,
        padding: 0,
        height:popupHeight,
        width:popupHeight,
        backgroundColor: 'rgba(255, 255, 255,1)',
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 4,
            },
            android: {
              elevation: 3,
            },
          })
    },
    overlay:{
        position: 'absolute',
        top: 0,
        left: 0,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex:999
    }
}

export default PopUp;