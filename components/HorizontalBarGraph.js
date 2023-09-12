import React from "react";
import { StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const HorizontalBarGraph = ({ active, pending, closed }) => {
    const data = {
        labels: ["Active", "Pending", "Closed"],
        datasets: [
            {
                data: [active, pending, closed],
            },
        ],
    };

    return (
        <View style={styles.container}>
            <BarChart
                data={data}
                width={350}
                height={200}
                yAxisSuffix=""
                yAxisInterval={1}
                fromZero={true}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(142, 102, 97, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.2,
        padding: 20,
    },
});

export default HorizontalBarGraph;
