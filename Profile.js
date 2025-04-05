import React from "react";
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions 
} from "react-native";

const { width } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
 <View style={styles.container}>
             {/* Nike Logo */}
             <Image
               source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAe1BMVEUAAAD////CwsJsbGy1tbX29vbx8fGOjo7z8/PNzc1kZGSCgoIRERHu7u7p6enX19c/Pz9ERESdnZ2srKwbGxsmJiZUVFSJiYnAwMAxMTE6OjrV1dWoqKgjIyO4uLgICAhbW1vi4uJxcXFPT098fHyWlpYXFxcsLCw1NTVySMJjAAADzElEQVR4nO3bZ4OiMBAGYEMREYGlnBUVWDn9/7/wLHgKUkINwff57mYym4RhjJMJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKk/rAPIclwcWYeQQVuwjuDDfqn4G9ZBZLDnrCNIOlqRqq6GuKgmK5V1BO9+ToJO1j7rMLKJZMk6hKdLKAWEGNGZdSA5lmTHOoQ7V7QDmRCiiqwjybWdkQGcVn5kzq55IjPnh3Uo+Y4GCRiHYCnqbT1dBQN8Hr8xCVEYDu9qhzhPhAi/DAOhsCZEZlbFiJLxzBOR7b+swqBk385SJiMvPZO8mCGTIKoQb3FqvQ9r2Sp5J1m9h1CZdV/8l17H3K6EaSJRRtTr+DUt9Hus/Q24DdcBSRpwMZXw2AhOP4NtRCmdJzJ1ONh8d/Yj4FX3I7lz25TTiSKm5nY/dDvmcch+x+P4ijn9yNO1mBrMO2g5V4+D7rLLZ6UP8phuD7EzlUuIw5a7GmCvHTLzRMhu+MVUwol0mivRMbLzdC2mBvxynGkvd5er30RFntp8LN89axJIN7naRmpunq7F1ACaP5WJr/jl1rogGy37IH8O5HB1nv+nv82hlUbIJTwEBXm6dabaGIaB6H0WjWvR89zJP6AeS0rwW4iaiWNiIkKTP+X69qP3W8Cw+307b5WT/KfXftNYKjs9Jz8vvBVTScfUbGo9xi1NKM8TkaWBt4XLeKkJ6VWfhPuTRJGn6+ZT9p1MoEcfc5KqfFr0civyJC6LqZTV57ROlB+17JIH3ovD/ZK6yVoWFM3JTWFFnsRtMZXymzm74smdtXVZYfCGp85UsfTJHjvk7ZmzWFKRJ+n2IG+91ZN3MsveZ69kW1qRp5i0Jx8XsrdgPFMnXF72i8nR3Vh+aKtBpTwR+cB5MZWW8RRMTlg3DEOvcDo9BcqINt+DUD7rOsZQTH2gLCQrmXlb1tPqwp8au6uEqQ3yDmxzRUd7LUO/M9WAWD77CmR7pEvqLmwxUxzcmWrkVJ4COjIPd6aaaWldGcqg78C2o5Xzipc7Uw01fw5OvdFvvphb9G0nBY7uTDUXNMnUejSdKSpReUZyjKozRcWqmandd5znSfRd8zfSKF+OS1VfWDzemWpJTsM9zyg7U9QqtNBlj+NrG21YUH3BTm7FFOtQ2TvTNEd157uKqTxu2cNwJohf8HJMSfn8ycdrRQnht1Wdxc5edufddPwveuOjtQjTP+RTPX8Ut1u6sZ8rjnQ4SE4k/uCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+AbdUKMeiDScsAAAAAElFTkSuQmCC" }}
               style={styles.logo}
             />
        
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/420120663_3756947251201024_4093721008319858045_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h9yCe54Js6MQ7kNvgFptzrp&_nc_oc=AdkuIkJUDb1ckI-mqJ0Oomxlmd7dMCiiFpIJ3up6VebyYT0nuUg15Ss9IMeeizTjKuDDGdCSrr2xbNT1yQPWRxXh&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=XKm0U4F3LuxtvIAx3Q1TNA&oh=00_AYEE7TiJsNe_WOj9WuP7MMvMCOpkhMilwS7LPTddNKpAQg&oe=67E9DAB1" }} // Replace with user's profile image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Mark Jhan</Text>
          <Text style={styles.profileEmail}>MarkJhan21@gmail.com</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
        </View>

        {/* Order History Section */}
        <Text style={styles.sectionTitle}>Order History</Text>
        <View style={styles.orderHistory}>
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>Order #12345</Text>
              <Text style={styles.orderStatus}>Delivered</Text>
            </View>
            <Text style={styles.orderDate}>Delivered on 10 Oct 2023</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>Order #12346</Text>
              <Text style={styles.orderStatus}>Delivered</Text>
            </View>
            <Text style={styles.orderDate}>Delivered on 12 Oct 2023</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settings}>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Edit Profile</Text>
            <Text style={styles.settingIcon}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Change Password</Text>
            <Text style={styles.settingIcon}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Payment Methods</Text>
            <Text style={styles.settingIcon}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Logout</Text>
            <Text style={styles.settingIcon}>➔</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { 
    flexGrow: 1, 
    backgroundColor: "#000", 
    padding: 16, 
  },
  container: { 
    alignItems: "center", 
  },
  profileHeader: { 
    alignItems: "center", 
    marginBottom: 20, 
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
    resizeMode: "contain", 
  },
  profileImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 15, 
    borderWidth: 3, 
    borderColor: "#ff3b30", 
  },
  profileName: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 5, 
    textTransform: "uppercase", 
  },
  profileEmail: { 
    fontSize: 16, 
    color: "#999", 
  },
  statsContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
    marginBottom: 20, 
    paddingHorizontal: 20, 
  },
  statItem: { 
    alignItems: "center", 
  },
  statValue: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#fff", 
  },
  statLabel: { 
    fontSize: 14, 
    color: "#999", 
    textTransform: "uppercase", 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 15, 
    alignSelf: "flex-start", 
    paddingHorizontal: 20, 
    textTransform: "uppercase", 
  },
  orderHistory: { 
    width: "100%", 
    paddingHorizontal: 20, 
  },
  orderCard: { 
    backgroundColor: "#1a1a1a", 
    padding: 16, 
    borderRadius: 15, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: "#333", 
  },
  orderHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 10, 
  },
  orderId: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#fff", 
    textTransform: "uppercase", 
  },
  orderStatus: { 
    fontSize: 14, 
    color: "#ff3b30", 
    fontWeight: "500", 
    textTransform: "uppercase", 
  },
  orderDate: { 
    fontSize: 14, 
    color: "#999", 
    marginBottom: 10, 
  },
  orderButton: { 
    backgroundColor: "#ff3b30", 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 25, 
    alignItems: "center", 
  },
  orderButtonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    textTransform: "uppercase", 
  },
  settings: { 
    width: "100%", 
    paddingHorizontal: 20, 
  },
  settingItem: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    backgroundColor: "#1a1a1a", 
    padding: 16, 
    borderRadius: 15, 
    marginBottom: 10, 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#333", 
  },
  settingText: { 
    fontSize: 16, 
    color: "#fff", 
    fontWeight: "500", 
    textTransform: "uppercase", 
  },
  settingIcon: { 
    fontSize: 16, 
    color: "#fff", 
  },
});

export default Profile;