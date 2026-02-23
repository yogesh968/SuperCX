import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * ImpactStoryCard – Horizontal card for Recent Impact section on Home screen
 * @param {object} story - Story data { tag, title, description, time, image }
 * @param {function} onPress - Card press handler
 */
const ImpactStoryCard = ({ story, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.88}>
            <Image source={story.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.tag}>{story.tag}</Text>
                <Text style={styles.title} numberOfLines={2}>{story.title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{story.description}</Text>
                <View style={styles.timeRow}>
                    <Text style={styles.time}>🕐 {story.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 14,
        marginBottom: 14,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 110,
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    tag: {
        fontSize: 9,
        fontWeight: '800',
        color: '#E74C3C',
        letterSpacing: 0.8,
        marginBottom: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    desc: {
        fontSize: 12,
        color: '#888',
        lineHeight: 17,
        marginBottom: 6,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 11,
        color: '#999',
    },
});

export default ImpactStoryCard;
