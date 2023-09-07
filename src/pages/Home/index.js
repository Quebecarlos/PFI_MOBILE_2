import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'


export default function Home() {
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Poulet au gombo",
      price: 19.90,
      image: "https://www.saboresajinomoto.com.br/uploads/images/recipes/frango-com-quiabo-1.jpg",
    },
    {
      id: '2',
      name: "Lasagne à la viande",
      price: 12.50,
      image: "https://padocacuisine.com/cdn/shop/products/Lasagnealaviande_540x.jpg?v=1663593297",
    },
    {
      id: '4',
      name: "Boeuf Stroganoff",
      price: 15,
      image: "https://delicianacozinha.com/wp-content/uploads/2022/04/receita-de-strogonoff-de-champignon-com-carne.webp",
    },
    {
      id: '5',
      name: "Pain au Fromage",
      price: 9.9,
      image: "https://www.allrecipes.com/thmb/-Q84g3b3onGxcCMM4ndKiExI_1I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8796530-brazilian-cheese-bread-pao-de-queijo-Faith-Ang-4x3-1-2000-a00a691330fd450683950ec993b9a791.jpg",
    },
    {
      id: '6',
      name: "Feijoada classique",
      price: 6.00,
      image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/03/30/1482179809-feijoada-completa-tradicional.jpg",
    },
  ])

  function handleAddCart(item) {
    addItemCart(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.dot}>
            <Text style={styles.dotText}>
              {cart?.length}
            </Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image style={styles.imageFormat} source={{ uri: item.image }} />
            <Product data={item} addToCart={() => handleAddCart(item)} />
          </View>
  )}
/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageFormat: {
    width: 110,
    height: 110,
    paddingRight: 10,
  }
})
