import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "native-base";


export default class Home1 extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.root}>
        <Text style={styles.text1} />

        <Image
          source={require("../../../assets/background.jpg")}
          style={styles.image1}
        />

        <Image
          source={require("../../../assets/d4980aaa-8f69-4a0c-bdaf-59b182688033.png")}
          style={styles.image2}
        />

        <View style={styles.rect1} />
        <Button transparent onPress={() => navigate("Setup")}>
        <Text style={styles.text2}>GET STARTED</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1 },
  text1: {
    top: 89.55,
    left: 155.32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 53,
    fontFamily: "AmericanTypewriter-CondensedBold"
  },

  image1: {
    position: "absolute",
    width: 374.99,
    height: 666.97,
    top: 0,
    left: 0
  },

  image2: {
    position: "absolute",
    width: 374.99,
    height: 198.55,
    top: 234.23,
    left: 0.01
  },
  rect1: {
    backgroundColor: "rgba(139,87,42,1)",
    height: 45.73,
    width: 193.18,
    top: 442.59,
    left: 90.9,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(139,87,42,1)",
    borderRadius: 40,
    opacity: 1
  },
  text2: {
    backgroundColor: "transparent",
    top: 452.76,
    left: 128.51,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontFamily: "AmericanTypewriter-CondensedBold",
    fontSize: 20
  }
});
