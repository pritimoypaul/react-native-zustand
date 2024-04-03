import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useStore } from "../store";

const ProfileScreen = () => {
  const { count, setCount } = useStore();
  const [number, setNumber] = useState();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Profile</Text>
      <Text className="text-xl mt-[40]">{count}</Text>
      <View>
        <TextInput
          placeholder="Change number here.."
          className="p-3 border border-black"
          onChangeText={(e) => {
            setNumber(e);
          }}
        />
      </View>
      <View className="flex-row mt-[40]">
        <TouchableOpacity
          className="bg-black p-3 rounded-md"
          onPress={() => {
            setCount(number);
          }}
        >
          <Text className="text-white">Set New Value</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
