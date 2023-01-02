/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import UnsplashSearch from 'react-native-unsplash';
const API_KEY = '-WqjYGeK_NEM4V9OyO8E5Iu-NxTejGcf7nUJ3bwV3B8';
const Home = () => {
  const [data, setData] = useState([]);

  //   const searchImages = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.unsplash.com/photos/random/?client_id=${API_KEY}/apple`,
  //       );
  //       if (response.status === 200) {
  //         console.log('response.data.images_results : ', response.data);
  //         setData(response.data.images_results);
  //       }
  //     } catch (error) {
  //       console.log('error : ', error);
  //     }
  //   };

  //   useEffect(() => {
  //     searchImages();
  //   }, []);

  const photoSelect = photos => {
    console.log(photos);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
      <UnsplashSearch
        style={{}}
        accessKey={API_KEY}
        onPhotoSelect={photoSelect}
      />
      {/* <Text>Home</Text> */}
    </View>
  );
};

export default Home;
