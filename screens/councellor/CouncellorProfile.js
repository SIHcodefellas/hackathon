import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import profileimage from "../../assets/profile.png";
import star from "../../assets/star.png";
import MenuPage from "../../components/MenuPage";
import CustomHeader from "../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
const CouncellorProfile = () => {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <ScrollView>
            <CustomHeader title="Councellor Profile" onPressMenu={openMenu} />
            <View style={styles.commonsection1and2}>
                {/* First Section */}
                <View style={styles.section1}>
                    {/* <Text style={styles.section1Title}>My Profile</Text> */}
                    <Image style={styles.profileImage} source={profileimage} />
                </View>

                {/* Second Section */}
                <View style={styles.section2}>
                    <Text style={styles.section2Title}>
                        Has the following achievements
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>150+ Patients</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                10 Years Experience
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>4.8 Rating</Text>
                        </TouchableOpacity>
                        {/* Add more buttons as needed */}
                    </View>
                </View>
            </View>
            {/* Third Section */}
            <View style={styles.section3}>
                <Text style={styles.councillorname}>Dr. Kawsar Ahmed</Text>
                <Text style={styles.councillorworkplace}>
                    Psychiatrist at City Hospital
                </Text>
                <Image
                    style={styles.councillorrating}
                    source={star}
                    alt="rating"
                />
                <Text style={styles.section3heading}>About</Text>
                <Text style={styles.section3para}>
                    I’m a dedicated community representative. With years of
                    experience and unwavering commitment, I will continue to
                    work tirelessly to address your concerns and improve our
                    city. Trust in their leadership to create a better future
                    for our community.
                </Text>
                <Text style={styles.section3heading}>About</Text>
                <Text style={styles.section3para}>
                    Community Leadership Award Excellence in Public Service
                    Award
                </Text>
                <Text style={styles.section3heading}>Contact</Text>
                <Text style={styles.section3para}>
                    email- kawsarahmed@gmail.com phone- +91 54849 87323
                </Text>
            </View>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("Councellor Home")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/Home.png")}
                    />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("Councellor Dashboard")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/Dashboard.png")}
                    />
                    <Text style={styles.navText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate("Councellor Profile")}
                >
                    <Image
                        style={styles.Icons}
                        source={require("../../assets/pp.png")}
                    />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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

    councillorname: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#916863",
        textAlign: "center",
    },

    councillorworkplace: {
        fontSize: 15,
        color: "#916863",
        textAlign: "center",
    },

    councillorrating: {
        width: 130,
        height: 20,
        alignSelf: "center",
    },

    section3heading: {
        fontSize: 15,
        color: "#916863",
        fontWeight: "bold",
    },

    section3para: {
        fontSize: 15,
        color: "#916863",
        height: 73,
    },
});

export default CouncellorProfile;
