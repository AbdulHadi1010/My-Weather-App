import React, {useEffect} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();

export default function MySplashScreen() {
  const callLocationfetch = async () => {
    await dispatch(
      Locationfetch({
        setNavigation: () => {
          navigation.navigate('Home');
        },
      }),
    );
  };

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      callLocationfetch();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});

      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <Text>My awesome app</Text>;
}
