import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-reactnative-one-time-password.cloudfunctions.net";

class SignInForm extends Component {
  state = {
    phone: "",
    code: ""
  };

  handleSubmit = async () => {
    try {
      let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          {/* This 'onChangeText' is specific to react-native-elements.  Its essentially onChange */}
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
