import React, { Component } from "react";
import { Button, ScrollView, View, StyleSheet } from "react-native";

export default class StartScreen extends Component {
  static navigationOptions = {
    start: "Start"
  };

  render() {
    return (
      <View>
        <Button
          title="Nav"
          onPress={() => {
            this.props.navigation.navigate({ routeName: "Main" });
          }}
        />
      </View>
    );
  }
}
