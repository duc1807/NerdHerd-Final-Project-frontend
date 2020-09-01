import React, { useState } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'

import {
  BottomTabParamList,
  IndexScreenNavigationProp,
  SearchScreenNavigationProp,
  ProfileScreenNavigationProp,
} from '../../src/@types/navigation'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { HomeScreen, InformationScreen, SearchScreen } from '../screens/index'
import { TouchableOpacity } from 'react-native-gesture-handler'

import HomeStackNavigator from '../navigation/homeStackNavigator'
import { useNavigation } from '@react-navigation/native'
import { normalise, normaliseV, normaliseH } from '../helpers'
import { normaliseSizeVertical, SCREEN_WIDTH } from '../helpers/Constants'

const Tab = createBottomTabNavigator<BottomTabParamList>()

/**@reference
 * https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar
 * https://github.com/react-navigation/react-navigation/blob/main/packages/bottom-tabs/src/views/BottomTabBar.tsxs
 */

const BottomTabNavigator = () => {

  const indexNavigation = useNavigation<IndexScreenNavigationProp>()
  const searchNavigation = useNavigation<SearchScreenNavigationProp>()
  const profileNavigation = useNavigation<ProfileScreenNavigationProp>()

  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]

  const moveTab = (x: number, y: number) => {
    Animated.timing(value, {
      toValue: { x, y },
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Tab.Navigator
      initialRouteName="Index"
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          marginBottom: normaliseSizeVertical(5)
        },
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          height: normaliseV(210),
        },
      }}
    >
      <Tab.Screen
        name="Index"
        component={HomeScreen}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault()
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Animated.View style={value.getLayout()}>
                <LinearGradient
                  colors={['#017DDC', '#00BCA0']}
                  style={styles.tabBarIconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                />
              </Animated.View>
              <TouchableOpacity
                style={styles.tabbarButton}
                onPress={() => {
                  moveTab(0, 0)
                  indexNavigation.navigate('Index', { userId: '' })
                }}
              >
                <AntDesign name="home" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeStackNavigator}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault()
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity
              style={styles.tabbarButton}
              onPress={() => {
                moveTab( (SCREEN_WIDTH /10 * 3.32), 0)
                searchNavigation.navigate('Search')
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InformationScreen}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault()
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity
              style={styles.tabbarButton}
              onPress={() => {
                moveTab((SCREEN_WIDTH / 10 * 6.6), 0)
                profileNavigation.navigate('Profile', { userId: '' })
              }}
            >
              <FontAwesome5 name="user" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    width: normaliseH(310),
    height: normaliseV(150),
    position: 'absolute',
    bottom: normaliseV(-145),
    alignSelf: 'center',
    borderRadius:normaliseH(90),
    zIndex: -2,
  },
  tabbarButton: {
    height: normaliseV(145),
    borderRadius: 22,
    width: normaliseH(350),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BottomTabNavigator
