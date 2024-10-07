import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://cdn.glitch.global/fb318deb-f749-41dd-8f97-6cb42cd2267e/d5966d76-2b12-41c2-823c-cb85bb184a6b.image.png?v=1728288734914' }}
        style={styles.juiceImage}
        resizeMode="contain"
      />
      <View style={styles.scanFooter}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/fb318deb-f749-41dd-8f97-6cb42cd2267e/d5966d76-2b12-41c2-823c-cb85bb184a6b.image.png?v=1728288734914' }}
          style={styles.thumbnail}
        />
        <View>
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f3ed',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  juiceImage: {
    width: '100%',  // Full width of the screen
    height: '70%',  // Adjust for the height
  },
  scanFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#00bfff',
    borderRadius: 20,
    padding: 10,
    marginLeft: 'auto',
  },
});

export default ScanScreen;
