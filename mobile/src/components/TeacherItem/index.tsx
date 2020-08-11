import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavouriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import styles from "./styles";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: string;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favourited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favourited }) => {
  const [isFavourited, setIsFavourited] = useState(favourited);

  async function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    await api.post("connections", { user_id: teacher.user_id });
  }

  async function handleTogglefavourite() {
    const favourite = await AsyncStorage.getItem("favourite");

    let favouriteArray = [];
    if (favourite) {
      favouriteArray = JSON.parse(favourite);
    }

    if (isFavourited) {
      const favouriteIndex = favouriteArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );

      favouriteArray.splice(favouriteIndex, 1);

      setIsFavourited(false);
    } else {
      favouriteArray.push(teacher);

      setIsFavourited(true);
    }

    await AsyncStorage.setItem("favourite", JSON.stringify(favouriteArray));
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Proço/hora:{"   "}
          <Text style={styles.priceValue}>{teacher.cost} kz</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleTogglefavourite}
            style={[
              styles.favouriteButton,
              isFavourited ? styles.favourited : {},
            ]}
          >
            {isFavourited ? (
              <Image source={unFavouriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
