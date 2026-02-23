import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

/**
 * UrgentCampaignCard – Horizontal scroll card for urgent campaigns on Home screen
 * @param {object} campaign - Campaign data object
 * @param {function} onPress - Card press handler
 * @param {function} onDonate - Donate Now button handler
 */
const UrgentCampaignCard = ({ campaign, onPress, onDonate }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <Image source={campaign.image} style={styles.image} />
            <View style={[styles.badge, { backgroundColor: campaign.badgeColor || '#E74C3C' }]}>
                <Text style={styles.badgeText}>{campaign.badge}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>{campaign.title}</Text>
                <View style={styles.metaRow}>
                    <Text style={styles.raised}>Raised: {campaign.raised}</Text>
                    <Text style={styles.goal}>Goal: {campaign.goal}</Text>
                </View>
                <TouchableOpacity style={styles.donateBtn} onPress={onDonate}>
                    <Text style={styles.donateBtnText}>Donate Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: width * 0.55,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginRight: 14,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 120,
    },
    badge: {
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
    },
    badgeText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    info: {
        padding: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 6,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    raised: {
        fontSize: 11,
        color: '#666',
    },
    goal: {
        fontSize: 11,
        color: '#999',
    },
    donateBtn: {
        backgroundColor: '#0D6B4F',
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },
    donateBtnText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default UrgentCampaignCard;
