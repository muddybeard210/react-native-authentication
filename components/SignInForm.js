import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-reactnative-one-time-password.cloudfunctions.net";

class SignInForm extends Component {
  state = {
    phone: ""
  };

  //No Async Await Added
  //   handleSubmit = () => {
  //     axios
  //       .post(`${ROOT_URL}/createUser`, {
  //         phone: this.state.phone
  //       })
  //       .then(() => {
  //         axios.post(`${ROOT_URL}/requestOneTimePassword`, {
  //           phone: this.state.phone
  //         });
  //       });
  //   };

  //Now with Async Await added
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
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
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
