import React, { useRef } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert, Animated, SafeAreaView 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const sneakersData = [
  {
    id: "1",
    name: "Air Jordan 1 Mid SE",
    price: "₱7,595",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c0f8c6e-cde5-4850-b6ca-c476dddc51cd/WMNS+AIR+JORDAN+1+MID+SE.png",
    badge: "NEW"
  },
  {
    id: "2",
    name: "Luka 3",
    price: "₱4,695",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7774c5ca-4088-45ff-8814-d1a46637bbc7/JORDAN+LUKA+3+%28GS%29.png",
    badge: "TRENDING"
  },
  {
    id: "3",
    name: "Zion 3 PF",
    price: "₱4,739",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cbf4a176-0dd5-4159-bd47-058d2347f9af/JORDAN+ZION+3+PF.png",
    badge: "BESTSELLER"
  },
  {
    id: "4",
    name: "LeBron XXII 'Token' EP",
    price: "₱10,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4cc2f96b-772f-44ac-8042-bf68c3534616/LEBRON+XXII+NRG+EP.png",
    badge: "NEW"
  },
  {
    id: "5",
    name: "Kobe VIII Protro",
    price: "₱9,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f07b707f-5c0b-4dca-8229-f1436c923b03/KOBE+VIII+PROTRO.png",
    badge: "TRENDING"
  },
  {
    id: "6",
    name: "Nike Air Max Dn8",
    price: "₱10,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
    badge: "BESTSELLER"
  },
];

const Sneakers = ({ navigation }) => {
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleBuyNow = (product) => {
    Alert.alert(
      "Buy Now",
      `Are you sure you want to buy ${product.name} for ${product.price}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            Alert.alert("Success", `${product.name} has been added to your cart!`);
          },
        },
      ]
    );
  };

  const renderBadge = (badge) => (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{badge}</Text>
    </View>
  );

  const renderProductCard = ({ item }) => (
    <View style={styles.productCard}>
      {renderBadge(item.badge)}
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.buyNowButton}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => handleBuyNow(item)}
      >
        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <Text style={styles.buyNowButtonText}>Add to Cart</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={["#000", "#1a1a1a"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
          style={styles.logo}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Premium Sneakers</Text>
          <Text style={styles.subtitle}>Elevate your game with our latest collection</Text>
        </View>
        <FlatList
          data={sneakersData}
          keyExtractor={(item) => item.id}
          renderItem={renderProductCard}
          contentContainerStyle={styles.flatListContent}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-start",
    marginBottom: 20,
    resizeMode: "contain", 
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "left",
    marginBottom: 15,
  },
  flatListContent: {
    paddingBottom: 30,
  },
  productCard: {
    marginBottom: 20,
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    padding: 16,
    shadowColor: "#ff3b30",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: "#ff3b30",
    fontWeight: "700",
    marginBottom: 12,
  },
  buyNowButton: {
    backgroundColor: "#ff3b30",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#ff3b30",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buyNowButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Sneakers;