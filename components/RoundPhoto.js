import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from "expo";

// Component Styles
import styles from './RoundPhoto.styles';

export const RoundPhoto = ({ 
    photoUri, photoSize, 
    style 
}) => (
    <View 
        style={[{
            width: photoSize,
            height: photoSize,
        }, style]}>
        <Image
            source={{ uri: photoUri }}
            resizeMode="cover"
            borderRadius={(photoSize - 6) / 2}
            style={[
                {
                    width: photoSize - 6,
                    height: photoSize - 6,
                }, 
                styles.photo
            ]} 
        />
        <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
            locations={[0, 1]}
            colors={['rgb(249,205,38)', 'rgb(255,82,79)']}
            style={[
                {
                    width: photoSize,
                    height: photoSize,
                    borderRadius: photoSize / 2,
                }, 
                styles.photoRing,
            ]} 
        />
    </View>
);
