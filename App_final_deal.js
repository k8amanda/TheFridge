import React, { Component } from 'react';
import {
  Flatlist,
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  RefreshControl,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DatePicker from 'react-native-datepicker';

//Home Page leads to the Fridge Page
class HomePage extends Component {
  static navigationOptions = {
    header: null,
  };
  //Function: Constructor:
  //Sets state variables for homepage
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }

  //Function: render

  render() {
    return (
      <View style={styles.homestyle}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity disabled={true}>
            <Image
              style={{ width: 300, height: 80, resizeMode: 'contain' }}
              source={require('./Fridge-extended-white.png')}
            />
          </TouchableOpacity>

          <View style={styles.userform}>
            <Text style={styles.formTitle}>Username</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter username"
              onChangeText={text => this.setState({ food: text })}
            />
            <Text style={styles.formTitle}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formInput}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="Enter password"
            />
          </View>

          <Button
            onPress={() => this.props.navigation.navigate('Fridge')}
            title="OPEN YOUR FRIDGE"
            color="#ea7794"
          />
          <View style={{ flex: 0.1 }} />

          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text
              style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
              Don't have an account?
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

//SignIn Page creates an account
class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };
  //Function: Constructor:
  //Sets state variables for homepage
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.signStyle}>
        <View style={styles.header}>
          <TouchableOpacity disabled={true}>
            <Image
              style={{ width: 300, height: 80, resizeMode: 'contain' }}
              source={require('./Fridge-extended-white.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text style={styles.formTitle}>First Name</Text>

          <Text style={styles.formTitle}>Last Name</Text>

          <Text style={styles.formTitle}>Email</Text>

          <Text style={styles.formTitle}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.formInput}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Enter password"
          />
        </View>
      </View>
    );
  }
}
//Fridge Class displays list of items, and deletes
//them if the trash bucket is selected
class FridgeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    super();

    this.state = {
      size: 0,
      names: [],
      dates: [],
      disabled: true,
      backcolor: '#ffffff',
      header: 'Items List',
      color: '#000000',
      mindate: day + '-' + month + '-' + year,
      date: day + '-' + month + '-' + year,
    };
  }

  renderList = () => {
    let table = [];
    let query_output;
    let food_names = [];
    let food_expdates = [];

    fetch('https:\\byte-the-fridge.herokuapp.com/select_food_name_expdate')
      .then(res => {
        res.json().then(json => {
          query_output = json;
          for (var i in query_output) {
            let this_output = query_output[i];
            food_names.push(this_output[0]);
            food_expdates.push(
              this_output[1].slice(5, 10) + '-' + this_output[1].slice(0, 4)
            );
          }

          this.state.names = food_names;
          this.state.dates = food_expdates;
          this.setState({ state: this.state });
        });
      })

      .catch(err => {
        Alert.alert('Error');
        console.log('ERROR');
        console.log(err);
      });

    for (let i = 0; i < this.state.names.length; i++) {
      let thisname = this.state.names[i];
      table.push(
        <View style={styles.ListContainer}>
          <View style={styles.listL}>
            <TouchableHighlight
              style={{
                backgroundColor: this.state.backcolor,
                borderRadius: 20,
              }}
              disabled={this.state.disabled}
              onPress={() => this.deleteItem(thisname)}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: this.state.color,
                }}>
                {this.state.names[i]}
              </Text>
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
          <TouchableOpacity
            disabled={!this.state.disabled}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              style={styles.images}
              source={require('./Fridge-condensed-white.png')}
            />
          </TouchableOpacity>

          <View style={styles.leftHoldF} />
          <Image
            style={{ width: 200, resizeMode: 'contain' }}
            source={require('./Fridge-extended-white.png')}
          />
          <View style={styles.rightHoldf} />
        </View>

        <View style={styles.ListContainer}>
          <ScrollView>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                backgroundColor: '#ffffff',
              }}>
              {this.state.header}{' '}
            </Text>
            {this.renderList()}
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            disabled={!this.state.disabled}
            onPress={() => this.props.navigation.navigate('Add')}>
            <Image style={styles.images} source={require('./Add-button.png')} />
          </TouchableOpacity>

          <Image
            style={styles.images}
            source={require('./The_Fridge-icon.png')}
          />

          <TouchableOpacity onPress={() => this.deleteMode()}>
            <Image
              style={styles.images}
              source={require('./Compost-button.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  deleteMode() {
    if (this.state.disabled) {
      this.state.backcolor = '#ea7794';
      this.state.header = 'Select Item to Delete\nSelect Trashcan to leave';
      this.state.color = '#ffffff';
    } else {
      this.state.backcolor = '#ffffff';
      this.state.header = 'Items List';
      this.state.color = '#000000';
    }
    this.state.disabled = !this.state.disabled;
    this.setState({ state: this.state });
    this.forceUpdate();
  }

  deleteItem(food_name) {
    console.log('getting to delete');
    var del_req = new Request(
      'https:\\byte-the-fridge.herokuapp.com/delete_var',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: food_name,
        }),
      }
    );
    fetch(del_req)
      .then(res => {})

      .catch(err => {
        Alert.alert('Error');
        console.log('ERROR');
        console.log(err);
      });
    console.log(food_name);
    this.forceUpdate();
  }

  handlePress = () => {
    Alert.alert('Hello!!!');
  };
}

