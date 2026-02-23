import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Badge component – small pill label used for campaign categories, urgency, etc.
 * @param {string} label - Text content
 * @param {string} backgroundColor - Badge background color
 * @param {string} textColor - Badge text color (default: #fff)
 * @param {string} size - 'sm' | 'md' (default: 'sm')
 */
const Badge = ({
    label = '',
    backgroundColor = '#E74C3C',
    textColor = '#fff',
    size = 'sm',
    style,
}) => {
    const isSmall = size === 'sm';
    return (
        <View
            style={[
                styles.badge,
                { backgroundColor },
                isSmall ? styles.small : styles.medium,
                style,
            ]}
        >
            <Text
                style={[
                    styles.label,
                    { color: textColor },
                    isSmall ? styles.labelSm : styles.labelMd,
                ]}
            >
                {label}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    small: {
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    medium: {
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    label: {
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    labelSm: {
        fontSize: 9,
    },
    labelMd: {
        fontSize: 11,
    },
});

export default Badge;
