import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";

const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

const StudentCard = ({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
};

const StudentRoster = () => {
  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster([...roster].reverse());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          IT313 Student Roster - {roster.length} students
        </Text>

        <Button title="Reverse Roster" onPress={reverseRoster} />

        <View style={styles.list}>
          {roster.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              course={student.course}
              units={student.units}
              isFullLoad={student.isFullLoad}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentRoster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  list: {
    padding: 16,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  fullLoad: {
    marginTop: 10,
    fontWeight: "bold",
  },
});