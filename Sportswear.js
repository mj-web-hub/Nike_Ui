import React, { useRef, useState } from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, 
  Image, Dimensions, Animated, Platform, StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width * 0.45;
const IMAGE_HEIGHT = 180;

const Sportswear = () => {
  const [favorites, setFavorites] = useState([]);
  
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  // Product Data
  const products = {
    mens: [
      {
        id: "1",
        name: "LeBron James Lakers Jersey",
        price: "₱5,995",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8452cf9-a78c-4485-ae33-7840003e54d2/SEL+MNK+DF+JSY+JAMES.png",
        isNew: true,
        colors: ['#552583', '#FDB927']
      },
      {
        id: "2",
        name: "Curry Warriors Jersey",
        price: "₱4,795",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cfd3c71a-1bda-444e-adf7-5fdbb4a1c58b/GSW+MNK+DF+SWGMN+JSY+CE+24.png",
        isTrending: true,
        colors: ['#1D428A', '#FFC72C']
      },
      {
        id: "3",
        name: "Nike Windrunner Jacket",
        price: "₱3,279",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6da3f8cb-57fb-4ff5-bc4c-dbf3732f8161/AS+M+NK+WVN+LND+WR+HD+JKT.png",
        colors: ['#000000', '#FFFFFF']
      },
      {
        id: "4",
        name: "Dri-FIT Long-Sleeve",
        price: "₱1,259",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d75d3931-3b81-4fdc-a7d4-311083093fb5/AS+M+NK+DF+TEE+LS+FLASH.png",
        colors: ['#000000', '#FF3B30']
      },
    ],
    womens: [
      {
        id: "5",
        name: "Swoosh Sports Bra",
        price: "₱1,995",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ed36024-7541-43f4-a1c2-d4471803857b/AS+W+NK+SWSH+MED+SPT+BRA.png",
        isNew: true,
        colors: ['#FF3B30', '#000000']
      },
      {
        id: "6",
        name: "Swoosh Pocket Leggings",
        price: "₱2,895",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5f457f45-fbad-47dc-afad-35496f2a8fd1/AS+W+NK+SWSH+LL+PCKT+BRA.png",
        colors: ['#007AFF', '#34C759']
      },
      {
        id: "7",
        name: "Pro Indy Sports Bra",
        price: "₱2,495",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8320fb6a-85bb-4bbd-8f2a-f785e30ba020/AS+W+NP+INDY+PLUNGE+BRA+BOLD.png",
        isBestSeller: true,
        colors: ['#5856D6', '#FF2D55']
      },
      {
        id: "8",
        name: "One Luxe Leggings",
        price: "₱3,495",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a637a00e-f77f-4910-84e0-d824a622b27c/AS+W+NIKE+ONE+LUXE+MR+TIGHT.png",
        colors: ['#FF9500', '#5856D6']
      },
    ]
  };

  // Badge Component
  const Badge = ({ type }) => {
    const badgeConfig = {
      new: { text: 'NEW', color: '#FF3B30', icon: 'ios-flame' },
      trending: { text: 'TRENDING', color: '#007AFF', icon: 'ios-trending-up' },
      bestseller: { text: 'BESTSELLER', color: '#34C759', icon: 'ios-star' }
    };

    return (
      <View style={[styles.badge, { backgroundColor: badgeConfig[type].color }]}>
        <Ionicons name={badgeConfig[type].icon} size={12} color="white" />
        <Text style={styles.badgeText}>{badgeConfig[type].text}</Text>
      </View>
    );
  };

  // Product Card Component
  const ProductCard = ({ product }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;
    
    const animateIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.98,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };
    
    const animateOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }).start();
    };

    const isFavorite = favorites.includes(product.id);

    return (
      <Animated.View style={[styles.productCard, { transform: [{ scale: scaleValue }] }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPressIn={animateIn}
          onPressOut={animateOut}
        >
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: product.image }} 
              style={styles.productImage} 
              resizeMode="contain"
            />
            
            <View style={styles.badgeContainer}>
              {product.isNew && <Badge type="new" />}
              {product.isTrending && <Badge type="trending" />}
              {product.isBestSeller && <Badge type="bestseller" />}
            </View>
            
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(product.id)}
            >
              <Ionicons 
                name={isFavorite ? "ios-heart" : "ios-help-circle-outline"} // Change here
                size={24} 
                color={isFavorite ? "#FF3B30" : "white"} 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            
            <View style={styles.colorOptions}>
              {product.colors.map((color, index) => (
                <View 
                  key={index} 
                  style={[styles.colorOption, { backgroundColor: color }]}
                />
              ))}
            </View>
            
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // Section Header Component
  const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      {/* Fixed Header */}
      <LinearGradient
        colors={["rgba(10,10,10,0.9)", "rgba(30,30,30,0.8)"]}
        style={styles.fixedHeader}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
            style={styles.logo}
          />
        </View>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.pageTitle}>Nike Sportswear</Text>
          <Text style={styles.pageSubtitle}>Premium performance apparel</Text>
        </View>
      </LinearGradient>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.scrollContent}>
          {/* Men's Section */}
          <SectionHeader title="Men's Collection" />
          <View style={styles.productsContainer}>
            {products.mens.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>

          {/* Women's Section */}
          <SectionHeader title="Women's Collection" />
          <View style={styles.productsContainer}>
            {products.womens.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
          
          {/* Footer CTA */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Need style advice?</Text>
            <TouchableOpacity style={styles.advisorButton}>
              <Text style={styles.advisorButtonText}>Chat with our stylist</Text>
              <Ionicons name="ios-arrow-forward" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    paddingTop: Platform.OS === 'ios' ? 35 : StatusBar.currentHeight,
    paddingBottom: 10,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  header: {
    height: 68, // Adjust this value as needed
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  
  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-start", // Align to the left
    marginBottom: 10, // Reduce bottom space
    marginTop: -10, // Move it slightly up
    resizeMode: "contain",
  },
  
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
    fontFamily: 'HelveticaNeue-Bold',
  },
  pageSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.6)",
    marginTop: 5,
    fontFamily: 'HelveticaNeue-Light',
  },
  scrollView: {
    marginTop: 150, // Adjusted for header height
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  scrollContent: {
    paddingTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: 'HelveticaNeue-Bold',
  },
  seeAll: {
    fontSize: 14,
    color: "#FF3B30",
    fontFamily: 'HelveticaNeue-Medium',
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  productCard: {
    width: CARD_WIDTH,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#2A2A2A',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  badgeContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
    fontFamily: 'HelveticaNeue-Bold',
  },
  productInfo: {
    padding: 16,
    paddingTop: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: 'HelveticaNeue-Medium',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF3B30",
    marginBottom: 12,
    fontFamily: 'HelveticaNeue-Bold',
  },
  colorOptions: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  colorOption: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  buyButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: '#FF3B30',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Bold',
  },
  footer: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 12,
    fontFamily: 'HelveticaNeue',
  },
  advisorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  advisorButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
    fontFamily: 'HelveticaNeue-Medium',
  },
});

export default Sportswear;