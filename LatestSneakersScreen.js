import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const LatestSneakersScreen = ({ route }) => {
  const { firstName = "User" } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Nike Logo Placeholder */}
        <Text style={styles.nikeLogo}>NIKE</Text>

        <Text style={styles.welcomeText}>Welcome, {firstName}!</Text>

        {/* Sneakers Collection */}
        <Text style={styles.sectionTitle}>🔥 Latest Sneakers</Text>
        <View style={styles.productsContainer}>
          <View style={styles.productCard}>
            <Image
              source={{
                uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d5a172a4-63de-4a03-b043-06649a0be10c/air-force-1.png",
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Nike Dunk Low</Text>
            <Text style={styles.productPrice}>₱3,095</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productCard}>
            <Image
              source={{
                uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4352030-be7a-4391-b468-a0a2dcedb902/NIKE+V2K+RUN.png",
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Nike V2K Run</Text>
            <Text style={styles.productPrice}>₱6,895</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productCard}>
            <Image
              source={{
                uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b5f86ee-d9eb-4e78-89a3-4f3978503ce2/W+AIR+MAX+DN+PRM.png",
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Nike Air Max Dn Premium</Text>
            <Text style={styles.productPrice}>₱9,395</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productCard}>
            <Image
              source={{
                uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png",
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Nike Air Force 1 '07 Fresh</Text>
            <Text style={styles.productPrice}>₱7,395</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, backgroundColor: "#000", padding: 20 },
  container: { alignItems: "center" },
  nikeLogo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 3,
    marginBottom: 15,
  },
  welcomeText: { fontSize: 20, color: "#fff", marginBottom: 20 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff3b30",
    marginBottom: 15,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: { width: 100, height: 100, borderRadius: 10, marginBottom: 10 },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
    textTransform: "uppercase",
  },
  productPrice: { fontSize: 16, color: "#ff3b30", marginBottom: 10 },
  buyButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: { color: "#fff", fontWeight: "bold" },
});

export default LatestSneakersScreen; // Fixed export name