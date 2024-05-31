import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

const FormularioLogin=({navigation}) => {
  const [nombre, setNombre] = useState('ianherez@gmail.com');
  const [password, setPassword] = useState('123456789');

  const handleSubmit =() => {
  
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w)+$/;
  let valido= false;

    //Aqui can las validaciones

  if (nombre.length <= 0 ){
    console.log('Debe ingresar el nombre del usuario')
  }


  //Valida el email
  if (reg.test(nombre) === false){
    console.log("El correo no es valido");
    //setNombre({nombre});
  } else {
    //setNombre({ nombre })
    console.log("Correo Valido");
    console.log(nombre);
    valido = true;
  }

  if(password === ''){
    alert('Debe ingresar una contraseña')
  }
  if(password.length < 8){
    alert('La contraseña debe ser mayor o igual a 8 caracteres')
  } else {
    valido = true;
  }

  if (valido){
    console.log('paso');
    navigation.navigate('Main');
  }
  }
  return(
    <View style = {styles.contenedor}>
    <TextInput placeholder ="Nombre" onChangeText = {setNombre}
    value = {nombre}
    style = {styles.input}
  />
  <TextInput placeholder = "Password" onChangeText = {setPassword}
  value = {password}
  style = {styles.input}
  />
  <Button tittle="Enviar" onPress={handleSubmit}/>
  </View>
  ) 
}

const styles= StyleSheet.create({
  contenedor:{
    margin: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#EF5350',
    padding: 10,
    marginBottom: 18,
    fontSize: 16,
  },
})

export default FormularioLogin