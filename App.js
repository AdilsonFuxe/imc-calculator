import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const handleSubmit = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    let msg = '';
    if (imc < 18.5) msg = `Você está abaixo do peso! ${imc.toFixed(2)}`;
    else if (imc < 24.9) msg = `Peso ideal! ${imc.toFixed(2)}`;
    else if (imc < 30) msg = `Levemente acima do peso! ${imc.toFixed(2)}`;
    else msg = `Obesidade! ${imc.toFixed(2)}`;
    alert(msg);
    setAltura('');
    setPeso('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.message}>
        Informe os seus dados, e verifique se está no peso ideal
      </Text>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (Cm)"
          placeholderTextColor="#101010"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (kg)"
          placeholderTextColor="#101010"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 30,
    padding: 2,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#41aef4',
  },
  message: {
    textAlign: 'justify',
    margin: 10,
    fontSize: 15,
    color: '#ccc',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 10,
    color: '#111111',
    fontSize: 23,
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
