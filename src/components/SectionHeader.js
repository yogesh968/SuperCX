import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * SectionHeader – Row with a title and optional "View All / See More" action link
 * @param {string} title - Section heading text
 * @param {string} actionLabel - Right-side link text (optional)
 * @param {function} onAction - Right-side link press handler
 */
const SectionHeader = ({ title, actionLabel, onAction, style }) => {
    return (
        <View style={[styles.row, style]}>
            <Text style={styles.title}>{title}</Text>
            {actionLabel ? (
                <TouchableOpacity onPress={onAction} style={styles.action}>
                    <Text style={styles.actionText}>{actionLabel}</Text>
                    <Ionicons name="chevron-forward" size={14} color="#0D6B4F" />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        fontSize: 13,
        color: '#0D6B4F',
        fontWeight: '600',
        marginRight: 2,
    },
});

export default SectionHeader;
