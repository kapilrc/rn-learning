import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0) return;
    setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals} renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});
