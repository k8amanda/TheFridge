import React, { Component } from 'react';
import { Alert, TouchableOpacity, Image, Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native';

export default class Fridge extends Component {
  constructor() {
    super();
    this.state = {
      size: 5,
      names: [1,2,3,4,5],
      dates: ["11/11/11", "11/11/12", "11/11/13", "11/11/14", "11/11/15"],
   };
  }
  renderList = () =>{
    let table = [];

    for (let i = 0; i < this.state.size; i++) {
        table.push(
          <View key={i} style={styles.todoItem}>

            <TextInput style={{ flex: 1 }} />
              <Text style={styles.list}>√{this.state.names[i]}     {this.state.dates[i]}</Text>
          </View>
        );
      }
      return table;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./Fridge-condensed-white.png')} />
          </TouchableOpacity>
           <View style={styles.leftHold} />

          <Image style={styles.imagef2} source={require('./Fridge-extended.png')} />
          <View style={styles.rightHold} />
        </View>
        <View style={styles.buttonContainer}>
          <Text>Hello, world!</Text>
          {this.renderList()}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./Add-button.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./The_Fridge-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./Compost-button.png')} />
          </TouchableOpacity>


        </View>
      </View>
    );
  }
    handlePress = () => {
      Alert.alert("Hello!!!");
  }
}
const styles = StyleSheet.create({
  list:{

  },
  leftHold:{
    width: 50,
  },
  rightHold:{
    flex: 1,
    width: 200,
  },
  fridgeB:{
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  imagef1:{
    height: 80,
    resizeMode: 'contain',
    width: 100,

  },
  imagef2:{
    height: 80,
    resizeMode: 'contain',
    width: 150,
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#3df2a7',
  },
  footer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#3df2a7',
  },
  buttonContainer: {
    flex:5,
    margin: 20,
    justifyContent: 'space-evenly',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
