// import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
// import React from 'react'
// import CustomHeader from '../Component/CustomHeader'
// import CustomIcon from '../Component/CustomIcon'
// import CustomButton from '../Component/CustomButton'
// const Address = () => {
//     const handleSignUp = () => {
//         console.log('address hit');
//         navigation.navigate('na');
//       };
//       const HomeCard = ({ address, mobile }) => {
//         return (
//           <View style={styles.card}>
//             <Text style={styles.title}>Home</Text>
//             <Text style={styles.address}>{address}</Text>
//             <Text style={styles.mobile}>{mobile}</Text>
//           </View>
//         );
//       };
      
//       const OfficeCard = ({ address, mobile }) => {
//         return (
//           <View style={styles.card}>
//             <Text style={styles.title}>Office</Text>
//             <Text style={styles.address}>{address}</Text>
//             <Text style={styles.mobile}>{mobile}</Text>
//           </View>
//         );
//       };
//   return (
//     <View>
//          <CustomHeader title={"My Address"}></CustomHeader>
//          {/* <CustomIcon
//             iconName={'location-pin'}
//             iconSize={25}
//             iconColor={'black'}
//             iconType="Entypo"></CustomIcon> */}
//             <TouchableOpacity style={[styles.socialIcon,]}>
//           <CustomIcon
//             iconName={'map-marked-alt'}
//             iconSize={90}
//             iconColor={'green'}
//             iconType="FontAwesome5"></CustomIcon>
//         </TouchableOpacity>
//         <CustomButton
//           title="Delivered to this Address"
//           onPress={handleSignUp}
//           buttonStyle={styles.customButton}
//           textStyle={styles.customButtonText}></CustomButton>
      
//     </View>
//   )
// }
// const styles = StyleSheet.create({
// socialIcon: {
//     width: 400,
//     height: 400,
    
//     // borderRadius: 35,
//     // borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf:'center'
//     // marginHorizontal: 70,
//   },
//   customButton: {
//     backgroundColor: 'brown',
//     borderRadius: 8,
//     justifyContent: 'space-between',
//     width:'70%',
//     marginLeft:50
//   },
//   customButtonText: {
//     fontSize: 20,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 16,
//     marginVertical: 8,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   address: {
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   mobile: {
//     fontSize: 14,
//     color: '#4a90e2',
//   },

// })
// export default Address;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../Component/CustomHeader';
import CustomIcon from '../Component/CustomIcon';
import CustomButton from '../Component/CustomButton';

const Address = () => {
  const handleSignUp = () => {
    console.log('address hit');
    // navigation.navigate('na');
  };

  const HomeCard = ({ address, mobile }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.mobile}>Mobile:{mobile}</Text>
      </View>
    );
  };

  const OfficeCard = ({ address, mobile }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Office</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.mobile}>Mobile:{mobile} </Text>
      </View>
    );
  };

  return (
    <View>
      <CustomHeader title={"My Address"}></CustomHeader>
      <TouchableOpacity style={[styles.socialIcon]}>
        <CustomIcon
          iconName={'map-marked-alt'}
          iconSize={240}
          iconColor={'green'}
          iconType="FontAwesome5"
        ></CustomIcon>
      </TouchableOpacity>
      
      <HomeCard address="A/254, Ligs Plaza, Zoonk, Doha, Qatar" mobile="+99 2345678900" />
      <OfficeCard address="B/102, Lawesh Tower, Sadier, Doha, Qatar" mobile="+99 2345665400" />
      <CustomButton
        title="Delivered to this Address"
        onPress={handleSignUp}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  socialIcon: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  customButton: {
    backgroundColor: '#FFA726',
    borderRadius: 8,
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: 50,
  },
  customButtonText: {
    fontSize: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#faebd7',
    backgroundColor:'#faebd7',
    borderRadius: 8,
    width:'80%',
    marginLeft:50,
    padding: 16,
    marginVertical: 8,
    marginTop:1,
    marginBottom:30
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  address: {
    fontSize: 14,
    marginBottom: 4,
  },
  mobile: {
    fontSize: 14,
    color: 'black',
  },
});

export default Address;