import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contentlist() {
    const contacts = [{
        uid:1,
        name:'Rahul gotharwal',
        status:'enginner',
        imageUrl:'https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg'
    },
    {
        uid:2,
        name:'Rahul ',
        status:'data recover',
        imageUrl:'https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg'
    },
    {
        uid:3,
        name:'yogesh',
        status:'analytics',
        imageUrl:'https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg'
    },
    {
        uid:4,
        name:'shivam',
        status:'sub-cordinate',
        imageUrl:'https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg'
    }]
  return (
    <View>
      <Text style = {styles.headingText}>Contact List</Text>
      <ScrollView style = {styles.container} scrollEnabled={false} >
     {contacts.map(({uid,name,status,imageUrl})=>(
        <View key={uid} style={styles.userCard} >
        <Image
        source={{uri:imageUrl}}
        style = {styles.userImage}
        />
        <View>
        <Text style={styles.userName} >{name}</Text>
        <Text style={styles.userStatus} >{status}</Text>
        </View>
        </View>
     ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:4
    },
    container:{
        paddingHorizontal:16
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
       marginBottom:3,
      backgroundColor:'#8D3DAF',
      padding:8,
      borderRadius:10

    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:16
    },
    userName:{
     fontSize:16,
     fontWeight:'600',
     color:'#FFF'
    },
    userStatus:{
        fontSize:12,
        
    }
})