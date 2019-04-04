import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import Navigation from 'src/navigations';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

const { width, height } = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  state = {
    loaded: false,
  };

  componentDidMount() {
    // Animated.parallel([
    //   Animated.timing(this.animatedValue, {
    //     toValue: 70,
    //     duration: 3000,
    //     // easing: Easing.inOut() 해당기능은 Animated.spring에서만 작동함
    //   }),
    //   Animated.timing(this.animatedValue2, {
    //     toValue: 0,
    //     delay: 200,
    //     duration: 3000
    //   })
    // ]).start(() => this.setState({ loaded: true }));
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 400,
      delay: 2500,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000,
    }).start(() => this.setState({ loaded: true }));
  }

  render() {
    // const truckStyle = {
    //   opacity: this.animatedValue
    // };
    const truckStyle = {
      transform: [{ scale: this.animatedValue }],
    };
    const scaleText = {
      transform: [{ scale: this.animatedValue2 }],
    };
    // const truckStyle = {
    //   left: this.animatedValue
    // };

    // const scaleText = {
    //   opacity: this.animatedValue2
    // };

    const { loaded } = this.state;
    // return loaded ? (
    return <Navigation />;
    // ) : (
    //   <LinearGradient
    //     colors={[
    //       "#00FFFF",
    //       "#17C8FF",
    //       "#329BFF",
    //       "#4C64FF",
    //       "#6536FF",
    //       "#8000FF"
    //     ]}
    //     style={styles.container}
    //   >
    //     <Animated.View style={[styles.ring, truckStyle]}>
    //       <Animated.Image
    //         source={require("src/assets/images/logo.png")}
    //         style={{
    //           resizeMode: "contain",
    //           width: width,
    //           height: height
    //         }}
    //       />
    //     </Animated.View>

    //     <Animated.View
    //       style={[
    //         {
    //           position: "absolute",
    //           bottom: 20,
    //           width: width / 2,
    //           height: 4,
    //           backgroundColor: "#fff",
    //           borderRadius: 2
    //         },
    //         scaleText
    //       ]}
    //     />
    //   </LinearGradient>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0277BD',
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
  ring: {
    // backgroundColor: "#40C4FF",
    // borderRadius: 150,
    // borderWidth: 2,
    // borderColor: "#FFF",
    padding: 7,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
});
