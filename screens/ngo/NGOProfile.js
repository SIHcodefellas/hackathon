import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
} from "react-native";
import profileimage from "../../assets/prayas.png";

const NGOProfile = () => {
    return (
        <ScrollView>
            <View style={styles.commonsection1and2}>
                {/* First Section */}
                <View style={styles.section1}>
                    {/* <Text style={styles.section1Title}>My Profile</Text> */}
                    <Image style={styles.profileImage} source={profileimage} />

                    {/* Append NGO Details */}
                    <View style={styles.ngoDetails}>
                        <Text style={styles.ngoName}>Prayas NGO</Text>
                        <Text style={styles.ngoContact}>+91 5327982847</Text>
                        <Text style={styles.ngoDescription}>
                            “Empowering Undertrial Prisoners for a Better
                            Tomorrow"
                        </Text>
                        <Text style={styles.ngoWebsite}>www.prayas.co.in</Text>
                    </View>
                </View>

                {/* Second Section */}
                <View style={styles.section2}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Legal Aid</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Rehabilitation Programs
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Mental Health</Text>
                        </TouchableOpacity>
                        {/* Add more buttons as needed */}
                    </View>
                </View>
            </View>
            <View style={styles.section3}>
                {/* New Section for Booking Appointment */}
                <View style={styles.appointmentSection}>
                    <Text style={styles.appointmentTitle}>
                        Book an Appointment?
                    </Text>
                    <Text style={styles.formTitle}>Fill out the form</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Name"
                        // You can add state handling for the name input here
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Email"
                        // You can add state handling for the email input here
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Subject"
                        // You can add state handling for the subject input here
                    />
                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={() => {
                            // Add a function to handle appointment submission here
                        }}
                    >
                        <Text style={styles.formButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    commonsection1and2: {
        backgroundColor: "#DAC7AE",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    section1: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#DAC09D",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    section1Title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    section2: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#DAC7AE",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    ngoDetails: {
        alignItems: "center", // Center align the content horizontally
        marginTop: 10,
    },

    ngoName: {
        fontSize: 24, // Increase the font size for the name
        fontWeight: "bold", // Make the name bold
        color: "#333", // Change the color to a darker shade
    },

    ngoContact: {
        fontSize: 16, // Decrease the font size for contact details
        color: "#555", // Change the color to a slightly darker shade
    },

    ngoDescription: {
        fontSize: 18,
        textAlign: "center",
        color: "#777", // Change the color to a lighter shade
        fontStyle: "italic", // Make the description italic
        marginTop: 5, // Add some top margin
    },

    ngoWebsite: {
        fontSize: 16, // Decrease the font size for the website
        color: "#888", // Change the color to an even lighter shade
    },

    section3: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },

    profileImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        backgroundColor: "#916863",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        margin: 5,
    },

    buttonText: {
        color: "#fff",
    },

    formTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#916863", // Adjust text color to match the profile part
        marginBottom: 10,
    },

    formInput: {
        height: 40,
        borderColor: "#916863", // Use the same brown shade for border color
        borderWidth: 1,
        borderRadius: 5, // Make the borders rounded
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    formButton: {
        backgroundColor: "#916863", // Use the same brown shade for the button
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5, // Make the button rounded
        marginTop: 10, // Add some top margin for separation
    },

    formButtonText: {
        color: "#fff",
        textAlign: "center",
    },
    appointmentSection: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },

    appointmentTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#916863",
        marginBottom: 8,
    },
});

export default NGOProfile;
