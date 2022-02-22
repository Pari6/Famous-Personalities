import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 

displayAlert(){
alert('Father of Computing')
alert('Father of Nation')
alert('The first Black President Of South Africa')
alert('Saint Teresa of Calcuta')
}


  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
             //add code here to show alert box for The father of computing.
             onPress={this.displayAlert}
            />

        </View>
        
        <View

          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
              //add code here to show alert box for The father of nation
              onPress={this.displayAlert}
            />

        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
                        //add code here to show alert box for The first black president of South Africa.
                        onPress={this.displayAlert}
/>
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            //add code here to show alert box for Mother Teresa button
            onPress={this.displayAlert}
             />
        </View>
      </View>
    )
  }
}