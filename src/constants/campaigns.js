/**
 * Campaign data for the Jamiat Foundation app.
 * This centralises all static campaign data used across Home, Explore, and CampaignDetails screens.
 */

export const URGENT_CAMPAIGNS = [
    {
        id: '1',
        title: 'Assam Flood Relief 2024',
        image: require('../../assets/assam_flood.jpg'),
        raised: '₹15.4L',
        goal: '₹25L',
        badge: 'URGENT',
        badgeColor: '#E74C3C',
        progress: 0.65,
        categoryTag: 'DISASTER RELIEF',
        location: 'Assam, India',
    },
    {
        id: '2',
        title: 'Orphan Support Program',
        image: require('../../assets/education.jpg'),
        raised: '₹4L',
        goal: '₹10L',
        badge: 'EDUCATION',
        badgeColor: '#3498db',
        progress: 0.40,
        categoryTag: 'ORPHAN SUPPORT',
        location: 'Nationwide',
    },
];

export const ALL_CAMPAIGNS = [
    {
        id: '3',
        title: 'Medical Aid for Gaza',
        description: 'Providing emergency medical supplies and trauma care to hospitals facing critical shortages.',
        image: require('../../assets/assam_flood.jpg'),
        raised: '₹37.5L',
        goal: '₹50 Cr.',
        amountRaised: '₹37.5L',
        progress: 0.75,
        badge: 'HIGH PRIORITY',
        badgeColor: '#E74C3C',
        categoryTag: 'HEALTH',
        location: 'Gaza Region',
    },
    {
        id: '4',
        title: 'Clean Water Hand Pumps',
        description: 'Installing durable hand pumps in villages with no access to safe drinking water.',
        image: require('../../assets/clean_water.jpg'),
        raised: '₹5.04L',
        goal: '₹12 Cr.',
        amountRaised: '₹5.04L',
        progress: 0.42,
        badge: 'WATER',
        badgeColor: '#0D6B4F',
        categoryTag: 'INFRASTRUCTURE',
        location: 'Rural Mewat',
    },
    {
        id: '5',
        title: 'Back-to-School Kits',
        description: 'Providing school bags, books, and uniforms to 1000 orphaned children for the new session.',
        image: require('../../assets/education.jpg'),
        raised: '₹7.65L',
        goal: '₹8.5L',
        amountRaised: '₹7.65L',
        progress: 0.90,
        badge: 'EDUCATION',
        badgeColor: '#3498db',
        categoryTag: 'ORPHAN SUPPORT',
        location: 'Nationwide',
    },
];

export const RECENT_IMPACT = [
    {
        id: '1',
        tag: 'SUCCESS STORY',
        title: 'Clean Water in Mewat',
        description: 'Installed 5 hand pumps, providing clean water to 200 families in rural Mewat.',
        time: '2 hrs ago',
        image: require('../../assets/clean_water.jpg'),
    },
    {
        id: '2',
        tag: 'SUCCESS STORY',
        title: 'Free Eye Surgery Camp',
        description: '150 successful cataract surgeries performed this weekend in collaboration with local hospitals.',
        time: '5 days ago',
        image: require('../../assets/community_kitchen.jpg'),
    },
];
