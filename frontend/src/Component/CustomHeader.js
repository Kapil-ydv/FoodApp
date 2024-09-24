// import {View, Text} from 'react-native';
// import React from 'react';
// import CustomIcon from './CustomIcon';

// const CustomHeader = ({title}) => {
//   return (
//     <View
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         width:'100%',
//         marginTop:10
//       }}>
//       <CustomIcon
//         iconName={'left'}
//         iconSize={25}
//         iconColor={'#000'}
//         iconType="AntDesign"></CustomIcon>
//        <Text style={{fontVariant:'bold' ,color:'black',fontWeight:'bold', fontSize:24}}> {title}</Text>
//        <Text> </Text>
//     </View>
//   );
// };

// export default CustomHeader;
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from './CustomIcon';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 10, // Added padding for better layout
      }}>
      <TouchableOpacity onPress={handleBackPress}>
        <CustomIcon
          iconName={'left'}
          iconSize={25}
          iconColor={'#000'}
          iconType="AntDesign"
        />
      </TouchableOpacity>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>
        {title}
      </Text>
      {/* <View style={{ width: 25 }} /> This ensures spacing alignment */}
      <Text> </Text>
    </View>
  );
};

export default CustomHeader;

