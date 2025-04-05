import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Nike Air Max Dn8",
      price: "₱10,895",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
      quantity: 1,
    },
    {
      id: "2",
      name: "Nike Air Force 1",
      price: "₱6,995",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/14fed3d1-0c85-4e10-ac7f-6d75d2c8d8af/W+AIR+FORCE+1+%2707.png",
      quantity: 2,
    },
  ]);

  // Function to update quantity
  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () =>
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("₱", "").replace(",", "")) * item.quantity,
    0
  );

  // Function to handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Your cart is empty", "Add items to your cart before proceeding to checkout.");
    } else {
      // Navigate to checkout screen (placeholder)
      Alert.alert("Checkout", "Proceeding to checkout...");
    }
  };

  return (
    <View style={styles.container}>
      {/* Nike Logo */}
      <Image
        source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAe1BMVEUAAAD////CwsJsbGy1tbX29vbx8fGOjo7z8/PNzc1kZGSCgoIRERHu7u7p6enX19c/Pz9ERESdnZ2srKwbGxsmJiZUVFSJiYnAwMAxMTE6OjrV1dWoqKgjIyO4uLgICAhbW1vi4uJxcXFPT098fHyWlpYXFxcsLCw1NTVySMJjAAADzElEQVR4nO3bZ4OiMBAGYEMREYGlnBUVWDn9/7/wLHgKUkINwff57mYym4RhjJMJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKk/rAPIclwcWYeQQVuwjuDDfqn4G9ZBZLDnrCNIOlqRqq6GuKgmK5V1BO9+ToJO1j7rMLKJZMk6hKdLKAWEGNGZdSA5lmTHOoQ7V7QDmRCiiqwjybWdkQGcVn5kzq55IjPnh3Uo+Y4GCRiHYCnqbT1dBQN8Hr8xCVEYDu9qhzhPhAi/DAOhsCZEZlbFiJLxzBOR7b+swqBk385SJiMvPZO8mCGTIKoQb3FqvQ9r2Sp5J1m9h1CZdV/8l17H3K6EaSJRRtTr+DUt9Hus/Q24DdcBSRpwMZXw2AhOP4NtRCmdJzJ1ONh8d/Yj4FX3I7lz25TTiSKm5nY/dDvmcch+x+P4ijn9yNO1mBrMO2g5V4+D7rLLZ6UP8phuD7EzlUuIw5a7GmCvHTLzRMhu+MVUwol0mivRMbLzdC2mBvxynGkvd5er30RFntp8LN89axJIN7naRmpunq7F1ACaP5WJr/jl1rogGy37IH8O5HB1nv+nv82hlUbIJTwEBXm6dabaGIaB6H0WjWvR89zJP6AeS0rwW4iaiWNiIkKTP+X69qP3W8Cw+307b5WT/KfXftNYKjs9Jz8vvBVTScfUbGo9xi1NKM8TkaWBt4XLeKkJ6VWfhPuTRJGn6+ZT9p1MoEcfc5KqfFr0civyJC6LqZTV57ROlB+17JIH3ovD/ZK6yVoWFM3JTWFFnsRtMZXymzm74smdtXVZYfCGp85UsfTJHjvk7ZmzWFKRJ+n2IG+91ZN3MsveZ69kW1qRp5i0Jx8XsrdgPFMnXF72i8nR3Vh+aKtBpTwR+cB5MZWW8RRMTlg3DEOvcDo9BcqINt+DUD7rOsZQTH2gLCQrmXlb1tPqwp8au6uEqQ3yDmxzRUd7LUO/M9WAWD77CmR7pEvqLmwxUxzcmWrkVJ4COjIPd6aaaWldGcqg78C2o5Xzipc7Uw01fw5OvdFvvphb9G0nBY7uTDUXNMnUejSdKSpReUZyjKozRcWqmandd5znSfRd8zfSKF+OS1VfWDzemWpJTsM9zyg7U9QqtNBlj+NrG21YUH3BTm7FFOtQ2TvTNEd157uKqTxu2cNwJohf8HJMSfn8ycdrRQnht1Wdxc5edufddPwveuOjtQjTP+RTPX8Ut1u6sZ8rjnQ4SE4k/uCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+AbdUKMeiDScsAAAAAElFTkSuQmCC" }}
        style={styles.logo}
      />

      {/* Cart Items List */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, "decrease")}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, "increase")}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {/* Total Price */}
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>₱{totalPrice.toLocaleString()}</Text>
        </View>
      )}

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
    resizeMode: "contain",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#333",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  quantityText: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 16,
  },
  removeButton: {
    marginTop: 8,
    backgroundColor: "#ff3b30",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  removeButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CartScreen;