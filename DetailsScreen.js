import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Added for shoe icon

const { width } = Dimensions.get("window");

const bannerData = [
  {
    id: "1",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
    title: "Nike Air Max Dn8",
  },
  {
    id: "2",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/60c3b920-6f7b-4797-a05e-7147f1a6cdb3/AIR+MAX+DN8.png",
    title: "Nike Air Max Dn8",
  },
  {
    id: "3",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b37d30bf-5a0b-4e33-abc6-b93829de390b/AIR+MAX+DN8.png",
    title: "Nike Air Max Dn8",
  },
];

const DetailsScreen = ({ navigation }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Home");
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleBannerScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentBannerIndex(index);
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const tabs = [
    { name: "Home", icon: "home", label: "Home" },
    { name: "Search", icon: "search", label: "Search" },
    { name: "Cart", icon: "shopping-cart", label: "Cart" },
    { name: "Orders", icon: "receipt", label: "Orders" },
    { name: "Profile", icon: "person", label: "Profile" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg",
            }}
            style={styles.logoImage}
          />
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <Icon name="search" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={styles.cartIconContainer}
            >
              <Icon name="shopping-cart" size={24} color="#fff" />
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Icon name="person" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products..."
          placeholderTextColor="#bbb"
        />

        {/* Featured Banner Section */}
        <View style={styles.banner}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleBannerScroll}
            scrollEventThrottle={16}
          >
            {bannerData.map((item) => (
              <View key={item.id} style={styles.bannerItem}>
                <Image source={{ uri: item.image }} style={styles.bannerImage} />
                <Text style={styles.bannerText}>{item.title}</Text>
                <TouchableOpacity style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Dots Indicator */}
          <View style={styles.dotsContainer}>
            {bannerData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentBannerIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Trending Categories Section */}
        <Text style={styles.sectionTitle}>Trending Categories</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("Sportswear")}
          >
            <Icon name="sports-basketball" size={30} color="#fff" />
            <Text style={styles.gridText}>Sportswear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("Sneakers")}
          >
            <MaterialCommunityIcons name="shoe-sneaker" size={30} color="#fff" />
            <Text style={styles.gridText}>Sneakers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("LimitedEditions")}
          >
            <Icon name="whatshot" size={30} color="#fff" />
            <Text style={styles.gridText}>Limited Editions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("PersonalizedPicks")}
          >
            <Icon name="star" size={30} color="#fff" />
            <Text style={styles.gridText}>Personalized Picks</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Access Sections */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("SpecialOffers")}
          >
            <Icon name="local-offer" size={30} color="#fff" />
            <Text style={styles.gridText}>Special Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("NewArrivals")}
          >
            <Icon name="fiber-new" size={30} color="#fff" />
            <Text style={styles.gridText}>New Arrivals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("FastDelivery")}
          >
            <Icon name="local-shipping" size={30} color="#fff" />
            <Text style={styles.gridText}>Fast Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("BestSellers")}
          >
            <Icon name="thumb-up" size={30} color="#fff" />
            <Text style={styles.gridText}>Best Sellers</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={styles.navItem}
              onPress={() => handleTabPress(tab.name)}
            >
              <Animated.View
                style={{
                  transform: [{ scale: activeTab === tab.name ? scaleValue : 1 }],
                }}
              >
                <Icon
                  name={tab.icon}
                  size={24}
                  color={activeTab === tab.name ? "#e63946" : "#fff"}
                />
              </Animated.View>
              <Text
                style={[
                  styles.navText,
                  { color: activeTab === tab.name ? "#e63946" : "#fff" },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
    marginHorizontal: 10,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 2,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
  searchBar: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#222",
    color: "#fff",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  banner: {
    marginBottom: 20,
  },
  bannerItem: {
    width: width - 32,
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: "#e63946",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3,
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#e63946",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  gridItem: {
    width: "48%",
    padding: 15,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },
  gridText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
});

export default DetailsScreen;