
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
// import { useNavigation } from '@react-navigation/native';
// const Profile = () => {
//   const [name, setUsername] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const navigation = useNavigation();

//   const handleEditProfile = () => {
//     console.log('Edit profile pressed');
//     navigation.navigate('EditProfile')
    
//   };
//   return (
//     <View style={styles.container}>
//          <CustomHeader title="Profile "></CustomHeader>
//        <View style={styles.upperDiv}>
    
//         <View style={styles.card}>
      
//       <Image source={require('../assest/images/kp.png')} style={styles.profilePicture} />
    
//       <View style={styles.userInfo}>
//         <Text style={styles.username}>{name}</Text>
//         <Text style={styles.email}>{email}</Text>
//       </View>

      
//       <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
//         <CustomIcon
//           iconName={'edit'}
//           iconSize={25}
//           iconColor={'black'}
//           iconType="Entypo"
//         />
//       </TouchableOpacity>
//     </View>
//       </View>
//       <View style={styles.lowerDiv}>
        
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ForgotPassword')}>
//         <CustomIcon
//             iconName={'unlock-alt'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="FontAwesome"></CustomIcon><Text style={styles.navText}>Change password</Text>
          
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Payment')}>
//         <CustomIcon
//             iconName={'payment'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"></CustomIcon>
//           <Text style={styles.navText}>Payment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('OrderHistory')}>
//         <CustomIcon
//             iconName={'history'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="FontAwesome"></CustomIcon>
//           <Text style={styles.navText}>Order History</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Favourite')}>
//         <CustomIcon
//             iconName={'favorite'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"></CustomIcon>
//           <Text style={styles.navText}>Favourite Cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() =>  navigation.navigate('Address')}>
//         <CustomIcon
//             iconName={'location-pin'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="Entypo"></CustomIcon>
//           <Text style={styles.navText}>Delivery Address</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => console.log('Term & Conditions pressed')}>
//         <CustomIcon
//             iconName={'policy'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"></CustomIcon>
//           <Text style={styles.navText}>Term & Conditions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => console.log('Help pressed')}>
//         <CustomIcon
//             iconName={'help-with-circle'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="Entypo"></CustomIcon>
//           <Text style={styles.navText}>Help</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Login')}>
//         <CustomIcon
//             iconName={'logout'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialCommunityIcons"></CustomIcon>
//           <Text style={styles.navText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,

//  backgroundColor:'#faebd7'
//   },
//   header: {
//     marginBottom: 20,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   email: {
//     fontSize: 16,
//     color: '#666',
//   },
//   navigation: {
//     flex: 1,
//   },
//   navItem: {
//     padding: 13,
//      borderBottomWidth: 5,
//     borderBottomColor: '#f5fffa',
//     flexDirection:'row',
//     alignContent:'space-between',
    
//   },
//   navText: {
//     fontSize: 20,
//     marginLeft:10
//   },
//   upperDiv: {
//     flex: 1,
//     // backgroundColor:'#faebd7',
//     // width:'100%'
//   },
//   lowerDiv: {
//     flex: 2,
//     borderColor:'#f5fffa',
//     backgroundColor:'white',
//     borderWidth:10
    
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginTop:20,
//     padding: 20,
//     marginLeft:30,
//     width:'80%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     elevation: 3, // Add elevation for shadow on Android
//     shadowColor: '#000', // Add shadow properties for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   profilePicture: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 20,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   username: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   email: {
//     fontSize: 12,
//     color: '#666',
//     // flexDirection: 'row',
//   },
//   editIcon: {
//     marginLeft: 'auto',
//     marginBottom:70
//   },
// });

