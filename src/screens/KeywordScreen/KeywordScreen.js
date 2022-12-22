import React, { useState } from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import TagButton from "../../components/TagButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormButton from "../../components/FormButton";


export default function KeywordScreen({ navigation, route}) {


  /* Go to Welcome Screen, or return to Settings */
  const {params} = route.params || "";
  const onDonePress = () => {
    if (params === 'set') {
      navigation.goBack();
    } else {
      navigation.navigate("Welcome");
    }
  };

  const availableTags = ["Local","Global","Health","STEM","Arts","Faith"]
  const [filterSet, setFilterSet] = useState( new Set());

  const handlePress = (tag) => {
    if (filterSet.has(tag)) {
      let myFilterSet = new Set(filterSet);
      myFilterSet.delete(tag);
      setFilterSet(myFilterSet);
    }
    else {
      let myFilterSet = new Set(filterSet);
      myFilterSet.add(tag);
      setFilterSet(myFilterSet);
    }
  }

  /* View for the KeywordScreen */
  return (
    <View style={[styles.screen,styles.screenFormMod]}>
      <KeyboardAvoidingView
        style={styles.containerKeyboardAvoidingView}
        keyboardShouldPersistTaps="always"
      >

        <View>
          <Image
            source={require("../../../assets/DonorableHeartLogo.png")}
            style={styles.fullWidth}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.textCenteredP2}>What do you care about?</Text>
        </View>

        <View style={styles.tagContainer}
        >
          {availableTags.map((tag) =>
            <TagButton
              key={tag}
              label={tag}
              styles={styles}
              tagState={filterSet.has(tag)}
              onPress={()=>handlePress(tag)}
            />
          )
          }
        </View>

        <FormButton
          styles={styles}
          buttonStyle={styles.buttonSecondary}
          label={"Search"}
          onPress={onDonePress}
          />
      </KeyboardAvoidingView>
    </View>
  );
}
