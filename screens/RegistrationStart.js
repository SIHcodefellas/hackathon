import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
// import Registration from "./Registration";
import { firebase } from "../firebase/config";

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const RegistrationStart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* <View style={styles.notifBar}></View> */}
            {/* <Text style={styles.logo}>LOGO</Text> */}
            <Text style={styles.registerAs}>Register as:</Text>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="I am a lawyer"
                    onPress={() => navigation.navigate("Law Search")}
                />
                <CustomButton
                    title="I am a counselor"
                    onPress={() => navigation.navigate("Councellor Home")}
                />
                <CustomButton
                    title="I am representing an NGO"
                    onPress={() => navigation.navigate("NGO Home")}
                />
                <CustomButton
                    title="I am an undertrial prisoner"
                    onPress={() => navigation.navigate("SearchPage")}
                />
                {/* <CustomButton
                    title="I am an individual"
                    onPress={() => navigation.navigate("Registration")}
                /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        color: "#916863",
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
