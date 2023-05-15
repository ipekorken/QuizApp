import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {RectangleButton} from '@components';
import {
  AppColors,
  PinkColors,
  GreenColors,
  BlueColors,
  YellowColors,
  ww,
  wh,
} from '@ui';

const Home = () => {
  const [startPressed, setStartPressed] = useState(false);
  const [settingPressed, setSettingPressed] = useState(false);

  function handleStart() {
    setStartPressed(true);
    setSettingPressed(false);
  }

  function handleSetting() {
    setStartPressed(false);
    setSettingPressed(true);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnTouch}
          onPress={handleStart}>
          <RectangleButton
            size={ww(0.8)}
            pressed={startPressed}
            press={GreenColors.press}
            main={GreenColors.main}
            stroke={GreenColors.stroke}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btnTouch, {marginTop: wh(-0.25)}]}
          onPress={handleSetting}>
          <RectangleButton
            size={ww(0.8)}
            pressed={settingPressed}
            press={YellowColors.press}
            main={YellowColors.main}
            stroke={YellowColors.stroke}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
