import * as React from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import 'firebase/firestore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class DiaryListScreen extends React.Component<object, object> {
  state = {
    fittype: 'randome',
  };

  componentWillMount() {
    firebase
      .firestore()
      .collection('fit-log')
      .get()
      .then((snapshot) => {
        let display;
        snapshot.forEach(item => {
          display = item.data().type;
        });

        this.setState({
          fittype: display,
        });
      })
      .catch(err => {
        this.setState({
          fittype: err.message,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          raised
          // icon={{ name: 'home', size: 32 }}
          buttonStyle={{ backgroundColor: 'blue' }}
          title={this.state.fittype}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default DiaryListScreen;
