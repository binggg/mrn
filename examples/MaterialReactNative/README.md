# MaterialReactNative

The MaterialReactNative is a sample app that showcases MRN components.

## Running this app

Before running the app, make sure you ran:

```
git clone https://github.com/binggg/mrn.git
cd mrn
npm install
cd examples/MaterialReactNative
npm install
```

### Runing on Android

You'll need to have all the [prerequisites](https://github.com/facebook/react-native/tree/master/ReactAndroid#prerequisites) (SDK, NDK) for Building React Native installed.

Start an Android emulator ([Genymotion](https://www.genymotion.com) is recommended).

```
	cd android
	./gradlew installDebug
    cd ../../../
    ./node_modules/react-native/packager/packager.sh --root examples/MaterialReactNative/
```

_Note: Building for the first time can take a while._

Open the MaterialReactNative app in your emulator.

See [Running on Device](https://facebook.github.io/react-native/docs/running-on-device-android.html) in case you want to use a physical device.

## Built from source

Building the app on Android means building MRN library from source. This way you're running the latest MRN components the way you see it in your clone of the github repo.

This is different from apps created using `npm install mrn` which have a dependency on a specific version of MRN, declared in a `package.json` file 

## Screenshots

![MRN Screenshots](http://mrn.js.org/user/image/Feature1.png)
![MRN Screenshots](http://mrn.js.org/user/image/Feature2.png)
![MRN Screenshots](http://mrn.js.org/user/image/Feature3.png)
![MRN Screenshots](http://mrn.js.org/user/image/Feature4.png)
![MRN Screenshots](http://mrn.js.org/user/image/Feature5.png)
![MRN Screenshots](http://mrn.js.org/user/image/Feature6.png)

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
