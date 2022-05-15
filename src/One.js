// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const loveYouGesture = new GestureDescription("One");

// Thumb
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
// loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
// loveYouGesture.addDirection(
//   Finger.Thumb,
//   FingerDirection.HorizontalRight,
//   0.25
// );

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

// Pinky
// loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
// loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 1);
  loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 1);
}
