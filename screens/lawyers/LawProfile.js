import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
    StyleSheet,
} from "react-native";
import userPlaceholderImage from "../../assets/userprofile.jpeg";
import { useNavigation } from "@react-navigation/native";

const LawProfile = () => {
    const navigation = useNavigation();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleRequestMeeting = () => {
        setIsFormOpen(true);
    };

    const handleFormSubmit = () => {
        // Handle form submission here (e.g., sending data to the server)
        // After submission, you can close the form
        setIsFormOpen(false);
    };
    return (
        <ScrollView>
            <View style={styles.commonsection1and2}>
                {/* First Section */}
                <View style={styles.section1}>
                    <Text style={styles.section1Title}>Profile</Text>
                    <Image
                        style={styles.profileImage}
                        source={userPlaceholderImage}
                    />
                    <View style={styles.lawyerdetails}>
                        <Text style={styles.lawyername}>Shyam Rao, 26</Text>
                        <Text style={styles.lawyernumber}>+91 9034567890</Text>
                        <Text style={styles.lawyerspec}> Criminal Defense</Text>
                        <Text style={styles.lawyerstatus}>
                            Available for a meeting
                        </Text>
                    </View>
                </View>

                {/* Second Section */}
                <View style={styles.section2}>
                    <Text style={styles.section2Title}>
                        Also experience in:
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text
                                style={styles.buttonText}
                                onPress={() =>
                                    navigation.navigate("councillorprofile")
                                }
                            >
                                Family Law
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Personal Injury
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Civil Litigation
                            </Text>
                        </TouchableOpacity>
                        {/* Add more buttons as needed */}
                    </View>
                </View>
            </View>

            {/* Third Section */}
            <View style={styles.section3}>
                <Text style={styles.section3Title}>Ongoing Cases:</Text>
                <View style={styles.profileCardContainer}>
                    {/* Profile Card 1 */}
                    <View style={styles.profileCard}>
                        <Image
                            style={styles.profileCardImage}
                            source={userPlaceholderImage}
                            alt="Image placeholder"
                        />
                        <Text style={styles.prisonername}>Shyam, 26</Text>
                        <Text style={styles.prisonercase}>Family</Text>
                        <Text style={styles.prisonercourt}>Next Court:</Text>
                        <Text style={styles.prisonercourtdate}>12th Sept</Text>
                    </View>

                    {/* Profile Card 2 */}
                    <View style={styles.profileCard}>
                        <Image
                            style={styles.profileCardImage}
                            source={userPlaceholderImage}
                            alt="Image placeholder"
                        />
                        <Text style={styles.prisonername}>Shyam, 26</Text>
                        <Text style={styles.prisonercase}>Civil</Text>
                        <Text style={styles.prisonercourt}>Next Court:</Text>
                        <Text style={styles.prisonercourtdate}>19th Sept</Text>
                    </View>

                    {/* Profile Card 3 */}
                    <View style={styles.profileCard}>
                        <Image
                            style={styles.profileCardImage}
                            source={userPlaceholderImage}
                            alt="Image placeholder"
                        />
                        <Text style={styles.prisonername}>Shyam, 26</Text>
                        <Text style={styles.prisonercase}>Criminal</Text>
                        <Text style={styles.prisonercourt}>Next Court:</Text>
                        <Text style={styles.prisonercourtdate}>25th Sept</Text>
                    </View>
                </View>

                {/* Request a Meeting Button */}
                {/* Request a Meeting Button */}
                <TouchableOpacity
                    style={styles.requestButton}
                    onPress={handleRequestMeeting}
                >
                    <Text style={styles.requestButtonText}>
                        Request a meeting
                    </Text>
                </TouchableOpacity>

                {/* Meeting Request Form */}
                <Modal
                    visible={isFormOpen}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Meeting Request
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Name"
                                onChangeText={(text) => setName(text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Contact Number"
                                onChangeText={(text) => setContactNumber(text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Message"
                                onChangeText={(text) => setMessage(text)}
                                multiline={true}
                            />
                            <TouchableOpacity
                                style={styles.button} // Apply button style here
                                onPress={handleFormSubmit}
                            >
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button} // Apply button style here
                                onPress={() => setIsFormOpen(false)}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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

    section2Title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#916863",
    },

    section3: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    section3Title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#916863",
    },
    profileImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    lawyerdetails: {
        textAlign: "center",
    },

    lawyername: {
        fontSize: 20,
        textAlign: "center",
    },

    lawyernumber: {
        textAlign: "center",
        color: "#916863",
    },

    lawyerspec: {
        textAlign: "center",
    },

    lawyerstatus: {
        textAlign: "center",
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
        textAlign: "center",
    },

    profileCardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    profileCard: {
        width: "47.5%",
        padding: 10,
        borderWidth: 3,
        borderColor: "#916863",
        borderRadius: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    profileCardImage: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },
    prisonername: {
        fontSize: 15,
        color: "#916863",
        textAlign: "center",
    },

    prisonercase: {
        textAlign: "center",
    },

    prisonercourt: {
        textAlign: "center",
    },

    prisonercourtdate: {
        fontWeight: "bold",
        textAlign: "center",
    },

    requestButton: {
        backgroundColor: "#916863",
        width: "80%",
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    requestButtonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        // justifyContent: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#916863",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },

    finalbutton: {
        backgroundColor: "#916863",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default LawProfile;
