/**
 * Home Screen - Jamiat Foundation Donation App
 * Displays: Header, Quran verse banner, stats, search, filter tabs,
 * urgent campaigns, quick donation grid, daily giving CTA, recent impact.
 */
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
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const filterTabs = ['All', 'General', 'Sadqa'];

const urgentCampaigns = [
    {
        id: '1',
        title: 'Assam Flood Relief 2024',
        image: require('../../assets/assam_flood.jpg'),
        raised: '₹15.4L',
        goal: '₹25L',
        badge: 'URGENT',
        badgeColor: '#E74C3C',
    },
    {
        id: '2',
        title: 'Orphan Support Program',
        image: require('../../assets/education.jpg'),
        raised: '₹4.',
        goal: '₹10L',
        badge: 'EDUCATION',
        badgeColor: '#3498db',
    },
];

const quickDonations = [
    { id: '1', label: 'Zakat', subtitle: 'OBLIGATORY', icon: 'wallet-outline', color: '#0D6B4F', bgColor: '#E8F5E9' },
    { id: '2', label: 'Sadaqa', subtitle: 'VOLUNTARY', icon: 'heart-outline', color: '#E91E63', bgColor: '#FCE4EC' },
    { id: '3', label: 'General', subtitle: 'YOUR CONTRIBUTION', icon: 'gift-outline', color: '#7B1FA2', bgColor: '#F3E5F5' },
    { id: '4', label: 'Interest', subtitle: 'PURIFICATION', icon: 'cash-outline', color: '#0288D1', bgColor: '#E1F5FE' },
];

const recentImpact = [
    {
        id: '1',
        tag: 'SUCCESS STORY',
        title: 'Clean Water in Mewat',
        description: 'Installed 5 hand pumps, providing clean water to 200 families...',
        time: '2 hrs ago',
        image: require('../../assets/clean_water.jpg'),
    },
    {
        id: '2',
        tag: 'SUCCESS STORY',
        title: 'Free Eye Surgery Camp',
        description: '150 successful cataract surgeries performed this weekend in...',
        time: '5 days ago',
        image: require('../../assets/community_kitchen.jpg'),
    },
];

