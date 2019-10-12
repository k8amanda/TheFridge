import React, { Component } from 'react';
import {Alert, TouchableOpacity, Image, Text, View, StyleSheet, TextInput, ScrollView, RefreshControl} from 'react-native';
import { Button, TouchableHighlight } from 'react-native';


export default class Fridge extends Component {

  constructor() {
    super();
    this.state = {
      size: 8,
      names: [1,2,3,4,5, 6, 7, 8],
      dates: ["11/11/11", "11/11/12", "11/11/13", "11/11/14", "11/11/15", "11/11/16", "11/11/17", "11/11/18"],
      disabled: true,
      color: "#ffffff",
      header: "Items List",
   };
  }
  renderList = () =>{
    let table = [];

    for (let i = 0; i < this.state.size; i++) {
        table.push(
          <View style={styles.ListContainer}>
              <View style={styles.listL}>
                <TouchableHighlight style={{backgroundColor: this.state.color,}} disabled={this.state.disabled} onPress={this.deleteItem}>
                  <Text style={styles.list}>{this.state.names[i]}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.listR}>
                <Text style={styles.list}>{this.state.dates[i]}</Text>
              </View>
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
          <Image style={{width: 200, resizeMode: 'contain'}} source={require('./Fridge-extended.png')} />
          <View style={styles.rightHold} />
        </View>

        <View style={styles.ListContainer}>
          <ScrollView>
              <Text style={{textAlign: 'center', fontSize: 30, backgroundColor: '#ffffff',}}>{this.state.header} </Text>
            {this.renderList()}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./Add-button.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image style={styles.imagef1} source={require('./The_Fridge-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deleteMode()}>
            <Image style={styles.imagef1} source={require('./Compost-button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  deleteMode(){
    if (this.state.disabled){
      this.state.color = "#cc0000";
      this.state.header = "Select Item to Delete\nSelect Trashcan to leave"
    }else{
      this.state.color = "#ffffff";
      this.state.header = "Items List";
    }
    this.state.disabled = !(this.state.disabled);
    this.setState({ state: this.state });
    this.forceUpdate();
  }
  deleteItem(){

  }
  handlePress = () => {
      Alert.alert("Hello!!!");
  }
}
const styles = StyleSheet.create({
  list:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listL:{
    flex: 1,
    margin: 5,
  },
  listR:{
    flex: 1,
    flexDirection: 'row',
  },
  leftHold:{
    width: 20,
  },
  rightHold:{
    flex: 1,
    width: 200,
  },
  imagef1:{
    height: 80,
    resizeMode: 'contain',
    width: 100,

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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3df2a7',
  },
  footer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#3df2a7',
  },
  ListContainer: {
    flex:5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
  },
});
