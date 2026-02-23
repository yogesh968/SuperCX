import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * DonateButton – Primary CTA button used across campaign cards
 * @param {string} label - Button text (default: 'Donate Now')
 * @param {function} onPress - Press handler
 * @param {string} variant - 'solid' | 'outline' (default: 'solid')
 */
const DonateButton = ({
    label = 'Donate Now',
    onPress,
    variant = 'solid',
    style,
}) => {
    const isSolid = variant === 'solid';
    return (
        <TouchableOpacity
            style={[
                styles.btn,
                isSolid ? styles.solid : styles.outline,
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.85}
        >
            <Text style={[styles.label, !isSolid && styles.labelOutline]}>
                {label}
            </Text>
            <Ionicons
                name="arrow-forward"
                size={16}
                color={isSolid ? '#fff' : '#0D6B4F'}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    solid: {
        backgroundColor: '#0D6B4F',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: '#0D6B4F',
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    labelOutline: {
        color: '#0D6B4F',
    },
    icon: {
        marginLeft: 6,
    },
});

export default DonateButton;
