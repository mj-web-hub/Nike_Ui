import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// Sample orders data
const sampleOrders = [
  {
    id: "1",
    name: "Nike Air Max Dn8",
    price: "₱10,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b4cdd269-25d6-4fdd-aaaf-a13b65a76c71/AIR+MAX+DN8.png",
    dateReceived: "March 5, 2024",
    status: "Delivered",
  },
  {
    id: "2",
    name: "Nike Air Force 1",
    price: "₱6,995",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/14fed3d1-0c85-4e10-ac7f-6d75d2c8d8af/W+AIR+FORCE+1+%2707.png",
    dateReceived: "March 7, 2024",
    status: "Processing",
  },
  {
    id: "3",
    name: "Nike React Infinity Run",
    price: "₱7,895",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/777c9d18-2c2e-4b72-8244-70dce5177b1f/AIR+FORCE+1+SP.png",
    dateReceived: "March 8, 2024",
    status: "Delivered",
  },
];

const Orders = () => {
  return (
    <View style={styles.container}>
    {/* Nike Logo */}
    <Image
      source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAe1BMVEUAAAD////CwsJsbGy1tbX29vbx8fGOjo7z8/PNzc1kZGSCgoIRERHu7u7p6enX19c/Pz9ERESdnZ2srKwbGxsmJiZUVFSJiYnAwMAxMTE6OjrV1dWoqKgjIyO4uLgICAhbW1vi4uJxcXFPT098fHyWlpYXFxcsLCw1NTVySMJjAAADzElEQVR4nO3bZ4OiMBAGYEMREYGlnBUVWDn9/7/wLHgKUkINwff57mYym4RhjJMJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKk/rAPIclwcWYeQQVuwjuDDfqn4G9ZBZLDnrCNIOlqRqq6GuKgmK5V1BO9+ToJO1j7rMLKJZMk6hKdLKAWEGNGZdSA5lmTHOoQ7V7QDmRCiiqwjybWdkQGcVn5kzq55IjPnh3Uo+Y4GCRiHYCnqbT1dBQN8Hr8xCVEYDu9qhzhPhAi/DAOhsCZEZlbFiJLxzBOR7b+swqBk385SJiMvPZO8mCGTIKoQb3FqvQ9r2Sp5J1m9h1CZdV/8l17H3K6EaSJRRtTr+DUt9Hus/Q24DdcBSRpwMZXw2AhOP4NtRCmdJzJ1ONh8d/Yj4FX3I7lz25TTiSKm5nY/dDvmcch+x+P4ijn9yNO1mBrMO2g5V4+D7rLLZ6UP8phuD7EzlUuIw5a7GmCvHTLzRMhu+MVUwol0mivRMbLzdC2mBvxynGkvd5er30RFntp8LN89axJIN7naRmpunq7F1ACaP5WJr/jl1rogGy37IH8O5HB1nv+nv82hlUbIJTwEBXm6dabaGIaB6H0WjWvR89zJP6AeS0rwW4iaiWNiIkKTP+X69qP3W8Cw+307b5WT/KfXftNYKjs9Jz8vvBVTScfUbGo9xi1NKM8TkaWBt4XLeKkJ6VWfhPuTRJGn6+ZT9p1MoEcfc5KqfFr0civyJC6LqZTV57ROlB+17JIH3ovD/ZK6yVoWFM3JTWFFnsRtMZXymzm74smdtXVZYfCGp85UsfTJHjvk7ZmzWFKRJ+n2IG+91ZN3MsveZ69kW1qRp5i0Jx8XsrdgPFMnXF72i8nR3Vh+aKtBpTwR+cB5MZWW8RRMTlg3DEOvcDo9BcqINt+DUD7rOsZQTH2gLCQrmXlb1tPqwp8au6uEqQ3yDmxzRUd7LUO/M9WAWD77CmR7pEvqLmwxUxzcmWrkVJ4COjIPd6aaaWldGcqg78C2o5Xzipc7Uw01fw5OvdFvvphb9G0nBY7uTDUXNMnUejSdKSpReUZyjKozRcWqmandd5znSfRd8zfSKF+OS1VfWDzemWpJTsM9zyg7U9QqtNBlj+NrG21YUH3BTm7FFOtQ2TvTNEd157uKqTxu2cNwJohf8HJMSfn8ycdrRQnht1Wdxc5edufddPwveuOjtQjTP+RTPX8Ut1u6sZ8rjnQ4SE4k/uCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+AbdUKMeiDScsAAAAAElFTkSuQmCC" }}
      style={styles.logo}
    />
      <Text style={styles.title}>Your Orders</Text>
      {sampleOrders.length > 0 ? (
        <FlatList
          data={sampleOrders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.dateText}>Received: {item.dateReceived}</Text>
                <Text
                  style={[
                    styles.statusText,
                    item.status === "Delivered" ? styles.delivered : styles.processing,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No orders found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
    resizeMode: "contain", 
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    padding: 4,
    borderRadius: 4,
    textAlign: "center",
    width: 100,
  },
  delivered: {
    backgroundColor: "#28a745",
    color: "#fff",
  },
  processing: {
    backgroundColor: "#ffc107",
    color: "#000",
  },
  noResultsText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Orders;
