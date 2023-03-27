
import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    image:{
        height:Dimensions.get("window").height/4,
        width:Dimensions.get("window").width/1.5,
        borderRadius:20,
        
    },
    container:{
        margin:15,
        borderRadius:10,
        
        

    },
    title:{
        backgroundColor:"white",
        width:252,
        margin:5,
        borderRadius:15,
        fontWeight:"bold"
    },
    price:{
        backgroundColor:"yellow",
        width:252,
        margin:5,
        borderRadius:15,
        fontWeight:"bold"

    },
    stock:{
        backgroundColor:"red",
        width:252,
        margin:5,
        borderRadius:15,
        fontWeight:"bold"
    }



})