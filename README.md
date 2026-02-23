# Jamiat Foundation – Donation App

A React Native (Expo) mobile application for the **Jamiat Foundation**, enabling transparent and easy Islamic charity donations.

## 📱 Screens

| Screen | Description |
|--------|-------------|
| **Home** | Overview with Quran verse, stats, urgent campaigns, quick donation, recent impact |
| **Project** | Browse all campaigns with filters (Food, Water, Health, Education, Orphan) |
| **Our Impact** | Personal impact dashboard, donation history, 80G tax certificates |
| **Profile** | User profile, preferences, badges, settings |
| **Donation** | Full multi-step donation flow with Razorpay payment integration |
| **Campaign Details** | In-depth campaign page with live updates |

## 🎨 Design System

- **Primary Color:** `#0D6B4F` (Deep Forest Green)
- **Background:** `#F8F9FA`
- **Font:** System default (San Francisco / Roboto)
- **Icons:** @expo/vector-icons (Ionicons, Feather, MaterialCommunityIcons)

## 🛠 Tech Stack

- **React Native** 0.81.5
- **Expo** SDK 54
- **React Navigation** v7 (Bottom Tabs + Native Stack)
- **EAS Build** for APK/AAB generation

## 🚀 Getting Started

```bash
npm install
npm start
```

Scan the QR code with **Expo Go** on Android or iOS.

## 📦 Build APK

```bash
eas build --profile preview --platform android
```

## 🏗 Project Structure

```
myApp/
├── App.js                    # Root navigation setup
├── src/
│   └── screens/
│       ├── Home.js           # Home screen
│       ├── Explore.js        # Project/Explore screen
│       ├── Donation.js       # Donation flow
│       ├── CampaignDetails.js# Campaign detail view
│       ├── Impact.js         # My Impact screen
│       └── Profile.js        # User profile
├── assets/                   # Campaign images
└── eas.json                  # EAS build configuration
```

## 🌙 Donation Types Supported

- **Zakat** – Obligatory annual charity
- **Sadaqah** – Voluntary charity
- **Fitrana** – Zakat al-Fitr
- **General** – Unrestricted donation

## 📋 Features

- ✅ Campaign browsing with category filters
- ✅ Progress tracking (raised vs. goal)
- ✅ Multi-step donation flow
- ✅ Dedication options (For Myself / Loved One / In Memory Of)
- ✅ Frequency settings (One-Time / Daily / Weekly / Monthly / Yearly)
- ✅ 80G Tax Benefit certificate toggle
- ✅ Daily giving setup (₹1/day)
- ✅ Success stories – Recent Impact feed
- ✅ Secure payment via Razorpay
