// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
// import CustomTextInput from '../Component/CustomTextInput';
// import CustomButton from '../Component/CustomButton';
// const EditProfile = () => {
//   const [username, setUsername] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [newphone, setNewPhone] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');


  
// const handleSaveChanges = () => {
//     console.log(`profile updated`);
//     // navigation.navigate('Checkout');
//   };
//   const handleEditProfile = () => {
//     console.log('Edit profile pressed');
    
//   };
//   return (
//     <View style={styles.container}>
//          <CustomHeader title=" Edit Profile "></CustomHeader>
//        <View style={styles.upperDiv}>
    
//         <View style={styles.card}>
      
//       <Image source={require('../assest/images/kp.png')} style={styles.profilePicture} />
    
//       <View style={styles.userInfo}>
//         <Text style={styles.username}>{username}</Text>
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
//         <View style={styles.navItem}>
//       <CustomTextInput
       
//        label="NAME"
//        placeholder="enter your name"
//        value={username}
//        onChangeText={text => setUsername(text)}
//      /></View>
//       <View style={styles.navItem}>
//       <CustomTextInput
       
//        label="EMAIL"
//        placeholder="enter your name"
//        value={email}
//        onChangeText={text => setEmail(text)}
//      /> 
//      </View>
//      <View style={styles.navItem}>
//      <CustomTextInput
       
//        label="PHONE NO."
//        placeholder="enter your name"
//        value={phone}
//        onChangeText={text => setPhone(text)}
//      /> 
//      </View>
//      <View style={styles.navItem}>
        
//       <CustomTextInput
       
//        label=" ADD NEW PHONE NO."
//        placeholder="enter your name"
//        value={newphone}
//        onChangeText={text => setNewPhone(text)}
//      />
//          </View>
//          <View style={styles.navItem}>
//       <CustomTextInput
    
//        label="ADDRESS"
//        placeholder="enter your name"
//        value={address}
//        onChangeText={text => setAddress(text)}
//      />
//         </View>
        
        
//       </View>
//       <CustomButton
//         title="Save Changes"
//         onPress={handleSaveChanges}
//         buttonStyle={styles.customButton}
//         textStyle={styles.customButtonText}></CustomButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,

//  backgroundColor:'#f5fffa'
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
//     // marginRight:50,
//     flex:5,
//     //  borderBottomWidth: 5,
//     borderBottomColor: '#faebd7',
//     flexDirection:'column',
//     alignContent:'space-between',
//     width:365,
//     // position:'relative',
//      bottom:15,
//      right:30
    
//   },
//   customButton: {
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'brown',
//     borderRadius: 8,
//     marginLeft: 100,
//     marginTop: 40,
//     marginBottom: 10,
//     justifyContent: 'space-between',
//   },
//   customButtonText: {
//     fontSize: 20,
//   },

//   upperDiv: {
//     flex: 1,
//     // backgroundColor:'#faebd7',
//     // width:'100%'
//   },
//   lowerDiv: {
//      flex: 2,
//     borderColor:'#faebd7',
//     backgroundColor:'white',
//     borderWidth:10,
//     // marginLeft:'90'
    
    
    
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

// export default EditProfile;
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
// import CustomTextInput from '../Component/CustomTextInput';
// import CustomButton from '../Component/CustomButton';

// const EditProfile = () => {
//   const [username, setUsername] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [newphone, setNewPhone] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSaveChanges = () => {
//     console.log(`profile updated`);
//     // navigation.navigate('Checkout');
//   };

