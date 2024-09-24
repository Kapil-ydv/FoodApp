// import React, { useState } from "react";
// import { View, Text, TextInput, FlatList } from "react-native";

// const dishes = [
//   { name: "Tandoori Chicken", rating: 4.7 },
//   { name: "Chicken Salad", rating: 4.5 },
//   { name: "French Fries", rating: 4.5 },
//   { name: "Tom Yum Soup", rating: 4.9 },
//   { name: "Beef Steak with Salad", rating: 4.3 },
//   { name: "Kebab thali", rating: 4.9 },
//   { name: "Avocado Sushi", rating: 4.9 },
//   { name: "Stew Salmon", rating: 4.3 },
// ];

// const Search = () => {
//   const [searchText, setSearchText] = useState("");
//   const [filteredDishes, setFilteredDishes] = useState(dishes);

//   const handleSearch = (text) => {
//     setSearchText(text);
//     const filtered = dishes.filter((dish) =>
//       dish.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredDishes(filtered);
//   };

//   return (
//     <View>
//       <TextInput
//         style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//         onChangeText={handleSearch}
//         value={searchText}
//         placeholder="Search for a dish..."
//       />
//       <FlatList
//         data={filteredDishes}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.name}</Text>
//             <Text>{`Rating: ${item.rating}`}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.name}
//       />
//     </View>
//   );
// };

// export default Search;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../Component/CustomHeader';
import CustomIcon from '../Component/CustomIcon';

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);

 
  const allTracks = [
    { id: '1', title: 'Tandoori Chicken', rating: ' Rating:4.7 *', image: require('../assest/images/tandoori.jpg') },
    { id: '2', title: 'Chicken Salad', rating: 'Rating:4.3 *', image: require('../assest/images/salad.jpg') },
    { id: '3', title: 'French Fries', rating: 'Rating:4.9 *', image: require('../assest/images/fries.jpg') },
    { id: '4', title: 'Tom Yum Soup', rating: 'Rating:4.7 *', image: require('../assest/images/soup.jpg') },
    { id: '5',title: 'Burger Chicken', rating: 'Rating:5.0 *', image: require('../assest/images/burgerr.jpg') },
    { id: '6',title: 'Kebab thali', rating: 'Rating:3.7 *', image: require('../assest/images/kebab.png') },
    { id: '7',title: 'Avocado Sushi', rating: 'Rating:4.7 *', image: require('../assest/images/sushi.jpg') },
    { id: '8', title: 'Stew Salmon', rating: 'Rating:4.2 *', image: require('../assest/images/stew.jpg') },
    { id: '9', title: 'Sahi Panner', rating: 'Rating:4.1 *', image: require('../assest/images/paneer.jpg') },
    { id: '10', title: 'Tadka Daal', rating: 'Rating:4.4 *', image: require('../assest/images/daal.jpg') },
    { id: '11', title: 'Veg Thali', rating: 'Rating:4.7 *', image: require('../assest/images/veg.jpg') },
    { id: '12',title: 'Paratha', rating: 'Rating:4.9 *', image: require('../assest/images/paratha.jpg') },
   
  ];

  const renderTrackItem = ({ item }) => (
    <TouchableOpacity style={styles.trackItem} onPress={() => navigation.navigate('Music')}>
      <View style={styles.trackDetails}>
        <Image source={item.image} style={styles.trackImage} />
        <View style={styles.trackInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredItems = allTracks.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredTracks(filteredItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <CustomHeader></CustomHeader>
        {/* <Image source={require('./logomain.png')} style={styles.logo} /> */}
        {/* <Text style={styles.title}>My Music Library</Text> */}
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search for a dish..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={() => {}}>
          {/* <CustomIcon name="search" size={14} color="black" style={styles.searchIcon} /> */}
          <CustomIcon
            iconName={'search'}
            iconSize={14}
            iconColor={'black'}
            iconType="FontAwesome"></CustomIcon>
        </TouchableOpacity>
      </View>

      <View style={styles.trackList}>
        <Text style={styles.sectionTitle}>Popular Foods</Text>
        <FlatList
          data={searchQuery ? filteredTracks : allTracks}
          renderItem={renderTrackItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faebd7',
  },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center', 
      // justifyContent: 'center', 
      width: '100%',
      height: 50,
      backgroundColor: '#faebd7',
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
  },
  logo: {
    width: 60,
    height: 60,
     resizeMode: 'contain',
     marginLeft:20
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
     marginLeft: 30,
  },
  searchBar: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  trackList: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
 
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 10,
  },
  trackItem: {
    marginBottom: 7,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackImage: {
    width: 60,
    height: 60,
    // borderRadius: 25,
    marginRight: 10,
  },
  trackInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    color: 'gray',
    fontSize: 14,
  },
});

export default Search;