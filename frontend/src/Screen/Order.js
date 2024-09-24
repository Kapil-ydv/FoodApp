// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   TextInput,
//   Dimensions,
// } from 'react-native';
// import {Card, ListItem, Avatar} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomHeader from '../Component/CustomHeader';
// import CustomButton from '../Component/CustomButton';
// import CustomIcon from '../Component/CustomIcon';
// const {width} = Dimensions.get('window');
// const Order = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTracks, setFilteredTracks] = useState([]);
//   const handleCheckout = () => {
//     console.log(`Forgot password for email:`);
//     navigation.navigate('OrderSuccessfull');
//   };
//   const subtotal = 225.36;
//   const delivery = 225;
//   const total = 450.36;



//   const allTracks = [
//     {
//       id: '1',
//       title: 'Tandoori Chicken',
//       rating: ' Rating:4.7 *',
//       image: require('../assest/images/tandoori.jpg'),
//     },
//     {
//       id: '2',
//       title: 'Chicken Salad',
//       rating: 'Rating:4.3 *',
//       image: require('../assest/images/salad.jpg'),
//     },
//     {
//       id: '3',
//       title: 'French Fries',
//       rating: 'Rating:4.9 *',
//       image: require('../assest/images/fries.jpg'),
//     },
//     {
//       id: '4',
//       title: 'Tom Yum Soup',
//       rating: 'Rating:4.7 *',
//       image: require('../assest/images/soup.jpg'),
//     },
//     {
//       id: '5',
//       title: 'Burger Chicken',
//       rating: 'Rating:5.0 *',
//       image: require('../assest/images/burgerr.jpg'),
//     },
//   //   {
//   //     id: '6',
//   //     title: 'Kebab thali',
//   //     rating: 'Rating:3.7 *',
//   //     image: require('../assest/images/kebab.png'),
//   //   },
//   //   {
//   //     id: '7',
//   //     title: 'Avocado Sushi',
//   //     rating: 'Rating:4.7 *',
//   //     image: require('../assest/images/sushi.jpg'),
//   //   },
//   //   {
//   //     id: '8',
//   //     title: 'Stew Salmon',
//   //     rating: 'Rating:4.2 *',
//   //     image: require('../assest/images/stew.jpg'),
//   //   },
//   //   {
//   //     id: '9',
//   //     title: 'Sahi Panner',
//   //     rating: 'Rating:4.1 *',
//   //     image: require('../assest/images/paneer.jpg'),
//   //   },
//   //   {
//   //     id: '10',
//   //     title: 'Tadka Daal',
//   //     rating: 'Rating:4.4 *',
//   //     image: require('../assest/images/daal.jpg'),
//   //   },
//   //   {
//   //     id: '11',
//   //     title: 'Veg Thali',
//   //     rating: 'Rating:4.7 *',
//   //     image: require('../assest/images/veg.jpg'),
//   //   },
//   //   {
//   //     id: '12',
//   //     title: 'Paratha',
//   //     rating: 'Rating:4.9 *',
//   //     image: require('../assest/images/paratha.jpg'),
//   //   },
//   ];
  
//   const renderTrackItem = ({item}) => (
//     <TouchableOpacity
//       style={styles.trackItem}
//       onPress={() => navigation.navigate('Myfood')}>
//       <View style={styles.trackDetails}>
//         <Image source={item.image} style={styles.trackImage} />
//         <View style={styles.trackInfo}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.artist}>{item.rating}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
  
// return (
//     <View style={styles.container}>
//       <CustomHeader title={"My Order"}></CustomHeader>

     

//       <View style={styles.trackList}>
        

