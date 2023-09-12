import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";

const chatbot = () => {
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [userInput, setUserInput] = useState(""); // State to store user input

    // Function to handle user input and send messages
    const handleUserInput = () => {
        if (userInput.trim() === "") return; // Don't send empty messages

        // Create a new message object for the user's message
        const newUserMessage = {
            text: userInput,
            isUser: true, // Indicate that this message is from the user
        };

        // Add the user's message to the messages array
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);

        // Clear the user input field only after sending the message
        setUserInput("");

        // You can add logic here to send the user's message to a chatbot API for processing
        const botResponse = generateResponse(userInput);
        // Add the chatbot's response to the messages array
        setMessages((prevMessages) => [...prevMessages, botResponse]);
    };

    const generateResponse = (userInput) => {
        const keywords = [
            "custody duration",
            "bail process",
            "rights as undertrial",
            "contact attorney",
            "court appearances",
            "receive visitors",
            "prepare for trial",
            "progress of my case",
        ];

        for (const keyword of keywords) {
            if (userInput.toLowerCase().includes(keyword)) {
                // You can customize responses for each keyword here
                switch (keyword) {
                    case "custody duration":
                        return {
                            text: "The duration of your custody as an undertrial depends on various factors, including the nature of your charges and legal proceedings. Please consult your attorney for specific information.",
                            isUser: false,
                        };
                    case "bail process":
                        return {
                            text: "The bail process allows you to be released from custody pending trial. To apply for bail, work with your attorney and submit a bail application.",
                            isUser: false,
                        };
                    case "rights as undertrial":
                        return {
                            text: "As an undertrial, you have certain legal rights, including the right to legal representation, the right to a fair trial, and the right to be treated humanely while in custody. It's important to know your rights and ensure they are respected throughout the legal process.",
                            isUser: false,
                        };
                    case "contact attorney":
                        return {
                            text: "You can typically contact your attorney through the legal counsel assigned to your case. If you don't have legal representation, you can request one. They will provide you with the necessary contact information to reach them. Our app can also assist you with finding legal counsel if needed.",
                            isUser: false,
                        };
                    case "court appearances":
                        return {
                            text: "During court appearances, you'll be presented before the judge, and the charges against you will be read. You'll have the opportunity to enter a plea, and the judge may discuss bail and trial dates. It's crucial to be respectful and follow your attorney's guidance during these proceedings. Our app can provide you with the date and location of your court appearances in the dashboard section, ensuring you stay informed.",
                            isUser: false,
                        };
                    case "receive visitors":
                        return {
                            text: "Yes, you generally have the right to receive visitors and communicate with your family while in custody, subject to facility rules and security measures. Your attorney can help coordinate visitation and communication with your loved ones.",
                            isUser: false,
                        };
                    case "prepare for trial":
                        return {
                            text: "To prepare for your trial, work closely with your attorney. Provide them with all relevant information, cooperate with their advice, and attend all court hearings. Your attorney will build the best defense strategy possible based on the available evidence and legal arguments. Our app can also assist you in tracking important court dates and organizing the necessary documents for your defense.",
                            isUser: false,
                        };
                    case "progress of my case":
                        return {
                            text: "To prepare for your trial, work closely with your attorney. Provide them with all relevant information, cooperate with their advice, and attend all court hearings. Your attorney will build the best defense strategy possible based on the available evidence and legal arguments. Our app can also assist you in tracking important court dates, providing a timeline of your previous proceedings, and checking the status of your case, making it easier for you to stay informed. It's essential to have open and transparent communication with your legal representation.",
                            isUser: false,
                        };

                    // Add more cases for other keywords as needed
                }
            }
        }
        // Default response if no keyword match is found
        return {
            text: "I'm here to help. Please feel free to ask any questions related to your situation, and I'll do my best to provide answers.",
            isUser: false,
        };
    };

    return (
        <View style={styles.container}>
            {/* Chat Window */}
            <ScrollView style={styles.chatWindow}>
                {messages.map((message, index) => (
                    <View
                        key={index}
                        style={[
                            styles.chatBubble,
                            message.isUser
                                ? styles.userBubble
                                : styles.botBubble,
                        ]}
                    >
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* User Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Type your message..."
                    onChangeText={(text) => setUserInput(text)}
                    value={userInput}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleUserInput}
                >
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Your styles here...
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#DAC7AE",
    },
    chatWindow: {
        flex: 1,
    },
    chatBubble: {
        maxWidth: "70%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    userBubble: {
        alignSelf: "flex-end",
        backgroundColor: "#916830", // User bubble color
        color: "white",
    },
    botBubble: {
        alignSelf: "flex-start",
        backgroundColor: "#E5E5EA", // Bot bubble color
    },
    messageText: {
        fontSize: 16,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 2,
        borderColor: "#916863",
        paddingVertical: 10,
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 10,
    },
    sendButton: {
        padding: 10,
        backgroundColor: "#916863", // Send button color
        borderRadius: 5,
        marginLeft: 10,
    },
    sendButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default chatbot;
