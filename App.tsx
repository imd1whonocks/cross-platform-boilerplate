import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => React.ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  const textColor = {
    color: isDarkMode ? '#FFF' : '#000',
  };
  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.root}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./assets/img/reactnative.png')}
          />
          <View style={styles.textBox}>
            <Text style={[styles.text, textColor]}>
              A boilerplate for developing cross-platform apps using React
              Native + Typescript that works on iOS, Android and web.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  textBox: {
    width: '90%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
