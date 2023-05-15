import * as React from 'react';
import Svg, {G, Circle, Defs} from 'react-native-svg';

const CircleButton = ({size, pressed, press, main, stroke}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 81}
    height={size || 81}
    viewBox="0 0 81 81"
    fill="none">
    <G filter="url(#a)">
      <Circle cx={37.5} cy={37.5} r={37.5} fill={pressed ? press : main} />
      <Circle
        cx={37.5}
        cy={37.5}
        r={33.5}
        stroke={stroke || '#000'}
        strokeWidth={8}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default CircleButton;
