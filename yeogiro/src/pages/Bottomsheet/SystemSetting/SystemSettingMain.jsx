import React, {useState, useLayoutEffect} from 'react';
import {Switch} from 'react-native';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

function SettingsScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '환경 설정',
      headerStyle: {
        marginBottom: 10,
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const toggleSwitch = () => setIsPushEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentbox}>
          <Text style={styles.title}>수신 지역 설정</Text>
          <Text style={styles.subtitle}>원하는 지역을 설정합니다.</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MessageTypeSettings')}>
          <Image
            source={require('../../../../assets/icons/Next.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentbox}>
          <Text style={styles.title}>수신 지역 설정</Text>
          <Text style={styles.subtitle}>원하는 지역을 설정합니다.</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegionalSettings')}>
          <Image
            source={require('../../../../assets/icons/Next.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentbox}>
          <Text style={styles.title}>푸쉬 알람 설정</Text>
          <Text style={styles.subtitle}>알림 수신이 중단됩니다</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isPushEnabled ? '767577' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isPushEnabled}
            style={styles.switchStyle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    marginTop: 10,
  },
  switchStyle: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
    marginRight: 5,
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffff',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#262626',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#841584',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default SettingsScreen;
