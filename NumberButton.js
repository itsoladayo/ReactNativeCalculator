import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

function NumberButton({containerStyle, textStyle, displayText, onPress}) {
  const animatedSpringValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(animatedSpringValue, {
      toValue: 3,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(animatedSpringValue, {
      toValue: 1,
    }).start();
  };

  let transformStyle = {};

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}>
      <Animated.View
        style={[
          containerStyle,
          {
            transform: [{scale: animatedSpringValue}],
          },
        ]}>
        <Text style={textStyle}>{displayText}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default NumberButton;
