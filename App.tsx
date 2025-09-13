import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

type Gender = 'Male' | 'Female' | null;

export default function RegisterScreen(): JSX.Element {
  const [gender, setGender] = useState<Gender>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTER</Text>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Birthday" style={styles.input} />

      <View style={styles.genderRow}>
        <TouchableOpacity onPress={() => setGender('Male')}>
          <Text style={gender === 'Male' ? styles.genderSelected : styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setGender('Female')}>
          <Text style={gender === 'Female' ? styles.genderSelected : styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#d0f0d0', padding: 20, paddingTop: 48 },
  header: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  genderRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 12 },
  genderText: { fontSize: 16, color: '#444' },
  genderSelected: { fontSize: 16, fontWeight: '700' },
  registerButton: {
    backgroundColor: '#1e88e5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  terms: { textAlign: 'center', color: '#555', marginTop: 12, fontSize: 12 },
});
