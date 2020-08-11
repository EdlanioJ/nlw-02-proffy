import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";

const Favourites: React.FC = () => {
  const [favourite, setFavourite] = useState([]);

  function loadFavourite() {
    AsyncStorage.getItem("favourite").then((response) => {
      if (response) {
        const favouritedTeachers = JSON.parse(response);

        setFavourite(favouritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavourite();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Proffs disponiveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {favourite.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} favourited teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favourites;
