import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import "@mattilsynet/design/styles.css";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#005260",
        tabBarInactiveTintColor: "#4B4B4B",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="house.fill"
              color={color}
              weight="bold"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="paperplane.fill"
              color={color}
              weight="bold"
            />
          ),
        }}
      />
    </Tabs>
  );
}