// export default Profile;
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     const getUserDetails = async () => {
//       const mail = await AsyncStorage.getItem('email');
//       try {
//         const response = await fetch('http://192.168.33.104:5218/registration', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             eventID: '1007',
//             addInfo: {
//               email: mail,
//             },
//           }),
//         });

//         const responseData = await response.json();
//         if (responseData.rData.rCode === 0) {
//           setName(responseData.rData.name);
//           setEmail(responseData.rData.email);
//           setProfileImage(responseData.rData.image);
//         } else {
//           Alert.alert('Error', responseData.rMessage || 'Failed to fetch user details');
//         }
//       } catch (error) {
//         console.error(error);
//         Alert.alert('Error', 'Failed to fetch user details. Please try again later.');
//       }
//     };

//     getUserDetails();
//   }, []);

//   const handleEditProfile = () => {
//     console.log('Edit profile pressed');
//     navigation.navigate('EditProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <CustomHeader title="Profile " />
//       <View style={styles.upperDiv}>
//         <View style={styles.card}>
//           <Image source={profileImage ? { uri: profileImage } : require('../assest/images/kp.png')} style={styles.profilePicture} />
//           <View style={styles.userInfo}>
//             <Text style={styles.username}>{name}</Text>
//             <Text style={styles.email}>{email}</Text>
//           </View>
//           <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
//             <CustomIcon
//               iconName={'edit'}
//               iconSize={25}
//               iconColor={'black'}
//               iconType="Entypo"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.lowerDiv}>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ForgotPassword')}>
//           <CustomIcon
//             iconName={'unlock-alt'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="FontAwesome"
//           />
//           <Text style={styles.navText}>Change password</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Payment')}>
//           <CustomIcon
//             iconName={'payment'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"
//           />
//           <Text style={styles.navText}>Payment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('OrderHistory')}>
//           <CustomIcon
//             iconName={'history'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="FontAwesome"
//           />
//           <Text style={styles.navText}>Order History</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Favourite')}>
//           <CustomIcon
//             iconName={'favorite'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"
//           />
//           <Text style={styles.navText}>Favourite Cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Address')}>
//           <CustomIcon
//             iconName={'location-pin'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="Entypo"
//           />
//           <Text style={styles.navText}>Delivery Address</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => console.log('Term & Conditions pressed')}>
//           <CustomIcon
//             iconName={'policy'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialIcons"
//           />
//           <Text style={styles.navText}>Term & Conditions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => console.log('Help pressed')}>
//           <CustomIcon
//             iconName={'help-with-circle'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="Entypo"
//           />
//           <Text style={styles.navText}>Help</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Login')}>
//           <CustomIcon
//             iconName={'logout'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="MaterialCommunityIcons"
//           />
//           <Text style={styles.navText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#faebd7',
//   },
//   header: {
//     marginBottom: 20,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   email: {
//     fontSize: 16,
//     color: '#666',
//   },
//   navigation: {
//     flex: 1,
//   },
//   navItem: {
//     padding: 13,
//     borderBottomWidth: 5,
//     borderBottomColor: '#f5fffa',
//     flexDirection: 'row',
//     alignContent: 'space-between',
//   },
//   navText: {
//     fontSize: 20,
//     marginLeft: 10,
//   },
//   upperDiv: {
//     flex: 1,
//   },
//   lowerDiv: {
//     flex: 2,
//     borderColor: '#f5fffa',
//     backgroundColor: 'white',
//     borderWidth: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginTop: 20,
//     padding: 20,
//     marginLeft: 30,
//     width: '80%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     elevation: 3, // Add elevation for shadow on Android
//     shadowColor: '#000', // Add shadow properties for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   profilePicture: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 20,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   editIcon: {
//     marginLeft: 'auto',
//     marginBottom: 70,
//   },
// });

// export default Profile;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '../Component/CustomIcon';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigation = useNavigation();

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

  const handleEditProfile = () => {
    console.log('Edit profile pressed');
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Profile " />
      <View style={styles.upperDiv}>
        <View style={styles.card}>
          <Image source={profileImage ? { uri: profileImage } : require('../assest/images/kp.png')} style={styles.profilePicture} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
            <CustomIcon
              iconName={'edit'}
              iconSize={25}
              iconColor={'black'}
              iconType="Entypo"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerDiv}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ForgotPassword')}>
          <CustomIcon
            iconName={'unlock-alt'}
            iconSize={25}
            iconColor={'black'}
            iconType="FontAwesome"
          />
          <Text style={styles.navText}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Payment')}>
          <CustomIcon
            iconName={'payment'}
            iconSize={25}
            iconColor={'black'}
            iconType="MaterialIcons"
          />
          <Text style={styles.navText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('OrderHistory')}>
          <CustomIcon
            iconName={'history'}
            iconSize={25}
            iconColor={'black'}
            iconType="FontAwesome"
          />
          <Text style={styles.navText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Favourite')}>
          <CustomIcon
            iconName={'favorite'}
            iconSize={25}
            iconColor={'black'}
            iconType="MaterialIcons"
          />
          <Text style={styles.navText}>Favourite Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Address')}>
          <CustomIcon
            iconName={'location-pin'}
            iconSize={25}
            iconColor={'black'}
            iconType="Entypo"
          />
          <Text style={styles.navText}>Delivery Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Term & Conditions pressed')}>
          <CustomIcon
            iconName={'policy'}
            iconSize={25}
            iconColor={'black'}
            iconType="MaterialIcons"
          />
          <Text style={styles.navText}>Term & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Help pressed')}>
          <CustomIcon
            iconName={'help-with-circle'}
            iconSize={25}
            iconColor={'black'}
            iconType="Entypo"
          />
          <Text style={styles.navText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Login')}>
          <CustomIcon
            iconName={'logout'}
            iconSize={25}
            iconColor={'black'}
            iconType="MaterialCommunityIcons"
          />
          <Text style={styles.navText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faebd7',
  },
  header: {
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  navigation: {
    flex: 1,
  },
  navItem: {
    padding: 13,
    borderBottomWidth: 5,
    borderBottomColor: '#f5fffa',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  navText: {
    fontSize: 20,
    marginLeft: 10,
  },
  upperDiv: {
    flex: 1,
  },
  lowerDiv: {
    flex: 2,
    borderColor: '#f5fffa',
    backgroundColor: 'white',
    borderWidth: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    marginLeft: 30,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, // Add elevation for shadow on Android
    shadowColor: '#000', // Add shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  editIcon: {
    marginLeft: 'auto',
    marginBottom: 70,
  },
});

export default Profile;

