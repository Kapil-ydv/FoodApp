
// import React from 'react';
// import { View, Text, StyleSheet ,Image} from 'react-native';

// const TrackOrder = () => {
//   return (
//     <View style={styles.container}>
//        <Image source={require('../assest/images/track.png')}  style={styles.logo}/>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.subtitle}>Order for Kirkland, 89 c/h gave, 900</Text>
//       <Text style={styles.status}>Delivery Man: Nalson Edwards</Text>
//       <Text style={styles.status}>Delivering to: lasre 546/b 11,235, Doha, Qatar</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   status: {
//     fontSize: 16,
//   },
//   logo: {
//     width: 450,
//     height: 400,
//     marginTop:1
//     // borderRadius:30
// },
// });

// export default TrackOrder;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrackOrder = () => {
  return (
    <View style={styles.container}>
       <Image source={require('../assest/images/track.png')}  style={styles.logo}/>
      <Text style={styles.title}>Order Tracking</Text>
      <Text style={styles.subtitle}>Order for Kirkland, 89 c/h gave, 900</Text>
      <Text style={styles.subtitle}>Delivery Man: Nalson Edwards</Text>
      <Text style={styles.status}>Delivering to: lasre 546/b 11,235, Doha, Qatar</Text>
      <Text style={styles.main}> Contact Delivery Man: +917045679197</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // padding: 20,
    backgroundColor: '#faebd7',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginVertical: 25,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    color: '#444',
    marginVertical: 20,
    textAlign: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    // resizeMode: 'contain',
    // marginVertical: 20,
    marginTop:1
  },
  main: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 2,
    textAlign: 'center',
  },
});

export default TrackOrder;


