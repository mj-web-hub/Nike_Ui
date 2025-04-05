import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Easing,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const passwordInputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (loginSuccess) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace("Details");
      });
    }
  }, [loginSuccess]);

  const handleLogin = () => {
    if (email.trim() === "user" && password.trim() === "password") {
      setLoginSuccess(true);
      Animated.spring(scaleAnim, {
        toValue: 1.1,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Alert.alert("Success", "Login Successful!");
      });
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      {loginSuccess && (
        <Animated.View style={[styles.successOverlay, { opacity: fadeAnim }]}>
          <Ionicons name="checkmark-circle" size={80} color="#fff" />
          <Text style={styles.successText}>Login Successful!</Text>
        </Animated.View>
      )}
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsUW7M42EMJbduKXpXkU_SRyCXsHSI7tPuQ&s" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Log in to your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          ref={passwordInputRef}
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, { transform: [{ scale: scaleAnim }] }]}
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000", // Full black background
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: "#bbb",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#111",
    color: "#fff",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#111",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 20,
    color: "#bbb",
    fontSize: 16,
  },
  signupLink: {
    color: "#FF3B30",
    fontWeight: "bold",
  },
  successOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  successText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default LoginScreen;