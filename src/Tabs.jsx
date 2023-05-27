import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import { useDispatch, useSelector } from "react-redux";
import Weathercall from "./Weathercall";
import { Locationfetch } from "./redux/action";

const Tab = createBottomTabNavigator();

export default function Tabs() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  
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
    UpdateLocation();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Weathercall} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}
