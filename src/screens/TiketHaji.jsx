import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function TiketHaji() {
  const paketTiketHaji = [
    { nama: 'Paket Haji Bronze', harga: 'Rp. 20.000.000' },
    { nama: 'Paket Haji Silver', harga: 'Rp. 30.000.000' },
    { nama: 'Paket Haji Gold', harga: 'Rp. 40.000.000' },
  ];

  const navigation = useNavigation(); // Initialize navigation

  const pesanSekarang = (paket) => {
    console.log(`Anda memesan paket ${paket.nama} dengan harga ${paket.harga}`);
    navigation.navigate('Pesanan', { paket }); // Navigate to Pesanan screen with package detail
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tiket Haji</Text>
      {paketTiketHaji.map((paket, index) => (
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
    color: 'black', // Ubah warna teks menjadi hitam
  },
  card: {
    backgroundColor: '#e3f2fd', // Ubah warna latar belakang
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  packageName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black', // Ubah warna teks menjadi hitam
  },
  price: {
    marginBottom: 10,
    color: 'black', // Ubah warna teks menjadi hitam
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
