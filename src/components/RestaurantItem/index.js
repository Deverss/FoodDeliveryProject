
import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({restaurant}) => {
  return(
    <View style={styles.restaurantContainer}>
      <Image source={{ uri: restaurant.image,}} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>${restaurant.deliveryFee} {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}</Text>
  </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
      width:'100%',
      marginVertical: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 5,
    },
    subtitle: {
      color: "grey",
  
    },
  });