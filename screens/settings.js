import { View, Text } from "react-native";
import React from "react";
import { useStore } from "../store";

const SettingsScreen = () => {
  const { count, setCount } = useStore();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Settings</Text>
      <Text className="text-xl mt-[40]">{count}</Text>
    </View>
  );
};

export default SettingsScreen;
