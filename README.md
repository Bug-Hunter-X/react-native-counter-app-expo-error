# Expo React Native Counter App Bug

This repository demonstrates a bug encountered in an Expo React Native application after upgrading to a newer version of React Native. The bug manifests as an `Unhandled JS Exception: TypeError: undefined is not an object (evaluating 'count.toString')` on Android devices, causing the counter to display `NaN` instead of incrementing correctly.

## Bug Description

The counter app, built using React Native and Expo, functions flawlessly on iOS but throws the aforementioned error on Android after the update. The error originates from the `Text` component attempting to render the count value, implying a problem with the state management or data type of the counter variable.

## Solution

The solution involves ensuring the counter state variable is correctly initialized and handled. By explicitly checking if the `count` variable is a number before using `toString()` method, the error can be resolved.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using `expo start`.
4. Observe the error on an Android device (the app should work fine on iOS).

## Files

*   `App.js`: Contains the buggy code.
*   `AppSolution.js`: Contains the corrected code.