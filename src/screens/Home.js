import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?u=ahmed' }}
                            style={styles.avatar}
                        />
                        <View style={styles.greetingContainer}>
                            <Text style={styles.greetingLabel}>Assalamu Alaikum,</Text>
                            <Text style={styles.userName}>Ahmed Abdullah</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                {/* Impact Card */}
                <View style={styles.impactCard}>
                    <View style={styles.impactContent}>
                        <Text style={styles.impactLabel}>Your Total Impact</Text>
                        <Text style={styles.impactCount}>12 Families</Text>
                        <Text style={styles.impactSubtext}>Supported through your generous contributions</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop' }}
                        style={styles.impactImage}
                        blurRadius={2}
                    />
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#999" />
                    <TextInput
                        placeholder="Search campaigns (e.g., Assam Relief)"
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                    />
                </View>

                {/* Urgent Relief Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Urgent Relief</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity
                        style={styles.reliefCard}
                        onPress={() => navigation.navigate('CampaignDetails')}
                    >
                        <Image
                            source={require('../../assets/assam_flood.png')}
                            style={styles.reliefImage}
                        />
                        <View style={styles.urgentBadge}>
                            <Text style={styles.urgentText}>URGENT</Text>
                        </View>
                        <View style={styles.reliefInfo}>
                            <Text style={styles.reliefTitle}>Assam Flood Relief</Text>
                            <Text style={styles.reliefDescription} numberOfLines={2}>
                                Providing food, clean water, and shelter to thousands affected by heavy floods.
                            </Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressBarBg}>
                                    <View style={[styles.progressBarFill, { width: '65%' }]} />
                                </View>
                                <TouchableOpacity style={styles.donateBtnSmall}>
                                    <Text style={styles.donateBtnText}>Donate</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.progressText}>65% of target reached</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reliefCard}>
                        <Image
                            source={require('../../assets/education.png')}
                            style={styles.reliefImage}
                        />
                        <View style={[styles.urgentBadge, { backgroundColor: '#3498db' }]}>
                            <Text style={styles.urgentText}>EDUCATION</Text>
                        </View>
                        <View style={styles.reliefInfo}>
                            <Text style={styles.reliefTitle}>Education for All</Text>
                            <Text style={styles.reliefDescription} numberOfLines={2}>
                                Sponsoring school fees and books for underprivileged children.
                            </Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressBarBg}>
                                    <View style={[styles.progressBarFill, { width: '40%' }]} />
                                </View>
                                <TouchableOpacity style={styles.donateBtnSmall}>
                                    <Text style={styles.donateBtnText}>Donate</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.progressText}>40% of target reached</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                {/* Quick Donation Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Quick Donation</Text>
                </View>
                <View style={styles.quickGrid}>
                    <TouchableOpacity style={styles.quickItem} onPress={() => navigation.navigate('Donation')}>
                        <View style={[styles.quickIconContainer, { backgroundColor: '#E8F5E9' }]}>
                            <Ionicons name="wallet-outline" size={24} color="#00897B" />
                        </View>
                        <Text style={styles.quickLabel}>Zakat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickItem} onPress={() => navigation.navigate('Donation')}>
                        <View style={[styles.quickIconContainer, { backgroundColor: '#E0F2F1' }]}>
                            <Ionicons name="heart-outline" size={24} color="#00796B" />
                        </View>
                        <Text style={styles.quickLabel}>Sadaqa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickItem} onPress={() => navigation.navigate('Donation')}>
                        <View style={[styles.quickIconContainer, { backgroundColor: '#F3E5F5' }]}>
                            <Ionicons name="gift-outline" size={24} color="#7B1FA2" />
                        </View>
                        <Text style={styles.quickLabel}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickItem} onPress={() => navigation.navigate('Donation')}>
                        <View style={[styles.quickIconContainer, { backgroundColor: '#E1F5FE' }]}>
                            <Ionicons name="star-outline" size={24} color="#0288D1" />
                        </View>
                        <Text style={styles.quickLabel}>Relief</Text>
                    </TouchableOpacity>
                </View>

                {/* Recent Impact Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Impact</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>See Stories</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.storyCard}>
                    <Image
                        source={require('../../assets/community_kitchen.png')}
                        style={styles.storyImage}
                    />
                    <View style={styles.storyInfo}>
                        <Text style={styles.storyTitle}>New community kitchen opened in Bihar</Text>
                        <Text style={styles.storyDescription}>
                            Serving 200+ hot meals daily to daily wage earners.
                        </Text>
                        <TouchableOpacity style={styles.readMoreBtn}>
                            <Text style={styles.readMoreText}>READ FULL STORY </Text>
                            <Feather name="arrow-right" size={14} color="#00897B" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.storyCard}>
                    <Image
                        source={require('../../assets/clean_water.png')}
                        style={styles.storyImage}
                    />
                    <View style={styles.storyInfo}>
                        <Text style={styles.storyTitle}>Clean water project completed in Yemen</Text>
                        <Text style={styles.storyDescription}>
                            Safe drinking water accessible to over 1,500 villagers.
                        </Text>
                        <TouchableOpacity style={styles.readMoreBtn}>
                            <Text style={styles.readMoreText}>READ FULL STORY </Text>
                            <Feather name="arrow-right" size={14} color="#00897B" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

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
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    greetingLabel: {
        fontSize: 14,
        color: '#666',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    notificationBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    notificationDot: {
        position: 'absolute',
        top: 10,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E74C3C',
        borderWidth: 1.5,
        borderColor: '#fff',
    },
    impactCard: {
        height: 140,
        backgroundColor: '#00897B',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 20,
    },
    impactContent: {
        flex: 2,
        zIndex: 1,
    },
    impactLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        marginBottom: 4,
    },
    impactCount: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    impactSubtext: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
    },
    impactImage: {
        position: 'absolute',
        right: -20,
        bottom: -40,
        width: 180,
        height: 180,
        opacity: 0.3,
        transform: [{ rotate: '-10deg' }],
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 25,
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
    horizontalScroll: {
        marginBottom: 25,
        marginHorizontal: -20,
        paddingLeft: 20,
    },
    reliefCard: {
        width: 280,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginRight: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    reliefImage: {
        width: '100%',
        height: 150,
    },
    urgentBadge: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: '#E74C3C',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    urgentText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '800',
    },
    reliefInfo: {
        padding: 15,
    },
    reliefTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 5,
    },
    reliefDescription: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
        marginBottom: 12,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    progressBarBg: {
        flex: 1,
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
        marginRight: 10,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00897B',
        borderRadius: 3,
    },
    donateBtnSmall: {
        backgroundColor: '#00897B',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    donateBtnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    progressText: {
        fontSize: 11,
        color: '#999',
    },
    quickGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    quickItem: {
        width: '47%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    quickIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    quickLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    storyCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    storyImage: {
        width: 100,
        height: '100%',
    },
    storyInfo: {
        flex: 1,
        padding: 15,
    },
    storyTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    storyDescription: {
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
        marginBottom: 8,
    },
    readMoreBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    readMoreText: {
        fontSize: 12,
        color: '#00897B',
        fontWeight: 'bold',
    },
});

export default Home;