//   const handleEditProfile = () => {
//     console.log('Edit profile pressed');
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <CustomHeader title=" Edit Profile " />
//         <View style={styles.upperDiv}>
//           <View style={styles.card}>
//             <Image source={require('../assest/images/kp.png')} style={styles.profilePicture} />
//             <View style={styles.userInfo}>
//               <Text style={styles.username}>{username}</Text>
//               <Text style={styles.email}>{email}</Text>
//             </View>
//             <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
//               <CustomIcon iconName={'edit'} iconSize={25} iconColor={'black'} iconType="Entypo" />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.lowerDiv}>
//           <View style={styles.navItem}>
//             <CustomTextInput
//               label="NAME"
//               placeholder="enter your name"
//               value={username}
//               onChangeText={text => setUsername(text)}
//             />
//           </View>
//           <View style={styles.navItem}>
//             <CustomTextInput
//               label="EMAIL"
//               placeholder="enter your email"
//               value={email}
//               onChangeText={text => setEmail(text)}
//             />
//           </View>
//           <View style={styles.navItem}>
//             <CustomTextInput
//               label="PHONE NO."
//               placeholder="enter your phone number"
//               value={phone}
//               onChangeText={text => setPhone(text)}
//             />
//           </View>
//           <View style={styles.navItem}>
//             <CustomTextInput
//               label="ADD NEW PHONE NO."
//               placeholder="enter your new phone number"
//               value={newphone}
//               onChangeText={text => setNewPhone(text)}
//             />
//           </View>
//           <View style={styles.navItem}>
//             <CustomTextInput
//               label="ADDRESS"
//               placeholder="enter your address"
//               value={address}
//               onChangeText={text => setAddress(text)}
//             />
//           </View>
//         </View>
//         <CustomButton
//           title="Save Changes"
//           onPress={handleSaveChanges}
//           buttonStyle={styles.customButton}
//           textStyle={styles.customButtonText}
//         />
//       </ScrollView>
//     </KeyboardAvoidingView>
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
// //   navItem: {
// //     padding: 13,
// //     flex: 5,
// //     borderBottomColor: '#faebd7',
// //     flexDirection: 'column',
// //     alignContent: 'space-between',
// //     width: '100%',
// //   },
// navItem: {
//         padding: 13,
//         // marginRight:50,
//         flex:5,
//         //  borderBottomWidth: 5,
//         // borderBottomColor: '#faebd7',
//         flexDirection:'column',
//         alignContent:'space-between',
//         width:365,
//         // position:'relative',
//          bottom:12,
//          right:30
        
//       },
//   customButton: {
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFA726',
//     borderRadius: 8,
//     marginLeft: '25%',
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   customButtonText: {
//     fontSize: 20,
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

// export default EditProfile;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../Component/CustomButton';
import CustomHeader from '../Component/CustomHeader';
import CustomTextInput from '../Component/CustomTextInput';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newphone, setNewPhone] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    getUserDetails();
  }, []);

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
        setPhone(responseData.rData.phone);
        setNewPhone(responseData.rData.newphone);
        setProfileImage(responseData.rData.image);
        setAddress(responseData.rData.address);
      } else {
        Alert.alert('Error', responseData.rMessage || 'Failed to fetch user details');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch user details. Please try again later.');
    }
  };

  const handleEditProfile = async () => {
    
    const Url = 'http://192.168.33.104:5218/registration';
    const requestHeaders = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(Url, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          addInfo: {
            name:name,
            phone:  phone,
            newphone:newphone,
            email:email,
            image: profileImage,
            address:address
          },
          eventID: '1008',
        }),
      });

      const responseData = await response.json();

      if (responseData.rData.rCode === 0) {
        Alert.alert('Success', 'Profile updated successfully!');
        await AsyncStorage.setItem('email', email);
        getUserDetails();
      } else {
        Alert.alert('Error', responseData.rMessage || 'Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update profile. Please try again later.');
    }
  };

  const handleEditProfileImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const base64Image = response.assets[0].base64;
        setProfileImage(base64Image);
      }
    });
  };

  return (
    <KeyboardAvoidingView style={styles.maincontainer} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CustomHeader title="Edit Profile" />
        <View style={styles.upperDiv}>
          <View style={styles.card}>
            <TouchableOpacity onPress={handleEditProfileImage}>
              <Image
                source={{ uri: `data:image/jpeg;base64,${profileImage}` }}
                style={styles.avatar}
              />
              <Icon name="edit" size={24} color="black" style={styles.editIcon} />
            </TouchableOpacity>
            <View style={styles.userInfo}>
            <Text style={styles.username}>{name}</Text>
              <Text style={styles.email}>{email}</Text>
          </View>
          </View>
        </View>

        <View style={styles.lowerDiv}>
          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Name</Text>
            <CustomTextInput
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Email</Text>
            <CustomTextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <CustomTextInput
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label}>New Phone Number</Text>
            <CustomTextInput
              placeholder="Enter your new phone number"
              value={newphone}
              onChangeText={setNewPhone}
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Address</Text>
            <CustomTextInput
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <CustomButton
            title="Save Changes"
            onPress={handleEditProfile}
            buttonStyle={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#faebd7',
    padding: 20,
  },
  upperDiv: {
    alignItems: 'center',
  },
  card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        marginBottom:20,
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  username: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      email: {
        fontSize: 16,
        color: '#666',
      },
      userInfo: {
            flex: 1,
          },
  lowerDiv: {
    flex: 2,
    backgroundColor: 'white',
    padding: 20,
    borderColor: '#f5fffa',
    borderRadius: 10,
  },
  detailsContainer: {
    marginVertical: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  customButton: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726',
    borderRadius: 8,
    marginLeft: '20%',
    marginTop: 40,
    marginBottom: 10,
  },
  customButtonText: {
    fontSize: 20,
    flexDirection:'row',
  },
});

export default ProfileScreen;
