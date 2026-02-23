import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'water', label: 'Water' },
    { id: 'health', label: 'Health' },
    { id: 'education', label: 'Education' },
    { id: 'orphan', label: 'Orphan' },
];

const campaigns = [
    {
        id: '1',
        title: 'Medical Aid for Gaza',
        description: 'Providing emergency medical supplies and trauma care to hospitals facing critical shortages.',
        image: require('../../assets/assam_flood.jpg'),
        raised: '₹37.5L',
        goal: '₹50 Cr.',
        progress: 0.75,
        amountRaised: '₹37.5L',
        badge: 'HIGH PRIORITY',
        badgeColor: '#E74C3C',
        categoryTag: 'HEALTH',
        location: 'Gaza Region',
    },
    {
        id: '2',
        title: 'Clean Water Hand Pumps',
        description: 'Installing durable hand pumps in villages with no access to safe drinking water.',
        image: require('../../assets/clean_water.jpg'),
        raised: '₹5.04L',
        goal: '₹12 Cr.',
        progress: 0.42,
        amountRaised: '₹5.04L',
        badge: 'WATER',
        badgeColor: '#0D6B4F',
        categoryTag: 'INFRASTRUCTURE',
        location: 'Rural Mewat',
    },
    {
        id: '3',
        title: 'Back-to-School Kits',
        description: 'Providing school bags, books, and uniforms to 1000 orphaned children for the new session.',
        image: require('../../assets/education.jpg'),
        raised: '₹7.65L',
        goal: '₹8.5L',
        progress: 0.90,
        amountRaised: '₹7.65L',
        badge: 'EDUCATION',
        badgeColor: '#3498db',
        categoryTag: 'ORPHAN SUPPORT',
        location: 'Nationwide',
    },
];

const Explore = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Search Bar */}
                <View style={styles.searchRow}>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search-outline" size={20} color="#999" />
                        <TextInput
                            placeholder="Search campaigns..."
                            placeholderTextColor="#999"
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterIconBtn}>
                        <Ionicons name="options-outline" size={20} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Category Tabs */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={[
                                styles.categoryTab,
                                selectedCategory === cat.id && styles.categoryTabActive,
                            ]}
                            onPress={() => setSelectedCategory(cat.id)}
                        >
                            <Text
                                style={[
                                    styles.categoryTabText,
                                    selectedCategory === cat.id && styles.categoryTabTextActive,
                                ]}
                            >
                                {cat.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Campaign Cards */}
                {campaigns.map((campaign) => (
                    <TouchableOpacity
                        key={campaign.id}
                        style={styles.campaignCard}
                        onPress={() => navigation.navigate('CampaignDetails')}
                        activeOpacity={0.9}
                    >
                        {/* Campaign Image */}
                        <View style={styles.campaignImageWrap}>
                            <Image source={campaign.image} style={styles.campaignImage} />
                            <View style={[styles.campaignBadge, { backgroundColor: campaign.badgeColor }]}>
                                <Text style={styles.campaignBadgeText}>{campaign.badge}</Text>
                            </View>
                        </View>

                        {/* Campaign Info */}
                        <View style={styles.campaignInfo}>
                            {/* Tags */}
                            <View style={styles.tagRow}>
                                <Text style={styles.categoryTagText}>{campaign.categoryTag}</Text>
                                <Text style={styles.tagDot}>•</Text>
                                <Text style={styles.locationText}>{campaign.location}</Text>
                            </View>

                            <Text style={styles.campaignTitle}>{campaign.title}</Text>
                            <Text style={styles.campaignDesc} numberOfLines={3}>
                                {campaign.description}
                            </Text>

                            {/* Progress */}
                            <View style={styles.progressSection}>
                                <View style={styles.progressPercentRow}>
                                    <Text style={styles.progressPercent}>
                                        {Math.round(campaign.progress * 100)}%
                                    </Text>
                                    <Text style={styles.progressLabel}> Raised</Text>
                                    <Text style={styles.goalText}>Goal: {campaign.goal}</Text>
                                </View>
                                <View style={styles.progressBarBg}>
                                    <View
                                        style={[
                                            styles.progressBarFill,
                                            { width: `${campaign.progress * 100}%` },
                                        ]}
                                    />
                                </View>
                            </View>

                            {/* Amount & Donate */}
                            <View style={styles.amountRow}>
                                <View>
                                    <Text style={styles.amountLabel}>AMOUNT RAISED</Text>
                                    <Text style={styles.amountValue}>{campaign.amountRaised}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.donateBtn}
                                    onPress={() => navigation.navigate('Donation')}
                                >
                                    <Text style={styles.donateBtnText}>Donate Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContent: {
        padding: 20,
        paddingTop: 10,
    },
    // Search
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    filterIconBtn: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    // Categories
    categoryScroll: {
        marginBottom: 20,
        marginHorizontal: -20,
        paddingLeft: 20,
    },
    categoryTab: {
        paddingHorizontal: 20,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    categoryTabActive: {
        backgroundColor: '#0D6B4F',
        borderColor: '#0D6B4F',
    },
    categoryTabText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
    },
    categoryTabTextActive: {
        color: '#fff',
    },
    // Campaign Card
    campaignCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 4,
    },
    campaignImageWrap: {
        position: 'relative',
    },
    campaignImage: {
        width: '100%',
        height: 200,
    },
    campaignBadge: {
        position: 'absolute',
        top: 14,
        left: 14,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    campaignBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    campaignInfo: {
        padding: 18,
    },
    tagRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryTagText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#0D6B4F',
        letterSpacing: 0.5,
    },
    tagDot: {
        fontSize: 10,
        color: '#CCC',
        marginHorizontal: 6,
    },
    locationText: {
        fontSize: 11,
        color: '#888',
        fontWeight: '500',
    },
    campaignTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 6,
    },
    campaignDesc: {
        fontSize: 13,
        color: '#777',
        lineHeight: 20,
        marginBottom: 16,
    },
    // Progress
    progressSection: {
        marginBottom: 14,
    },
    progressPercentRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 6,
    },
    progressPercent: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    progressLabel: {
        fontSize: 12,
        color: '#0D6B4F',
        fontWeight: '500',
    },
    goalText: {
        fontSize: 12,
        color: '#999',
        marginLeft: 'auto',
    },
    progressBarBg: {
        height: 6,
        backgroundColor: '#E8F5E9',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#0D6B4F',
        borderRadius: 3,
    },
    // Amount Row
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#AAA',
        letterSpacing: 0.5,
        marginBottom: 3,
    },
    amountValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    donateBtn: {
        backgroundColor: '#0D6B4F',
        borderRadius: 10,
        paddingHorizontal: 22,
        paddingVertical: 12,
    },
    donateBtnText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Explore;
