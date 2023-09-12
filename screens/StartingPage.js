// import React from "react";
// import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native"; // Import useNavigation
// import RegistrationStart from "./RegistrationStart";

// const CustomButton = ({ title, onPress }) => (
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text style={styles.buttonText}>{title}</Text>
//     </TouchableOpacity>
// );

// const StartingPage = () => {
//     const navigation = useNavigation(); // Initialize navigation

//     return (
//         <View style={styles.container}>
//             <Text style={styles.logo}>Nyaya sabko</Text>
//             <Text style={styles.title}>Welcome to Nyaya sabko</Text>
//             <Text style={styles.description}>
//                 Are you in need of legal support or assistance? Our mission is
//                 to make the legal process accessible to everyone, regardless of
//                 your level of education.
//             </Text>
//             <Text style={styles.description}>
//                 With Nyaya sabko, you can easily connect with experienced
//                 lawyers, seek guidance on your legal matters, and understand the
//                 rules that matter to you.
//             </Text>
//             <CustomButton
//                 title="Get started"
//                 onPress={() => navigation.navigate("RegistrationStart")} // Use navigation to go to RegistrationStart
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: "space-between",
//         // alignItems: "center",
//         padding: 20,
//         backgroundColor: "#fff", // You can change the background color
//     },
//     logo: {
//         fontSize: 32,
//         fontWeight: "bold",
//         marginBottom: 10,
//         marginTop: 40,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         // textAlign: "center",
//         marginTop: 0,
//         color: "#916863",
//     },
//     description: {
//         fontSize: 18,
//         textAlign: "justify",
//         // marginHorizontal: 20,
//         marginTop: 30,
//         marginBottom: 10,
//         color: "#916863",
//     },
//     button: {
//         backgroundColor: "#916863",
//         borderRadius: 5,
//         padding: 10,
//         marginTop: 30,
//     },
//     buttonText: {
//         color: "#fff",
//         textAlign: "center",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
// });

// export default StartingPage;
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const themeColor = "#FDE6C7"; // Define the theme color

const images = [
    require("../assets/image1.png"),
    require("../assets/image2.png"),
    require("../assets/image3.png"),
];

const StartingPage = () => {
    const [subHeaderText, setSubHeaderText] = useState(
        "Your gateway to legal support and rehabilitation"
    );
    const navigation = useNavigation();
    const [buttonText, setButtonText] = useState("Next >");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [animation] = useState(new Animated.Value(0));

    const handleNextButton = () => {
        // Change text and image based on the current state
        if (
            subHeaderText === "Your gateway to legal support and rehabilitation"
        ) {
            setSubHeaderText(
                "Connect with lawyers, NGOs, counselors, and more. Find support, legal aid and nyaya"
            );
            setButtonText("Next >");
        } else if (
            subHeaderText ===
            "Connect with lawyers, NGOs, counselors, and more. Find support, legal aid and nyaya"
        ) {
            setSubHeaderText(
                "Our user-friendly app is designed to simplify your journey to legal assistance and rehabilitation"
            );
            setButtonText("Get Started");
        } else {
            navigation.navigate("Registration");
        }

        // Animate the text change
        Animated.timing(animation, {
            toValue: 1,
            duration: 500, // You can adjust the duration as needed
            useNativeDriver: false,
        }).start();

        // Change the image
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: themeColor }]}>
            <Text style={styles.header}>Welcome to Nyaya Sabko</Text>
            <Animated.Text style={[styles.subHeader, { opacity: animation }]}>
                {subHeaderText}
            </Animated.Text>
            <Image source={images[currentImageIndex]} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={handleNextButton}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#A78C69",
        textAlign: "center",
    },
    subHeader: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 24,
        color: "#A78C69",
        paddingHorizontal: 16,
    },
    image: {
        width: 300,
        height: 300,

        marginBottom: 32,
    },
    button: {
        backgroundColor: "#916863",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default StartingPage;
