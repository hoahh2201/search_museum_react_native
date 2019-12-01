
import React from 'react';
import { SafeAreaView } from 'react-native';
import Searchtale from './src/Searchtale';
import {MaterialCommunityIcons} from "react-native-vector-icons/MaterialCommunityIcons";


const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <Searchtale />
  </SafeAreaView>
);

export default App;