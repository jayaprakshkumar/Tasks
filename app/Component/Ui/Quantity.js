import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'native-base';
import PropTypes from 'prop-types';


class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        }
        //this.addBtnPressed = this.addBtnPressed.bind(this);
        //this.minusBtnPressed = this.minusBtnPressed.bind(this);
    }

    componentDidMount() {
        this.onChangeText(this.props.initialValue)
    }

    addBtnPressed() {
        let value = this.state.quantity + this.props.stepsize;
        if (value <= this.props.max) {
            this.setState({
                quantity: value
            });
            this.props.onChangeValue(value);
        }
    }
    minusBtnPressed() {
        let value = this.state.quantity - this.props.stepsize;
        if (value >= this.props.min) {
            this.setState({
                quantity: value
            });
            this.props.onChangeValue(value);
        }
    }
    onChangeText(text) {
        text = parseInt(text);
        if (!isNaN(text)) {
            if (text > this.props.max) {
                text = this.props.max;
            }
            if (text < this.props.min) {
                text = this.props.min;
            }
            this.setState({
                quantity: text
            });
            this.props.onChangeValue(text);
        } else {
            this.setState({
                quantity: 0
            })
            this.props.onChangeValue(0);
        }
    }

    render() {
        return (
            <View style={{marginTop:20,marginBottom:10}}>
                <View style={styles.horizontal}>
                    <TouchableHighlight underlayColor={'#999999'}  >
                        <Button rounded style={{ backgroundColor: '#fafafa', marginTop:10 ,borderColor:'#bcbcbc',borderWidth:1}} onPress={() => { this.minusBtnPressed() }}>
                            <Icon style={{color:'#bcbcbc'}} name="ios-remove"></Icon>

                        </Button>
                    </TouchableHighlight>
                    <TextInput
                        style={[styles.textinput, this.state.styleTextInput]}
                        keyboardType={'numeric'}
                        value={this.state.quantity.toString()}
                        onChangeText={(text) => this.onChangeText(text)} />
                    <TouchableHighlight underlayColor={'#999999'} onPress={() => { this.addBtnPressed() }} >
                        <Button rounded style={{ backgroundColor: '#fafafa', marginTop:10 ,borderColor:'#bcbcbc',borderWidth:1}} onPress={() => { this.addBtnPressed() }}>
                            <Icon style={{color:'#bcbcbc'}}name="ios-add"></Icon>
                        </Button>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

Quantity.propTypes = {
    style: PropTypes.object,
    styleTextInput: PropTypes.object,
    styleButton: PropTypes.object,
    stepsize: PropTypes.number,
    initialValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChangeValue: PropTypes.func
};

Quantity.defaultProps = {
    style: {},
    styleTextInput: {},
    styleButton: {},
    stepsize: 1,
    initialValue: 1,
    min: 1,
    max: 100000,
    onChangeValue: (value) => { }
};
const styles = {
    wrapper: {
        flex: 1,
        backgroundColor: '#eeeeee'

    },
    verticle: {
        flexDirection: 'column'
    },
    horizontal: {
        flexDirection: 'row'
    },
    textinput: {
        flex: 1,
        borderColor: '#bcbcbc',
        borderWidth: 2,
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 20,
        textAlign: 'center',
        borderRadius:6
    },
    button: {
        borderColor: '#bcbcbc',
        padding: 25,
        borderRadius: 25
    }
}

export default Quantity;