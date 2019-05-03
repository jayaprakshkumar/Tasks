const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  scrollContainer:{
    height:deviceHeight,
    textAlign:'center'
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 10,
     alignItems:'center',
    justifyContent:'center',
  },
  logo: {    
   // left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100,
    
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  loginForm:{    
    marginTop: 150,
    padding: 30,
    PaddingTop: 100
  },
  formItem:{
    marginBottom:20
  },
  formInput:{
    color: '#ffffff',
    
    //placeholderTextColor: '#cccccc'
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
  item: {
    textAlign: 'center',
    color: '#539edf',
    marginBottom: 15,  
    paddingLeft:20,
    marginTop: 10, 
    backgroundColor:'#ffffff15',  
    height:45,   
    borderRadius: 50,
    borderColor:'#4f8bda',
  }, 
};