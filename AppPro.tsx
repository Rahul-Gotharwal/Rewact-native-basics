import React from "react";
import {
    View ,Text,StyleSheet,useColorScheme, SafeAreaView
} from 'react-native'  // jsx mans html into javascript
function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme()==='dark'
return (
    <SafeAreaView>
    <View style = {styles.container}>
    <Text style= {isDarkMode? styles.whiteText:styles.darkText}> Hello World!</Text>
    </View>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }

})
export default AppPro