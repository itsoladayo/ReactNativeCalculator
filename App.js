/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NumberButton from './NumberButton';

const Calculator = () => {
  var [displayedNumber, setDisplayedNumber] = useState('0');
  var [firstNumber, setFirstNumber] = useState('0');
  var [division, setDivision] = useState(false);
  var [multiplication, setMultiply] = useState(false);
  var [subtraction, setSubtract] = useState(false);
  var [addition, setAdd] = useState(false);
  const [calculate, setCalculate] = useState(false);

  const onButtonPress = val => {
    displayedNumber = displayedNumber.replace('/,/g', '');
    var newNumber = parseFloat(displayedNumber + val);

    if (calculate) {
      setDisplayedNumber(val);
      setCalculate(false);
      return;
    }
    if (displayedNumber > 1000000000) {
      return;
    }

    // if (displayedNumber > 100000) {
    //   var parts = newNumber.toString().split('.');
    //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //   newNumber = parts.join('.');
    // }

    setDisplayedNumber(newNumber.toString());
  };

  const divideNumbers = () => {
    setFirstNumber(displayedNumber);
    setCalculate(true);
    setDivision(true);

    return;
  };
  const multiplyNumbers = () => {
    setFirstNumber(displayedNumber);
    setCalculate(true);
    setMultiply(true);

    return;
  };

  const subtractNumbers = () => {
    setFirstNumber(displayedNumber);
    setCalculate(true);
    setSubtract(true);

    return;
  };
  const addNumbers = () => {
    setFirstNumber(displayedNumber);
    setCalculate(true);
    setAdd(true);

    return;
  };

  const findPercentage = () => {
    setDisplayedNumber(
      (parseFloat(displayedNumber) / 100).toString().substring(0, 14),
    );

    return;
  };

  const changeSymbol = () => {
    setDisplayedNumber(
      (parseFloat(displayedNumber) * -1).toString().substring(0, 14),
    );

    return;
  };
  const addDecimal = () => {
    if (displayedNumber.toString().includes('.')) {
      return;
    }
    setDisplayedNumber(displayedNumber.toString() + '.');
  };
  const derviveAnswer = () => {
    if (division) {
      setDisplayedNumber(
        (parseFloat(firstNumber) / parseFloat(displayedNumber))
          .toString()
          .substring(0, 14),
      );
    }
    if (multiplication) {
      setDisplayedNumber(
        (parseFloat(firstNumber) * parseFloat(displayedNumber))
          .toString()
          .substring(0, 14),
      );
    }
    if (subtraction) {
      setDisplayedNumber(
        (parseFloat(firstNumber) - parseFloat(displayedNumber))
          .toString()
          .substring(0, 14),
      );
    }
    if (addition) {
      setDisplayedNumber(
        (parseFloat(firstNumber) + parseFloat(displayedNumber))
          .toString()
          .substring(0, 14),
      );
    }
    setDivision(false);
    setMultiply(false);
    setSubtract(false);
    setAdd(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.spacing} />
      <View style={styles.displayedNumber}>
        <Text style={styles.displayNumberText}>{displayedNumber}</Text>
      </View>
      <View style={styles.keyPad}>
        <View style={styles.viewStyleOne}>
          <View style={styles.topRowButtons}>
            {/* <TouchableOpacity
                style={styles.topRowButton}
                onPress={this.onPress}>
                <Text style={styles.buttonOne}>A/C</Text>
              </TouchableOpacity> */}

            <NumberButton
              containerStyle={styles.topRowButton}
              onPress={() => {
                setDisplayedNumber('0');
              }}
              textStyle={styles.buttonOne}
              displayText="A/C"
            />

            <NumberButton
              containerStyle={styles.topRowButton}
              onPress={changeSymbol}
              textStyle={styles.buttonOne}
              displayText="+/-"
            />
            <NumberButton
              containerStyle={styles.topRowButton}
              onPress={findPercentage}
              textStyle={styles.buttonOne}
              displayText="%"
            />
            <NumberButton
              containerStyle={styles.rightButtons}
              onPress={divideNumbers}
              textStyle={styles.buttonOne}
              displayText="÷"
            />

            {/* <TouchableOpacity
                style={styles.topRowButton}
                onPress={this.onPress}>
                <Text style={styles.buttonFour}>&#247;</Text>
              </TouchableOpacity> */}
          </View>
          <View style={styles.bottomRowButtons}>
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => {
                onButtonPress('7');
              }}
              textStyle={styles.buttonOne}
              displayText="7"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('8')}
              textStyle={styles.buttonOne}
              displayText="8"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('9')}
              textStyle={styles.buttonOne}
              displayText="9"
            />
            <NumberButton
              containerStyle={styles.rightButtons}
              onPress={multiplyNumbers}
              textStyle={styles.buttonOne}
              displayText="x"
            />
          </View>
        </View>
        <View style={styles.viewStyleTwo}>
          <View style={styles.topRowButtons}>
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('4')}
              textStyle={styles.buttonOne}
              displayText="4"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('5')}
              textStyle={styles.buttonOne}
              displayText="5"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('6')}
              textStyle={styles.buttonOne}
              displayText="6"
            />
            <NumberButton
              containerStyle={styles.rightButtons}
              onPress={subtractNumbers}
              textStyle={styles.buttonOne}
              displayText="-"
            />
          </View>
          <View style={styles.bottomRowButtons}>
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('1')}
              textStyle={styles.buttonOne}
              displayText="1"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('2')}
              textStyle={styles.buttonOne}
              displayText="2"
            />
            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={() => onButtonPress('3')}
              textStyle={styles.buttonOne}
              displayText="3"
            />
            <NumberButton
              containerStyle={styles.rightButtons}
              onPress={addNumbers}
              textStyle={styles.buttonOne}
              displayText="+"
            />
          </View>
        </View>
        <View style={styles.viewStyleThree}>
          <View style={styles.topRowButtons}>
            <NumberButton
              containerStyle={styles.buttonZero}
              onPress={() => onButtonPress('0')}
              textStyle={styles.buttonOne}
              displayText="0"
            />

            <NumberButton
              containerStyle={styles.middleButtons}
              onPress={addDecimal}
              textStyle={styles.buttonOne}
              displayText="."
            />
            <NumberButton
              containerStyle={styles.rightButtons}
              onPress={derviveAnswer}
              textStyle={styles.buttonOne}
              displayText="="
            />
          </View>
        </View>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a3d62',
    flex: 1,
  },
  button: {},
  spacing: {
    flex: 0.15,
  },
  keyPad: {
    flex: 0.7,
  },

  displayedNumber: {
    flex: 0.45,
  },
  displayNumberText: {
    textAlign: 'right',
    fontSize: 50,
    marginRight: 30,
    color: 'white',
    marginTop: 250,
  },
  viewStyleOne: {
    // width: 40,
    // height: 40,
    flex: 0.7,
    marginRight: 80,
  },
  viewStyleTwo: {
    // width: 40,
    // height: 40,
    flex: 0.7,
    marginRight: 80,
  },
  viewStyleThree: {
    // width: 40,
    // height: 40,
    flex: 0.5,
  },
  topRowButtons: {
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 30,
  },
  bottomRowButtons: {
    flexDirection: 'row',

    marginLeft: 30,
  },
  topRowButton: {
    width: 80,
    height: 80,
    // textAlign: 'left',
    marginRight: 5,

    marginLeft: 5,
    margin: 'auto',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: '#3B4D95',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtons: {
    width: 80,
    height: 80,
    // textAlign: 'left',
    marginRight: 5,

    marginLeft: 5,
    margin: 'auto',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: '#b71540',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleButtons: {
    width: 80,
    height: 80,
    // textAlign: 'left',
    marginRight: 5,

    marginLeft: 5,
    margin: 'auto',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonZero: {
    width: 166,
    height: 75,
    // textAlign: 'left',
    marginRight: 5,

    marginLeft: 10,
    margin: 'auto',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },

  buttonOne: {
    fontSize: 30,
  },
});

export default Calculator;
