import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Whats new in javascript </Text>
        </View>
        <Image
          source={{
            uri: 'https://roseblogsmart.com/wp-content/uploads/2020/12/What-is-a-blog.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyContainer}  numberOfLines={3}>
            JavaScript String Object is a sequence of characters. It contains
            zero or more characters within single or double quotes. const
            string_name = "String Content"
          </Text>
        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity onPress={()=>openWebsite('https://www.microsoft.com/en-us/windows/learning-center/how-to-record-screen-windows-11')}>
            <Text style={styles.links}>Read More</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity onPress={()=>openWebsite('https://www.microsoft.com/en-us/windows/learning-center/how-to-record-screen-windows-11')}>
            <Text style={styles.links}>Follow Me</Text>
         </TouchableOpacity>
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
  elevetedCard: {
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.4
  },
  headerContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  headerText: {
    color:'#000000',
    fontSize:16,
    fontWeight:'600'
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding:10,
    color:'#000000'

  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  links:{
    fontSize:16,
    color:'#FFFFFF',
    backgroundColor:'#000000',
    paddingHorizontal:14,
    paddingVertical:6,
    borderRadius:6

  }
});
