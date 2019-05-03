const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 10,
    marginBottom: 30,   
    alignItems:'center',
    justifyContent:'center',
  },
  logo: {    
   // left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 20 : 80,
    width: 280,
    height: 100,
    marginBottom:30
  }
};