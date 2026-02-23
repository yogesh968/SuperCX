import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Switch,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Donation = ({ navigation }) => {
    const [selectedType, setSelectedType] = useState('Zakat');
    const [selectedAmount, setSelectedAmount] = useState('1,000');
    const [isRecurring, setIsRecurring] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('UPI');

    const donationTypes = [
        { id: 'Zakat', icon: 'wallet-outline' },
        { id: 'Sadaqa', icon: 'heart-outline' },
        { id: 'Lillah', icon: 'gift-outline' },
    ];

    const amounts = ['500', '1,000', '2,000', '5,000', '10k', '25k'];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#00897B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Support Jamiat</Text>
                </View>
                <View style={styles.secureBadgeHeader}>
                    <Ionicons name="shield-check" size={12} color="#00897B" />
                    <Text style={styles.secureTextHeader}>SECURE</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Stepper */}
                <View style={styles.stepper}>
                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepActive]}>
                            <Text style={styles.stepNumberActive}>1</Text>
                        </View>
                        <Text style={styles.stepLabelActive}>Amount</Text>
                    </View>
                    <View style={styles.stepLine} />
                    <View style={styles.stepItem}>
                        <View style={styles.stepCircle}>
                            <Text style={styles.stepNumber}>2</Text>
                        </View>
                        <Text style={styles.stepLabel}>Payment</Text>
                    </View>
                    <View style={styles.stepLine} />
                    <View style={styles.stepItem}>
                        <View style={styles.stepCircle}>
                            <Text style={styles.stepNumber}>3</Text>
                        </View>
                        <Text style={styles.stepLabel}>Impact</Text>
                    </View>
                </View>

                {/* Donation Type */}
                <View style={styles.section}>
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>DONATION TYPE</Text>
                        <View style={styles.taxBadge}>
                            <Text style={styles.taxText}>80G TAX BENEFIT</Text>
                        </View>
                    </View>
                    <View style={styles.typeGrid}>
                        {donationTypes.map((type) => (
                            <TouchableOpacity
                                key={type.id}
                                style={[
                                    styles.typeItem,
                                    selectedType === type.id && styles.typeItemSelected,
                                ]}
                                onPress={() => setSelectedType(type.id)}
                            >
                                <Ionicons
                                    name={type.icon}
                                    size={24}
                                    color={selectedType === type.id ? '#00897B' : '#666'}
                                />
                                <Text
                                    style={[
                                        styles.typeLabel,
                                        selectedType === type.id && styles.typeLabelSelected,
                                    ]}
                                >
                                    {type.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Select Amount */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SELECT AMOUNT</Text>
                    <View style={styles.amountGrid}>
                        {amounts.map((amount) => (
                            <TouchableOpacity
                                key={amount}
                                style={[
                                    styles.amountItem,
                                    selectedAmount === amount && styles.amountItemSelected,
                                ]}
                                onPress={() => setSelectedAmount(amount)}
                            >
                                <Text
                                    style={[
                                        styles.amountLabel,
                                        selectedAmount === amount && styles.amountLabelSelected,
                                    ]}
                                >
                                    ₹{amount}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.customAmountContainer}>
                        <Text style={styles.currencySymbol}>₹</Text>
                        <TextInput
                            placeholder="Enter custom amount"
                            style={styles.customInput}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* Monthly Recurring */}
                <View style={styles.recurringCard}>
                    <View style={styles.recurringLeft}>
                        <View style={styles.recurringIconBox}>
                            <Ionicons name="refresh" size={20} color="#00897B" />
                        </View>
                        <View>
                            <Text style={styles.recurringTitle}>Monthly Recurring</Text>
                            <Text style={styles.recurringSubtitle}>Automate your rewards every month</Text>
                        </View>
                    </View>
                    <Switch
                        value={isRecurring}
                        onValueChange={setIsRecurring}
                        trackColor={{ false: '#767577', true: '#B2DFDB' }}
                        thumbColor={isRecurring ? '#00897B' : '#f4f3f4'}
                    />
                </View>

                {/* Donor Details */}
                <View style={styles.donorCard}>
                    <View style={styles.donorHeader}>
                        <View style={styles.donorHeaderLeft}>
                            <Ionicons name="person-outline" size={20} color="#666" />
                            <Text style={styles.donorTitle}>Donor Details</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.editBtn}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donorInfoRow}>
                        <Text style={styles.donorLabel}>Full Name</Text>
                        <Text style={styles.donorValue}>Ahmed Siddiqui</Text>
                    </View>
                    <View style={styles.donorInfoRow}>
                        <Text style={styles.donorLabel}>Email Address</Text>
                        <Text style={styles.donorValue}>ahmed.s@example.com</Text>
                    </View>
                </View>

                {/* Secure Payment */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SECURE PAYMENT</Text>
                    <TouchableOpacity
                        style={[
                            styles.paymentOption,
                            paymentMethod === 'UPI' && styles.paymentOptionSelected,
                        ]}
                        onPress={() => setPaymentMethod('UPI')}
                    >
                        <View style={styles.paymentLeft}>
                            <View style={[styles.radioCircle, paymentMethod === 'UPI' && styles.radioActive]}>
                                {paymentMethod === 'UPI' && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.paymentLabel}>UPI (GPay, PhonePe, etc.)</Text>
                        </View>
                        <Ionicons name="qr-code-outline" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.paymentOption,
                            paymentMethod === 'Card' && styles.paymentOptionSelected,
                        ]}
                        onPress={() => setPaymentMethod('Card')}
                    >
                        <View style={styles.paymentLeft}>
                            <View style={[styles.radioCircle, paymentMethod === 'Card' && styles.radioActive]}>
                                {paymentMethod === 'Card' && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.paymentLabel}>Credit / Debit Card</Text>
                        </View>
                        <Ionicons name="card-outline" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.paymentOption,
                            paymentMethod === 'NetBanking' && styles.paymentOptionSelected,
                        ]}
                        onPress={() => setPaymentMethod('NetBanking')}
                    >
                        <View style={styles.paymentLeft}>
                            <View style={[styles.radioCircle, paymentMethod === 'NetBanking' && styles.radioActive]}>
                                {paymentMethod === 'NetBanking' && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.paymentLabel}>Net Banking</Text>
                        </View>
                        <Ionicons name="business-outline" size={20} color="#999" />
                    </TouchableOpacity>
                </View>

                <View style={styles.secureFooter}>
                    <Ionicons name="lock-closed" size={14} color="#999" />
                    <Text style={styles.secureFooterText}>100% Secure SSL Encrypted Transaction</Text>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            {/* Bottom Action */}
            <View style={styles.bottomAction}>
                <View style={styles.amountSummary}>
                    <View>
                        <Text style={styles.totalLabel}>TOTAL AMOUNT</Text>
                        <Text style={styles.totalValue}>₹{selectedAmount}.00</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.totalLabel}>TYPE</Text>
                        <Text style={styles.typeValue}>{selectedType} Relief</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.completeBtn}>
                    <Text style={styles.completeText}>Complete Donation </Text>
                    <Feather name="arrow-right" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
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
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        marginRight: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    secureBadgeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    secureTextHeader: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00897B',
        marginLeft: 4,
    },
    scrollContent: {
        padding: 20,
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    stepItem: {
        alignItems: 'center',
    },
    stepCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    stepActive: {
        backgroundColor: '#00897B',
    },
    stepNumber: {
        fontSize: 14,
        color: '#999',
        fontWeight: 'bold',
    },
    stepNumberActive: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    stepLabel: {
        fontSize: 12,
        color: '#999',
    },
    stepLabelActive: {
        fontSize: 12,
        color: '#00897B',
        fontWeight: 'bold',
    },
    stepLine: {
        width: 50,
        height: 1,
        backgroundColor: '#D1D1D1',
        marginHorizontal: 10,
        marginTop: -20,
    },
    section: {
        marginBottom: 25,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#718096',
        letterSpacing: 0.5,
        marginBottom: 12,
    },
    taxBadge: {
        backgroundColor: '#FEF3C7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    taxText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#92400E',
    },
    typeGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    typeItem: {
        width: '31%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    typeItemSelected: {
        borderColor: '#00897B',
        backgroundColor: '#F0F9F8',
    },
    typeLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
        marginTop: 8,
    },
    typeLabelSelected: {
        color: '#00897B',
    },
    amountGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    amountItem: {
        width: '31%',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    amountItemSelected: {
        borderColor: '#00897B',
        backgroundColor: '#F0F9F8',
    },
    amountLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    amountLabelSelected: {
        color: '#00897B',
    },
    customAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        paddingHorizontal: 15,
        height: 54,
        marginTop: 5,
    },
    currencySymbol: {
        fontSize: 18,
        color: '#666',
        marginRight: 10,
    },
    customInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    recurringCard: {
        backgroundColor: '#F0F9F8',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#B2DFDB',
    },
    recurringLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recurringIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#B2DFDB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    recurringTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    recurringSubtitle: {
        fontSize: 11,
        color: '#666',
        marginTop: 2,
    },
    donorCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 25,
    },
    donorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 12,
        marginBottom: 12,
    },
    donorHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    donorTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 8,
    },
    editBtn: {
        fontSize: 13,
        color: '#00897B',
        fontWeight: 'bold',
    },
    donorInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    donorLabel: {
        fontSize: 13,
        color: '#999',
    },
    donorValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    paymentOption: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    paymentOptionSelected: {
        borderColor: '#00897B',
    },
    paymentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    radioActive: {
        borderColor: '#00897B',
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#00897B',
    },
    paymentLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    secureFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    secureFooterText: {
        fontSize: 11,
        color: '#999',
        marginLeft: 6,
    },
    bottomAction: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    amountSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    totalLabel: {
        fontSize: 10,
        color: '#999',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    totalValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00897B',
    },
    typeValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    completeBtn: {
        backgroundColor: '#00897B',
        height: 56,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    completeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Donation;
