'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TabBarIOS,
  TouchableOpacity
} = React;

var Login = React.createClass({

  handlePress: function() {
    this.props.navigator.push({ id: 'dashboard' });
  },

  render: function() {
    return (
    <View style={styles.container}>
      <Text> LOGIN  </Text>
      <TouchableOpacity onPress={this.handlePress}>
          <View>
              <Text> IR AL DASHBOARD  </Text>
          </View>
       </TouchableOpacity>
     </View>
    )
  }
});

var styles = StyleSheet.create({
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

module.exports = Login;


