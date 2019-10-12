import React, {Component} from 'react';
import { Alert, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, TouchableHighlight, RefreshControl } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

<<<<<<< HEAD
class HomePage extends Component {
=======
class HomeScreen extends React.Component {
>>>>>>> 46be7ef6ee179ea52e16797c49ee5026fbabe31b
  static navigationOptions = {
    header: null
  }
  render() {
    return (

      <View style={styles.headerAsdf}>
        <Image 
        source={require('./Fridge-extended-white.png')} style={styles.image}
        />

        <View style={{backgroundColor: '#ff8899'}}/>
        <View style={styles.buttonContainer}>
          
            <Button onPress={() => this.props.navigation.navigate('Fridge')} title="FRIDGE" color="#841584" />
            
        </View>
        <View style={{flex:1, backgroundColor: '#3df2a7'}} />
        
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
      names: [1,2,3,4,5, 6, 7, 8],
      dates: ["11/11/11", "11/11/12", "11/11/13", "11/11/14", "11/11/15", "11/11/16", "11/11/17", "11/11/18"],
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
                <TouchableHighlight style={{backgroundColor: this.state.backcolor, borderRadius: 20, borderWidth: 2, borderColor: '#2c9b75'}} disabled={this.state.disabled} onPress={this.deleteItem}>
                  <Text style={{fontSize: 40,fontWeight: 'bold',textAlign: 'center',color: this.state.color}}>{this.state.names[i]}</Text>
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
          <Image style={{width: 200, resizeMode: 'contain'}} source={require('./Fridge-extended-white.png')} />
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
  leftHoldF:{
    width: 20,
  },
  // rightHoldF:{
  //   flex: 1,
  //   width: 200,
  // },

  header:{
    flex: 1,
    flexDirection: 'row',
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
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  // footer:{
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   backgroundColor: '#3df2a7',
  // },
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

  images:{
    height: 80,
    resizeMode: 'contain',
    width: 100,
  },
  // leftHold: {
  //   width: 50,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  // rightHold: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  form: {
    flex: 1,
    margin: 20,
  },
  foodList: {
    backgroundColor: '#D0F2E4',
    flex: 1,
    flexDirection: 'row',
  },
  headerAsdf:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
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
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    backgroundColor: '#3df2a7'

  },
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
        <View>
          <Text>{this.state.names[i]}     {this.state.dates[i]}</Text>
        </View>
      )
    }
    return table;
  };
  
  /*_onPressButton() {
    Alert.alert('You tapped the button!');
  }*/

  _onPressButton2() {
    Alert.alert('hiya buddy!');
  }

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
          <Image style={{width: 115, resizeMode: 'contain'}} source={require('./Add-title.png')} />
          <View style={styles.rightHoldf} />
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
            <Text>Whats in my Fridge?</Text>
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
  /*Details: DetailsScreen,*/
  Add: AddScreen, 
  Fridge: FridgeScreen,
});

<<<<<<< HEAD
export default createAppContainer(RootStack);
=======
export default createAppContainer(RootStack);
>>>>>>> 46be7ef6ee179ea52e16797c49ee5026fbabe31b
