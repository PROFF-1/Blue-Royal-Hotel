{/*import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const filters = ['The Royal', 'Standard', 'Executive', 'King Suite', 'Deluxe Suite'];

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('Standard');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.tabItem,
        activeFilter === item && styles.activeTabItem,
      ]}
      onPress={() => setActiveFilter(item)}
    >
      <Text style={[
        styles.tabText,
        activeFilter === item && styles.activeTabText
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 23 
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  activeTabItem: {
    backgroundColor: '#14274A',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Filters;
*/}


import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions,Platform} from 'react-native';

const filters = ['The Royal', 'Standard', 'Executive', 'King Suite', 'Deluxe Suite'];
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Responsive font size function
const getFontSize = (size) => Math.round((size * SCREEN_WIDTH) / 375);

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('Standard');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.tabItem,
        activeFilter === item && styles.activeTabItem,
      ]}
      onPress={() => setActiveFilter(item)}
    >
      <Text style={[
        styles.tabText,
        activeFilter === item && styles.activeTabText,
        { fontSize: getFontSize(10) } // Responsive font size
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 23 
  },
  tabItem: {
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center',
    width: 100,
  },
  activeTabItem: {
    backgroundColor: '#14274A',
  },
  tabText: {
    color: '#333',
    width: '60%',
    textAlign: 'center',

  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Filters;