const Home = ({ navigation }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <View style={styles.logoContainer}>
                            <MaterialCommunityIcons name="mosque" size={22} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Jamiat Foundation</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Ionicons name="notifications-outline" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Quran Verse Banner */}
                <View style={styles.quranBanner}>
                    <Text style={styles.quranLabel}>QURAN VERSE</Text>
                    <Text style={styles.quranText}>
                        "And whatever you spend in good - it is for yourselves"
                    </Text>
                    <Text style={styles.quranRef}>Al Baqarah 2:272</Text>
                </View>

                {/* Stats Bar */}
                <View style={styles.statsBar}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>50K+</Text>
                        <Text style={styles.statLabel}>Lives</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>₹2.4Cr</Text>
                        <Text style={styles.statLabel}>Raised</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>12K+</Text>
                        <Text style={styles.statLabel}>Donors</Text>
                    </View>
                </View>

                <View style={styles.contentPadding}>
                    {/* Search Bar */}
                    <View style={styles.searchContainer}>
                        <Ionicons name="search-outline" size={20} color="#999" />
                        <TextInput
                            placeholder="Search campaigns..."
                            placeholderTextColor="#999"
                            style={styles.searchInput}
                        />
                    </View>

                    {/* Filter Tabs */}
                    <View style={styles.filterRow}>
                        {filterTabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[
                                    styles.filterTab,
                                    activeFilter === tab && styles.filterTabActive,
                                ]}
                                onPress={() => setActiveFilter(tab)}
                            >
                                <Text
                                    style={[
                                        styles.filterTabText,
                                        activeFilter === tab && styles.filterTabTextActive,
                                    ]}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Urgent Campaigns */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Urgent Campaigns</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.urgentScroll}
                >
                    {urgentCampaigns.map((campaign) => (
                        <TouchableOpacity
                            key={campaign.id}
                            style={styles.urgentCard}
                            onPress={() => navigation.navigate('CampaignDetails')}
                        >
                            <Image source={campaign.image} style={styles.urgentImage} />
                            <View style={[styles.urgentBadge, { backgroundColor: campaign.badgeColor }]}>
                                <Text style={styles.urgentBadgeText}>{campaign.badge}</Text>
                            </View>
                            <View style={styles.urgentInfo}>
                                <Text style={styles.urgentTitle}>{campaign.title}</Text>
                                <View style={styles.urgentMetaRow}>
                                    <Text style={styles.urgentRaised}>Raised: {campaign.raised}</Text>
                                    <Text style={styles.urgentGoal}>Goal: {campaign.goal}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.donateNowBtn}
                                    onPress={() => navigation.navigate('Donation')}
                                >
                                    <Text style={styles.donateNowText}>Donate Now</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.contentPadding}>
                    {/* Quick Donation */}
                    <Text style={styles.sectionTitleStandalone}>Quick Donation</Text>
                    <View style={styles.quickGrid}>
                        {quickDonations.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.quickItem}
                                onPress={() => navigation.navigate('Donation')}
                            >
                                <View style={[styles.quickIconWrap, { backgroundColor: item.bgColor }]}>
                                    <Ionicons name={item.icon} size={24} color={item.color} />
                                </View>
                                <Text style={styles.quickLabel}>{item.label}</Text>
                                <Text style={styles.quickSublabel}>{item.subtitle}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Daily Giving CTA */}
                    <View style={styles.dailyGivingBanner}>
                        <View>
                            <Text style={styles.dailyGivingTitle}>Start Your Daily Giving</Text>
                            <Text style={styles.dailyGivingSubtitle}>Just ₹1/Day</Text>
                        </View>
                        <TouchableOpacity style={styles.setupBtn}>
                            <Text style={styles.setupBtnText}>Set Up Now</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Recent Impact */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Impact</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>Read More</Text>
                        </TouchableOpacity>
                    </View>

                    {recentImpact.map((story) => (
                        <TouchableOpacity key={story.id} style={styles.impactCard}>
                            <Image source={story.image} style={styles.impactImage} />
                            <View style={styles.impactInfo}>
                                <Text style={styles.impactTag}>{story.tag}</Text>
                                <Text style={styles.impactTitle}>{story.title}</Text>
                                <Text style={styles.impactDesc} numberOfLines={2}>
                                    {story.description}
                                </Text>
                                <View style={styles.impactTimeRow}>
                                    <Ionicons name="time-outline" size={12} color="#999" />
                                    <Text style={styles.impactTime}>{story.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                    <View style={{ height: 100 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 12,
        backgroundColor: '#0D6B4F',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    notificationBtn: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Quran Banner
    quranBanner: {
        backgroundColor: '#0D6B4F',
        paddingHorizontal: 20,
        paddingBottom: 25,
        paddingTop: 5,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    quranLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: 1.5,
        marginBottom: 6,
    },
    quranText: {
        fontSize: 16,
        color: '#fff',
        fontStyle: 'italic',
        lineHeight: 24,
        marginBottom: 6,
    },
    quranRef: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'right',
    },
    // Stats Bar
    statsBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: -14,
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 5,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    statLabel: {
        fontSize: 11,
        color: '#999',
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#E8E8E8',
    },
    // Content
    contentPadding: {
        paddingHorizontal: 20,
    },
    // Search
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 48,
        marginTop: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    // Filter Tabs
    filterRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    filterTab: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    filterTabActive: {
        backgroundColor: '#0D6B4F',
        borderColor: '#0D6B4F',
    },
    filterTabText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
    },
    filterTabTextActive: {
        color: '#fff',
    },
    // Section Header
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    sectionTitleStandalone: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 14,
        marginTop: 6,
    },
    viewAll: {
        fontSize: 13,
        color: '#0D6B4F',
        fontWeight: '600',
    },
    // Urgent Campaigns
    urgentScroll: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingBottom: 5,
        marginBottom: 10,
    },
    urgentCard: {
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
    urgentImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    urgentBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
    },
    urgentBadgeText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    urgentInfo: {
        padding: 12,
    },
    urgentTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 6,
    },
    urgentMetaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    urgentRaised: {
        fontSize: 11,
        color: '#666',
    },
    urgentGoal: {
        fontSize: 11,
        color: '#999',
    },
    donateNowBtn: {
        backgroundColor: '#0D6B4F',
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },
    donateNowText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    // Quick Donation
    quickGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    quickItem: {
        width: '47%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 18,
        alignItems: 'center',
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    quickIconWrap: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    quickLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
    },
    quickSublabel: {
        fontSize: 9,
        fontWeight: '600',
        color: '#AAA',
        letterSpacing: 0.8,
        marginTop: 2,
    },
    // Daily Giving Banner
    dailyGivingBanner: {
        backgroundColor: '#0D6B4F',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    dailyGivingTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    dailyGivingSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)',
        marginTop: 2,
    },
    setupBtn: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 9,
    },
    setupBtnText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    // Recent Impact
    impactCard: {
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
    impactImage: {
        width: 100,
        height: 110,
    },
    impactInfo: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    impactTag: {
        fontSize: 9,
        fontWeight: '800',
        color: '#E74C3C',
        letterSpacing: 0.8,
        marginBottom: 4,
    },
    impactTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    impactDesc: {
        fontSize: 12,
        color: '#888',
        lineHeight: 17,
        marginBottom: 6,
    },
    impactTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    impactTime: {
        fontSize: 11,
        color: '#999',
        marginLeft: 4,
    },
});

export default Home;