//AddScreen class adds new values to the list of items
class AddScreen extends Component {
  static navigationOptions = {
    header: null,
  };

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

    fetch('https:\\byte-the-fridge.herokuapp.com/select_food_name_expdate')
      .then(res => {
        res.json().then(json => {
          query_output = json;

          for (var i in query_output) {
            //Pretty Printing
            let this_output = query_output[i];
            food_names.push(this_output[0]);
            food_expdates.push(
              this_output[1].slice(5, 10) + '-' + this_output[1].slice(0, 4)
            );
          }

          this.state.names = food_names;
          this.state.dates = food_expdates;
          this.setState({ state: this.state });
        });
      })

      .catch(err => {
        Alert.alert('Error');
        console.log('ERROR');
        console.log(err);
      });

    for (let i = 0; i < this.state.names.length; i++) {
      let thisname = this.state.names[i];
      table.push(
        <View style={styles.buttonContainerTemp}>
          <View style={styles.foodname}>
            <Text>{this.state.names[i]}</Text>
          </View>
          <View style={styles.expiry}>
            <Text>{this.state.dates[i]}</Text>
          </View>
        </View>
      );
    }
    return table;
  };
  updateFridge = () => {
    var del_req = new Request('https:\\byte-the-fridge.herokuapp.com/add_var', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: this.state.food,
        exp_date: this.state.date,
      }),
    });
    fetch(del_req)
      .then(res => {})

      .catch(err => {
        Alert.alert('Error');
        console.log('ERROR');
        console.log(err);
      });
    this.forceUpdate();
  };

  render() {
    return (
      <View style={styles.total}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              style={styles.images}
              source={require('./Fridge-condensed-white.png')}
            />
          </TouchableOpacity>
          <View style={styles.leftHoldF} />
          <Image
            style={{ width: 115, resizeMode: 'contain' }}
            source={require('./Add-title.png')}
          />
          <View style={styles.rightHoldf} />
        </View>

        <View style={styles.buttonContainerTemp}>
          <View style={styles.form}>
            <Text>Food Item</Text>
            <TextInput
              style={styles.formInput}
              placeholder="i.e. milk, bread, etc."
              onChangeText={text => this.setState({ food: text })}
            />
            <Text>Exp. Date</Text>
            <DatePicker
              mode="date"
              placeholder="select date"
              date={this.state.date}
              minDate={new Date()}
              maxDate="01-01-2020"
              format="MM-DD-YYYY"
              confirmBtnText="confirm"
              cancelBtnText="cancel"
              customStyles={{ dateInput: { borderWidth: 0 } }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
              style={styles.formInput}
            />
            <Button
              onPress={this.updateFridge}
              title="Add to Fridge"
              color="#ea7794"
            />
          </View>

          <View style={styles.foodList}>
            <ScrollView>
              <Text>What's in my Fridge?</Text>
              {this.renderList()}
            </ScrollView>
          </View>
        </View>

        <View style={styles.footer}>
          <Image
            style={styles.images}
            onPress={this._onPressButton}
            source={require('./Add-button.png')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Fridge')}>
            <Image
              style={styles.images}
              source={require('./The_Fridge-icon.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.images}
            source={require('./Compost-button.png')}
          />
        </View>
      </View>
    );
  }
}
//Stylesheet for the pages
const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listL: {
    flex: 1,
    margin: 5,
  },
  listR: {
    flex: 1,
    flexDirection: 'row',
  },
  leftHoldF: {
    width: 20,
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
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3df2a7',
  },
  homestyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3df2a7',
  },
  signStyle: {
    flex: 1,
    backgroundColor: '#3df2a7',
  },
  footer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#3df2a7',
  },
  ListContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
  },
  signUp: {
    flex: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
  /**THE GAP*/
  total: {
    flex: 1,
    fontFamily: 'monospace',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
  },

  buttonContainerTemp: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  images: {
    height: 80,
    resizeMode: 'contain',
    width: 100,
  },
  form: {
    flex: 1,
    margin: 20,
  },
  userform: {
    margin: 20,
  },
  foodList: {
    backgroundColor: '#D0F2E4',
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'center',
  },
});
//Navigation Hub
const RootStack = createStackNavigator({
  Home: HomePage,
  Add: AddScreen,
  Fridge: FridgeScreen,
  SignUp: SignUp,
});
export default createAppContainer(RootStack);
