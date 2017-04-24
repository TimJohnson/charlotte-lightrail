# clt-lightrail

## Getting Started

**Note:** This project now uses CocoaPods (thanks, Alfonso)! To start it, you must open a different file in Xcode -- `lightrail.xcworkspace`. Everything else remains the same.

### First-time React Native Setup

If this is your first time running a React Native project on this machine, following the "Getting Started" instructions in the React Native docs [here](https://facebook.github.io/react-native/docs/getting-started.html#requirements). No need to do the `react-native init AwesomeProject` part since this project has already been initialized.

### Project Setup

* `git clone https://github.com/alfonso-cabrera/clt-lightrail.git`
* `cd clt-lightrail`
* `git fetch`
* `git checkout development`
* `npm install`
* `rnpm link` - check that everything is linked up!
* `gem install cocoapods` - might need to run with sudo!
* `cd ios && pod install` - install cocoapods dependencies. (If you get an error a `pod update` may be required.)
* Open the file `lightrail.xcworkspace` in Xcode, select your target simulator or device and press the play button to build and run. (I no longer recommend the `react-native run-ios` command.)
* If the node server doesn't start up along with it in Debug mode, try opening the FOLDER containing the `xcworkspace` folder. If that doesn't work, you can start the debug server separately first by running `npm start`.

If you get a red screen when the Simulator starts up, wait a moment and then refresh. And make sure your debug server is running (see above).

## To Test on Device (with dev server running on computer)

* Replace `localhost` on line 54 of `/node_modules/react-native/Libraries/WebSocket/RCTWebSocketExecutor.m` with your computer's IP address.
* Do the same on line 41 of `ios/lightrail/AppDelegate.m`.
* Open the project in Xcode and plug in the device via USB. Ensure your device and computer are on the same WiFi network.
* Select your device from the top of the simulator dropdown menu. It will take you through some setup.
* Push the play button to build and run it on your device. The first time you do so, it will give you a bunch of certificate errors. Blaze through them. You might need to start it one more time if it fails, but it should work.
* Once it's up on your phone or device, you should be able to disconnect from USB. The app will continue working as long as the server stays up in terminal.
* Shake the device to debug on the computer in Chrome (wirelessly) or to enable hot reloading.

Pretty neat!

## To Test on Device (untethered, no dev server, in Production mode, Codepush active)

* Ensure the two lines we talked about above say `localhost`
* Change from `Debug` to `Release` in Xcode (Go to Product > Scheme > Edit Scheme (make sure you're editing the 'lightrail' scheme) and under 'Run', change the Build configuration to Release)
* Push play in Xcode (with your device plugged in and selected)
* If when it launches you get a red error screen, shake the device, dismiss the error, and quickly (before the error reappears) push the option to Disable Chrome Devtools.

## To Change App Icon

* Upload image (1024x1024) to http://makeappicon.com/
* Zip package will contain iOS `AppIcon.appiconset` directory.
* In Xcode, open lightrail > lightrail > Images.xcassets in the navigation on the left. You should see the current iconset on the right.
* Right click on that icon set to delete.
* Drag the `AppIcon.appiconset` directory to the area you just deleted from and it will add the new icon set.
* Run the app!


## To Change the Splash Screen

1. Upload png image (2208x2208) to http://ticons.fokkezb.nl/
1. In settings, select "Splashes" and iPhone as platform. Untick "Alloy."
1. generated
1. Zip package will contain images.
1. In Xcode, open lightrail > lightrail > Images.xcassets in the navigation on the left. You should see the current iconset on the right.
1. Right click under that iconset and tell it to create a new splash screen icon set.
1. Drag the images to the area you just created and it will add the images to the proper slots in the new icon set.
1. Go to your app's settings in Xcode > General > App Icons and Launch Images.
1. Blank out "Launch Screen File"
1. Click to add the asset you created above to "Launch Images Source". It may create a new one but then it will let you change it to the one you created.
1. Optionally, delete the one it created for you.
1. Delete the app on your device. (This one tripped me up.)
1. Run the app!

We'll need to play with this a bit. In dev, it still has a white screen after the splash, but that might go away in production mode. We can see about getting rid of the splash screen entirely too.

## Currently Using

* https://github.com/aksonov/react-native-router-flux
* https://github.com/ide/react-native-button

# clt-lightrail

* https://github.com/mapbox/react-native-mapbox-gl
* https://github.com/skv-headless/react-native-scrollable-tab-view
* https://github.com/Microsoft/react-native-code-push

## Credentials

### Mapbox
* **URL:** http://www.mapbox.com
* **Username:** [REDACTED]
* **Password:** [REDACTED]
* **Styles builder:** https://www.mapbox.com/studio/

### CodePush Keys
* **Production:** [CODEPUSH_PRODUCTION_API_KEY]
* **Staging:** [CODEPUSH_STAGING_API_KEY]

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)