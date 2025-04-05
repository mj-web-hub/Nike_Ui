import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Platform,
  StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const IMAGE_HEIGHT = CARD_WIDTH * 0.7;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 180 : 160;

const bestSellers = [
  {
    id: "1",
    name: "Nike Dunk Low Twist",
    price: "₱3,099",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cdc79cf3-ca49-4318-a15e-a7b137cf9884/w-nike-dunk-low-twist.png",
    description: "Classic low-top silhouette with a twisted colorway"
  },
  {
    id: "2",
    name: "Air Jordan 4 RM",
    price: "₱4,339",
    image: "https://parkaccess.com.ph/cdn/shop/files/AURORA_FQ7939-103_PHSLH000-2000.png?v=1742225482",
    description: "Retro basketball shoes with premium materials"
  },
  {
    id: "3",
    name: "Luka 3 PF",
    price: "₱7,395",
    image: "https://titan22.com/cdn/shop/files/HQ5055-107-A_1082x.png?v=1726283967",
    description: "Performance basketball shoes designed for Luka Dončić"
  },
];

const BestSellers = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const buttonScale = useRef(new Animated.Value(1)).current;

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

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

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      {/* Fixed Header */}
      <LinearGradient
        colors={["#000000", "#1a1a1a"]}
        style={styles.fixedHeader}
      >
        <View style={styles.headerContent}>
          <Image
            source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
            style={styles.logo}
          />
          
          <View style={styles.headerText}>
            <Text style={styles.title}>Best Sellers</Text>
            <Text style={styles.subtitle}>Shop our most popular items</Text>
          </View>
        </View>
      </LinearGradient>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {bestSellers.map((item) => {
          const isFavorite = favorites.includes(item.id);
          return (
            <View key={item.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.image} 
                  resizeMode="contain"
                />
                
                {/* Favorite Heart Icon */}
                <TouchableOpacity 
                  style={[
                    styles.favoriteButton,
                    isFavorite && styles.favoriteButtonActive
                  ]}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Ionicons 
                    name={isFavorite ? "heart" : "heart-outline"} 
                    size={24} 
                    color={isFavorite ? "#ff3b30" : "#ffffff"} 
                  />
                </TouchableOpacity>
                
                <View style={styles.priceTag}>
                  <Text style={styles.priceTagText}>{item.price}</Text>
                </View>
              </View>
              
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => console.log("Added to cart:", item.name)}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  activeOpacity={0.7}
                >
                  <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000', // Black background
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: HEADER_HEIGHT,
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
    backgroundColor: '#000000', // Fixed typo and set to black
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000', // Fixed typo and set to black
  },
  logo: {
    width: 100,
    height: 150,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: -10,
    resizeMode: "contain",
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff4d4d",
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
    color: "#aaaaaa",
    letterSpacing: 0.5,
  },
  scrollView: {
    marginTop: HEADER_HEIGHT,
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 30,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 25,
    width: CARD_WIDTH,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowColor: '#ff3b30',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
        borderColor: '#2a2a2a',
        borderWidth: 1,
      },
    }),
  },
  imageContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  image: {
    width: CARD_WIDTH * 0.85,
    height: IMAGE_HEIGHT,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: 'rgba(255,59,48,0.2)',
  },
  priceTag: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#ff3b30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  priceTagText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  infoContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 14,
    color: "#aaaaaa",
    marginBottom: 20,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  button: {
    backgroundColor: "#ff3b30",
    paddingVertical: 14,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: '#ff3b30',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default BestSellers;