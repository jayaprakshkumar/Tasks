import React, { Component } from 'react';
import { Text, View, Switch } from 'react-native';
import PropTypes from 'prop-types';


class MultiCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCreated: false,     
            selected:[]                 
        }
    }

    componentWillReceiveProps(){
        let selected = [];
        this.props.dataList.map((fld)=>{
            selected[fld.id] = false;
        });
        this.props.dataSelected.map((id)=>{
            if(selected[id]!=undefined){
                selected[id] = true;
            }
        })        
        this.setState({selected:selected});
    }

    onChangeFunction(id,value) {        
        selected = this.state.selected;
        if(selected[id]!=undefined){
            selected[id] = value;
        }
        let items = [];
        selected.map((val,key)=>{
            if(val){
                items.push(key);
            }
        })

        this.props.onChange(items);
        this.setState({selected:selected});
    }

    render() {
        itemBox = { ...styles.itemBox, ...(this.props.style ? this.props.style : {}) };
        itemInfo = { ...styles.itemInfo, ...(this.props.styleItem ? this.props.styleItem : {}) };

        return (
            <View style={itemBox}>
                {this.props.dataList.map((fld) => {
                    return (
                        <View key={fld.id} style={itemInfo}>
                            <Text style={{ flex: 5 }}> {fld.name}</Text>                            
                            <Switch style={{ flex: 1 }} onValueChange={(value) => this.onChangeFunction(fld.id,value)} value={this.state.selected[fld.id]}/>
                        </View>
                    );
                })}
            </View>
        );
    }
}

MultiCheckBox.propTypes = {
    dataList: PropTypes.array,
    dataSelected: PropTypes.array,
    style: PropTypes.object,
    styleItem: PropTypes.object,
    onChange: PropTypes.func
};

MultiCheckBox.defaultProps = {
    dataList: [],
    dataSelected: [],
    style: {},
    styleItem: {},
    onChange: (selected) => {},
};


const styles = {
    itemBox: {
        padding: 5
    },
    itemInfo: {
        padding: 2,
        flex: 1,
        flexDirection: "row"
    }
}

export default MultiCheckBox;