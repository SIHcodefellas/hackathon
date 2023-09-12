import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuPage = ({ navigation }) => {
    const handleGoBack = () => {
        navigation.goBack();
    };

    const CustomButton = ({ title, onPress }) => (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.header}>Menu</Text>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Profile")}
            >
                <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Settings")}
            >
                <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("Notifications")}
            >
                <Text style={styles.menuText}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate("About")}
            >
                <Text style={styles.menuText}>About</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DAC09D",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    customButton: {
        backgroundColor: "#fff",
        borderColor: "#916863",
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    backButton: {
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        color: "#007AFF",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#916863",
    },
    menuItem: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#B68748",
    },
    menuText: {
        fontSize: 18,
        color: "#916863",
    },
});

export default MenuPage;
