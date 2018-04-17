import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Icon, Button, Text } from "native-base";

export default class Setup extends Component {
  constructor(props){
    super(props)
    this.state={
      url: "",
      port: "",
      username: "",
      password: ""
    }
}
  render() {
    const { navigate } = this.props.navigation;
    return <View>
        <View style={styles.root}>
          <View style={styles.rect1} />
          <View style={styles.rect2} />
          <Text style={styles.text1}>MQTT Setup</Text>
          <View style={styles.rect3} />
          <View style={styles.rect4} />
          <Text style={styles.text2}>URL</Text>
          <Text style={styles.text3}>PORT</Text>
          <Button style={styles.button1} onPress={() => navigate(
                "Message",
                { url: this.state.url, port: this.state.port, username: this.state.username, password: this.state.password }
              )}>
            <Text>CONNECT</Text>
          </Button>
          <TextInput autoCapitalize="none" placeholder="iot.eclipse.org" style={styles.textInput1} onChangeText={value => this.setState(
                { url: value }
              )} value={this.state.url} />
          {/* <Button transparent onPress={() => navigate.pop()}> */}
          <Icon name="arrow-back" style={styles.icon3} />
          {/* </Button> */}
          <Icon name="arrow-forward" style={styles.icon4} />
          <TextInput keyboardType="numeric" autoCapitalize="none" placeholder="443/ws" style={styles.textInput2} onChangeText={value => this.setState(
                { port: value }
              )} value={this.state.port} />
          <View style={styles.rect5} />
          <View style={styles.rect6} />
          <Text style={styles.text5}>PASSWORD</Text>
          <Text style={styles.text6}>USERNAME</Text>
          <Text style={styles.text7}>
            Username and Password not required for test servers
          </Text>
          <TextInput placeholder="" style={styles.textInput3} onChangeText={value => this.setState({ username: value })} />
          <TextInput style={styles.textInput4} placeholder="" onChangeText={value => this.setState({ password: value })} />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1 },
  rect1: {
    backgroundColor: "rgba(183,115,12,1)",
    height: 74.78,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
    opacity: 1
  },

  rect2: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 52,
    width: 375,
    top: 614.96,
    left: 0,
    position: "absolute"
  },

  text1: {
    backgroundColor: "transparent",
    top: 31.14,
    left: 117.7,
    position: "absolute",
    fontSize: 26,
    color: "rgba(255,255,255,1)"
  },

  rect3: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 42.41,
    width: 227.18,
    top: 152.32,
    left: 73.91,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(247,244,244,1)",
    borderRadius: 28
  },

  rect4: {
    top: 265.44,
    left: 73.91,
    width: 227.18,
    height: 42.41,
    position: "absolute",
    backgroundColor: "rgb(230, 230, 230)",
    borderWidth: 1,
    borderColor: "rgba(247,244,244,1)",
    borderRadius: 28
  },

  text2: {
    backgroundColor: "transparent",
    top: 125.92,
    left: 82.97,
    position: "absolute"
  },

  text3: {
    backgroundColor: "transparent",
    top: 238.71,
    left: 84.17,
    position: "absolute"
  },

  button1: {
    backgroundColor: "rgba(28,4,225,1)",
    height: 39.96,
    width: 110.95,
    top: 581.62,
    left: 183.72,
    position: "absolute",
    opacity: 1
  },

  text4: {
    backgroundColor: "transparent",
    top: 405.46,
    left: 184.36,
    position: "absolute"
    // color: "rgba(255,255,255,1)"
  },

  textInput1: {
    height: 53.19,
    width: 207.98,
    top: 147.52,
    left: 83.51,
    position: "absolute"
  },

  icon1: {
    backgroundColor: "transparent",
    top: 33.54,
    left: 442.92,
    position: "absolute",
    color: "rgba(243,240,240,1)"
  },

  icon2: {
    backgroundColor: "transparent",
    top: 25,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 33
  },

  icon3: {
    backgroundColor: "transparent",
    top: 25,
    left: 14.12,
    position: "absolute",
    color: "rgba(255,255,255,1)"
  },

  icon4: {
    backgroundColor: "transparent",
    top: 25,
    left: 344,
    position: "absolute",
    color: "rgba(255,255,255,1)"
  },

  textInput2: {
    height: 40.73,
    width: 184.92,
    top: 267.8,
    left: 95.04,
    position: "absolute"
  },

  rect5: {
    top: 364.25,
    left: 71.92,
    width: 227.17,
    height: 42.4,
    position: "absolute",
    backgroundColor: "rgb(230, 230, 230)",
    borderWidth: 1,
    borderColor: "rgba(247,244,244,1)",
    borderRadius: 28
  },

  rect6: {
    top: 467.68,
    left: 71.92,
    width: 227.17,
    height: 42.4,
    position: "absolute",
    backgroundColor: "rgb(230, 230, 230)",
    borderWidth: 1,
    borderColor: "rgba(247,244,244,1)",
    borderRadius: 28
  },

  text5: {
    top: 443.49,
    left: 83.24,
    position: "absolute",
    backgroundColor: "transparent"
  },

  text6: {
    top: 340.8,
    left: 82.48,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text7: {
    backgroundColor: "transparent",
    top: 534.95,
    left: 37,
    position: "absolute",
    fontSize: 12
  },
  textInput3: {
    height: 34.85,
    width: 191.16,
    top: 370.17,
    left: 91.92,
    position: "absolute"
  },
  textInput4: {
    top: 472.55,
    left: 91.92,
    width: 191.16,
    height: 34.85,
    position: "absolute"
  }
});
