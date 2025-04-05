import React, { useRef } from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, 
  Image, Dimensions, Animated, Platform, TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

// Constants
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.44;
const IMAGE_HEIGHT = 180;
const CARD_MARGIN = width * 0.02;

// Product Data
const products = [
  {
    id: 1,
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/343eb155-a8a1-41d9-bbfa-b52b5d36cdf6/project-f-r-o-g-apparel-collection-release-date.jpg",
    name: "Men's Pullover Hoodie",
    subtitle: "Premium Comfort",
    price: "₱5,795.00",
    isNew: true,
    colors: ['#FF3B30', '#000000']
  },
  {
    id: 2,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e4cf040-0f27-42f5-aa9d-6b670b41adde/AS+W+NSW+PHNX+FLC+OOS+GX+CRDGN.png",
    name: "Nike Sportswear Phoenix Fleece",
    subtitle: "Lightweight Warmth",
    price: "₱3,795",
    isTrending: true,
    colors: ['#007AFF', '#34C759']
  },
  {
    id: 3,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e9540c0-0d5f-4ddf-8372-8868a32fba21/W+NIKE+COURT+VISION+LO+NN.png",
    name: "Nike Court Vision Low",
    subtitle: "Sustainable Style",
    price: "₱4,995",
    colors: ['#5856D6', '#FF2D55']
  },
  {
    id: 4,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/879d9895-2d20-48f3-985e-a9625695e898/M+J+AIR+JDN+CARDIGAN.png",
    name: "Air Jordan Cardigan",
    subtitle: "Signature Collection",
    price: "₱5,995",
    isBestSeller: true,
    colors: ['#FF9500', '#5856D6']
  }
];

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
const ProductCard = ({ product, onPress }) => {
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

  return (
    <TouchableWithoutFeedback 
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: product.image }} 
            style={styles.image} 
            resizeMode="contain"
          />
          
          <View style={styles.badgeContainer}>
            {product.isNew && <Badge type="new" />}
            {product.isTrending && <Badge type="trending" />}
            {product.isBestSeller && <Badge type="bestseller" />}
          </View>
        </View>
        
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradientOverlay}
          start={[0, 0]}
          end={[0, 1]}
        />
        
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.description}>{product.subtitle}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.cartButton}>
              <Ionicons name="ios-cart" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.colorOptions}>
            {product.colors.map((color, index) => (
              <View 
                key={index} 
                style={[styles.colorOption, { backgroundColor: color }]}
              />
            ))}
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// Header Component
const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <Image
        source={{ uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" }}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="ios-person" size={24} color="white" />
      </TouchableOpacity>
    </View>
    
    <Text style={styles.title}>Curated For You</Text>
    <Text style={styles.subtitle}>Handpicked based on your unique style</Text>
  </View>
);

// Main Component
const PersonalizedPicks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { product })}
            />
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Need style advice?</Text>
          <TouchableOpacity style={styles.advisorButton}>
            <Text style={styles.advisorButtonText}>Chat with our stylist</Text>
            <Ionicons name="ios-arrow-forward" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: 25,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
  },
  badgeContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
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
  },
  infoContainer: {
    padding: 16,
    paddingTop: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  cartButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorOptions: {
    flexDirection: 'row',
    marginTop: 4,
  },
  colorOption: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  
  // Header Styles
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor:'black',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left", // Center the logo
    marginBottom: 20,
    resizeMode: "contain",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 20,
  },
  
  // Footer Styles
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
  },
});

export default PersonalizedPicks;