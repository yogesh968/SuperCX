import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Switch,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const donationHistory = [
    { id: '1', title: 'Assam Flood Relief', date: 'FEB 15, 2024', amount: '₹10,000', type: 'Zakat', icon: 'water-outline', color: '#E74C3C', status: 'Completed' },
    { id: '2', title: 'Education for All', date: 'JAN 28, 2024', amount: '₹5,000', type: 'Sadaqa', icon: 'school-outline', color: '#3498db', status: 'Completed' },
    { id: '3', title: 'Community Kitchen Bihar', date: 'JAN 10, 2024', amount: '₹3,000', type: 'Lillah', icon: 'restaurant-outline', color: '#F39C12', status: 'Completed' },
    { id: '4', title: 'Clean Water Project', date: 'DEC 20, 2023', amount: '₹7,500', type: 'Zakat', icon: 'water-outline', color: '#9B59B6', status: 'Completed' },
    { id: '5', title: 'Orphan Sponsorship', date: 'DEC 05, 2023', amount: '₹15,000', type: 'Sadaqa', icon: 'people-outline', color: '#0D6B4F', status: 'Completed' },
    { id: '6', title: 'Eid Food Drive', date: 'NOV 15, 2023', amount: '₹2,000', type: 'Lillah', icon: 'gift-outline', color: '#E67E22', status: 'Completed' },
];

const badges = [
    { id: '1', title: 'First Donation', icon: 'star', color: '#FFD700', earned: true },
    { id: '2', title: 'Monthly Donor', icon: 'refresh', color: '#0D6B4F', earned: true },
    { id: '3', title: 'Gold Supporter', icon: 'trophy', color: '#F39C12', earned: true },
    { id: '4', title: '10 Campaigns', icon: 'heart', color: '#E74C3C', earned: true },
    { id: '5', title: 'Referral Hero', icon: 'people', color: '#3498db', earned: false },
    { id: '6', title: 'Impact Leader', icon: 'shield', color: '#9B59B6', earned: false },
];

