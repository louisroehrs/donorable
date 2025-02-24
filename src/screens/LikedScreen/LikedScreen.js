import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import heart from "../../../assets/heart.png";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import ImageMask from "../../components/ImageMask";

export default function LikedScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);

  /* Get nonprofit name from HomeScreen */
  const {params} = route.params;

  navigation.setOptions({title: params.name})

  /* Save nonprofit to heart list */
  const onHeartPress = () => {
    console.log('heart');
  };

  /* View LearnMoreScreen of nonprofit **NEEDS TO BE IMPLEMENTED** */
  const onLearnPress = () => {
    console.log('learn');
  };

  /* Go to MessageScreen */
  const onMessagePress = () => {
    navigation.navigate("Message");
  };

  /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
  const onChatPress = () => {
    console.log('chat');
  };

  /* Go to QuickDonateScreen */
  const onDonatePress = (params) => {
    navigation.navigate('QuickDonate', {params: params});
  };

  /* Return to HomeScreen to keep swiping */
  const onSwipePress = () => {
    navigation.goBack();
  };


  /* View for the KeywordScreen */
  return (
    <View style={[styles.screen,styles.screenFormMod]}>

      <View style={styles.horizontalContainer}>
        <ImageMask
          source={{uri:params.image}}
          borderColor={theme.PRIMARY_COLOR}
          size={100}
          radius={5}
          borderWidth={3}
          backgroundColor={"transparent"}
        />
        <View>
          <Text style={styles.textCenteredP2}>You liked</Text>
          <Text style={styles.textCenteredP2}>{params.name}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textCenteredP2}>Now, would you like to...</Text>
      </View>

      <FormButton
        styles={styles}
        buttonStyle={"Primary"}
        onPress={onHeartPress}
        label={"Save to favorites 🤍"}/>

      <FormButton
        styles={styles}
        buttonStyle={"Secondary"}
        onPress={onLearnPress}
        label={"Learn more"}/>

      <FormButton
        styles={styles}
        buttonStyle={"Primary"}
        onPress={onChatPress}
        label={"Schedule a live chat"}/>

      <FormButton
        styles={styles}
        buttonStyle={"Secondary"}
        onPress={() => onDonatePress(params)}
        label={"Donate now"}/>

      <FormButton
        styles={styles}
        buttonStyle={"Primary"}
        onPress={onSwipePress}
        label={"Keep swiping"}/>

    </View>
  );
}
