import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const windIcon = require('./img/wind2.png');
const tempIcon = require('./img/temp2.png');
const main1Icon = require('./img/main1.png');
const main2Icon = require('./img/main2.png');
const main3Icon = require('./img/main3.png');
const main4Icon = require('./img/main4.png');
const levelIcon = require('./img/sea3.png');
const seaIcon = require('./img/sea2.png');
const groundIcon = require('./img/ground.png');
const presIcon = require('./img/pres.png');

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  + this.state.city +
  '&appid=2d7f5898bc8f84cfad4c22b948cb989c&units=metric';
  return fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
    <View style={styles.head}>
          <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center'}} >PRAKIRAAN CUACA</Text>
        </View>
      <View style={styles.sider}>
      <View style={styles.box2}>
          <Text style={{ padding: 1, fontSize: 25, color: '#67e6dc', textAlign: 'center'}} >Masukkan Nama Kota</Text>
          <TextInput
                style={ styles.isian}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={tempIcon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Temp : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={main1Icon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={main2Icon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Main Desc : { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={main3Icon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={main4Icon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Sunset : { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={presIcon} style={styles.icon} />
       </View>

          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Pressure : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={seaIcon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Humidity : { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={groundIcon} style={styles.icon} />
       </View>
          <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={windIcon} style={styles.icon} />
       </View>
        <Text style={{ padding: 1, fontSize: 12, color: '#67e6dc' }} > Wind Speed : { this.state.forecast.speed} </Text>
        </View>
        </View>
      </View>
      <View style={styles.footer}>
          <Text style={styles.textFooter} >
          Copyright @DodiArtha</Text>
        </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#0D47A1',
    flex: 1,
    flexDirection: 'column'
  },
   sider: {
    backgroundColor: '#ced6e0',
    flex: 5,
  },
  textFooter: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  
  footer: {
     backgroundColor: 'white',
    flex: 0.2,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
     backgroundColor: '#747d8c',
    flex: 0.9,
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
 
  box4: {
    flex: 0.3,
   //backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
 
  head: {
    flex: 0.4, //
    backgroundColor: '#0D47A1',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 155,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#a4b0be',
    borderColor: '#feaf12',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 100,
    width: 30,
  },
  icon: {
    //tintColor: '#fff',
    height: 20,
    width: 25,
  },
  isian: {
    backgroundColor: '#fff',
    width: 200,
    padding: 10,
    margin: 15,
  },
});