const Profile = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [monthlyReminder, setMonthlyReminder] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity style={styles.settingsBtn}>
                        <Ionicons name="settings-outline" size={22} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.profileCardBg} />
                    <View style={styles.profileContent}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?u=ahmedkhan' }}
                                style={styles.avatar}
                            />
                            <View style={styles.onlineDot} />
                            <TouchableOpacity style={styles.editAvatarBtn}>
                                <Ionicons name="camera" size={14} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.profileName}>Ahmed Abdullah Khan</Text>
                        <Text style={styles.profileEmail}>ahmed.khan@example.com</Text>
                        <Text style={styles.profilePhone}>+91 98765 43210</Text>
                        <View style={styles.memberRow}>
                            <View style={styles.memberBadge}>
                                <Ionicons name="diamond" size={12} color="#FFD700" />
                                <Text style={styles.memberBadgeText}>GOLD MEMBER</Text>
                            </View>
                            <Text style={styles.memberId}>ID: JUH-8829</Text>
                        </View>
                        <Text style={styles.memberSince}>Member since September 2021</Text>
                    </View>
                </View>

                {/* Quick Stats */}
                <View style={styles.quickStatsRow}>
                    <View style={styles.quickStatCard}>
                        <Text style={styles.quickStatValue}>₹50,000</Text>
                        <Text style={styles.quickStatLabel}>Total Donated</Text>
                        <View style={styles.quickStatIconBg}>
                            <Ionicons name="wallet-outline" size={18} color="#0D6B4F" />
                        </View>
                    </View>
                    <View style={styles.quickStatCard}>
                        <Text style={styles.quickStatValue}>120+</Text>
                        <Text style={styles.quickStatLabel}>Lives Touched</Text>
                        <View style={[styles.quickStatIconBg, { backgroundColor: '#FEF3C7' }]}>
                            <Ionicons name="heart-outline" size={18} color="#F39C12" />
                        </View>
                    </View>
                </View>

                <View style={styles.quickStatsRow}>
                    <View style={styles.quickStatCard}>
                        <Text style={styles.quickStatValue}>8</Text>
                        <Text style={styles.quickStatLabel}>Campaigns</Text>
                        <View style={[styles.quickStatIconBg, { backgroundColor: '#E8F4FD' }]}>
                            <Ionicons name="compass-outline" size={18} color="#3498db" />
                        </View>
                    </View>
                    <View style={styles.quickStatCard}>
                        <Text style={styles.quickStatValue}>6</Text>
                        <Text style={styles.quickStatLabel}>Months Active</Text>
                        <View style={[styles.quickStatIconBg, { backgroundColor: '#F3E5F5' }]}>
                            <Ionicons name="calendar-outline" size={18} color="#9B59B6" />
                        </View>
                    </View>
                </View>

                {/* Zakat Summary */}
                <View style={styles.zakatCard}>
                    <View style={styles.zakatHeader}>
                        <View style={styles.zakatHeaderLeft}>
                            <MaterialCommunityIcons name="calculator-variant-outline" size={22} color="#fff" />
                            <Text style={styles.zakatTitle}>Zakat Summary FY 2024</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.zakatViewDetails}>Details →</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.zakatStatsRow}>
                        <View style={styles.zakatStat}>
                            <Text style={styles.zakatStatValue}>₹25,000</Text>
                            <Text style={styles.zakatStatLabel}>Total Zakat Paid</Text>
                        </View>
                        <View style={styles.zakatDivider} />
                        <View style={styles.zakatStat}>
                            <Text style={styles.zakatStatValue}>₹15,000</Text>
                            <Text style={styles.zakatStatLabel}>Sadaqa Given</Text>
                        </View>
                        <View style={styles.zakatDivider} />
                        <View style={styles.zakatStat}>
                            <Text style={styles.zakatStatValue}>₹10,000</Text>
                            <Text style={styles.zakatStatLabel}>Other Donations</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.downloadCertBtn}>
                        <Feather name="download" size={16} color="#0D6B4F" />
                        <Text style={styles.downloadCertText}>Download 80G Certificate</Text>
                    </TouchableOpacity>
                </View>

                {/* Badges */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Badges</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>{badges.filter(b => b.earned).length}/{badges.length} Earned</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesScroll}>
                    {badges.map((badge) => (
                        <View
                            key={badge.id}
                            style={[
                                styles.badgeCard,
                                !badge.earned && styles.badgeCardLocked,
                            ]}
                        >
                            <View style={[
                                styles.badgeIconContainer,
                                { backgroundColor: badge.earned ? badge.color + '20' : '#F0F0F0' },
                            ]}>
                                <Ionicons
                                    name={badge.icon}
                                    size={24}
                                    color={badge.earned ? badge.color : '#CCC'}
                                />
                                {!badge.earned && (
                                    <View style={styles.lockOverlay}>
                                        <Ionicons name="lock-closed" size={12} color="#999" />
                                    </View>
                                )}
                            </View>
                            <Text style={[
                                styles.badgeTitle,
                                !badge.earned && { color: '#CCC' },
                            ]}>
                                {badge.title}
                            </Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Donation History */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Donation History</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                {donationHistory.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.historyCard}>
                        <View style={[styles.historyIconBox, { backgroundColor: item.color + '15' }]}>
                            <Ionicons name={item.icon} size={22} color={item.color} />
                        </View>
                        <View style={styles.historyInfo}>
                            <Text style={styles.historyTitle}>{item.title}</Text>
                            <View style={styles.historyMeta}>
                                <Text style={styles.historyDate}>{item.date}</Text>
                                <View style={styles.historyTypeBadge}>
                                    <Text style={styles.historyTypeText}>{item.type}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.historyRight}>
                            <Text style={styles.historyAmount}>{item.amount}</Text>
                            <View style={styles.statusBadge}>
                                <Ionicons name="checkmark-circle" size={12} color="#0D6B4F" />
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Preferences */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                </View>
                <View style={styles.preferencesCard}>
                    <View style={styles.prefItem}>
                        <View style={styles.prefLeft}>
                            <Ionicons name="notifications-outline" size={22} color="#0D6B4F" />
                            <View style={styles.prefTextContainer}>
                                <Text style={styles.prefTitle}>Push Notifications</Text>
                                <Text style={styles.prefSubtitle}>Campaign updates & reminders</Text>
                            </View>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: '#E0E0E0', true: '#B2DFDB' }}
                            thumbColor={notificationsEnabled ? '#0D6B4F' : '#f4f3f4'}
                        />
                    </View>
                    <View style={styles.prefDivider} />
                    <View style={styles.prefItem}>
                        <View style={styles.prefLeft}>
                            <Ionicons name="calendar-outline" size={22} color="#F39C12" />
                            <View style={styles.prefTextContainer}>
                                <Text style={styles.prefTitle}>Monthly Reminder</Text>
                                <Text style={styles.prefSubtitle}>Remind me to donate monthly</Text>
                            </View>
                        </View>
                        <Switch
                            value={monthlyReminder}
                            onValueChange={setMonthlyReminder}
                            trackColor={{ false: '#E0E0E0', true: '#B2DFDB' }}
                            thumbColor={monthlyReminder ? '#0D6B4F' : '#f4f3f4'}
                        />
                    </View>
                    <View style={styles.prefDivider} />
                    <View style={styles.prefItem}>
                        <View style={styles.prefLeft}>
                            <Ionicons name="moon-outline" size={22} color="#9B59B6" />
                            <View style={styles.prefTextContainer}>
                                <Text style={styles.prefTitle}>Dark Mode</Text>
                                <Text style={styles.prefSubtitle}>Switch to dark theme</Text>
                            </View>
                        </View>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ false: '#E0E0E0', true: '#B2DFDB' }}
                            thumbColor={darkMode ? '#0D6B4F' : '#f4f3f4'}
                        />
                    </View>
                </View>

                {/* Menu Options */}
                <View style={styles.menuCard}>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#E0F2F1' }]}>
                                <Ionicons name="person-outline" size={20} color="#0D6B4F" />
                            </View>
                            <Text style={styles.menuText}>Edit Profile</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#E8F4FD' }]}>
                                <Ionicons name="card-outline" size={20} color="#3498db" />
                            </View>
                            <Text style={styles.menuText}>Payment Methods</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#FEF3C7' }]}>
                                <Ionicons name="document-text-outline" size={20} color="#F39C12" />
                            </View>
                            <Text style={styles.menuText}>Tax Receipts & 80G</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#F3E5F5' }]}>
                                <Ionicons name="shield-outline" size={20} color="#9B59B6" />
                            </View>
                            <Text style={styles.menuText}>Privacy & Security</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#E8F5E9' }]}>
                                <Ionicons name="help-circle-outline" size={20} color="#43A047" />
                            </View>
                            <Text style={styles.menuText}>Help & Support</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#E0F2F1' }]}>
                                <Ionicons name="share-social-outline" size={20} color="#0D6B4F" />
                            </View>
                            <Text style={styles.menuText}>Invite Friends</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={[styles.menuIconBox, { backgroundColor: '#FFF3E0' }]}>
                                <Ionicons name="star-outline" size={20} color="#E67E22" />
                            </View>
                            <Text style={styles.menuText}>Rate the App</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#CCC" />
                    </TouchableOpacity>
                </View>

                {/* Sign Out */}
                <TouchableOpacity style={styles.signOutBtn}>
                    <Ionicons name="log-out-outline" size={20} color="#E74C3C" />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>

                {/* App Info */}
                <View style={styles.appInfo}>
                    <Text style={styles.appName}>SuperCX Charity</Text>
                    <Text style={styles.appVersion}>Version 1.0.0</Text>
                    <Text style={styles.appCopyright}>Made with ❤️ for a better world</Text>
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
    settingsBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },
    profileCardBg: {
        height: 80,
        backgroundColor: '#0D6B4F',
    },
    profileContent: {
        alignItems: 'center',
        marginTop: -45,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    avatarContainer: {
        marginBottom: 12,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 4,
        borderColor: '#fff',
    },
    onlineDot: {
        position: 'absolute',
        bottom: 6,
        right: 6,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#fff',
    },
    editAvatarBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#0D6B4F',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    profilePhone: {
        fontSize: 13,
        color: '#999',
        marginBottom: 12,
    },
    memberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    memberBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 10,
    },
    memberBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#F39C12',
        marginLeft: 4,
    },
    memberId: {
        fontSize: 12,
        color: '#999',
        fontWeight: '600',
    },
    memberSince: {
        fontSize: 12,
        color: '#999',
    },
    quickStatsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    quickStatCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    quickStatValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 2,
    },
    quickStatLabel: {
        fontSize: 12,
        color: '#666',
    },
    quickStatIconBg: {
        position: 'absolute',
        top: 14,
        right: 14,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#E0F2F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    zakatCard: {
        backgroundColor: '#0D6B4F',
        borderRadius: 20,
        padding: 20,
        marginTop: 8,
        marginBottom: 25,
        overflow: 'hidden',
    },
    zakatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },
    zakatHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    zakatTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    zakatViewDetails: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '600',
    },
    zakatStatsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    zakatStat: {
        flex: 1,
        alignItems: 'center',
    },
    zakatStatValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 2,
    },
    zakatStatLabel: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
    },
    zakatDivider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    downloadCertBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
    },
    downloadCertText: {
        color: '#0D6B4F',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
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
        color: '#0D6B4F',
        fontWeight: '600',
    },
    badgesScroll: {
        marginBottom: 25,
        marginHorizontal: -20,
        paddingLeft: 20,
    },
    badgeCard: {
        width: 90,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    badgeCardLocked: {
        opacity: 0.5,
    },
    badgeIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    lockOverlay: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 2,
    },
    badgeTitle: {
        fontSize: 10,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    historyCard: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    historyIconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    historyInfo: {
        flex: 1,
    },
    historyTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    historyMeta: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    historyDate: {
        fontSize: 11,
        color: '#999',
        marginRight: 8,
    },
    historyTypeBadge: {
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    historyTypeText: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    historyRight: {
        alignItems: 'flex-end',
    },
    historyAmount: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 10,
        color: '#0D6B4F',
        fontWeight: '600',
        marginLeft: 3,
    },
    preferencesCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 6,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    prefItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },
    prefLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    prefTextContainer: {
        marginLeft: 12,
        flex: 1,
    },
    prefTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    prefSubtitle: {
        fontSize: 11,
        color: '#999',
        marginTop: 1,
    },
    prefDivider: {
        height: 1,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 14,
    },
    menuCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 6,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F8F8F8',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIconBox: {
        width: 36,
        height: 36,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    menuText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    signOutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF5F5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#FECACA',
    },
    signOutText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E74C3C',
        marginLeft: 8,
    },
    appInfo: {
        alignItems: 'center',
        marginBottom: 10,
    },
    appName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    appVersion: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    appCopyright: {
        fontSize: 12,
        color: '#BBB',
    },
});

export default Profile;
