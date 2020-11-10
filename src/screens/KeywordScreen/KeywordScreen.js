import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function KeywordScreen({ navigation }) {

  /* Go strait to HomeScreen */
  const onDonePress = () => {   
    navigation.navigate("Welcome");
  };

  /* View for the KeywordScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.headView}>
            <Text style={styles.header}>What do you</Text>
            <Text style={styles.header}>care about?</Text>
        </View>



        <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.localButton}
                onPress={() => onBackPress()}
            >
                <Text style={styles.localTitle}>Local</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.globalButton}
                onPress={() => onLoginPress()}
            >
                <Text style={styles.globalTitle}>Global</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.healthButton}
                onPress={() => onBackPress()}
            >
                <Text style={styles.healthTitle}>Health</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.stemButton}
                onPress={() => onLoginPress()}
            >
                <Text style={styles.stemTitle}>STEM</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.artsButton}
                onPress={() => onBackPress()}
            >
                <Text style={styles.artsTitle}>Arts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.faithButton}
                onPress={() => onLoginPress()}
            >
                <Text style={styles.faithTitle}>Faith</Text>
            </TouchableOpacity>
            </View>
        </View>


        <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onDonePress()}
          >
            <Text style={styles.buttonTitle}>Done</Text>
          </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
