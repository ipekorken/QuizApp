import * as React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';

const RectangleButton = ({size, pressed, press, main, stroke}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 626}
    height={size || 144}
    viewBox="0 0 626 144"
    fill="none">
    <G filter="url(#a)">
      <Rect width={618} height={136} fill={pressed ? press : main} rx={16} />
      <Rect
        width={612}
        height={130}
        x={3}
        y={3}
        stroke={stroke ? stroke : '#000'}
        strokeWidth={6}
        rx={13}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default RectangleButton;
