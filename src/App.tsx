import React from "react";
import { SafeAreaView, Text, View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import storedata from "./try.data.json";
import Block from './components/block';
import Seacrh from './components/searchbar'

function App () {
  const renderitem = ({item})=> <Block props={item}  />;


  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PATIKA STORE</Text>
      <Seacrh></Seacrh>
      
      <FlatList

      data={storedata}
      renderItem={renderitem}

      
      />
        
      



    </SafeAreaView>



  );

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'aqua',
  },
  text:{
    color:"black",
    fontWeight:"bold",
    margin: 15,
    
  }
})


export default App;