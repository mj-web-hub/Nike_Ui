import React, { useRef } from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, 
  Image, Animated, Platform, StatusBar 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NewArrivals = ({ navigation }) => {
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

  const products = [
    {
      id: "1",
      name: "Nike Air Max Dn8 Men's Shoes",
      price: "₱10,895",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png"
    },
    {
      id: "2",
      name: "Nike Vomero 18 Women's Road Running Shoes",
      price: "₱8,395",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a1ef64be-a753-4f64-aa07-a444187cd66b/W+NIKE+VOMERO+18.png"
    },
    {
      id: "3",
      name: "Zion 4 PF Basketball Shoes",
      price: "₱8,095",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c53b6a0a-d09d-4518-b004-3923b8c66557/JORDAN+ZION+4+PF.png"
    },
    {
      id: "4",
      name: "Luka 3 PF Basketball Shoes",
      price: "₱7,395",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bbcb735c-d17c-4318-ad2d-05ab44b6cac5/JORDAN+LUKA+3+PF.png"
    }
  ];

  const renderProductCard = (product) => (
    <View style={styles.productCard} key={product.id}>
      <Image 
        source={{ uri: product.image }} 
        style={styles.productImage} 
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <TouchableOpacity
          style={styles.buyButton}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
            <Text style={styles.buyButtonText}>Add to Cart</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#000", "#1a1a1a"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
            style={styles.logo}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>New Arrivals</Text>
            <Text style={styles.subtitle}>Just dropped - limited stock available</Text>
          </View>
        </View>

        {/* Products Grid */}
        <View style={styles.productsContainer}>
          {products.map(renderProductCard)}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
  },
  scrollContainer: { 
    flexGrow: 1, 
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-start", // Align to the left
    marginBottom: 10, // Reduce bottom space
    marginTop: -10, // Move it slightly up
    resizeMode: "contain",
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
    marginBottom: 4,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(255, 59, 48, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  productsContainer: { 
    width: "100%",
    paddingHorizontal: 8,
  },
  productCard: { 
    width: "100%", 
    backgroundColor: "#1a1a1a", 
    borderRadius: 12, 
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#252525',
    shadowColor: "#ff3b30",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  productImage: { 
    width: "100%", 
    height: 200, 
    backgroundColor: '#2a2a2a',
  },
  productInfo: {
    padding: 16,
  },
  productName: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#fff", 
    marginBottom: 8,
    lineHeight: 22,
  },
  productPrice: { 
    fontSize: 18, 
    color: "#ff3b30", 
    fontWeight: "700", 
    marginBottom: 16,
  },
  buyButton: { 
    backgroundColor: "#ff3b30", 
    paddingVertical: 14, 
    borderRadius: 8, 
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff3b30", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  buyButtonText: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default NewArrivals;