import React from "react";
import { Text,View,Image } from "react-native";
import styles from './block.style';





const Block =({props}) => {
    
        
        return(
        <View style={styles.container}>

           
           <Image style={styles.image} source={{uri:props.imgURL}} />
           
           <Text style={styles.title} >{props.title}</Text>
           <Text style={styles.price} >{props.price}</Text>
           { props.inStock === false && <Text style={styles.stock}>   Stokta Yok</Text>}
           

              


        </View>





    );



}

export default Block;