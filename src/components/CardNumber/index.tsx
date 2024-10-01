import { Container, CardTitle, CardValue } from "./styles";
import React from "react";

type CardNumberProps = {
  title: string;
  num: number;
  color?: string;
  background?: string;
};

export function CardNumber({ title, num, color, background }: CardNumberProps) {
  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardValue color={color} background={background}>
        {num}
      </CardValue>
    </Container>
  );
}
