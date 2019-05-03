import baseStyles from '../../../../Theme/Style'

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {...baseStyles,...{
  scrollContainer:{
    height:deviceHeight,    
  },
  titleMessage:{
    color: '#ff0000',
    fontSize:16,
    textAlign: 'center',
    marginBottom:20
  },
  errorMessage:{
    color: '#ff0000'
  }, 
}};