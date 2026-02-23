/**
 * Donation Screen - Jamiat Foundation Donation App
 * Multi-step donation flow: Cause → Amount → Details → Payment
 * Features: project selector, donation type, dedication, frequency,
 * amount grid, tax benefit toggle, summary, Razorpay payment button.
 */
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
    Dimensions,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Donation = ({ navigation }) => {
    const [activeStep, setActiveStep] = useState(1); // 0=CAUSE, 1=AMOUNT, 2=DETAILS, 3=PAYMENT
    const [selectedType, setSelectedType] = useState('Zakat');
    const [selectedDedication, setSelectedDedication] = useState('For Myself');
    const [selectedFrequency, setSelectedFrequency] = useState('One-Time');
    const [selectedAmount, setSelectedAmount] = useState('1,000');
    const [customAmount, setCustomAmount] = useState('1,000');
    const [taxBenefit, setTaxBenefit] = useState(true);
    const [message, setMessage] = useState('');

    const steps = ['CAUSE', 'AMOUNT', 'DETAILS', 'PAYMENT'];

    const donationTypes = [
        { id: 'Zakat', icon: 'wallet-outline', label: 'Zakat' },
        { id: 'Sadaqah', icon: 'heart-outline', label: 'Sadaqah' },
        { id: 'Fitrana', icon: 'people-outline', label: 'Fitrana' },
        { id: 'General', icon: 'ellipsis-horizontal-outline', label: 'General' },
    ];

    const dedicationTypes = ['For Myself', 'For Loved One', 'In Memory Of'];
    const frequencies = ['One-Time', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    const amounts = ['₹1,000', '₹2,500', '₹5,000', '₹10,000', '₹15,000', '₹25,000'];

    const getNumericAmount = () => {
        const val = selectedAmount.replace(/[₹,]/g, '');
        return parseInt(val) || 1000;
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Green Header */}
            <View style={styles.greenHeader}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Ionicons name="chevron-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Make Your Donation</Text>
                    <TouchableOpacity style={styles.helpBtn}>
                        <Ionicons name="help-circle-outline" size={24} color="rgba(255,255,255,0.7)" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerSubtitle}>Empowering the Ummah, one life at a time.</Text>
                <View style={styles.statBadgesRow}>
                    <View style={styles.statBadge}>
                        <Text style={styles.statBadgeText}>10K+ Donors</Text>
                    </View>
                    <View style={styles.statBadge}>
                        <Text style={styles.statBadgeText}>25K+ Lives</Text>
                    </View>
                    <View style={styles.statBadge}>
                        <Text style={styles.statBadgeText}>14 States</Text>
                    </View>
                </View>
            </View>

            {/* Step Tabs */}
            <View style={styles.stepTabsContainer}>
                <View style={styles.stepTabsRow}>
                    {steps.map((step, index) => (
                        <TouchableOpacity
                            key={step}
                            style={styles.stepTab}
                            onPress={() => setActiveStep(index)}
                        >
                            <Text
                                style={[
                                    styles.stepTabText,
                                    activeStep === index && styles.stepTabTextActive,
                                ]}
                            >
                                {step}
                            </Text>
                            {activeStep === index && <View style={styles.stepTabIndicator} />}
                        </TouchableOpacity>
                    ))}
                </View>
                {/* Progress Bar */}
                <View style={styles.stepProgressBg}>
                    <View style={[styles.stepProgressFill, { width: `${((activeStep + 1) / steps.length) * 100}%` }]} />
                </View>
                <Text style={styles.stepDescription}>Step {activeStep + 1}: Selection & Amount</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Selected Project */}
                <Text style={styles.fieldLabel}>Selected Project</Text>
                <TouchableOpacity style={styles.projectSelector}>
                    <View style={styles.projectLeft}>
                        <View style={styles.projectIcon}>
                            <MaterialCommunityIcons name="mosque" size={18} color="#0D6B4F" />
                        </View>
                        <Text style={styles.projectName}>Assam Flood Relief 2024</Text>
                    </View>
                    <Ionicons name="chevron-down" size={20} color="#999" />
                </TouchableOpacity>

                {/* Donation Type */}
                <Text style={styles.fieldLabel}>Donation Type</Text>
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
                            <View style={[
                                styles.typeIconWrap,
                                selectedType === type.id && styles.typeIconWrapSelected,
                            ]}>
                                <Ionicons
                                    name={type.icon}
                                    size={18}
                                    color={selectedType === type.id ? '#0D6B4F' : '#999'}
                                />
                            </View>
                            <Text
                                style={[
                                    styles.typeLabel,
                                    selectedType === type.id && styles.typeLabelSelected,
                                ]}
                            >
                                {type.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Dedicate This Donation */}
                <Text style={styles.fieldLabel}>Dedicate This Donation</Text>
                <View style={styles.dedicationRow}>
                    {dedicationTypes.map((ded) => (
                        <TouchableOpacity
                            key={ded}
                            style={[
                                styles.dedicationChip,
                                selectedDedication === ded && styles.dedicationChipActive,
                            ]}
                            onPress={() => setSelectedDedication(ded)}
                        >
                            <Text
                                style={[
                                    styles.dedicationText,
                                    selectedDedication === ded && styles.dedicationTextActive,
                                ]}
                            >
                                {ded}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Frequency */}
                <Text style={styles.fieldLabel}>Frequency</Text>
                <View style={styles.frequencyRow}>
                    {frequencies.map((freq) => (
                        <TouchableOpacity
                            key={freq}
                            style={[
                                styles.frequencyChip,
                                selectedFrequency === freq && styles.frequencyChipActive,
                            ]}
                            onPress={() => setSelectedFrequency(freq)}
                        >
                            <Text
                                style={[
                                    styles.frequencyText,
                                    selectedFrequency === freq && styles.frequencyTextActive,
                                ]}
                            >
                                {freq}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Choose Amount */}
                <Text style={styles.fieldLabel}>Choose Amount</Text>
                <View style={styles.amountGrid}>
                    {amounts.map((amount) => (
                        <TouchableOpacity
                            key={amount}
                            style={[
                                styles.amountChip,
                                selectedAmount === amount && styles.amountChipActive,
                            ]}
                            onPress={() => {
                                setSelectedAmount(amount);
                                setCustomAmount(amount.replace('₹', ''));
                            }}
                        >
                            <Text
                                style={[
                                    styles.amountChipText,
                                    selectedAmount === amount && styles.amountChipTextActive,
                                ]}
                            >
                                {amount}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Custom Amount Input */}
                <Text style={styles.customAmountLabel}>Enter Custom Amount ( Min: ₹ 50 )</Text>
                <View style={styles.customAmountBox}>
                    <Text style={styles.rupeeSymbol}>₹</Text>
                    <TextInput
                        style={styles.customInput}
                        value={customAmount}
                        onChangeText={setCustomAmount}
                        keyboardType="numeric"
                        placeholder="1,000"
                        placeholderTextColor="#CCC"
                    />
                </View>

                {/* Tax Benefit Card */}
                <View style={styles.taxBenefitCard}>
                    <View style={styles.taxBenefitLeft}>
                        <View style={styles.taxIconWrap}>
                            <Ionicons name="receipt-outline" size={20} color="#0D6B4F" />
                        </View>
                        <View>
                            <Text style={styles.taxBenefitTitle}>TAX BENEFIT</Text>
                            <Text style={styles.taxBenefitSub}>Generate Tax Certificate (80G)</Text>
                        </View>
                    </View>
                    <Switch
                        value={taxBenefit}
                        onValueChange={setTaxBenefit}
                        trackColor={{ false: '#DDD', true: '#A5D6A7' }}
                        thumbColor={taxBenefit ? '#0D6B4F' : '#f4f3f4'}
                    />
                </View>

                {/* Message / Dua */}
                <Text style={styles.fieldLabel}>A Message or Dua (Optional)</Text>
                <View style={styles.messageBox}>
                    <TextInput
                        style={styles.messageInput}
                        placeholder="Write your prayers or messages here..."
                        placeholderTextColor="#BBB"
                        multiline
                        value={message}
                        onChangeText={setMessage}
                        numberOfLines={3}
                    />
                </View>

                {/* Donation Summary */}
                <Text style={styles.summaryTitle}>Donation Summary</Text>
                <View style={styles.summaryCard}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Donation Amount</Text>
                        <Text style={styles.summaryValue}>₹5,000.00</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Processing Fee</Text>
                        <Text style={styles.summaryValue}>₹0.00</Text>
                    </View>
                    <View style={styles.summaryDivider} />
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryTotalLabel}>Total Contribution</Text>
                        <Text style={styles.summaryTotalValue}>₹5,000</Text>
                    </View>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            {/* Bottom Action */}
            <View style={styles.bottomAction}>
                <TouchableOpacity style={styles.proceedBtn}>
                    <Text style={styles.proceedBtnText}>Proceed to Payment</Text>
                    <Feather name="arrow-right" size={20} color="#fff" />
                </TouchableOpacity>
                <View style={styles.secureFooter}>
                    <Ionicons name="lock-closed" size={12} color="#999" />
                    <Text style={styles.secureText}>SECURE PAYMENT POWERED BY RAZORPAY</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    // Green Header
    greenHeader: {
        backgroundColor: '#0D6B4F',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 22,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    helpBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        marginBottom: 14,
    },
    statBadgesRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statBadge: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
        marginHorizontal: 4,
    },
    statBadgeText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
    },
    // Step Tabs
    stepTabsContainer: {
        backgroundColor: '#fff',
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    stepTabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    stepTab: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    stepTabText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#BBB',
        letterSpacing: 0.5,
    },
    stepTabTextActive: {
        color: '#0D6B4F',
    },
    stepTabIndicator: {
        width: 24,
        height: 3,
        backgroundColor: '#0D6B4F',
        borderRadius: 2,
        marginTop: 6,
    },
    stepProgressBg: {
        height: 3,
        backgroundColor: '#E8E8E8',
        marginHorizontal: 20,
        borderRadius: 2,
        marginTop: 4,
    },
    stepProgressFill: {
        height: '100%',
        backgroundColor: '#0D6B4F',
        borderRadius: 2,
    },
    stepDescription: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        paddingVertical: 10,
    },
    // Scroll Content
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 14,
    },
    // Field Label
    fieldLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
        marginTop: 6,
    },
    // Project Selector
    projectSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginBottom: 20,
    },
    projectLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectIcon: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    projectName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    // Donation Type Grid
    typeGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    typeItem: {
        width: '23%',
        alignItems: 'center',
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#E8E8E8',
    },
    typeItemSelected: {
        borderColor: '#0D6B4F',
        backgroundColor: '#F0FAF7',
    },
    typeIconWrap: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    typeIconWrapSelected: {
        backgroundColor: '#E8F5E9',
    },
    typeLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#888',
    },
    typeLabelSelected: {
        color: '#0D6B4F',
    },
    // Dedication
    dedicationRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    dedicationChip: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    dedicationChipActive: {
        backgroundColor: '#0D6B4F',
        borderColor: '#0D6B4F',
    },
    dedicationText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
    },
    dedicationTextActive: {
        color: '#fff',
    },
    // Frequency
    frequencyRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    frequencyChip: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 10,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    frequencyChipActive: {
        backgroundColor: '#0D6B4F',
        borderColor: '#0D6B4F',
    },
    frequencyText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
    },
    frequencyTextActive: {
        color: '#fff',
    },
    // Amount
    amountGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    amountChip: {
        width: '31%',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderWidth: 1.5,
        borderColor: '#E8E8E8',
        alignItems: 'center',
    },
    amountChipActive: {
        borderColor: '#0D6B4F',
        backgroundColor: '#F0FAF7',
    },
    amountChipText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#555',
    },
    amountChipTextActive: {
        color: '#0D6B4F',
    },
    // Custom Amount
    customAmountLabel: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    customAmountBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingHorizontal: 14,
        height: 50,
        marginBottom: 20,
    },
    rupeeSymbol: {
        fontSize: 18,
        color: '#666',
        marginRight: 8,
    },
    customInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    // Tax Benefit
    taxBenefitCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0FAF7',
        borderRadius: 14,
        padding: 14,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#C8E6C9',
    },
    taxBenefitLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taxIconWrap: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    taxBenefitTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: '#0D6B4F',
        letterSpacing: 0.5,
    },
    taxBenefitSub: {
        fontSize: 11,
        color: '#888',
        marginTop: 2,
    },
    // Message
    messageBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        padding: 14,
        marginBottom: 24,
        minHeight: 80,
    },
    messageInput: {
        fontSize: 13,
        color: '#333',
        lineHeight: 20,
    },
    // Summary
    summaryTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    summaryCard: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 18,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 13,
        color: '#888',
    },
    summaryValue: {
        fontSize: 13,
        color: '#555',
        fontWeight: '500',
    },
    summaryDivider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 10,
    },
    summaryTotalLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    summaryTotalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D6B4F',
    },
    // Bottom Action
    bottomAction: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    proceedBtn: {
        backgroundColor: '#0D6B4F',
        height: 54,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    proceedBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    secureFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secureText: {
        fontSize: 10,
        color: '#AAA',
        fontWeight: '600',
        marginLeft: 6,
        letterSpacing: 0.3,
    },
});

export default Donation;
