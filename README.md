# Expo iOS Font Loading Crash with expo-font

This repository demonstrates a bug where an Expo app crashes on iOS when using `expo-font` to load a custom font. The app works correctly on Android.

## Bug Description

The app uses `expo-font` to load a custom TTF font.  On iOS, the app crashes immediately upon launch.  On Android, it works as expected.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Observe the crash on the iOS simulator.

## Solution

The solution involves ensuring that the font file is correctly bundled and accessible to the iOS application.  Sometimes this is due to incorrect font file naming or format.