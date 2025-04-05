import React, { useRef } from "react";
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

const SpecialOffers = ({ navigation }) => {
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

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <View style={styles.gradientBackground}>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
              style={styles.logo}
            />
            
            <View style={styles.headerText}>
              <Text style={styles.title}>SPECIAL OFFERS</Text>
              <Text style={styles.subtitle}>Limited-time deals on exclusive products</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.spacer} />
        
        {/* Offers Grid */}
        <View style={styles.offersContainer}>
          {/* Offer Card 1 */}
          <Animated.View 
            style={[styles.offerCard, { transform: [{ scale: cardScale }] }]}
          >
            <View style={styles.badge}>
              <Text style={styles.badgeText}>20% OFF</Text>
            </View>
            <Image
              source={{ uri: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/610467bb-071e-4532-a8a1-abd79e17acda/WMNS+AIR+FORCE+1+%2707.png" }}
              style={styles.offerImage}
            />
            <View style={styles.offerContent}>
              <Text style={styles.offerName}>Nike Air Force 1 '07</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>₱6,995</Text>
                <Text style={styles.discountedPrice}>₱5,596</Text>
                <View style={styles.savingsTag}>
                  <Text style={styles.savingsText}>Save ₱1,399</Text>
                </View>
              </View>
              <Text style={styles.offerDescription}>Classic sneaker with durable leather upper and iconic Air cushioning</Text>
              <TouchableOpacity 
                style={styles.offerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
              >
                <Text style={styles.offerButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Offer Card 2 */}
          <Animated.View 
            style={[styles.offerCard, { transform: [{ scale: cardScale }] }]}
          >
            <View style={[styles.badge, { backgroundColor: '#2196F3' }]}>
              <Text style={styles.badgeText}>EXCLUSIVE</Text>
            </View>
            <Image
              source={{ uri: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a91b4521-ae4e-4e5e-95a6-b8a14186bacc/AIR+MAX+TL+2.5.png" }}
              style={styles.offerImage}
            />
            <View style={styles.offerContent}>
              <Text style={styles.offerName}>Nike Air Max TL 2.5</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>₱7,995</Text>
                <Text style={styles.discountedPrice}>₱6,396</Text>
                <View style={styles.savingsTag}>
                  <Text style={styles.savingsText}>Save ₱1,599</Text>
                </View>
              </View>
              <Text style={styles.offerDescription}>Max Air cushioning for revolutionary comfort and a bold look</Text>
              <TouchableOpacity 
                style={styles.offerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
              >
                <Text style={styles.offerButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Offer Card 3 */}
          <Animated.View 
            style={[styles.offerCard, { transform: [{ scale: cardScale }] }]}
          >
            <View style={[styles.badge, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.badgeText}>LIMITED</Text>
            </View>
            <Image
              source={{ uri: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aae38784-664b-4203-a80c-e3add8f0c513/AIR+JORDAN+1+LOW+OG+CNY+%28GS%29.png" }}
              style={styles.offerImage}
            />
            <View style={styles.offerContent}>
              <Text style={styles.offerName}>Air Jordan 1 Retro Low 'LNY'</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>₱8,995</Text>
                <Text style={styles.discountedPrice}>₱7,196</Text>
                <View style={styles.savingsTag}>
                  <Text style={styles.savingsText}>Save ₱1,799</Text>
                </View>
              </View>
              <Text style={styles.offerDescription}>Celebratory colorway for Lunar New Year with premium materials</Text>
              <TouchableOpacity 
                style={styles.offerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
              >
                <Text style={styles.offerButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
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
    backgroundColor: '#000000',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 15,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
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
  spacer: {
    height: 20,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 30,
    paddingTop: 20,
  },
  offersContainer: {
    width: '100%',
  },
  offerCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    marginBottom: 25,
    overflow: 'hidden',
    width: CARD_WIDTH,
    alignSelf: 'center',
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
  badge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#ff3b30',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    zIndex: 2,
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
  badgeText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  offerImage: {
    width: '100%',
    height: IMAGE_HEIGHT,
    backgroundColor: '#f5f5f5',
  },
  offerContent: {
    padding: 20,
  },
  offerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  originalPrice: {
    fontSize: 16,
    color: '#666666',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginRight: 10,
  },
  savingsTag: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  savingsText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerDescription: {
    fontSize: 14,
    color: "#aaaaaa",
    marginBottom: 20,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  offerButton: {
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
  offerButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default SpecialOffers;