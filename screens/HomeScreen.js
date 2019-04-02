import React from "react";
import { Platform, Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components";

const markerTypes = [
  // 1
  [
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
  ],
  // 2
  [
    {
      latlng: { latitude: 51.93768, longitude: 4.47866 },
      title: "marker",
      description: "description",
      width: 80,
      height: 30
    },
    {
      latlng: { latitude: 51.92091, longitude: 4.47948 },
      title: "marker",
      description: "description",
      width: 90,
      height: 40
    },
    {
      latlng: { latitude: 51.93352, longitude: 4.47763 },
      title: "marker",
      description: "description",
      width: 45,
      height: 15
    },
    {
      latlng: { latitude: 51.909697, longitude: 4.450644 },
      title: "marker",
      description: "description",
      width: 80,
      height: 50
    },
    {
      latlng: { latitude: 51.925383, longitude: 4.454308 },
      title: "marker",
      description: "description",
      width: 100,
      height: 60
    }
  ],
  // 3
  [
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
];

const markerImages = (width, height, i) => {
  switch (i) {
    case 0:
      return (
        <Image
          source={require("../assets/images/alert.png")}
          style={{ width, height }}
        />
      );

    case 1:
      return (
        <Image
          source={require("../assets/images/icon.png")}
          style={{ width, height }}
        />
      );

    case 2:
      return (
        <Image
          source={require("../assets/images/splash.png")}
          style={{ width, height }}
        />
      );
  }
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "Home"
  };

  state = {
    mapType: "standard",
    markerType: 0
  };

  render() {
    return (
      <Container>
        <IconContainerLeft>
          <TouchableHighlight
            onPress={() => {
              this.setState({ mapType: "satellite" });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setState({ mapType: "mutedStandard" });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setState({ mapType: "standard" });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
        </IconContainerLeft>

        <IconContainerRight>
          <TouchableHighlight
            onPress={() => {
              this.setState({ markerType: 0 });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setState({ markerType: 1 });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setState({ markerType: 2 });
            }}
          >
            <Label>Bla</Label>
          </TouchableHighlight>
        </IconContainerRight>
        <MapView
          style={{ flex: 1 }}
          mapType={this.state.mapType}
          initialRegion={{
            latitude: 51.924419,
            longitude: 4.477733,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {markerTypes[this.state.markerType].map((marker, i) => (
            <Marker
              key={i}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              {markerImages(marker.width, marker.height, this.state.markerType)}
            </Marker>
          ))}
          <NotificationContainer>
            <Notification />
          </NotificationContainer>
        </MapView>
      </Container>
    );
  }
}

const IconContainer = styled.View`
  width: 80;
  height: 180;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  top: 30;
`;

const IconContainerLeft = styled(IconContainer)`
  left: 30;
`;
const IconContainerRight = styled(IconContainer)`
  right: 20;
`;

const Label = styled.Text``;

const TouchableHighlight = styled.TouchableHighlight`
  flex: 1;
  height: 30;
  width: 50;
  margin-bottom: 10;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Container = styled.View`
  flex: 1;
  z-index: 0;
  background: #fff;
  position: relative;
`;

const NotificationContainer = styled.View`
  flex: 1;

  background: red;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: flex-end;
`;

const Notification = styled.View`
  width: 100%;
  height: 60%;
  background: #fff;
`;
