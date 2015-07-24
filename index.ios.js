/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var Dashboard  = require('./app/screens/Dashboard');
var Login      = require('./app/screens/Login');

var ReactDemo = React.createClass({


  renderScene: function(route, nav) {
      switch (route.id) {
        case 'dashboard':
          return <Dashboard navigator={nav}/>;
        case 'login':
          return <Login navigator={nav}/>;
        default:
          return (
            <Login navigator={nav}/>
          );
      }
  },
  render: function() {
    return (
      <Navigator
      style={{backgroundColor: '#fff'}}
      initialRoute={{ id: "login" }}
      renderScene={this.renderScene}
      configureScene={(route) => {
          if (route.sceneConfig) {
              return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }
      }/>
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

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
