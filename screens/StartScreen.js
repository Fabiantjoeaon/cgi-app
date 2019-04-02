import React, { Component } from "react";
import { Image, Button } from "react-native";
import styled from "styled-components";

import Carousel from "react-native-snap-carousel";

export default class StartScreen extends Component {
  static navigationOptions = {
    start: "Start",
    header: null
  };

  render() {
    return (
      <StyledView>
        <StyledCarousel
          ref={c => {
            this._carousel = c;
          }}
          layout={"default"}
          layoutCardOffset={100}
          activeSlideAlignment={"center"}
          data={[
            {
              id: 1,
              text:
                "Vandaag de dag zijn er in Nederland ontzettend veel automobilisten die gebruik maken van allerlei soort wegen.",
              image: require("../assets/images/automobile.png")
            },
            {
              id: 2,
              text:
                "Met de data die wij leveren kan je als gebruiker van deze app aangeven waar er onderhoud plaats moet vinden.",
              image: require("../assets/images/plumber.png")
            },
            {
              id: 3,
              text:
                "Met het gebruik van Space Data willen wij informeren, waarschuwen en activeren om de wegen te onderhoude en zo veilig mogelijk te maken.",
              image: require("../assets/images/road.png")
            }
          ]}
          renderItem={({ item, index }) => {
            return (
              <Card>
                <Image
                  style={{ width: 220, height: 220, marginBottom: 40 }}
                  source={item.image}
                />
                <StyledText>{item.text}</StyledText>
              </Card>
            );
          }}
          sliderWidth={400}
          itemWidth={350}
          itemHeight={450}
          sliderHeight={700}
        />
        <StyledButton
          title={"Ga door >"}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  margin-bottom: 70;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-between;

  background-color: #f2f2f2;
`;

const StyledCarousel = styled(Carousel)`
  flex: 1;
`;

const StyledButton = styled(Button)`
  margin-bottom: 80;
  background-color: green;
  color: #fff;
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 18;
  line-height: 28;
  margin-left: 40;
  margin-right: 40;
`;

const Card = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 100;
  width: 350;
  background-color: green;
  height: 480;
  justify-content: center;

  align-self: center;
  border-radius: 10px;
  background-color: #fff;
`;
