import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import {Card, ListItem, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../Component/CustomHeader';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
const {width} = Dimensions.get('window');
const OrderHistory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);
  const handleCheckout = () => {
    console.log(`Forgot password for email:`);
    navigation.navigate('Order');
  };
  const subtotal = 225.36;
  const delivery = 225;
  const total = 450.36;



  const allTracks = [
    {
      id: '1',
      title: 'Tandoori Chicken',
      rating: ' May22,2024 -11:39 AM',
      image: require('../assest/images/tandoori.jpg'),
    },
    {
      id: '2',
      title: 'Chicken Salad',
      rating: ' May22,2024 -11:39 AM',
      image: require('../assest/images/salad.jpg'),
    },
    {
      id: '3',
      title: 'French Fries',
      rating: ' May22,2024 -11:39 AM',
      image: require('../assest/images/fries.jpg'),
    },
    {
      id: '4',
      title: 'Tom Yum Soup',
      rating: ' May22,2024 -11:39 AM',
      image: require('../assest/images/soup.jpg'),
    },
    {
      id: '5',
      title: 'Burger Chicken',
      rating: ' May12,2024 -11:39 AM',
      image: require('../assest/images/burgerr.jpg'),
    },
    {
      id: '6',
      title: 'Kebab thali',
      rating: ' May2,2024 -11:39 AM',
      image: require('../assest/images/kebab.png'),
    },
    // {
    //   id: '7',
    //   title: 'Avocado Sushi',
    //   rating: ' May22,2024 -11:39 AM',
    //   image: require('../assest/images/sushi.jpg'),
    // },
    // {
    //   id: '8',
    //   title: 'Stew Salmon',
    //   rating: 'May2,2024 -11:03 PM',
    //   image: require('../assest/images/stew.jpg'),
    // },
    // {
    //   id: '9',
    //   title: 'Sahi Panner',
    //   rating: 'May8,2024 -10:00 PM',
    //   image: require('../assest/images/paneer.jpg'),
    // },
    // {
    //   id: '10',
    //   title: 'Tadka Daal',
    //   rating: 'May18,2024 -1:03 PM',
    //   image: require('../assest/images/daal.jpg'),
    // },
    // {
    //   id: '11',
    //   title: 'Veg Thali',
    //   rating: 'May11,2024 -4:03 PM',
    //   image: require('../assest/images/veg.jpg'),
    // },
    // {
    //   id: '12',
    //   title: 'Paratha',
    //   rating: 'May16,2024 -1:03 PM',
    //   image: require('../assest/images/paratha.jpg'),
    // },
  ];
  
  const renderTrackItem = ({item}) => (
    <TouchableOpacity
      style={styles.trackItem}
      onPress={() => navigation.navigate('Myfood')}>
      <View style={styles.trackDetails}>
        <Image source={item.image} style={styles.trackImage} />
        <View style={styles.trackInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
return (
    <View style={styles.container}>
      <CustomHeader title={"Order History"}></CustomHeader>

     

      <View style={styles.trackList}>
        

        <FlatList
          data={searchQuery ? filteredTracks : allTracks}
          renderItem={renderTrackItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    {/* <View style={{backgroundColor:'white'}}>  */}
    <CustomButton
        title="Repeat Order"
        onPress={handleCheckout}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}></CustomButton>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faebd7',
  },rowGroup: {
    
    // justifyContent: 'space-between',
    // alignContent:'space-between',
    
    width: '93%',
     padding: 15,
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:7

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'space-between',
    marginVertical: 5, 
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
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
  
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
  },customButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726',
    borderRadius: 8,
    marginLeft: 10,
    // marginTop: 40,
    marginBottom: 140,
    justifyContent: 'space-between',
  },
  customButtonText: {
    fontSize: 20,
    color:'white'
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
 
  flatListContainer: {
    paddingHorizontal: 10,
    height: '100%',
    width: '100%',
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  
});

export default OrderHistory;
