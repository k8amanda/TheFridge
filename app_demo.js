import React, {Component} from 'react';
import { Alert, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, TouchableHighlight, RefreshControl } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomePage extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (


      <View style={styles.homestyle}>
      
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity disabled= {true}>
              <Image style={{width: 300, height: 80, resizeMode: 'contain'}} source={require('./Fridge-extended-white.png')} />
          </TouchableOpacity>
          <Text style={styles.upHold}></Text>

            <Button onPress={() => this.props.navigation.navigate('Fridge')} title="OPEN YOUR FRIDGE" color="#ea7794" />
        
        </View>
        
      </View>

    );
  }
}

class FridgeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      size: 8,
      names: ["apple","banana","corn","eggs","yogurt","lettuce","tomato","chicken"],
      dates: ["11/11/19", "11/15/19", "11/29/19", "12/2/19", "12/7/19", "12/20/19", "1/11/20", "1/11/20"],
      disabled: true,
      backcolor: "#ffffff",
      header: "Items List",
      color: "#000000",
   };
  }
  renderList = () =>{
    let table = [];

    for (let i = 0; i < this.state.size; i++) {
        table.push(
          <View style={styles.ListContainer}>
              <View style={styles.listL}>
                <TouchableHighlight style={{backgroundColor: this.state.backcolor, borderRadius: 20, }} disabled={this.state.disabled} onPress={this.deleteItem}>
                  <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center',color: this.state.color}}>{this.state.names[i]}</Text>
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
      <View style={styles.total}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image style={styles.images}  source={require('./Fridge-condensed-white.png')} />
          </TouchableOpacity>
           <View style={styles.leftHoldF} />
          <Image style={{width: 200, height: 80, resizeMode: 'contain'}} source={require('./Fridge-extended-white.png')} />
          <View style={styles.rightHoldf} />
        </View>

        <View style={styles.ListContainer}>
          <ScrollView>
              <Text style={{textAlign: 'center', fontSize: 30, backgroundColor: '#ffffff',}}>{this.state.header} </Text>
            {this.renderList()}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>

            <Image style={styles.images} source={require('./Add-button.png')} />
          </TouchableOpacity>
          <Image style={styles.images} source={require('./The_Fridge-icon.png')} />
          <TouchableOpacity onPress={() => this.deleteMode()}>
            <Image style={styles.images} source={require('./Compost-button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  deleteMode(){
    if (this.state.disabled){
      this.setState({ backcolor: "#ea7794"});
      this.setState({header: "Select Item to Delete\nSelect Trashcan to leave"});
      this.setState({color: "#ffffff"});
    }else{
      this.setState({backcolor: "#ffffff"});
      this.setState({header: "Items List"});
      this.setState({color: "#000000"});

    }
    this.setState({disabled: !(this.state.disabled)});
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
  upHold:{
    height: 80,
  },
  list:{
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listL:{
    flex: 1,
  },
  listR:{
    flex: 1,
    flexDirection: 'row',
  },
  leftHoldF:{
    width: 20,
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3df2a7',
  },
  homestyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3df2a7',
  },
  footer:{
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#3df2a7',
  },
  ListContainer: {
    flex:5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
  },

  /**THE GAP*/
  total:{
    flex: 1,
    fontFamily: 'monospace',
    flexDirection: 'column',
    alignItems: 'stretch',
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
    justifyContent: 'space-around',
  },
  images:{
    height: 80,
    resizeMode: 'contain',
    width: 100,
  },
  form: {
    flex: 1,
    margin: 20,
  },
  foodList: {
    backgroundColor: '#D0F2E4',
    flex: 1.25,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex:5,
    justifyContent: 'center',
  },
  foodname: {
    fontFamily: 'monospace',
    flex: 1,
    textAlign: 'center',
  },
  expiry: {
    flex: 1.25,
    flexDirection: 'row',
    textAlign: 'center',
  }
});

class AddScreen extends Component {
  static navigationOptions = {
    header: null
  }
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
    for (let i = 0; i < this.state.size; i++) {
      table.push(
        <View style={styles.buttonContainerTemp}>
          <View style={styles.foodname}>
          <Text>{this.state.names[i]}</Text>    
          </View>
          <View style={styles.expiry}>
          <Text>{this.state.dates[i]}</Text>
          </View>
        </View>
      )
    }
    return table;
  };
  
  updateFridge = () => {
    this.setState({
      size: this.state.size + 1
    });
    this.state.names.push(this.state.food);
    this.state.dates.push(this.state.expdate);
    this.setState({ state: this.state });
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.total}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image style={styles.images}  source={require('./Fridge-condensed-white.png')} />
          </TouchableOpacity>
           <View style={styles.leftHoldF} />
          <Image style={{width: 115, height: 80, resizeMode: 'contain'}} source={require('./Add-title.png')} />
          <View style={styles.rightHoldf} />
        </View>
        
        <View style={styles.buttonContainerTemp}>
         <View style={styles.form}>
            <Text>Food Item</Text>
            <TextInput style={styles.formInput} placeholder="i.e. milk, bread, etc." onChangeText={(text) => this.setState({food:text})} />
            <Text>Exp. Date</Text>
            <TextInput style={styles.formInput} placeholder="MM-DD-YYYY" onChangeText={(text) => this.setState({expdate:text})} />
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Fridge')}>
            <Image style={styles.images} source={require('./The_Fridge-icon.png')} />
          </TouchableOpacity>
          <Image style={styles.images} source={require('./Compost-button.png')} />
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomePage,
  Add: AddScreen, 
  Fridge: FridgeScreen,
});

export default createAppContainer(RootStack);
