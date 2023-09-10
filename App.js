import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartingPage from "./screens/StartingPage";
import RegistrationStart from "./screens/RegistrationStart";
import Registration from "./screens/Registration";
import { firebase } from "./firebase/config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase
            .auth()
            .onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Registration">
                    <Stack.Screen
                        name="Registration"
                        component={Registration}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartingPage">
                <Stack.Screen name="StartingPage" component={StartingPage} />
                <Stack.Screen
                    name="RegistrationStart"
                    component={RegistrationStart}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
