import { StyleSheet, Text, View, Image} from "react-native";
import { Colors } from "@/constants/Colors";
import products from "@/assets/data/products";

const product = products[0];

export default function App(){
  return(
    <View style = {styles.container}>
      <Image source={{uri:product.image}} style={styles.Image}/>
      <Text style = {styles.title}>{product.name}</Text>
      <Text style ={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    padding:10,
    borderRadius:15,
  },
  title:{
    fontSize:18,
    fontWeight:600,
    marginVertical:10,
  },
  price:{
    color: Colors.light.tint,
    fontWeight:'bold',
  },
  Image:{
    width:'100%',
    aspectRatio:1,
  },
})