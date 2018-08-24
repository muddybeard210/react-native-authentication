import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class SignUpForm extends Component {
  state = {
    phone: ""
  };

  handleSubmit = () => {};

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

export default SignUpForm;
