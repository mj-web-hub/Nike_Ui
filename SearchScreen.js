import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";

// Sample search results data
const sampleSearchResults = [
  {
    id: "1",
    name: "Nike Air Max Dn8",
    price: "₱10,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
  },
  {
    id: "2",
    name: "Nike Air Force 1",
    price: "₱6,995",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/14fed3d1-0c85-4e10-ac7f-6d75d2c8d8af/W+AIR+FORCE+1+%2707.png",
  },
  {
    id: "3",
    name: "Nike React Infinity Run",
    price: "₱7,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/777c9d18-2c2e-4b72-8244-70dce5177b1f/AIR+FORCE+1+SP.png",
  },
];

const SearchScreen = ({ route }) => {
  const { query } = route.params || { query: "" }; // Get search query from route params
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      // Simulate a search API call
      setLoading(true);
      setTimeout(() => {
        const results = sampleSearchResults.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setLoading(false);
      }, 1000); // Simulate a 1-second delay
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results for: {query}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#e63946" style={styles.loader} />
      ) : searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    marginBottom: 16,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    padding: 16,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  noResultsText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default SearchScreen;