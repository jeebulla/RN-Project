import React from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default PricingTable = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Choose a plan</Text>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Basic</Text>
          <Text style={styles.pricingOptionPrice}>$5/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Perform and recieve 10 Rewards per day, 5 per transaction
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>20 user</Text>
            <Text style={styles.pricingOptionFeature}>Everything in free + Basic support</Text>
          </View>
          <Pressable style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </Pressable>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Pro</Text>
          <Text style={styles.pricingOptionPrice}>$10/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Perfrom and recieve 30 Rewards per day, 10 per transaction
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>30 users</Text>
            <Text style={styles.pricingOptionFeature}>Everything in Basic + Priority support</Text>
          </View>
          <Pressable style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </Pressable>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Enterprise</Text>
          <Text style={styles.pricingOptionPrice}>$20/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Perform and recieve unlimited Rewards
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>Unlimited users</Text>
            <Text style={styles.pricingOptionFeature}>Everything in pro + 24/7 support</Text>
          </View>
          <Pressable style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:60,
  },
  pageTitle:{
    fontSize: 30,
    fontWeight:'bold',
    color:'#390d7c',
    textAlign:'center',
    paddingVertical: 20,
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 290,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: '#666',
  },
  pricingOptionButtonContainer: {
    backgroundColor: '#390d7c',
    borderRadius: 5,
  },
  pricingOptionButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
})
