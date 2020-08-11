import React, { useState } from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { View, ScrollView, Text, TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";
import Select from "../../components/Select";

import styles from "./styles";

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [isTimeVisible, setIsTimeVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favourite, setFavourite] = useState<number[]>([]);

  const [subject, setSubject] = useState("");
  const [time, setTime] = useState(new Date());
  const [week_day, setWeekDay] = useState("");

  function loadFavourite() {
    AsyncStorage.getItem("favourite").then((response) => {
      if (response) {
        const favouritedTeachers = JSON.parse(response);
        const favouritedTeachersId = favouritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );

        setFavourite(favouritedTeachersId);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function toggleTimeVisible() {
    setIsTimeVisible(!isTimeVisible);
  }

  async function handleFilterSubmit() {
    loadFavourite();
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time: moment(time).format("LT"),
      },
    });

    setTeachers(response.data);
    setIsFiltersVisible(false);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffs disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Select
              selectedValue={subject}
              onValueChange={(value) => setSubject(value.toString())}
              label="Matéria"
              options={[
                { value: "", label: "Qual a matéria?" },
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciência", label: "Ciência" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
              ]}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Select
                  label="Dia da semana"
                  selectedValue={week_day}
                  onValueChange={(e) => setWeekDay(e.toString())}
                  options={[
                    { value: "", label: "Qual o dia?" },
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-Feira" },
                    { value: "2", label: "Terça-Feira" },
                    { value: "3", label: "Quarta-Feira" },
                    { value: "4", label: "Quinta-Feira" },
                    { value: "5", label: "Sexta-Feira" },
                    { value: "6", label: "Sabado" },
                  ]}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <View style={styles.inputTime}>
                  <Text style={styles.inputTimeText}>
                    {moment(time).format("LT")}
                  </Text>
                  <RectButton
                    style={styles.inputTimeButton}
                    onPress={toggleTimeVisible}
                  >
                    <Feather name="clock" size={16} color="#c1bccc" />
                  </RectButton>
                </View>
                {isTimeVisible && (
                  <RNDateTimePicker
                    is24Hour={true}
                    mode="time"
                    display="spinner"
                    value={time}
                    onChange={(e, date) => {
                      if (date) {
                        toggleTimeVisible();
                        setTime(date);
                      }
                    }}
                  />
                )}
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            favourited={favourite.includes(teacher.id)}
            teacher={teacher}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
