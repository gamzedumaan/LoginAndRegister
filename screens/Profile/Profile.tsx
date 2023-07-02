import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile({route}) {

  return (
    <SafeAreaView>
  <View>
      <Text>{route.params.email}</Text>
    </View>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({})