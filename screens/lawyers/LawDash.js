import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    ScrollView,
} from "react-native";
import HorizontalBarGraph from "../../components/HorizontalBarGraph";
import { useNavigation } from "@react-navigation/native";
const LawDash = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Case Status</Text>
                <View style={styles.statusContainer}>
                    <View style={styles.statusItem}>
                        <Text style={styles.statusText}>Active: 3</Text>
                    </View>
                    <View style={styles.statusItem}>
                        <Text style={styles.statusText}>Pending: 1</Text>
                    </View>
                    <View style={styles.statusItem}>
                        <Text style={styles.statusText}>Closed: 2</Text>
                    </View>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Civil</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.cardUserInfo}>
                            <View>
                                <Text style={styles.userName}>Shyam, 26</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.userImage}
                                    source={require("../../assets/profile.png")}
                                />
                            </View>
                        </View>
                        <Text style={styles.nextCourtText}>
                            <Text style={styles.nextCourtLabel}>
                                Next Court:
                            </Text>{" "}
                            15th Sept
                        </Text>
                        <Image
                            style={styles.calendarIcon}
                            source={require("../../assets/calendar.svg")}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Civil</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.cardUserInfo}>
                            <View>
                                <Text style={styles.userName}>Shyam, 26</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.userImage}
                                    source={require("../../assets/profile.png")}
                                />
                            </View>
                        </View>
                        <Text style={styles.nextCourtText}>
                            <Text style={styles.nextCourtLabel}>
                                Next Court:
                            </Text>{" "}
                            15th Sept
                        </Text>
                        <Image
                            style={styles.calendarIcon}
                            source={require("../../assets/calendar.svg")}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Civil</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.cardUserInfo}>
                            <View>
                                <Text style={styles.userName}>Shyam, 26</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.userImage}
                                    source={require("../../assets/profile.png")}
                                />
                            </View>
                        </View>
                        <Text style={styles.nextCourtText}>
                            <Text style={styles.nextCourtLabel}>
                                Next Court:
                            </Text>{" "}
                            15th Sept
                        </Text>
                        <Image
                            style={styles.calendarIcon}
                            source={require("../../assets/calendar.svg")}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View>
                    {/* <TouchableOpacity
                        style={styles.assignButton}
                        onPress={() => navigation.navigate("Assign Form")}
                    >
                        <Text style={styles.assignButtonText}>
                            Assign a Case
                        </Text>
                    </TouchableOpacity> */}

                    {/* Bar Graphs or any other content */}
                    <View style={styles.graphContainer}>
                        {/* Your Bar Graphs or content goes here */}
                    </View>
                </View>
            </View>
            <HorizontalBarGraph active={3} pending={1} closed={2} />
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("NGO Home")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/Home.png")}
                    />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("NGO Dashboard")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/Dashboard.png")}
                    />
                    <Text style={styles.navText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("NGO Profile")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/pp.png")}
                    />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Icons: {
        height: 24,
        width: 25,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff", // Background color of the navigation bar
        borderTopWidth: 1, // Add a top border
        borderTopColor: "#ccc", // Border color
        height: 60, // Height of the navigation bar
    },
    navItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
    navText: {
        fontSize: 13,
        fontWeight: "regular",
        color: "#333", // Text color
    },
    bottomContainer: {
        backgroundColor: "transparent", // Set the background color to transparent
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    shadowBox: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.2,
        padding: 20,
    },
    assignButton: {
        backgroundColor: "#8e6661",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    assignButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    graphContainer: {
        marginTop: 20,
        // Add styles for your bar graphs or content here
    },
    cardContainer: {
        flexDirection: "row",
    },
    card: {
        marginTop: 40,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.2,
        margin: 10,
        width: 170,
        height: 170,
        marginBottom: 0,
    },
    cardHeader: {
        backgroundColor: "#8e6661",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    cardContent: {
        padding: 15,
    },
    cardUserInfo: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
        gap: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    nextCourtText: {
        fontSize: 14,
        marginBottom: 10,
    },
    nextCourtLabel: {
        fontWeight: "bold",
    },
    calendarIcon: {
        width: 20,
        height: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        backgroundColor: "#8e6661",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        height: 20,
    },
    statusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statusItem: {
        flex: 1,
        backgroundColor: "#d2d2d2",
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        height: 40,
    },
    statusText: {
        textAlign: "center",
    },
});

export default LawDash;
