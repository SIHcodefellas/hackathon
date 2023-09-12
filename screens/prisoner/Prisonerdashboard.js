// Dashboard.js
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
// import BarChartComponent from "./BarChartComponent";
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const mentalHealthData = {
    labels: [
        "Depression",
        "Anxiety",
        "Stress",
        "Bipolar Disorder",
        "Schizophrenia",
    ],
    datasets: [
        {
            data: [3.21, 4.67, 5.61, 2.17, 1.02], // Replace with actual data values for each mental health problem
        },
    ],
};

const Prisonerdashboard = () => {
    const navigation = useNavigation();
    const caseStatus = [
        { date: "Sep 12", status: "Case filed" },
        { date: "Sep 19", status: "Court hearing" },
        { date: "Sep 25", status: "In progress" },
        { date: "Oct 3", status: "Evidence submitted" },
        // Add more status updates as needed
    ];
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.insights}>Current Case Insights</Text>
            </View>
            {/* Lawyer Details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Lawyer Details</Text>
                {/* Display lawyer details here */}
                <Text>Your lawyer: Aditya Shah, 26</Text>
                <Text>Your next court date: Oct 6</Text>
                <Text style={styles.viewprofile}>Go to profile</Text>
            </View>

            {/* Court Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Court Information</Text>
                {/* Display court information here */}
                <Text>
                    Court location: 4R9X+JPX, Court Ln, Andheri East, Mumbai,
                    Maharashtra 400053
                </Text>
            </View>

            {/* Mental Health Status */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Mental Health Status</Text>
                {/* Display mental health status here */}
                <Text>
                    <Text style={styles.note}>Note:</Text> Dr. Shah has
                    suggested meds daily from today onwards.
                </Text>
                {/* Bar Chart */}
                <ScrollView horizontal>
                    <BarChart
                        data={mentalHealthData}
                        width={500}
                        height={200}
                        yAxisLabel="Score "
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 0,
                            color: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsFromJSON: {
                                verticalLabelRotation: 90,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        barPercentage={0.6} // Adjust the bar width as needed
                        categoryPercentage={0.7} // Adjust the space between bars as needed
                    />
                </ScrollView>
            </View>

            <View style={styles.section2}>
                <Text style={styles.sectionTitle}>Case Status</Text>
                {/* Display case status updates */}
                {caseStatus.map((update, index) => (
                    <View key={index} style={styles.statusUpdate}>
                        <Text style={styles.statusDate}>{update.date}</Text>
                        <Text style={styles.statusText}>{update.status}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#DAC09D",
    },
    section: {
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#916863",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#916863",
    },
    statusUpdate: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    statusDate: {
        width: 80, // Adjust as needed
        marginRight: 10,
        fontWeight: "bold",
    },
    statusText: {
        flex: 1,
    },

    viewprofile: {
        color: "#916863",
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    note: {
        fontWeight: "bold",
    },

    section2: {
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#916863",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 150,
    },

    insights: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        color: "#000",
    },
});

export default Prisonerdashboard;
