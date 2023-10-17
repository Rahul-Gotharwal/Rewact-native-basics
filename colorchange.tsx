import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'

 function App() : JSX.Element{
  const [randomBackground, setrandomBackground] = useState('#FFFFFF');
  const generateColor = () =>{
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
     color +=hexRange[Math.floor((Math.random()*16))]
      
    }
    setrandomBackground(color)
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground} />
    <View style={[styles.container,{ backgroundColor:randomBackground}] } >
      <TouchableOpacity onPress={generateColor}  >
        <View style={styles.actionBtn} >
          <Text style= {styles.actionBtnText} >
            Press me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnText:{
    fontSize:24,
    color:'#FFFFFF',
    textTransform:"uppercase"
  }
})
export default App;