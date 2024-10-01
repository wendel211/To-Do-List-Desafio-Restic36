import React, { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import { styles } from "./styles";

type AlertPersonalizadoProps = {
  message: string;
  type: "success" | "error";
  visible: boolean;
  backgroundColor?: string;
};

export const AlertPersonalizado: React.FC<AlertPersonalizadoProps> = ({
  message,
  type,
  visible,
  backgroundColor,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(1400),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          backgroundColor:
            backgroundColor || (type === "success" ? "#D1FAE5" : "#FEE2E2"),
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};
