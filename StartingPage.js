import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import RegistrationStart from "./RegistrationStart";

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const StartingPage = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <Text style={styles.title}>Welcome to [________]</Text>
      <Text style={styles.description}>
        Are you in need of legal support or assistance? Our mission is to make the legal process accessible to everyone, regardless of your level of education.
      </Text>
      <Text style={styles.description}>
        With [________], you can easily connect with experienced lawyers, seek guidance on your legal matters, and understand the rules that matter to you.
      </Text>
      <CustomButton
        title="Get started"
        onPress={() => navigation.navigate("RegistrationStart")} // Use navigation to go to RegistrationStart
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // You can change the background color
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // textAlign: "center",
    marginTop: 0,
    color: "#916863",
  },
  description: {
    fontSize: 18,
    textAlign: "justify",
    // marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    color: "#916863",
  },
  button: {
    backgroundColor: "#916863",
    borderRadius: 5,
    padding: 10,
    marginTop:30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StartingPage;
