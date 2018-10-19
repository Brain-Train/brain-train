import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import AppNavigator from "../navigation/AppNavigator";
import axios from "axios";
import Nav from "../components/NavBar/Nav";

import { MonoText } from "../components/StyledText";
import { Button, Tile } from "react-native-elements";
import PopupModal from "../components/popupModal/popupModal";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      users: []
    };
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/user/current").then(response => {
      console.warn(response.data);
      this.setState({
        user: response.data
      });
    });
  }

  render() {
    return (
      <View contentContainerStyle={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.welcomeImage}
            />
          </View> */}
          <View style={styles.container}>
            <Text style={styles.homeTitle}>Brain Train</Text>
          </View>

          <View>
            <Button
              title="DAILY CHALLENGE"
              onPress={() => this.props.navigation.navigate("Home")}
              buttonStyle={{
                backgroundColor: "transparent",
                height: 250,
                width: 350,
                marginLeft: 18,
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 3,
                paddingTop: 18,
                marginTop: 30,
                marginBottom: 80
              }}
            />
          </View>

          <View style={styles.tilePic}>
            <Tile
              imageSrc={require("../assets/images/Brain.jpg")}
              title="Our Mission at Brain Train is to provide...some shit goes here "
              featured
              caption="Some Caption Text"
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.gamesTitle}>GAMES </Text>
          </View>

          <View style={styles.container}>
            <View>
              <Button
                title="Anthony's Games"
                onPress={() => this.props.navigation.navigate("Anthony")}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 280,
                  height: 95,
                  marginVertical: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5
                }}
              />
            </View>
            <View>
              <Button
                title="Aftab's Games"
                onPress={() => this.props.navigation.navigate("Aftab")}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 280,
                  height: 95,
                  marginVertical: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5
                }}
              />
            </View>
            <View>
              <Button
                title="Eric's Games"
                onPress={() => this.props.navigation.navigate("Eric")}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 280,
                  height: 95,
                  marginVertical: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5
                }}
              />
            </View>
            <View>
              <Button
                title="SPEED"
                onPress={() => this.props.navigation.navigate("Home")}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 280,
                  height: 95,
                  marginVertical: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5
                }}
              />
            </View>
            <View>
              <Button
                title="MATH"
                onPress={() => this.props.navigation.navigate("Home")}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 280,
                  height: 95,
                  marginTop: 30,
                  marginBottom: 130,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5
                }}
              />
            </View>
          </View>
        </ScrollView>
        <Nav navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474C5D",
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    backgroundColor: "#474C5D",
    paddingTop: 30
  },
  homeTitle: {
    fontSize: 52,
    color: "white",
    marginTop: 45,
    marginBottom: 15
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 380,
    height: 320,
    resizeMode: "contain"
  },
  dailyChallenge: {
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    height: 75,
    width: 250,
    marginBottom: 20
  },
  missionStatement: {
    position: "relative",
    borderColor: "black",
    borderWidth: 1,
    height: 75,
    width: 250,
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20
  },
  gamesTitle: {
    fontSize: 35,
    color: "white"
  },
  tilePic: {
    marginTop: 10,
    marginBottom: 70
  }
});
