import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Locationfetch } from "./redux/action";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";

export default function MySplashscreen() {
    const UpdateLocation = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(async (data) => {
        await dispatch (Locationfetch())
      })
      .catch((err) => {
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });
  
  };
 
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      UpdateLocation();
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 500 });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
     
}
