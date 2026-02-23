import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Impact = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Impact Dashboard</Text>
                <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name="settings-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* User Profile Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?u=ahmedkhan' }}
                            style={styles.avatar}
                        />
                        <View style={styles.goldBadge}>
                            <Text style={styles.goldBadgeText}>GOLD</Text>
                        </View>
                    </View>
                    <Text style={styles.greeting}>Assalamu Alaikum, Ahmed Khan</Text>
                    <Text style={styles.memberInfo}>Member since Sept 2021 • ID: JUH-8829</Text>
                    <TouchableOpacity style={styles.editProfileBtn}>
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Impact Cards */}
                <View style={styles.mainImpactCard}>
                    <Text style={styles.cardLabel}>TOTAL IMPACT</Text>
                    <View style={styles.amountRow}>
                        <Text style={styles.impactAmount}>₹50,000</Text>
                        <View style={styles.comparisonBadge}>
                            <Text style={styles.comparisonText}>+15% vs LY</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.cardLabel}>LIVES TOUCHED</Text>
                        <Text style={styles.statValue}>120+</Text>
                        <View style={styles.statProgress}>
                            <View style={[styles.statFill, { width: '70%', backgroundColor: '#00897B' }]} />
                        </View>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.cardLabel}>CAMPAIGNS</Text>
                        <Text style={styles.statValue}>5</Text>
                        <View style={styles.campaignList}>
                            <View style={[styles.campaignDot, { backgroundColor: '#B2DFDB' }]}><Text style={styles.dotText}>R</Text></View>
                            <View style={[styles.campaignDot, { backgroundColor: '#C8E6C9' }]}><Text style={styles.dotText}>E</Text></View>
                            <View style={[styles.campaignDot, { backgroundColor: '#B2EBF2' }]}><Text style={styles.dotText}>W</Text></View>
                        </View>
                    </View>
                </View>

                {/* Tax Savings Card */}
                <View style={styles.taxCard}>
                    <View style={styles.taxInfo}>
                        <Text style={styles.taxTitle}>Tax Savings (80G)</Text>
                        <Text style={styles.taxSubtitle}>
                            Download your FY 2023-24 tax-exempt certificate now.
                        </Text>
                        <TouchableOpacity style={styles.downloadReceiptBtn}>
                            <Feather name="download" size={16} color="#00897B" />
                            <Text style={styles.downloadReceiptText}> Download 80G Receipt</Text>
                        </TouchableOpacity>
                    </View>
                    <Ionicons name="document-text-outline" size={80} color="rgba(255,255,255,0.1)" style={styles.taxIconBg} />
                </View>

                {/* Impact Timeline */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Impact Timeline</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.timelineContainer}>
                    <View style={styles.timelineItem}>
                        <View style={styles.timelineLeft}>
                            <View style={styles.timelineDot} />
                            <View style={styles.timelineLine} />
                        </View>
                        <View style={styles.timelineContent}>
                            <Text style={styles.timelineDate}>OCT 2023</Text>
                            <Text style={styles.timelineTitle}>Handpump Installed in Bihar</Text>
                            <Text style={styles.timelineDesc}>
                                Your Zakat helped provide clean water to a village of 45 households.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.timelineItem}>
                        <View style={styles.timelineLeft}>
                            <View style={styles.timelineDot} />
                            <View style={[styles.timelineLine, { backgroundColor: 'transparent' }]} />
                        </View>
                        <View style={styles.timelineContent}>
                            <Text style={styles.timelineDate}>JUN 2023</Text>
                            <Text style={styles.timelineTitle}>Eid Food Kit Distribution</Text>
                            <Text style={styles.timelineDesc}>
                                10 families in New Delhi received essential groceries for a month.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Donation History */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Donation History</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>View Statement</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.historyItem}>
                    <View style={[styles.historyIcon, { backgroundColor: '#E0F2F1' }]}>
                        <Ionicons name="heart-outline" size={24} color="#00897B" />
                    </View>
                    <View style={styles.historyInfo}>
                        <Text style={styles.historyTitle}>Ramadan Food Pack</Text>
                        <Text style={styles.historyDate}>JUN 10, 2023 • #8821</Text>
                    </View>
                    <View style={styles.historyRight}>
                        <Text style={styles.historyAmount}>₹5,000</Text>
                        <Feather name="download" size={16} color="#00897B" style={{ marginTop: 4 }} />
                    </View>
                </View>

                <View style={styles.historyItem}>
                    <View style={[styles.historyIcon, { backgroundColor: '#E8F5E9' }]}>
                        <Ionicons name="medkit-outline" size={24} color="#43A047" />
                    </View>
                    <View style={styles.historyInfo}>
                        <Text style={styles.historyTitle}>Medical Relief Fund</Text>
                        <Text style={styles.historyDate}>MAY 15, 2023 • #8710</Text>
                    </View>
                    <View style={styles.historyRight}>
                        <Text style={styles.historyAmount}>₹2,500</Text>
                        <Feather name="download" size={16} color="#00897B" style={{ marginTop: 4 }} />
                    </View>
                </View>

                {/* Settings Menu */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="notifications-outline" size={22} color="#666" />
                            <Text style={styles.menuText}>Notification Preferences</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#CCC" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="shield-outline" size={22} color="#666" />
                            <Text style={styles.menuText}>Security & App PIN</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#CCC" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
                        <View style={styles.menuLeft}>
                            <Ionicons name="log-out-outline" size={22} color="#E74C3C" />
                            <Text style={[styles.menuText, { color: '#E74C3C' }]}>Sign Out</Text>
                        </View>
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
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    iconBtn: {
        padding: 5,
    },
    scrollContent: {
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        marginBottom: 15,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#E0F2F1',
    },
    goldBadge: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#00897B',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    goldBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    memberInfo: {
        fontSize: 13,
        color: '#666',
        marginBottom: 15,
    },
    editProfileBtn: {
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    editProfileText: {
        color: '#00897B',
        fontSize: 14,
        fontWeight: '600',
    },
    mainImpactCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    cardLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#999',
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    amountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    impactAmount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#00897B',
    },
    comparisonBadge: {
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    comparisonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#00897B',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    statCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    statProgress: {
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
    },
    statFill: {
        height: '100%',
        borderRadius: 3,
    },
    campaignList: {
        flexDirection: 'row',
    },
    campaignDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    dotText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00897B',
    },
    taxCard: {
        backgroundColor: '#00897B',
        borderRadius: 16,
        padding: 20,
        marginBottom: 25,
        overflow: 'hidden',
    },
    taxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    taxSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 15,
        maxWidth: '80%',
    },
    downloadReceiptBtn: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    downloadReceiptText: {
        color: '#00897B',
        fontSize: 14,
        fontWeight: 'bold',
    },
    taxIconBg: {
        position: 'absolute',
        right: -10,
        bottom: -10,
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
    seeAll: {
        fontSize: 14,
        color: '#00897B',
        fontWeight: '600',
    },
    timelineContainer: {
        paddingLeft: 5,
        marginBottom: 20,
    },
    timelineItem: {
        flexDirection: 'row',
    },
    timelineLeft: {
        width: 20,
        alignItems: 'center',
        marginRight: 15,
    },
    timelineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#00897B',
        marginTop: 4,
        zIndex: 1,
    },
    timelineLine: {
        flex: 1,
        width: 2,
        backgroundColor: '#E0E0E0',
        marginTop: -5,
    },
    timelineContent: {
        flex: 1,
        paddingBottom: 20,
    },
    timelineDate: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999',
        marginBottom: 4,
    },
    timelineTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    timelineDesc: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
    },
    historyItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    historyIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    historyInfo: {
        flex: 1,
    },
    historyTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    historyDate: {
        fontSize: 12,
        color: '#999',
    },
    historyRight: {
        alignItems: 'flex-end',
    },
    historyAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginLeft: 15,
    },
});

export default Impact;