//         <FlatList
//           data={searchQuery ? filteredTracks : allTracks}
//           renderItem={renderTrackItem}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     {/* <View style={{backgroundColor:'white'}}>  */}
//   <View style={styles.rowGroup}>
//     <View style={styles.row}>
//       <Text style={styles.label}>Subtotal:</Text>
//       <Text style={styles.value}>${subtotal}</Text>
//     </View>
//     <View style={styles.row}>
//       <Text style={styles.label}>Delivery:</Text>
//       <Text style={styles.value}>${delivery}</Text>
//     </View>
//   </View>
//   {/* </View>  */}
//   <View style={styles.rowGroup}>
//     <View style={styles.row}>
//       <Text style={styles.label}>Total:</Text>
//       <Text style={styles.value}>${total}</Text>
//     </View>
//   </View>

//       <CustomButton
//         title="Checkout"
//         onPress={handleCheckout}
//         buttonStyle={styles.customButton}
//         textStyle={styles.customButtonText}></CustomButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#faebd7',
//   },rowGroup: {
    
//     // justifyContent: 'space-between',
//     // alignContent:'space-between',
    
//     width: '93%',
//      padding: 15,
//     marginBottom:10,
//     backgroundColor:'white',
//     borderRadius:7

//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignContent:'space-between',
//     marginVertical: 5, 
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//   },
 
 

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     width: '100%',
//     height: 50,
//     backgroundColor: '#faebd7',
//     // borderBottomWidth: 1,
//     // borderBottomColor: 'gray',
//   },
  
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginLeft: 30,
//   },customButton: {
//     width: '40%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'brown',
//     borderRadius: 8,
//     marginLeft: 10,
//     marginTop: 40,
//     marginBottom: 10,
//     justifyContent: 'space-between',
//   },
//   customButtonText: {
//     fontSize: 20,
//   },
  
  
//   input: {
//     flex: 1,
//     fontSize: 14,
//   },
//   trackList: {
//     flex: 1,
//     width: '100%',
//     padding: 15,
//   },
 

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   gridText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   searchIcon: {
//     padding: 10,
//   },
//   trackItem: {
//     marginBottom: 7,
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   trackDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   trackImage: {
//     width: 60,
//     height: 60,
//     // borderRadius: 25,
//     marginRight: 10,
//   },
//   trackInfo: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   artist: {
//     color: 'gray',
//     fontSize: 14,
//   },
 
//   flatListContainer: {
//     paddingHorizontal: 10,
//     height: '100%',
//     width: '100%',
//   },
//   item: {
//     marginRight: 10,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//   },
  
// });

// export default Order;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import CustomHeader from '../Component/CustomHeader';
import CustomButton from '../Component/CustomButton';

const { width } = Dimensions.get('window');

const Order = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);
  
  const subtotal = 225.36;
  const delivery = 225;
  const total = 450.36;

  const handleCheckout = () => {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
      currency: 'INR',
      key: 'rzp_test_2l1U2EWy7WzRyk',
      amount: total * 100,
      name: 'foody',
      prefill: {
        email: 'customer@example.com',
        contact: '7048978585',
        name:'Kapil'
      },
      theme: { color: '#F37254' }
    };
    
    RazorpayCheckout.open(options)
      .then((data) => {
      
        console.log(`Success: ${data.razorpay_payment_id}`);
        navigation.navigate('OrderSuccessfull');
      })
      .catch((error) => {
        
        console.log(`Error: ${error.code} | ${error.description}`);
      });
  };

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
  ];
  
  const renderTrackItem = ({ item }) => (
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
      <CustomHeader title={"My Order"} />
      <View style={styles.trackList}>
        <FlatList
          data={searchQuery ? filteredTracks : allTracks}
          renderItem={renderTrackItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>${subtotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery:</Text>
          <Text style={styles.value}>${delivery}</Text>
        </View>
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.row}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>${total}</Text>
        </View>
      </View>
      <CustomButton
        title="Checkout"
        onPress={handleCheckout}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faebd7',
  },
  rowGroup: {
    width: '93%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 7
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  trackList: {
    flex: 1,
    width: '100%',
    padding: 15,
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
  customButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726',
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 10,
  },
  customButtonText: {
    fontSize: 20,
  },
});

export default Order;

