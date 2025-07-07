import { StyleSheet, Dimensions, Platform } from "react-native"

const { width } = Dimensions.get("window")
const isSmallScreen = width <= 375

export const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },

  // Header
  header: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingBottom: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontSize: 16,
    color: "#6b7280",
    marginLeft: 8,
  },

  // Title Section
  titleContainer: {
    marginBottom: 70,
  },

  title: {
    fontSize: isSmallScreen ? 28 : 32,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    lineHeight: 24,
  },

  // Form Container
  formContainer: {
    flex: 1,
  },

  // Input Styles
  inputContainer: {
    marginBottom: 16,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
    paddingLeft: 12,
    color: "#333333",
  },

  passwordInput: {
    paddingRight: 40,
  },

  eyeButton: {
    position: "absolute",
    right: 20,
    padding: 4,
  },

  // Icon Styles
  iconText: {
    fontSize: 18,
    color: "#9ca3af",
  },

  // Forgot Password
  forgotPasswordContainer: {
    alignItems: "center",
    marginBottom: 24,
  },

  forgotPasswordText: {
    color: "#2563eb",
    fontSize: 14,
  },

  // Login Button
  loginButton: {
    backgroundColor: "#06b6d4",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#06b6d4",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  disabledButton: {
    backgroundColor: "#94a3b8",
    shadowOpacity: 0.1,
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  // Divider
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },

  dividerText: {
    marginHorizontal: 16,
    color: "#6b7280",
    fontSize: 14,
  },

  // Social Login
  socialContainer: {
    marginBottom: 24,
  },

  socialButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2563eb",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },

  socialButtonText: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },

  // Register Link
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },

  registerText: {
    fontSize: 14,
    color: "#6b7280",
  },

  registerLink: {
    fontSize: 14,
    color: "#1e3a8a",
    fontWeight: "600",
  },

  // Error States (for future use)
  inputError: {
    borderColor: "#dc2626",
    borderWidth: 1,
  },

  errorText: {
    color: "#dc2626",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 20,
  },
})

// Export responsive values
export const responsiveValues = {
  isSmallScreen,
  screenWidth: width,
}
