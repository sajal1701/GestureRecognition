// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const loveYouGesture2 = new GestureDescription("One");

// Thumb
loveYouGesture2.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
// loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
// loveYouGesture.addDirection(
//   Finger.Thumb,
//   FingerDirection.HorizontalRight,
//   0.25
// );

// Index
loveYouGesture2.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouGesture2.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);
loveYouGesture2.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
loveYouGesture2.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);

// Pinky
// loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
// loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Ring, Finger.Pinky]) {
  loveYouGesture2.addCurl(finger, FingerCurl.FullCurl, 0.75);
  loveYouGesture2.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
