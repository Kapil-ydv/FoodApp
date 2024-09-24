import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../Component/CustomHeader';

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const allTracks = [
    {
      id: '1',
      title: 'Tandoori Chicken',
      rating: ' Rating:4.7 *',
      image: require('../assest/images/tandoori.jpg'),
    },
    {
      id: '2',
      title: 'Chicken Salad',
      rating: 'Rating:4.3 *',
      image: require('../assest/images/salad.jpg'),
    },
    {
      id: '3',
      title: 'French Fries',
      rating: 'Rating:4.9 *',
      image: require('../assest/images/fries.jpg'),
    },
    {
      id: '4',
      title: 'Tom Yum Soup',
      rating: 'Rating:4.7 *',
      image: require('../assest/images/soup.jpg'),
    },
    {
      id: '5',
      title: 'Burger Chicken',
      rating: 'Rating:5.0 *',
      image: require('../assest/images/burgerr.jpg'),
    },
    {
      id: '6',
      title: 'Kebab thali',
      rating: 'Rating:3.7 *',
      image: require('../assest/images/kebab.png'),
    },
    {
      id: '7',
      title: 'Avocado Sushi',
      rating: 'Rating:4.7 *',
      image: require('../assest/images/sushi.jpg'),
    },
    {
      id: '8',
      title: 'Stew Salmon',
      rating: 'Rating:4.2 *',
      image: require('../assest/images/stew.jpg'),
    },
    {
      id: '9',
      title: 'Sahi Panner',
      rating: 'Rating:4.1 *',
      image: require('../assest/images/paneer.jpg'),
    },
    {
      id: '10',
      title: 'Tadka Daal',
      rating: 'Rating:4.4 *',
      image: require('../assest/images/daal.jpg'),
    },
    {
      id: '11',
      title: 'Veg Thali',
      rating: 'Rating:4.7 *',
      image: require('../assest/images/veg.jpg'),
    },
    {
      id: '12',
      title: 'Paratha',
      rating: 'Rating:4.9 *',
      image: require('../assest/images/paratha.jpg'),
    },
  ];
  const data = [
    {id: '1', image: require('../assest/images/stew.jpg'), offer: '50% off'},
    {id: '2', image: require('../assest/images/stew.jpg'), offer: '60% off'},
    {id: '3', image: require('../assest/images/stew.jpg'), offer: '70% off'},
    {id: '4', image: require('../assest/images/stew.jpg'), offer: '80% off'},
    {id: '5', image: require('../assest/images/stew.jpg'), offer: '50% off'},
    {id: '6', image: require('../assest/images/stew.jpg'), offer: '60% off'},
    // { id: '7', image: require('../assest/images/stew.jpg'), offer: '70% off' },
    // { id: '8', image: require('../assest/images/stew.jpg'), offer: '80% off' },
    // { id: '9', image: require('../assest/images/stew.jpg'), offer: '50% off' },
    // { id: '10', image: require('../assest/images/stew.jpg'), offer: '60% off' },
    // { id: '11', image: require('../assest/images/stew.jpg'), offer: '70% off' },
    // { id: '12', image: require('../assest/images/stew.jpg'), offer: '80% off' },
  ];

  useEffect(() => {
    const getUserDetails = async () => {
      const mail = await AsyncStorage.getItem('email');
      try {
        const response = await fetch('http://192.168.33.104:5218/registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventID: '1007',
            addInfo: {
              email: mail,
            },
          }),
        });

        const responseData = await response.json();
        if (responseData.rData.rCode === 0) {
          setName(responseData.rData.name);
          setEmail(responseData.rData.email);
          const base64Image = `data:image/jpeg;base64,${responseData.rData.image}`;
          setProfileImage(base64Image);
        } else {
          Alert.alert('Error', responseData.rMessage || 'Failed to fetch user details');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch user details. Please try again later.');
      }
    };

    getUserDetails();
  }, []);

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

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Card>
          <Card.Cover source={item.image} style={styles.cardi} />
          <Card.Content style={styles.cardContent}>
            <Text style={styles.offerText}>{item.offer}</Text>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredItems = allTracks.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTracks(filteredItems);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.card}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profilePicture} />
        ) : (
          <Image source={require('../assest/images/kp.png')} style={styles.profilePicture} />
        )}
        <View style={styles.userInfo}>
          <Text style={styles.username}>{name || 'Kapil Yadav'}</Text>
          <Text style={styles.email}>{email || 'nahariak264@gmail.com'}</Text>
        </View>
      </View>

      <View style={styles.trackListt}>
        <Text style={styles.sectionTitle}>Hot Offers</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToAlignment={'start'}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.trackList}>
        <Text style={styles.sectionTitle}>Popular Foods</Text>
        <FlatList
          data={searchQuery ? filteredTracks : allTracks}
          renderItem={renderTrackItem}
          keyExtractor={(item) => item.id}
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
  cardContainer: {
    marginRight: 10,
    width: 300,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  offerText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  cardi: {
    width:300,
    height: 150,
    // borderRadius: 25,
    // marginRight: 10,
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
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  card: {
    // flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 12,
    color: '#666',
    // flexDirection: 'row',
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
  trackListt: {
    // flex: 2,

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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
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
  offerText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default Dashboard;
