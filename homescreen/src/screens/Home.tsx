import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '../App'
type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation}:HomeProps) => {
  return (
    <View style = {styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
      title="go to details"
      //onPress={()=> navigation.navigate("Details",{productId:"86"})}
      onPress={()=> navigation.push("Details",{productId:"86"})}  
      />

    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },
    smallText:{
        color:"#000000"
    }
})