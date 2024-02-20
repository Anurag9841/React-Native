import { View, Text, Image,StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native'
import React,{useState} from 'react'
import CheckBox from "expo-checkbox"
export default function Login({navigation}) {
    const[agree,setAgree] = useState(false)
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const submit = () =>{
        Alert.alert(Name,Password);
        navigation.navigate('Home',{MyName : Name})
    };
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>
            Login Form
        </Text>
        <Text style={styles.description}>
            You can reach us anytime...
        </Text>
        <View style={styles.inputContainer}>
            <Text style={styles.lables}> Enter your name</Text>
            <TextInput
                style = {styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={Name}
                onChangeText={(actualData)=>setName(actualData)}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.lables}> Enter your Password</Text>
            <TextInput
                style = {styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                value={Password}
                onChangeText={(actualData)=>setPassword(actualData)}
            />
        </View>
        <View style={styles.wrapper}>
            <CheckBox 
                value={agree}
                onValueChange={()=>setAgree(!agree)}
                color={agree ?"#4630EB": undefined}
            />
            <Text style={styles.text}>I have read and agreed with the TC</Text>
        </View>
        <TouchableOpacity style={styles.button} disabled={!agree}onPress={()=>submit()}>
            <Text style={styles.button_text}>Login</Text>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        height: '100%',
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:'#fff'
    },
    mainHeader:{
        fontSize: 25,
        color:'#344055',
        fontWeight:'500',
        paddingTop:20,
        paddingBottom:15,
        textTransform:'capitalize',
        fontFamily:"bold"
    },
    inputContainer:{
      marginTop:20,  
    },
    description:{
        fontSize:20,
        color:'7d7d7d',
        paddingBottom:20,
        lineHeight:25,
        fontFamily:'regular'
    },
    lables:{
        fontSize:18,
        color:'#7d7d7d',
        marginTop:10,
        marginBottom:5,
        lineHeight: 25,
        fontFamily:'regular'
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontFamily:'regular',
        fontSize:18,
    },  
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        paddingVertical: 30,

      },
      text: {
        lineHeight: 15,
        marginLeft: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      },
      button_text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white', 
      }
})