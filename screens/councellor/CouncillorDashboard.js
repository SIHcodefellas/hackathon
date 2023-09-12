import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const themeColor = "#DAC09D"; // Define the theme color

const CouncilorDashboard = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: themeColor }]}>
            {/* Back Button */}

            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require("../../assets/pp.png")}
                    style={styles.profileImage}
                />
                <Text style={styles.headerText}>Dr. Diptanshu Mishra</Text>
            </View>

            {/* Stars Image */}
            <Image
                source={require("../../assets/star.png")}
                style={styles.starsImage}
            />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: themeColor }]}
                >
                    <Text style={styles.buttonText}>My Patients</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: themeColor }]}
                >
                    <Text style={styles.buttonText}>Appointments</Text>
                </TouchableOpacity>
            </View>

            {/* Square Boxes */}
            <View style={styles.squareContainer}>
                {/* First Row */}
                <View style={styles.squareRow}>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>Shyam, 26 Civil</Text>
                    </View>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>John, 30 Criminal</Text>
                    </View>
                </View>

                {/* Second Row */}
                <View style={styles.squareRow}>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>Aman, 45 Civil</Text>
                    </View>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>
                            Arjun, 22 Criminal
                        </Text>
                    </View>
                </View>

                {/* Third Row */}
                <View style={styles.squareRow}>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>Emma, 28 Engineer</Text>
                    </View>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>Oliver, 24 Doctor</Text>
                    </View>
                </View>

                {/* Fourth Row */}
                <View style={styles.squareRow}>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>
                            Sophia, 32 Teacher
                        </Text>
                    </View>
                    <View style={styles.square}>
                        <Image
                            source={require("../../assets/pp.png")}
                            style={styles.squareImage}
                        />
                        <Text style={styles.squareText}>Liam, 35 Lawyer</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 36,
        paddingTop: 97,
    },
    backButton: {
        position: "absolute",
        paddingTop: 50,
        left: 20,
        zIndex: 1,
    },
    menuButton: {
        position: "absolute",
        paddingTop: 50,
        right: 20,
        zIndex: 1,
    },
    iconImage: {
        width: 24,
        height: 24,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        paddingLeft: 15,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerText: {
        marginLeft: 12,
        fontSize: 18,
        fontWeight: "bold",
    },
    starsImage: {
        paddingTop: 5,
        paddingLeft: 105,
        width: 45, // Make the image span the entire width
        height: 17, // Set the desired height
        marginBottom: 16, // Adjust spacing as needed
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    button: {
        flex: 1,
        backgroundColor: themeColor,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    squareContainer: {
        flexDirection: "column",
    },
    squareRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    square: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 26,
        borderRadius: 8,
        alignItems: "center",
        marginRight: 8,
    },
    squareImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    squareText: {
        marginTop: 8,
        textAlign: "center",
    },
});

export default CouncilorDashboard;
