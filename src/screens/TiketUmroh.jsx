import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TiketUmroh() {
  const paketTiketUmroh = [
    { nama: 'Paket Umroh Bronze', harga: 'Rp. 15.000.000' },
    { nama: 'Paket Umroh Silver', harga: 'Rp. 25.000.000' },
    { nama: 'Paket Umroh Gold', harga: 'Rp. 35.000.000' },
  ];

  const navigation = useNavigation();

  const pesanSekarang = (paket) => {
    console.log(`Anda memesan paket ${paket.nama} dengan harga ${paket.harga}`);
    navigation.navigate('Pesanan', { paket });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tiket Umroh</Text>
      {paketTiketUmroh.map((paket, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.packageName}>Nama Paket: {paket.nama}</Text>
          <Text style={styles.price}>Harga: {paket.harga}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pesanSekarang(paket)}>
            <Text style={styles.buttonText}>Pesan Sekarang</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  card: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  packageName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  price: {
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
