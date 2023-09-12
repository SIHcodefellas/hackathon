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
    Switch, // Import Picker
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const AssignForm = () => {
    const [caseName, setCaseName] = useState("");
    const [caseType, setCaseType] = useState("");
    const navigation = useNavigation();
    const [caseDescription, setCaseDescription] = useState("");
    const [jurisdiction, setJurisdiction] = useState("");
    const [legalRequirements, setLegalRequirements] = useState("");
    const [lawyerName, setLawyerName] = useState("");

    const [selectedCaseType, setSelectedCaseType] = useState("");

    const handleCaseTypeSelection = (itemValue) => {
        setSelectedCaseType(itemValue);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                {/* <Text style={styles.logo}>LOGO</Text> */}
                <Text style={styles.heading}>Assign a Case:</Text>

                <Text style={styles.subHeading}>Case Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Case Name"
                    value={caseName}
                    onChangeText={(text) => setCaseName(text)}
                />

                <Text style={styles.subHeading}>Case Type:</Text>
                <Picker
                    selectedValue={selectedCaseType}
                    style={styles.input}
                    onValueChange={(itemValue) =>
                        handleCaseTypeSelection(itemValue)
                    }
                >
                    <Picker.Item label="Select a Case Type" value="" />
                    <Picker.Item
                        label="Criminal Cases"
                        value="Criminal Cases"
                    />
                    <Picker.Item
                        label="Traffic Violations"
                        value="Traffic Violations"
                    />
                    <Picker.Item
                        label="Domestic Violence Cases"
                        value="Domestic Violence Cases"
                    />
                    <Picker.Item
                        label="White-Collar Crimes"
                        value="White-Collar Crimes"
                    />
                    <Picker.Item
                        label="Juvenile Offenses"
                        value="Juvenile Offenses"
                    />
                    <Picker.Item
                        label="Theft and Robbery Cases"
                        value="Theft and Robbery Cases"
                    />
                </Picker>

                {/* Case Description */}
                <Text style={styles.subHeading}>Case Description:</Text>
                <TextInput
                    style={styles.largeInput}
                    placeholder="Case Description"
                    multiline
                    numberOfLines={6} // Adjust the number of lines as needed
                    value={caseDescription}
                    onChangeText={(text) => setCaseDescription(text)}
                />

                {/* Jurisdiction of Court */}
                <Text style={styles.subHeading}>Jurisdiction of Court:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Jurisdiction"
                    value={jurisdiction}
                    onChangeText={(text) => setJurisdiction(text)}
                />

                {/* Legal Requirements */}
                <Text style={styles.subHeading}>Legal Requirements:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Legal Requirements"
                    multiline
                    numberOfLines={4}
                    value={legalRequirements}
                    onChangeText={(text) => setLegalRequirements(text)}
                />

                {/* Lawyer Selection by Name */}
                <Text style={styles.subHeading}>Lawyer Selection by Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Lawyer Name"
                    value={lawyerName}
                    onChangeText={(text) => setLawyerName(text)}
                />

                {/* Submit Button */}
                <View style={styles.centeredButton}>
                    <Button
                        title="Submit"
                        onPress={() => {
                            alert("Submitted Successfully");
                        }}
                        color="#916863" // Background color
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#DAC09D", // Preserve the background color
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
    input: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    largeInput: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        height: 120, // Adjust the height as needed
    },
    centeredButton: {
        alignItems: "center",
        marginTop: 20,
    },
});

export default AssignForm;
