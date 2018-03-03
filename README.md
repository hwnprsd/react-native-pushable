# react-native-pushable

###### Use a cool pushable element in your react-native app. Escape the ordinary! Embrace the crazy! 

## Installation

`npm i -S react-native-pushable`

## Usage

```js
import PushableElement from 'react-native-pushable';

export default class Appx extends Component {
  state = {
    push: 'Push Me'
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
        <PushableElement
          scale={0.90}
          style={{ backgroundColor: 'white', elevation: 5, padding: 10, borderRadius: 10, }}
          onPressIn={() => {this.setState({push: 'Pushhhh'})}}
          onPressOut={() => {this.setState({push: 'Push Me'})}}
        >
          <Text style={{ fontSize: 70 }}>{this.state.push}</Text>
        </PushableElement>
      </View>
    )
  }
}
```
## Example
[![N|Solid](https://media.giphy.com/media/3Fkezfxf9vg6WQ0iRr/giphy.gif)](https://nodesource.com/products/nsolid)

## Props
| Props | description| type |isRequired  |defaultValue |
|--|--|--|--|--|
| scale | controls the scale of the element when pushed. (1 being the normal size. Anything greater or lesser is multiplied with the original) |  number | false | 0.95  |

All `touchableWithoutFeedback` props are supported

##  License
MIT





