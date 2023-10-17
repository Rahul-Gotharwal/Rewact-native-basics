import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '../App'
import  { useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>
// rnfse 

// by usinf react-native hooks
const Details = ({route}:DetailsProps) => {
    const {productId} = route.params
 const navigation=   useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container} >
      <Text style={styles.smallText} >Details:{productId}</Text>
      <Button
      title='go to home'
      //onPress={()=>navigation.navigate("Home")}
      onPress={()=>navigation.goBack()}

      />
       <Button
      title='go to first screen'
      //onPress={()=>navigation.navigate("Home")}
      onPress={()=>navigation.popToTop()}
     
      />
    </View>
  )
}

export default Details

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