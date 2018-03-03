
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);

class PushableElement extends Component {
    constructor(props) {
        super(props);
        this.animatedPress = new Animated.Value(0);
    }

    onPressIn = () => {
        Animated.spring(this.animatedPress, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
        this.props.onPressIn ? this.props.onPressIn() : null;
    }

    onPressOut = () => {
        Animated.spring(this.animatedPress, {
            toValue: 0,
            useNativeDriver: true,
        }).start()
        this.props.onPressOut ? this.props.onPressOut() : null;
    }
    render() {
        const SCALE_VAL = this.props.scale;
        let animatedStyle = {
            transform: [
                {
                    scale: this.animatedPress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, SCALE_VAL],
                        extrapolate: 'clamp'
                    })
                },
            ]
        }
        return (
            <TouchableWithoutFeedback {...this.props} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
                <Animated.View
                    style={[{ ...this.props.style }, animatedStyle]}
                >
                    {this.props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

PushableElement.propTypes = {
    scale: PropTypes.number
}

PushableElement.defaultProps = {
    scale: 0.95
}
