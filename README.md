# expo-animation-example

## Create project
```bash
$ expo init expo-animation
$ cd expo-animation
$ yarn start
```

## Animation
1. Values     | Value, ValueXY        | What's the current position of the element being animated?
2. Types      | Spring, Decay, Timing | How is the animation changing?
3. Components | View, Text, Image     | Apply the animation's current position to an actual component

## Example
```bash
import { Animated } from 'react-native';

Animated.Value.Animated
Animated.Types.Spring
Animated.Components.View
```

## Swipe Deck
Prop              Type              Purpose 
renderCard        function          Returns JSX to show inside of a card 
rnderNoMoreCards  function          Returns JSX to show when no more cards exist 
data              array of objects  List of records to use for cards 
onSwipeRight      function          Called when user swipes right on an item 
onSwipeLeft       function          Called when user swipes left on an item 