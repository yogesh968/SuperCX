import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CampaignDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Image */}
                <View style={styles.headerImageContainer}>
                    <Image
                        source={require('../../assets/assam_flood.jpg')}
                        style={styles.headerImage}
                    />
                    <SafeAreaView style={styles.headerButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                            <Ionicons name="arrow-back" size={24} color="#0D6B4F" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.iconBtn}>
                                <Ionicons name="share-outline" size={24} color="#0D6B4F" />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                    <View style={styles.urgentBadge}>
                        <Text style={styles.urgentText}>★ URGENT</Text>
                    </View>
                </View>

                {/* Content Card */}
                <View style={styles.contentCard}>
                    <Text style={styles.title}>Emergency Flood Relief - Assam 2024</Text>

                    <View style={styles.amountContainer}>
                        <Text style={styles.amountRaised}>₹45,00,000</Text>
                        <Text style={styles.percentageText}>45%</Text>
                    </View>
                    <Text style={styles.targetText}>Raised of ₹1,00,00,000</Text>

                    <View style={styles.progressContainer}>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: '45%' }]} />
                        </View>
                    </View>

                    <View style={styles.donorInfo}>
                        <Ionicons name="people-outline" size={16} color="#666" />
                        <Text style={styles.donorText}>1,240 Donors contributed</Text>
                    </View>

                    {/* Stats Bar */}
                    <View style={styles.statsBar}>
                        <View style={styles.statItem}>
                            <MaterialCommunityIcons name="food-apple-outline" size={24} color="#0D6B4F" />
                            <Text style={styles.statValue}>5,000+</Text>
                            <Text style={styles.statLabel}>MEALS</Text>
                        </View>
                        <View style={styles.statItem}>
                            <MaterialCommunityIcons name="medical-bag" size={24} color="#0D6B4F" />
                            <Text style={styles.statValue}>1,200</Text>
                            <Text style={styles.statLabel}>KITS</Text>
                        </View>
                        <View style={styles.statItem}>
                            <MaterialCommunityIcons name="home-outline" size={24} color="#0D6B4F" />
                            <Text style={styles.statValue}>350</Text>
                            <Text style={styles.statLabel}>SHELTERS</Text>
                        </View>
                    </View>

                    {/* About Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="information-circle-outline" size={24} color="#0D6B4F" />
                            <Text style={styles.sectionTitle}>About this campaign</Text>
                        </View>
                        <Text style={styles.aboutContent}>
                            Assam is currently facing one of its worst flood crises in recent years. Thousands of families have lost their homes and are struggling for basic necessities like food, clean water, and medicine. Jamiat Ulama-i-Hind has deployed teams across 12 affected districts to provide immediate relief. Your contribution helps us reach the most remote areas.
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.readMore}>Read More ∨</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Breakdown Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="chart-bar" size={24} color="#0D6B4F" />
                            <Text style={styles.sectionTitle}>Where your money goes</Text>
                        </View>

                        <View style={styles.breakdownItem}>
                            <View style={styles.breakdownIconBox}>
                                <Ionicons name="restaurant-outline" size={20} color="#0D6B4F" />
                            </View>
                            <View style={styles.breakdownInfo}>
                                <View style={styles.breakdownTextRow}>
                                    <Text style={styles.breakdownLabel}>Food & Clean Water</Text>
                                    <Text style={styles.breakdownPercent}>60%</Text>
                                </View>
                                <View style={styles.breakdownProgress}>
                                    <View style={[styles.breakdownFill, { width: '60%' }]} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.breakdownItem}>
                            <View style={styles.breakdownIconBox}>
                                <Ionicons name="medkit-outline" size={20} color="#0D6B4F" />
                            </View>
                            <View style={styles.breakdownInfo}>
                                <View style={styles.breakdownTextRow}>
                                    <Text style={styles.breakdownLabel}>Medical Supplies</Text>
                                    <Text style={styles.breakdownPercent}>25%</Text>
                                </View>
                                <View style={styles.breakdownProgress}>
                                    <View style={[styles.breakdownFill, { width: '25%' }]} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.breakdownItem}>
                            <View style={styles.breakdownIconBox}>
                                <Ionicons name="home-outline" size={20} color="#0D6B4F" />
                            </View>
                            <View style={styles.breakdownInfo}>
                                <View style={styles.breakdownTextRow}>
                                    <Text style={styles.breakdownLabel}>Temporary Shelter</Text>
                                    <Text style={styles.breakdownPercent}>15%</Text>
                                </View>
                                <View style={styles.breakdownProgress}>
                                    <View style={[styles.breakdownFill, { width: '15%' }]} />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Live Updates */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="history" size={24} color="#0D6B4F" />
                            <Text style={styles.sectionTitle}>Live Updates</Text>
                        </View>

                        <View style={styles.updateItem}>
                            <View style={styles.updateTimeline}>
                                <View style={styles.timelineDot} />
                                <View style={styles.timelineLine} />
                            </View>
                            <View style={styles.updateCard}>
                                <Text style={styles.updateTime}>2 HOURS AGO</Text>
                                <Text style={styles.updateBody}>
                                    Truckload of essential medicine and surgical kits arrived at Relief Camp A in Nagaon district.
                                </Text>
                                <View style={styles.updateImages}>
                                    <Image
                                        source={require('../../assets/assam_flood.jpg')}
                                        style={styles.updateImg}
                                    />
                                    <Image
                                        source={require('../../assets/community_kitchen.jpg')}
                                        style={styles.updateImg}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.updateItem}>
                            <View style={styles.updateTimeline}>
                                <View style={[styles.timelineDot, { backgroundColor: '#B2DFDB' }]} />
                                <View style={[styles.timelineLine, { backgroundColor: '#F0F0F0', opacity: 0.5 }]} />
                            </View>
                            <View style={styles.updateCard}>
                                <Text style={styles.updateTime}>5 HOURS AGO</Text>
                                <Text style={styles.updateBody}>
                                    500 hot meals distributed to displaced families in Sector 4. Our mobile kitchen is moving to Sector 5 next.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.donateBtn} onPress={() => navigation.navigate('Donation')}>
                    <Text style={styles.donateText}>Donate Now </Text>
                    <Ionicons name="heart" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImageContainer: {
        width: width,
        height: 300,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    headerButtons: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    urgentBadge: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#E74C3C',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    urgentText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    contentCard: {
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111',
        lineHeight: 32,
        marginBottom: 20,
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 4,
    },
    amountRaised: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    percentageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    targetText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    progressContainer: {
        marginBottom: 15,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#E0F2F1',
        borderRadius: 4,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#0D6B4F',
        borderRadius: 4,
    },
    donorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    donorText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 6,
    },
    statsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        padding: 16,
        marginBottom: 25,
    },
    statItem: {
        alignItems: 'center',
        width: '30%',
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
        marginTop: 8,
    },
    statLabel: {
        fontSize: 10,
        color: '#999',
        fontWeight: '600',
        marginTop: 2,
    },
    section: {
        marginBottom: 25,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        marginLeft: 10,
    },
    aboutContent: {
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
        marginBottom: 10,
    },
    readMore: {
        color: '#0D6B4F',
        fontWeight: 'bold',
    },
    breakdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    breakdownIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0F2F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    breakdownInfo: {
        flex: 1,
    },
    breakdownTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    breakdownLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    breakdownPercent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    breakdownProgress: {
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
    },
    breakdownFill: {
        height: '100%',
        backgroundColor: '#0D6B4F',
        borderRadius: 3,
    },
    updateItem: {
        flexDirection: 'row',
    },
    updateTimeline: {
        width: 20,
        alignItems: 'center',
        marginRight: 15,
    },
    timelineDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#0D6B4F',
        marginTop: 8,
        zIndex: 1,
    },
    timelineLine: {
        flex: 1,
        width: 2,
        backgroundColor: '#0D6B4F',
        marginTop: -5,
    },
    updateCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    updateTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0D6B4F',
        marginBottom: 8,
    },
    updateBody: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
        marginBottom: 12,
    },
    updateImages: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    updateImg: {
        width: '48%',
        height: 100,
        borderRadius: 8,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    donateBtn: {
        backgroundColor: '#0D6B4F',
        height: 56,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    donateText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CampaignDetails;
