import React, { useRef } from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, 
  Dimensions, Animated, Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.45;
const IMAGE_HEIGHT = CARD_WIDTH * 1.2;

const LimitedEditions = ({ navigation }) => {
  const buttonScales = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1)
  ]).current;

  const animateButton = (index, toValue) => {
    Animated.spring(buttonScales[index], {
      toValue,
      useNativeDriver: true,
      friction: 5,
      tension: 60,
    }).start();
  };

  const products = [
    {
      name: "Air Jordan 4 Net",
      price: "₱11,895",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/781c813d-d3a4-41b9-9488-3750ad8c7c24/WMNS+AIR+JORDAN+4+NET.png",
      badge: "LIMITED"
    },
    {
      name: "Nike Air Max TL 2.5",
      price: "₱9,895",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a91b4521-ae4e-4e5e-95a6-b8a14186bacc/air-max-tl-2.5-shoes.png",
      badge: "LIMITED"
    },
    {
      name: "Air Jordan 1 Retro Low 'LNY'",
      price: "₱6,495",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aae38784-664b-4203-a80c-e3add8f0c513/air-jordan-1-low-og-cny-gs-shoes.png",
      badge: "LIMITED"
    },
    {
      name: "Jordan Spizike Low",
      price: "₱8,895",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6dfb42ba-8919-4967-9e2c-8530c37768d6/jordan-spizike-low-shoes.png",
      badge: "LIMITED"
    }
  ];

  return (
    <LinearGradient 
      colors={["#0a0a0a", "#1a1a1a"]} 
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
            style={styles.logo}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.sectionTitle}>LIMITED EDITIONS</Text>
            <Text style={styles.subtitle}>Exclusive drops available now</Text>
          </View>
        </View>

        <View style={styles.productsContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <View style={[styles.badge, { backgroundColor: "#4CAF50" }]}> 
                <Text style={styles.badgeText}>{product.badge}</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: product.image }} 
                  style={styles.productImage} 
                  resizeMode="contain" 
                />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPressIn={() => animateButton(index, 0.95)}
                  onPressOut={() => animateButton(index, 1)}
                >
                  <Animated.View style={{ transform: [{ scale: buttonScales[index] }] }}>
                    <LinearGradient 
                      colors={["#ff4d4d", "#ff3b30"]} 
                      style={styles.buyButton}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.buyButtonText}>Add to Cart</Text>
                    </LinearGradient>
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 30,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "left", // Center the logo
    marginBottom: 20,
    resizeMode: "contain",
  },
  headerTextContainer: {
    flex: 1,
  },
  sectionTitle: {
   fontSize: 32,
       fontWeight: "bold",
       color: "#ff4d4d",
       textAlign: "center",
       textTransform: "uppercase",
       letterSpacing: 1,
       marginBottom: 5,
       ...Platform.select({
         ios: {
           shadowColor: '#ff3b30',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.3,
           shadowRadius: 4,
         },
         android: {
           elevation: 5,
         },
       }),
     },
  subtitle: {
    fontSize: 16,
    alignSelf: "center",
    color: '#aaa',
    letterSpacing: 0.5,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    zIndex: 2,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 20,
    minHeight: 40,
  },
  productPrice: {
    fontSize: 18,
    color: '#ff3b30',
    fontWeight: '700',
    marginBottom: 15,
  },
  buyButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },
});

export default LimitedEditions;