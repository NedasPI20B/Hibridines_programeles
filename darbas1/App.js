import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {useRef} from 'react';

export default function App() {
    const cacheRef = useRef({
        toggle1: false,
        toggle2: false,
        toggle3: false,
        toggle4: false
    });

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    let changeColor = (boxRef, toggle) => {
        boxRef.current.setNativeProps({
            style: { backgroundColor: toggle ? "lime" : "cyan" }
        });
    };

return (
  <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttonspacing}>
            <Button
              title="Button 1"
              color="#E4CE41"
              onPress={() => {changeColor(ref1, cacheRef.current.toggle1 = !cacheRef.current.toggle1);}}
            />
          </View>
          <View style={styles.buttonspacing}>
            <Button
              title="Button 2"
              color="#E4CE41"
              onPress={() => {changeColor(ref2, cacheRef.current.toggle2 = !cacheRef.current.toggle2);}}
            />
            </View>
            <View style={styles.buttonspacing}>
            <Button
              title="Button 3"
              color="#E4CE41"
              onPress={() => {changeColor(ref3, cacheRef.current.toggle3 = !cacheRef.current.toggle3);}}
            />
            </View>
            <View style={styles.buttonspacing}>
            <Button
              title="Button 4"
              color="#E4CE41"
              onPress={() => {changeColor(ref4, cacheRef.current.toggle4 = !cacheRef.current.toggle4);}}
            />
            </View>
        </View>
      </View>
      <View style={styles.rightcontainer}>
        <View style={styles.boxSpacing}>
          <View ref={ref1} style={styles.box}>
            <View style={styles.inner}>
              <Text>Box 1</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxSpacing}>
        <View ref={ref2} style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 2</Text>
          </View>
        </View>
        </View>
        <View style={styles.boxSpacing}>
        <View ref={ref3} style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 3</Text>
          </View>
        </View>
        </View>
        <View style={styles.boxSpacing}>
        <View ref={ref4} style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 4</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9FA59F',
    flexDirection: 'row'
  },
  leftcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  rightcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9FA59F'
  },
  buttoncontainer: {
    justifyContent: 'center',
    marginHorizontal: 20
  },
  buttonspacing: {
    height: 85
  },
  boxSpacing: {
    height: 120
  },
  box: {
    width: '70%',
    height: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 40,
    marginHorizontal: 30,
    backgroundColor: 'cyan'
  },
  inner: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    marginVertical: -30,
    justifyContent: 'center',
  }
});
