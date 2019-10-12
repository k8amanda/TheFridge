import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

/*Hard-coded selection*/
//curl -H "Content-Type: application/json" -X POST -d '{"name":"James Fridge"}' http://130.64.96.226:4000/select_var


/*Select all of the fridges*/
export default class ButtonBasics extends Component {
  _onPressButton() {
    fetch("http://130.64.96.226:4000/select_all_fridges"/*?param1=" + name_to_select*/)
    //var request = new Request("http://130.64.96.226:4000/select_all_fridges")
    //fetch(request)
      .then((res) => {
        res.json() 
        .then((json) => {
          Alert.alert(JSON.stringify(json))
        })
      })
     
      .catch(err => {
        Alert.alert("Error")
        console.log("ERROR")
        console.log(err)
      });

    //Alert.alert('You tapped the button!');
  }

/*Add a single fridge named james (not using variables)*/
  _onPressButton2() {
    fetch("http://130.64.96.226:4000/add"/*?param1=value1&param2=value2"*/)
//      .then(response => Alert.alert("Responded"))
//      .then(response => {
//        Alert.alert(JSON.stringify(response))
        //{"type":"default","status":200,"ok":true,"headers":{"map":{"date":"Sat, 12 Oct 2019 06:02:21 GMT","etag":"W/\"1e-iiHt3CoMUMkko5O3nG7R0pLS5gI\"","x-powered-by":"Express","connection":"keep-alive","content-length":"30","content-type":"application/json; charset=utf-8"}},"url":"http://130.64.96.226:4000/","_bodyInit":{"_data":{"size":30,"offset":0,"blobId":"da378e05-e6c0-4b95-aa04-f9e03ae88d6d","__collector":null}},"_bodyBlob":{"_data":{"size":30,"offset":0,"blobId":"da378e05-e6c0-4b95-aa04-f9e03ae88d6d","__collector":null}}}
//        console.log("HEYYY" + JSON.stringify(response) + "\n")
//      })
/*      .then((res) => {
        res.json() 
        .then((json) => {
          Alert.alert(JSON.stringify(json))
        })
      })*/
      .catch(err => {
        Alert.alert("Error")
        console.log("ERROR")
        console.log(err)
      });

    Alert.alert('You added James Fridge!');
  }

  render() {
    return (
      <View style={styles.total}>
        <View style={styles.header}>
          <Image style={styles.images} source={require('./Fridge-condensed-white.png')} />
          <View style={styles.leftHold} />
          <Image style={{width: 145, resizeMode: 'contain'}} source={require('./Add-title.png')} />
          <View style={styles.rightHold} />
        </View>
        
        <View style={styles.buttonContainerTemp}>
         <View style={styles.form}>
            <Button onPress={this._onPressButton} title="Press Me" />
            <Button onPress={this._onPressButton2} title="Press Me" color="#ff728c" />

            <View style={styles.alternativeLayoutButtonContainer}>
              <Button onPress={this._onPressButton} title="This looks great!" />
              <Button onPress={this._onPressButton} title="OK!" color="#841584" />
            </View>

            <Text>Food Item</Text>
            <TextInput style={styles.formInput} placeholder="i.e. milk, bread, etc." />
            <Text>Exp. Date</Text>
            <TextInput style={styles.formInput} placeholder="MM/DD/YY" />

          </View>
          <View style={styles.foodList}>
          <ScrollView>
            <Text>Scrolling list of food</Text>
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
  alternativeLayoutButtonContainer: {
    //margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
    flex:1,
    flexDirection: 'row',
  }
});

