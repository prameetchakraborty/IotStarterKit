import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon, Button, Text, Spinner } from "native-base";
import { Client, Message } from "react-native-paho-mqtt";

const MyStorage = {
  setItem: (key, item) => {
    MyStorage[key] = item;
  },
  getItem: key => MyStorage[key],
  removeItem: key => {
    delete MyStorage[key];
  }
};


export default class MQTTMessage extends Component {
  constructor(props){
    super(props)
    this.state={
      message: "",
      topic: "",
      mes: "",
      error: "",
      connectLost: "",
      connected: "",
      onConnect: false,
      onConnectLost: false,
      onMessage: false,
      spinner: false
    }
}
 mqtt(url, port, username, password) {
        this.setState({ spinner: true })
        const mqttURI = "wss://" + url + ":" + port;
        const connectOptions = { userName: username, password: password, useSSL: true };
        client = new Client({
          uri: mqttURI,
          clientId: "myclientid_" + parseInt(Math.random() * 100, 10),
          storage: MyStorage
        });
        client.on("connectionLost", responseObject => {
          if (responseObject.errorCode !== 0) {
            this.setState({ error: responseObject.errorMessage, spinner: false });
          }
        });
        client.on("messageReceived", message => {
          console.log(message.payloadString);
          this.setState({ mes: message.payloadString, onMessage: true, spinner: false })
        });

        client
          .connect()
          .then(() => {
            console.log("Connected");
            this.setState({ connected: "Connected", onConnect: true });
            return client.subscribe(this.state.topic);
          })
             .then(() => {
               const message = new Message(this.state.message);
               message.destinationName = this.state.topic;
               client.send(message);
             })
          .catch(responseObject => {
            if (responseObject.errorCode !== 0) {
              console.log(responseObject);
              this.setState({ connectLost: responseObject, onConnectLost: true, spinner: false });
            }
          });

    }
  render() {
    const { navigate, state } = this.props.navigation;
    const url = state.params.url;
    const port = state.params.port;
    const username = state.params.username;
    const password = state.params.password;
    return (
      <View style={styles.root}>
        <View style={styles.rect1} />
        <Text style={styles.text1}>Send Messages</Text>
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <Text style={styles.text2}>MESSAGE</Text>
        <Text style={styles.text3}>TOPIC</Text>
        <TextInput placeholder="" style={styles.textInput1} onChangeText={value => this.setState({ topic: value })} />
        <TextInput placeholder="" style={styles.textInput2} onChangeText={value => this.setState({ message: value })}/>
        {!this.state.spinner ? 
        (<View>
          <Button style={styles.button1} onPress={() => this.mqtt(url, port, username, password)}>
            <Text style={styles.text9}>Send</Text>
          </Button>
        </View>) :
        <Spinner color="blue" style={styles.spinner} /> }
        <Text style={styles.text4}>{this.state.connected}</Text>
        {this.state.onConnect ? 
        (<View>
        <Text style={styles.text5}>Your Message : {this.state.message} </Text>
        </View> ) : <View /> }
        {this.state.onMessage ? 
        <View>
        <Text style={styles.text6}>Published to Topic: {this.state.topic}</Text>
        <Text style={styles.text7}>Message Sent Successfully</Text></View> : <View />}
        {this.state.onConnectLost ? (<View><Text style={styles.text8}>ERROR</Text>
        <Text style={styles.text6}>Could not establish Socket Connection</Text>
        <Button style={styles.button2} onPress={() => navigate("Setup")}>
            <Text style={styles.text9}>TRY AGAIN</Text>
          </Button></View>) : <View /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1 },
  rect1: {
    top: 0,
    left: 0,
    width: 375,
    height: 74.76,
    position: "absolute",
    backgroundColor: "rgba(183,115,12,1)",
    opacity: 1
  },

  text1: {
    top: 30.31,
    left: 100.47,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 26,
    color: "rgba(255,255,255,1)"
  },

  rect2: {
    top: 276.63,
    left: 73.91,
    width: 227.18,
    height: 42.41,
    position: "absolute",
    backgroundColor: "rgb(230, 230, 230)",
    borderWidth: 1,
    borderColor: "rgba(247,244,244,1)",
    borderRadius: 28
  },

  rect3: {
    top: 148.25,
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
    top: 253.5,
    left: 82.17,
    position: "absolute",
    backgroundColor: "transparent"
  },

  text3: {
    top: 125.1,
    left: 79.77,
    position: "absolute",
    backgroundColor: "transparent"
  },

  text9: {
    color: "rgba(255,255,255,1)"
  },
  icon1: {
    top: 22,
    left: 349,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },

  icon2: {
    backgroundColor: "transparent",
    top: 21.15,
    left: 15.52,
    position: "absolute",
    color: "rgba(255,255,255,1)"
  },
  textInput1: {
    height: 30.36,
    width: 184.92,
    top: 153.57,
    left: 95.04,
    position: "absolute"
  },
  textInput2: {
    height: 41.88,
    width: 178.97,
    top: 276.26,
    left: 98.02,
    position: "absolute"
  },
  button1: {
    backgroundColor: "rgba(28,4,225,1)",
    height: 40.01,
    width: 80,
    top: 342.26,
    left: 200.74,
    position: "absolute",
    opacity: 1
  },
  button2: {
    backgroundColor: "rgba(28,4,225,1)",
    height: 40.01,
    width: 120,
    top: 550.76,
    left: 200.69,
    position: "absolute",
    opacity: 1
  },
  spinner: {
    height: 40.01,
    width: 80,
    top: 342.26,
    left: 200.74,
    position: "absolute"
  },
  text4: {
    backgroundColor: "transparent",
    top: 415.22,
    left: 41.14,
    position: "absolute",
    color: "rgba(97,163,21,1)"
  },
  text5: {
    backgroundColor: "transparent",
    top: 470.88,
    left: 43.51,
    position: "absolute"
  },
  text6: {
    backgroundColor: "transparent",
    top: 495.76,
    left: 44.69,
    position: "absolute"
  },
  text7: {
    backgroundColor: "transparent",
    top: 538.4,
    left: 45.86,
    position: "absolute",
    color: "rgba(208,2,27,1)"
  },
  text8: {
    backgroundColor: "transparent",
    top: 440.09,
    left: 42.32,
    position: "absolute",
    color: "rgba(241,9,9,1)"
  }
});
