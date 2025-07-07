import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
const ArrowLeftIcon = () => <Text style={styles.iconText}>←</Text>
const MailIcon = () => <Text style={styles.iconText}>✉</Text>
const LockIcon = () => <Text style={styles.iconText}>🔒</Text>
const EyeIcon = () => <Text style={styles.iconText}>👁</Text>
const EyeOffIcon = () => <Text style={styles.iconText}>🙈</Text>

import { NativeStackScreenProps } from '@react-navigation/native-stack';


import {styles} from "../styles/LoginStyles.tsx"
import { User } from '../navigation/type.ts';
import {loginUser} from '../services/api.ts'
import { AuthContext } from '../context/AuthContext.tsx';




const LoginScreen:React.FC = () => {
    const   [email,setEmail]=useState<string>('');
    const   [password,setPassword]=useState<string>('');
    const { login } = useContext(AuthContext);



    const handleLogin = async ():Promise<void> =>{
        if(!email || !password){
            Alert.alert('Lỗi','Vui lòng nhập đầy đủ thông tin');
            return;
        }
        const result = await loginUser(email, password);
        if(result.success)
        {
            console.log('email :',email);
            console.log('password :',password);
            Alert.alert('Đăng nhập thành công :',`Email: ${email}`);
            const userData: User = {
              id: 1,
              name: 'Người dùng',
              email: email,
              token: 'fake-jwt-token',
            };
            login(userData);
            
            
            
        }
        
    }
    return(
       <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleContainer}>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <MailIcon />
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <LockIcon />
              <TextInput
                placeholder="Mật khẩu"
                style={[styles.input, styles.passwordInput]}
                value={password}
                onChangeText={setPassword}
                // secureTextEntry={!showPassword}
                placeholderTextColor="#9ca3af"
              />
              {/* <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </TouchableOpacity> */}
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={[styles.loginButton,  styles.disabledButton]}
            onPress={handleLogin}>
           
              <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
            
          </TouchableOpacity>

          {/* Divider */}
          {/* <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Hoặc</Text>
            <View style={styles.dividerLine} />
          </View> */}

          {/* Social Login Buttons */}
          {/* <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin("Google")}
              activeOpacity={0.8}
            >
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin("Facebook")}
              activeOpacity={0.8}
            >
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View> */}

          {/* Register Link */}
          {/* <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Chưa có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}>Đăng ký</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

export default LoginScreen
// const styles= StyleSheet.create(
//     {
//         container:{
//             flex:1,
//             justifyContent:'center',
//             padding:24,
//             backgroundColor: '#f9f9f9',
//         },
//         title:{
//             fontSize:28,
//             marginBottom:24,
//             fontWeight:'bold',
//             textAlign:'center',
//             color:'#333'
//         },
//          input: {
//             height: 50,
//             borderColor: '#ddd',
//             borderWidth: 1,
//             borderRadius: 5,
//             paddingHorizontal: 15,
//             marginBottom: 15,
//             fontSize: 16,
//             backgroundColor: '#f7f7f7',
//         },
//         button:{
//             backgroundColor:'#007bff',
//             paddingVertical:14,
//             borderRadius:8
//         },
//         buttonText:{
//             color:'#fff',
//             textAlign:'center',
//             fontSize:16,
//             fontWeight:600
//         },
//          eyeIcon: {
//             position: 'absolute',
//             right: 15,
//             top: 15,
//         },
//         loginButton: {
//             height: 50,
//             backgroundColor: '#1877f2',
//             borderRadius: 5,
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: 15,
//         },
//     }
// )
