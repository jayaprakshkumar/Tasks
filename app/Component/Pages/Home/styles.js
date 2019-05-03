const React = require("react-native");

export default {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 20,
    alignItems: 'center'
  },
  header: {    
       textAlign: 'center',   
  },
  box: {
    flex: 1,       
    height: 120,
    justifyContent: 'center',    
    alignItems: 'center',      
    marginBottom:20
  },
  icon:{
    backgroundColor:'#1079d4' , 
    height:80, 
    width:80 ,    
    marginBottom:20 ,
    textAlign :'center',
    color:"#fff" ,
    paddingTop:25,
    borderRadius:10
  },
  iconButton:{
    //marginBottom:20,
    alignSelf:'center'
  },
  iconText:{
    paddingTop:20,
    textAlign: 'center',
    alignSelf: 'stretch'
  }

};