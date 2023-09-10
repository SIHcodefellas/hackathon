import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    Switch,
} from "react-native";
import { firebase } from "../firebase/config";

const Registration = () => {
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("Male");
    const [location, setLocation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const [selectedGender, setSelectedGender] = useState("Male");

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };
    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("Login successful");
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
        >
            <ScrollView>
                <Text style={styles.logo}>LOGO</Text>
                <Text style={styles.heading}>Create Your Account</Text>
                <Text style={styles.subHeading}>Personal Information:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChangeText={(text) => setDateOfBirth(text)}
                />

                <Text style={styles.label}>Gender:</Text>
                <View style={styles.genderContainer}>
                    <GenderRadioButton
                        label="Male"
                        selected={selectedGender === "Male"}
                        onPress={() => handleGenderSelection("Male")}
                    />
                    <GenderRadioButton
                        label="Female"
                        selected={selectedGender === "Female"}
                        onPress={() => handleGenderSelection("Female")}
                    />
                    <GenderRadioButton
                        label="Other"
                        selected={selectedGender === "Other"}
                        onPress={() => handleGenderSelection("Other")}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Location (Cities)"
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
                <Text style={styles.subHeading}>Contact Information:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                <Text style={styles.subSubHeading}>
                    Create Email and Password:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                />
                <Text style={styles.termsText}>
                    By registering, you agree to our{" "}
                    <Text style={styles.termsLink}>Terms and Conditions</Text>.
                </Text>
                <Switch
                    value={agreeToTerms}
                    onValueChange={(newValue) => setAgreeToTerms(newValue)}
                    style={styles.switch}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.registerButton}>
                        <Button
                            title="Register"
                            onPress={() => {
                                /* Add your registration logic */
                            }}
                            color="#916863" // Background color
                        />
                    </View>

                    <View style={styles.loginButton}>
                        <Button
                            title="Login"
                            color="#916863"
                            onPress={() => loginUser(email, password)}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const GenderRadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        <View style={styles.radioButtonCircle}>
            {selected && <View style={styles.radioButtonInnerCircle} />}
        </View>
        <Text>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#DAC09D",
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "#916863",
    },
    subHeading: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        color: "#916863",
    },
    subSubHeading: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        color: "#916863",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        color: "#916863",
    },
    input: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },

    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioButtonCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#916863",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    radioButtonInnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#916863",
    },
    termsText: {
        marginTop: 10,
        color: "#916863",
    },
    termsLink: {
        color: "blue",
    },

    buttonContainer: {
        flexDirection: "row", // Arrange buttons horizontally
        justifyContent: "space-between", // Space evenly between buttons
        marginTop: 20, // Adjust as needed
        marginBottom: 20,
    },
    registerButton: {
        flex: 1, // Equal flex to share space evenly
        marginRight: 5, // Add some margin for spacing
    },
    loginButton: {
        flex: 1, // Equal flex to share space evenly
        marginLeft: 5, // Add some margin for spacing
    },
});

export default Registration;
