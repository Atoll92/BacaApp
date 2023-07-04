import React from 'react';
import { Button, StyleSheet, Text, View , TextInput} from 'react-native';

const MyDetailsForm = () => {
    return (
        <>
            <TextInput style={styles.textinputs}
          placeholder="Nom" />
        <TextInput style={styles.textinputs}
      
          placeholder="Prénom"
        />
         <TextInput style={styles.textinputs}
     
          placeholder="Date de naissance"
        />
         <TextInput style={styles.textinputs}
     
          placeholder="Adresse"
        />
         <TextInput style={styles.textinputs}
          
          placeholder="Téléphone"
        />
        <Button title="Actualiser"></Button>
        </>
    );
};

const styles = StyleSheet.create({
  textinputs: {
    margin:10,
  }
});

export default MyDetailsForm;