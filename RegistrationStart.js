import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const RegistrationStart = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.notifBar}></View> */}
      <Text style={styles.logo}>LOGO</Text>
      <Text style={styles.registerAs}>Register as:</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="I am a lawyer"
          onPress={() => {/* Add your action here */}}
        />
        <CustomButton
          title="I am a counselor"
          onPress={() => {/* Add your action here */}}
        />
        <CustomButton
          title="I am representing an NGO"
          onPress={() => {/* Add your action here */}}
        />
        <CustomButton
          title="I am an undertrial prisoner"
          onPress={() => {/* Add your action here */}}
        />
        <CustomButton
          title="I am an individual"
          onPress={() => {/* Add your action here */}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notifBar: {
    backgroundColor: "#fff",
    width: "100%",
    height: 35,
  },
  container: {
    flex: 1,
    backgroundColor: "#DAC09D",
    paddingHorizontal: 24,
    paddingTop: 30,
    // justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  registerAs: {
    fontSize: 24,
    marginBottom: 20,
    color:"#916863",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingTop: 20,
    // justifyContent: "center",
  },
  customButton: {
    backgroundColor: "#fff",
    borderColor: "#916863",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20, // Adjust the spacing between each button as needed
  },
  buttonText: {
    color: "#916863",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationStart;
