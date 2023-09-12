import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

class searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      selectedFilter: "All", // Default filter is "All"
      data: [
        {
          type: "NGO",
          name: "Hope Foundation",
          work: "Child Education and Welfare",
        },
        {
          type: "Lawyer",
          name: "John Doe",
          specialization: "Criminal Defense",
        },
        {
          type: "Counselor",
          name: "Emily Smith",
          specialization: "Psychologist",
        },
        {
            type: "Counselor",
            name: "Aditya Sharma",
            specialization: "Family relations expert",
          },
          {
            type: "NGO",
            name: "Hope Foundation",
            work: "Child Education and Welfare",
          },
          {
            type: "NGO",
            name: "Hope Foundation",
            work: "Child Education and Welfare",
          },
        // Add more data entries as needed
      ],
    };
  }

  handleSearch = (text) => {
    this.setState({ searchQuery: text });
  };

  handleFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { searchQuery, selectedFilter, data } = this.state;

    // Filter data based on selected filter and search query
    const filteredData = data.filter((item) => {
      if (selectedFilter === "All") {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return (
          item.type === selectedFilter &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    });

    return (
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={this.handleSearch}
          value={searchQuery}
        />

        {/* Filters */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "All" && styles.activeFilter,
            ]}
            onPress={() => this.handleFilter("All")}
          >
            <Text style={styles.filterButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "NGO" && styles.activeFilter,
            ]}
            onPress={() => this.handleFilter("NGO")}
          >
            <Text style={styles.filterButtonText}>NGOs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "Lawyer" && styles.activeFilter,
            ]}
            onPress={() => this.handleFilter("Lawyer")}
          >
            <Text style={styles.filterButtonText}>Lawyers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "Counselor" && styles.activeFilter,
            ]}
            onPress={() => this.handleFilter("Counselor")}
          >
            <Text style={styles.filterButtonText}>Counselors</Text>
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <ScrollView style={styles.cardContainer}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                // Navigate to the profile of the selected item
                // You can add navigation logic here
              }}
            >
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardInfo}>
                {item.type === "NGO" && `Main Work: ${item.work}`}
                {item.type === "Lawyer" && `Type of Lawyer: ${item.specialization}`}
                {item.type === "Counselor" && `Type of Counselor: ${item.specialization}`}
              </Text>
              <Text style={styles.viewProfile}>View Profile</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#DAC7AE",
  },
  searchBar: {
    height: 40,
    borderColor: "#916863",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    // marginRight:2,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1.25,
    borderRadius: 5,
    borderColor: "#916863",

  },
  activeFilter: {
    backgroundColor: "#916863", // Background color for active filter
    borderColor: "#916863",
  },
  filterButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 16,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    
  },
  cardInfo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  viewProfile: {
    color: "#916863",
    textDecorationLine: "underline",
  },
});

export default searchpage;
