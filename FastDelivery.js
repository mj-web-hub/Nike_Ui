import React, { useRef, useState } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Animated 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const fastDeliveryProducts = [
  {
    id: "1",
    name: "Nike Air Max Dn8",
    price: "₱10,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
    deliveryTime: "5-7 days",
  },
  {
    id: "2",
    name: "Nike Air Force 1",
    price: "₱6,995",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/14fed3d1-0c85-4e10-ac7f-6d75d2c8d8af/W+AIR+FORCE+1+%2707.png",
    deliveryTime: "5-7 days",
  },
  {
    id: "3",
    name: "Nike Air Force 1 SP",
    price: "₱7,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/777c9d18-2c2e-4b72-8244-70dce5177b1f/AIR+FORCE+1+SP.png",
    deliveryTime: "5-7 days",
  },
];

const FastDelivery = ({ navigation }) => {
  const [favorites, setFavorites] = useState({});
  const cardScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(cardScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(cardScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <LinearGradient colors={["#000", "#1a1a1a"]} style={styles.container}>
      <Image
        source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Fast Delivery</Text>
      <Text style={styles.subtitle}>Get your order in 5-7 days</Text>
      <FlatList
        data={fastDeliveryProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate("ProductDetails", { product: item })}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View style={{ transform: [{ scale: cardScale }] }}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.heartIcon}>
                  <Ionicons name={favorites[item.id] ? "heart" : "heart-outline"} size={24} color="#ff3b30" />
                </TouchableOpacity>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.deliveryTimeContainer}>
                  <Text style={styles.deliveryTime}>Get it by {item.deliveryTime}</Text>
                </View>
                <TouchableOpacity style={styles.buyAgainButton}>
                  <Text style={styles.buyAgainText}>Buy Again</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff3b30",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 16,
    color: "#aaaaaa",
    textAlign: "center",
    marginBottom: 20,
  },
  productCard: {
    marginBottom: 16,
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  textContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  productPrice: {
    fontSize: 16,
    color: "#ff3b30",
    fontWeight: "600",
  },
  deliveryTimeContainer: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  buyAgainButton: {
    marginTop: 10,
    backgroundColor: "#ff3b30",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buyAgainText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FastDelivery;
