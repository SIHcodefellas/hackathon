import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
    const navigation = useNavigation();

    const onPressMenu = () => {
        navigation.navigate("MenuPage");
    };

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPressMenu} style={styles.menuButton}>
                <Image
                    source={require("../assets/hamburger.png")}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#ffffff",
        elevation: 4,
        paddingTop: 35,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    menuButton: {
        padding: 8,
    },
};

export default CustomHeader;
