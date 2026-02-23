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
    FlatList,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
    { id: 'all', label: 'All', icon: 'grid-outline' },
    { id: 'flood', label: 'Flood Relief', icon: 'water-outline' },
    { id: 'education', label: 'Education', icon: 'school-outline' },
    { id: 'food', label: 'Food & Hunger', icon: 'restaurant-outline' },
    { id: 'medical', label: 'Medical Aid', icon: 'medkit-outline' },
    { id: 'water', label: 'Clean Water', icon: 'water-outline' },
    { id: 'orphan', label: 'Orphan Care', icon: 'people-outline' },
];

const featuredCampaigns = [
    {
        id: '1',
        title: 'Assam Flood Relief 2024',
        description: 'Emergency food, water, and shelter for thousands displaced by devastating floods.',
        image: require('../../assets/assam_flood.png'),
        raised: '₹45,00,000',
        target: '₹1,00,00,000',
        progress: 0.45,
        donors: 1240,
        badge: 'URGENT',
        badgeColor: '#E74C3C',
        daysLeft: 12,
    },
    {
        id: '2',
        title: 'Education for Every Child',
        description: 'Sponsoring school fees, books, and uniforms for underprivileged children across India.',
        image: require('../../assets/education.png'),
        raised: '₹12,00,000',
        target: '₹30,00,000',
        progress: 0.40,
        donors: 856,
        badge: 'EDUCATION',
        badgeColor: '#3498db',
        daysLeft: 45,
    },
    {
        id: '3',
        title: 'Community Kitchen - Bihar',
        description: 'Serving 200+ hot meals daily to daily wage earners and homeless families.',
        image: require('../../assets/community_kitchen.png'),
        raised: '₹8,50,000',
        target: '₹15,00,000',
        progress: 0.57,
        donors: 623,
        badge: 'FOOD',
        badgeColor: '#F39C12',
        daysLeft: 30,
    },
];

const activeCampaigns = [
    {
        id: '4',
        title: 'Clean Water Wells in Rajasthan',
        description: 'Building bore wells and hand pumps for villages facing drought.',
        image: require('../../assets/clean_water.png'),
        raised: '₹6,20,000',
        target: '₹10,00,000',
        progress: 0.62,
        donors: 412,
        category: 'Water',
    },
    {
        id: '5',
        title: 'Winter Blanket Drive - Kashmir',
        description: 'Distributing warm blankets and winter kits to families in sub-zero areas.',
        image: require('../../assets/assam_flood.png'),
        raised: '₹3,80,000',
        target: '₹8,00,000',
        progress: 0.48,
        donors: 290,
        category: 'Relief',
    },
    {
        id: '6',
        title: 'Orphan Sponsorship Program',
        description: 'Monthly sponsorship for food, education, and healthcare of orphaned children.',
        image: require('../../assets/education.png'),
        raised: '₹18,00,000',
        target: '₹25,00,000',
        progress: 0.72,
        donors: 1050,
        category: 'Orphan',
    },
    {
        id: '7',
        title: 'Mobile Medical Camp - UP',
        description: 'Free health checkups, medicines, and surgical assistance in rural UP.',
        image: require('../../assets/community_kitchen.png'),
        raised: '₹2,40,000',
        target: '₹5,00,000',
        progress: 0.48,
        donors: 198,
        category: 'Medical',
    },
];

const topContributors = [
    { id: '1', name: 'Fatima Zahra', amount: '₹2,50,000', rank: 1, avatar: 'https://i.pravatar.cc/150?u=fatima' },
    { id: '2', name: 'Mohammad Irfan', amount: '₹1,80,000', rank: 2, avatar: 'https://i.pravatar.cc/150?u=irfan' },
    { id: '3', name: 'Ayesha Siddiqui', amount: '₹1,20,000', rank: 3, avatar: 'https://i.pravatar.cc/150?u=ayesha' },
    { id: '4', name: 'Zainab Ali', amount: '₹95,000', rank: 4, avatar: 'https://i.pravatar.cc/150?u=zainab' },
    { id: '5', name: 'Usman Khan', amount: '₹78,000', rank: 5, avatar: 'https://i.pravatar.cc/150?u=usman' },
];

const impactStats = [
    { id: '1', label: 'Meals Served', value: '1.2M+', icon: 'restaurant-outline', color: '#F39C12' },
    { id: '2', label: 'Families Helped', value: '45,000+', icon: 'people-outline', color: '#00897B' },
    { id: '3', label: 'Schools Built', value: '120+', icon: 'school-outline', color: '#3498db' },
    { id: '4', label: 'Wells Installed', value: '850+', icon: 'water-outline', color: '#9B59B6' },
];

