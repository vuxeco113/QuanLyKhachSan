import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';


import {loginUser} from '../services/api.ts'




const LoginScreen:React.FC=({})=>{
    const   [email,setEmail]=useState<string>('');
    const   [password,setPassword]=useState<string>('');
    const tenUser="Trần Khánh Vũ"


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
            // navigation.navigate('Home');
        }
        
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Nhập</Text>
            <TextInput style={styles.input}
                // thiếu style
                value={email}
                onChangeText={(text:string)=>setEmail(text)}    
                keyboardType='email-address'
                autoCapitalize='none'
                placeholder='Nhập Email'
            />
            <TextInput style={styles.input}
                // thiếu style
                value={password}
                onChangeText={(text:string)=>setPassword(text)}
                placeholder='Nhập Mật Khẩu'
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
        </View>
    );
};
export default LoginScreen
const styles= StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            padding:24,
            backgroundColor: '#f9f9f9',
        },
        title:{
            fontSize:28,
            marginBottom:24,
            fontWeight:'bold',
            textAlign:'center',
            color:'#333'
        },
        input:{
            height:50,
            borderColor:'#ccc',
            borderWidth:1,
            marginBottom:16,
            paddingHorizontal:12,
            borderRadius:8,
            backgroundColor:'#fff'
        },
        button:{
            backgroundColor:'#007bff',
            paddingVertical:14,
            borderRadius:8
        },
        buttonText:{
            color:'#fff',
            textAlign:'center',
            fontSize:16,
            fontWeight:600
        }
    }
)
