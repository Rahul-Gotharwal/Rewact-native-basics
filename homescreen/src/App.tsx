import React from 'react'
import type {PropsWithChildren} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'// which type of navigation it is
import Home from './screens/Home'
import Details from './screens/Details'
export type RootStackParamList = {
  Home:undefined;
  Details:{productId :string}
}
const Stack = createNativeStackNavigator<RootStackParamList>()
function  App():JSX.Element {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
      name='Home'
      component={Home}
      options={{
        title:"Trending products"
      }}
      />
       <Stack.Screen 
      name='Details'
      component={Details}
      options={{
        title:"Products Details"
      }}
      />

     
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App
