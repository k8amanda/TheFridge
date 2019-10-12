import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class ButtonBasics extends Component {
  constructor() {
    super();
    this.state = {
      food: '',
      expdate: '',
      size: 0,
      names: [],
      dates: [],
    };
  }
  
  renderList = () => {
    let table = [];

    let query_output;
    let food_names = [];
    let food_expdates = [];
    fetch("http://130.64.96.226:4000/select_food_name_expdate")
      .then((res) => {
        res.json() 
        .then((json) => {
          query_output = json

          for (var i in query_output) {
            //Pretty Printing
            this_output = query_output[i]
            food_names.push(this_output[0]);
            food_expdates.push(this_output[1].slice(5,10) + "-" + this_output[1].slice(0,4));
          }

          this.state.names = food_names;
          this.state.dates = food_expdates;
          this.setState({ state: this.state });
        })
      })
     
      .catch(err => {
        Alert.alert("Error")
        console.log("ERROR")
        console.log(err)
      });

    for (let i = 0; i < this.state.names.length; i++) {
      table.push(
        <View>
          <Text>{this.state.names[i]}     {this.state.dates[i]}</Text>
        </View>
      )
    }
    return table;
  };
  
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _onPressButton2() {
    Alert.alert('hiya buddy!');
  }

  updateFridge = () => {
    var del_req = new Request("http://130.64.96.226:4000/add_var", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        "name": this.state.food, 
        "exp_date": this.state.expdate
      })
    })
    fetch(del_req)
      .then((res) => {
//          this.setState({ state: this.state });
        })
     
      .catch(err => {
        Alert.alert("Error")
        console.log("ERROR")
        console.log(err)
      });
    this.forceUpdate();
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
            <TextInput style={styles.formInput} placeholder="i.e. milk, bread, etc." onChangeText={(text) => this.setState({food:text})} />
            <Text>Exp. Date</Text>
            <TextInput style={styles.formInput} placeholder="MM/DD/YY" onChangeText={(text) => this.setState({expdate:text})} />
            <Button onPress={this.updateFridge} title="Add to Fridge" color="#ea7794" />
          </View>

          <View style={styles.foodList}>
          <ScrollView>
            <Text>What's in my Fridge?</Text>
            {this.renderList()}
          </ScrollView>
          </View>
        </View>
        
        
        <View style={styles.footer}>
          <Image style={styles.images} onPress={this._onPressButton} source={require('./Add-button.png')} />
          <TouchableOpacity onPress={this._onPressButton2}>
            <Image style={styles.images} source={require('./The_Fridge-icon.png')} />
          </TouchableOpacity>
          <Image style={styles.images} source={require('./Compost-button.png')} />
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