const Explore = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTitle}>Explore</Text>
                        <Text style={styles.headerSubtitle}>Discover campaigns that need your help</Text>
                    </View>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name="options-outline" size={22} color="#00897B" />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#999" />
                    <TextInput
                        placeholder="Search campaigns, causes..."
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery('')}>
                            <Ionicons name="close-circle" size={20} color="#CCC" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={[
                                styles.categoryChip,
                                selectedCategory === cat.id && styles.categoryChipActive,
                            ]}
                            onPress={() => setSelectedCategory(cat.id)}
                        >
                            <Ionicons
                                name={cat.icon}
                                size={16}
                                color={selectedCategory === cat.id ? '#fff' : '#666'}
                            />
                            <Text
                                style={[
                                    styles.categoryLabel,
                                    selectedCategory === cat.id && styles.categoryLabelActive,
                                ]}
                            >
                                {cat.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Global Impact Stats */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Our Global Impact</Text>
                </View>
                <View style={styles.impactGrid}>
                    {impactStats.map((stat) => (
                        <View key={stat.id} style={styles.impactStatCard}>
                            <View style={[styles.impactStatIcon, { backgroundColor: stat.color + '15' }]}>
                                <Ionicons name={stat.icon} size={22} color={stat.color} />
                            </View>
                            <Text style={styles.impactStatValue}>{stat.value}</Text>
                            <Text style={styles.impactStatLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Featured Campaigns */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Featured Campaigns</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {featuredCampaigns.map((campaign) => (
                        <TouchableOpacity
                            key={campaign.id}
                            style={styles.featuredCard}
                            onPress={() => navigation.navigate('CampaignDetails')}
                        >
                            <Image source={campaign.image} style={styles.featuredImage} />
                            <View style={[styles.badge, { backgroundColor: campaign.badgeColor }]}>
                                <Text style={styles.badgeText}>{campaign.badge}</Text>
                            </View>
                            <View style={styles.daysLeftBadge}>
                                <Ionicons name="time-outline" size={12} color="#fff" />
                                <Text style={styles.daysLeftText}>{campaign.daysLeft} days left</Text>
                            </View>
                            <View style={styles.featuredInfo}>
                                <Text style={styles.featuredTitle} numberOfLines={1}>{campaign.title}</Text>
                                <Text style={styles.featuredDesc} numberOfLines={2}>{campaign.description}</Text>
                                <View style={styles.progressRow}>
                                    <View style={styles.progressBarBg}>
                                        <View style={[styles.progressBarFill, { width: `${campaign.progress * 100}%` }]} />
                                    </View>
                                    <Text style={styles.progressPercent}>{Math.round(campaign.progress * 100)}%</Text>
                                </View>
                                <View style={styles.campaignMeta}>
                                    <Text style={styles.raisedText}>{campaign.raised} raised</Text>
                                    <View style={styles.donorsBadge}>
                                        <Ionicons name="people-outline" size={12} color="#00897B" />
                                        <Text style={styles.donorsCount}>{campaign.donors}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.donateCardBtn}>
                                    <Text style={styles.donateCardBtnText}>Donate Now</Text>
                                    <Feather name="arrow-right" size={14} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Active Campaigns */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Active Campaigns</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                {activeCampaigns.map((campaign) => (
                    <TouchableOpacity
                        key={campaign.id}
                        style={styles.activeCampaignCard}
                        onPress={() => navigation.navigate('CampaignDetails')}
                    >
                        <Image source={campaign.image} style={styles.activeCampaignImage} />
                        <View style={styles.activeCampaignInfo}>
                            <View style={styles.activeCategoryBadge}>
                                <Text style={styles.activeCategoryText}>{campaign.category}</Text>
                            </View>
                            <Text style={styles.activeCampaignTitle} numberOfLines={1}>{campaign.title}</Text>
                            <Text style={styles.activeCampaignDesc} numberOfLines={2}>{campaign.description}</Text>
                            <View style={styles.activeProgressRow}>
                                <View style={styles.activeProgressBarBg}>
                                    <View style={[styles.activeProgressBarFill, { width: `${campaign.progress * 100}%` }]} />
                                </View>
                                <Text style={styles.activeProgressPercent}>{Math.round(campaign.progress * 100)}%</Text>
                            </View>
                            <View style={styles.activeMeta}>
                                <Text style={styles.activeRaisedText}>{campaign.raised}</Text>
                                <Text style={styles.activeTargetText}>of {campaign.target}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Top Contributors */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Contributors</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>Leaderboard</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.leaderboardCard}>
                    {topContributors.map((contributor, index) => (
                        <View
                            key={contributor.id}
                            style={[
                                styles.contributorRow,
                                index < topContributors.length - 1 && styles.contributorBorder,
                            ]}
                        >
                            <View style={styles.contributorLeft}>
                                <View style={[
                                    styles.rankBadge,
                                    contributor.rank === 1 && { backgroundColor: '#FFD700' },
                                    contributor.rank === 2 && { backgroundColor: '#C0C0C0' },
                                    contributor.rank === 3 && { backgroundColor: '#CD7F32' },
                                    contributor.rank > 3 && { backgroundColor: '#E0E0E0' },
                                ]}>
                                    <Text style={[
                                        styles.rankText,
                                        contributor.rank <= 3 && { color: '#fff' },
                                    ]}>
                                        {contributor.rank}
                                    </Text>
                                </View>
                                <Image source={{ uri: contributor.avatar }} style={styles.contributorAvatar} />
                                <Text style={styles.contributorName}>{contributor.name}</Text>
                            </View>
                            <Text style={styles.contributorAmount}>{contributor.amount}</Text>
                        </View>
                    ))}
                </View>

                {/* Call to Action */}
                <View style={styles.ctaCard}>
                    <View style={styles.ctaContent}>
                        <MaterialCommunityIcons name="hand-heart-outline" size={40} color="#fff" />
                        <Text style={styles.ctaTitle}>Start Your Own Campaign</Text>
                        <Text style={styles.ctaDesc}>
                            Have a cause close to your heart? Create a fundraiser and make a difference.
                        </Text>
                        <TouchableOpacity style={styles.ctaBtn}>
                            <Text style={styles.ctaBtnText}>Create Campaign</Text>
                            <Feather name="arrow-right" size={16} color="#00897B" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Recently Viewed */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Trending Now</Text>
                    <TouchableOpacity>
                        <Ionicons name="trending-up" size={20} color="#00897B" />
                    </TouchableOpacity>
                </View>
                <View style={styles.trendingRow}>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Assam Floods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Ramadan Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Orphan Care</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Medical Aid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Education</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trendingChip}>
                        <Ionicons name="flame-outline" size={14} color="#E74C3C" />
                        <Text style={styles.trendingChipText}>Clean Water</Text>
                    </TouchableOpacity>
                </View>

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
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    filterBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#E0F2F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    categoriesScroll: {
        marginBottom: 25,
        marginHorizontal: -20,
        paddingLeft: 20,
    },
    categoryChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    categoryChipActive: {
        backgroundColor: '#00897B',
        borderColor: '#00897B',
    },
    categoryLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
        marginLeft: 6,
    },
    categoryLabelActive: {
        color: '#fff',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    viewAll: {
        fontSize: 14,
        color: '#00897B',
        fontWeight: '600',
    },
    impactGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    impactStatCard: {
        width: '47%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    impactStatIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    impactStatValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 2,
    },
    impactStatLabel: {
        fontSize: 12,
        color: '#666',
    },
    horizontalScroll: {
        marginBottom: 25,
        marginHorizontal: -20,
        paddingLeft: 20,
    },
    featuredCard: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginRight: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    featuredImage: {
        width: '100%',
        height: 170,
    },
    badge: {
        position: 'absolute',
        top: 12,
        left: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '800',
    },
    daysLeftBadge: {
        position: 'absolute',
        top: 12,
        right: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    daysLeftText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
        marginLeft: 4,
    },
    featuredInfo: {
        padding: 15,
    },
    featuredTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 5,
    },
    featuredDesc: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
        marginBottom: 12,
    },
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    progressBarBg: {
        flex: 1,
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
        marginRight: 8,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00897B',
        borderRadius: 3,
    },
    progressPercent: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#00897B',
    },
    campaignMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    raisedText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    donorsBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },
    donorsCount: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#00897B',
        marginLeft: 4,
    },
    donateCardBtn: {
        backgroundColor: '#00897B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 8,
    },
    donateCardBtnText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 6,
    },
    activeCampaignCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 12,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    activeCampaignImage: {
        width: 110,
        height: '100%',
        minHeight: 130,
    },
    activeCampaignInfo: {
        flex: 1,
        padding: 12,
    },
    activeCategoryBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginBottom: 6,
    },
    activeCategoryText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00897B',
    },
    activeCampaignTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 3,
    },
    activeCampaignDesc: {
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
        marginBottom: 8,
    },
    activeProgressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    activeProgressBarBg: {
        flex: 1,
        height: 4,
        backgroundColor: '#F0F0F0',
        borderRadius: 2,
        marginRight: 8,
    },
    activeProgressBarFill: {
        height: '100%',
        backgroundColor: '#00897B',
        borderRadius: 2,
    },
    activeProgressPercent: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#00897B',
    },
    activeMeta: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeRaisedText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#00897B',
        marginRight: 4,
    },
    activeTargetText: {
        fontSize: 11,
        color: '#999',
    },
    leaderboardCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 6,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    contributorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
    },
    contributorBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    contributorLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rankBadge: {
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    rankText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
    },
    contributorAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
    },
    contributorName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    contributorAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#00897B',
    },
    ctaCard: {
        backgroundColor: '#00897B',
        borderRadius: 20,
        padding: 25,
        marginBottom: 25,
        overflow: 'hidden',
    },
    ctaContent: {
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 12,
        marginBottom: 8,
        textAlign: 'center',
    },
    ctaDesc: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 18,
    },
    ctaBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    ctaBtnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#00897B',
        marginRight: 8,
    },
    trendingRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    trendingChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#FECACA',
    },
    trendingChipText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333',
        marginLeft: 4,
    },
});

export default Explore;
