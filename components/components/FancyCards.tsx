import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardEleveted]}>
        <Image
          source={{
            uri: 'https://tse3.mm.bing.net/th?id=OIP.np_XlysSHY3OKZsPyMUDxAHaFD&pid=Api&P=0&h=180',
          }}
          style={styles.cardImage}
        />
        <View style = {styles.cardBody}>
        <Text style = {styles.cardTitle}>Taj Mahal</Text>
        <Text style = {styles.cardLabel}>Aagra</Text>
        <Text style = {styles.cardDescription}>An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife,</Text>
        <Text style = {styles.cardFooter}>12 minutew away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card: {
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardEleveted: {
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    }

  },
  cardImage: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6

  },
  cardTitle:{ color:'#000000',fontSize:22,fontWeight:'bold',marginBottom:6},
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardLabel:{ color:'#000000',fontSize:16,marginBottom:6},
  cardDescription:{ color:'#242B2E',marginBottom:12,flexShrink:1,marginTop:6},
  cardFooter:{ color:'#000000',marginBottom:20}

});
