import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartingPage from "./screens/StartingPage";
import RegistrationStart from "./screens/RegistrationStart";
import Registration from "./screens/Registration";
import Dashboard from "./screens/ngo/NGODashboard";
import { firebase } from "./firebase/config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import AssignForm from "./screens/ngo/AssignForm";
import MenuPage from "./components/MenuPage";
import CouncellorProfile from "./screens/councellor/CouncellorProfile";
import CustomHeader from "./components/CustomHeader";
import PrisonerProfile from "./screens/prisoner/PrisonerProfile";
import prisonerdashboard from "./screens/prisoner/Prisonerdashboard";
import searchpage from "./screens/prisoner/SearchPage";
import Prisonerdashboard from "./screens/prisoner/Prisonerdashboard";
import SearchPage from "./screens/prisoner/SearchPage";
import CouncilorDashboard from "./screens/councellor/CouncillorDashboard";
import Councillorhome from "./screens/councellor/councillorhome";
import NGOProfile from "./screens/ngo/NGOProfile";
import NGODashboard from "./screens/ngo/NGODashboard";
import NGOHome from "./screens/ngo/NGOHome";
import LawProfile from "./screens/lawyers/LawProfile";
import LawSearch from "./screens/lawyers/LawSearch";
import chatbot from "./chatbot";
import LawDash from "./screens/lawyers/LawDash";

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
                {/* <NavSlide /> */}
                <Stack.Navigator initialRouteName="Nyaya Sabko">
                    <Stack.Screen name="Nyaya Sabko" component={StartingPage} />
                    <Stack.Screen
                        name="Registration"
                        component={Registration}
                    />
                    {/* <Stack.Screen
                        name="RegistrationStart"
                        component={RegistrationStart}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartingPage">
                {/* <Stack.Screen name="Chat Bot" component={chatbot} /> */}
                <Stack.Screen
                    name="RegistrationStart"
                    component={RegistrationStart}
                />

                <Stack.Screen name="NGO Dashboard" component={NGODashboard} />
                <Stack.Screen name="Law Dashboard" component={LawDash} />
                <Stack.Screen name="NGO Profile" component={NGOProfile} />
                <Stack.Screen name="NGO Home" component={NGOHome} />
                <Stack.Screen name="Assign Form" component={AssignForm} />
                <Stack.Screen name="Law Profile" component={LawProfile} />
                <Stack.Screen name="Law Search" component={LawSearch} />
                <Stack.Screen
                    name="Councellor Home"
                    component={Councillorhome}
                />
                <Stack.Screen
                    name="Councellor Dashboard"
                    component={CouncilorDashboard}
                />

                <Stack.Screen
                    name="Councellor Profile"
                    component={CouncellorProfile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="SearchPage" component={SearchPage} />
                <Stack.Screen name="PP" component={PrisonerProfile} />
                <Stack.Screen name="Pd" component={Prisonerdashboard} />
                {/* <Stack.Screen name="Lawyer Profile" component={LawProfile} /> */}

                <Stack.Screen
                    name="MenuPage"
                    component={MenuPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
