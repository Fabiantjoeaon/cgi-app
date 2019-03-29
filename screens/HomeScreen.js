import React from "react";
import { Platform, Image, StyleSheet, View } from "react-native";
// import { MapView } from "expo";
import MapView, { Marker } from "react-native-maps";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    markers: [
      {
        latlng: { latitude: 51.93768, longitude: 4.47866 },
        title: "marker",
        description: "description",
        width: 30,
        height: 30
      },
      {
        latlng: { latitude: 51.92091, longitude: 4.47948 },
        title: "marker",
        description: "description",
        width: 40,
        height: 40
      },
      {
        latlng: { latitude: 51.93352, longitude: 4.47763 },
        title: "marker",
        description: "description",
        width: 15,
        height: 15
      },
      {
        latlng: { latitude: 51.909697, longitude: 4.450644 },
        title: "marker",
        description: "description",
        width: 50,
        height: 50
      },
      {
        latlng: { latitude: 51.925383, longitude: 4.454308 },
        title: "marker",
        description: "description",
        width: 60,
        height: 60
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 51.924419,
            longitude: 4.477733,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.state.markers.map((marker, i) => (
            <Marker
              key={i.toString()}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              // image={require("../assets/images/alert.png")}
              // style={{ width: 20, height: 20 }}
            >
              <Image
                source={require("../assets/images/alert.png")}
                style={{ width: marker.width, height: marker.height }}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
