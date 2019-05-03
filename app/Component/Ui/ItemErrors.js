import React, { Component } from 'react';
import { Text,View } from 'react-native';


class ItemErrors extends Component {
    constructor(props) {        
        super(props);
        this.state = {  }
    }


    render(){
        errorBox = { ...styles.errorBox, ...(this.props.style?this.props.style:{}) };   
        errorText = { ...styles.errorText, ...(this.props.styleItem?this.props.styleItem:{}) };

        return(
            <View style={errorBox}>
                {Object.keys(this.props.errorData).map((key,fld) => {
                    return (
                        <Text style={errorText}>{this.props.errorData[key]}</Text>
                    );
                })}
            </View>
        );
    }
}

const styles = {
    errorBox:{
        padding:5
    },
    errorText:{
        color:'#ff0000',
        padding:2
    }
}

export default ItemErrors;