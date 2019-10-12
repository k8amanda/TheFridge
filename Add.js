import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class ButtonBasics extends Component {
  constructor() {
    super();
    this.state = {
      size: 5,
      names: ["apples", "oranges", "peaches", "pears", "cheese"],
      dates: ["11/11/11", "11/11/12", "11/11/13", "11/11/14", "11/11/15"],
    };
  }
  
  renderList = () => {
    let table = [];
    for (let i = 0; i < this.state.size; i++) {
      table.push(
        <View>
          <Text>{this.state.names[i]}     {this.state.dates[i]}</Text>
        </View>
      )
    }
    return table;
  };
  
  _onPressButton() {
    fetch("http://localhost:4000/");
    Alert.alert('You tapped the button!');
    Alert.alert(res);
  }

  _onPressButton2() {
    Alert.alert('hiya buddy!');
  }

  render() {
    return (
      <View style={styles.total}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image style={styles.images} onPress={this._onPressButton} source={require('./Fridge-condensed-white.png')} />
          </TouchableOpacity>
          <View style={styles.leftHold} />
          <Image style={{width: 145, resizeMode: 'contain'}} source={require('./Add-title.png')} />
          <View style={styles.rightHold} />
        </View>
        
        <View style={styles.buttonContainerTemp}>
         <View style={styles.form}>
            <Text>Food Item</Text>
            <TextInput style={styles.formInput} placeholder="i.e. milk, bread, etc." />
            <Text>Exp. Date</Text>
            <TextInput style={styles.formInput} placeholder="MM/DD/YY" />
            <Button title="Add to Fridge" color="#ea7794" />
          </View>

          <View style={styles.foodList}>
          <ScrollView>
            <Text>Scrolling list of food</Text>
            {this.renderList()}
          </ScrollView>
          </View>
        </View>
        
        
        <View style={styles.footer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image style={styles.images} onPress={this._onPressButton} source={require('./Add-button.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton2}>
            <Image style={styles.images} source={require('./The_Fridge-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image style={styles.images} source={require('./Compost-button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  total:{
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'stretch',
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#3df2a7',
  },
  footer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3df2a7',
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    padding: 5,
  },
  buttonContainerTemp: {
    flex:5,
    flexDirection: 'row',
    //margin: 20,
    justifyContent: 'space-evenly',
  },
  // alternativeLayoutButtonContainer: {
  //   //margin: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  images:{
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    height: 80,
    resizeMode: 'contain',
    width: 100,
  },
  leftHold: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightHold: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    margin: 20,
  },
  foodList: {
    backgroundColor: '#D0F2E4',
    flex: 1,
    flexDirection: 'row',
  }
});
