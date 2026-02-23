import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * ProgressBar component
 * @param {number} progress - Value between 0 and 1
 * @param {string} color - Fill color (default: '#0D6B4F')
 * @param {number} height - Bar height in px (default: 6)
 */
const ProgressBar = ({ progress = 0, color = '#0D6B4F', height = 6 }) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 1);
    const pct = `${Math.round(clampedProgress * 100)}%`;

    return (
        <View style={[styles.track, { height }]}>
            <View
                style={[
                    styles.fill,
                    { width: pct, backgroundColor: color, height },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    track: {
        backgroundColor: '#E8F5E9',
        borderRadius: 99,
        overflow: 'hidden',
        width: '100%',
    },
    fill: {
        borderRadius: 99,
    },
});

export default ProgressBar;
