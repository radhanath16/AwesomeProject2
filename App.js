/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

// import Login from './components/Login';
// const App = () => {
//   return(
//     <View>
//       {/* <Text>Welcome to React Native</Text> */}
//       <Login/>
//     </View>
//   )
  
// };
class App extends React.Component{
  constructor(){
    super();
    this.state= {
      data: []
    }
  }
  componentDidMount(){
    this.callApi();
  }
  async callApi(){
    let response = await fetch('https://reactnative.dev/movies.json');
    let responseJson = await response.json();
    this.setState({data:responseJson.movies})
  }
  render(){
    return(
      <View>
        <Text>
        API Call
        </Text>
        <FlatList
        data={this.state.data}
        renderItem={({item})=><Text>{item.title}</Text>}
        />
      </View>

    )
  }
}
export default App;
