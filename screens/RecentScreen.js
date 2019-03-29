import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

class RecentScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Search</Text>
        </View>
      </ScrollView>
    );
  }
}

export default RecentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
