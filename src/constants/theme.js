/**
 * App-wide design constants for Jamiat Foundation Donation App
 * Import these in any screen to keep styling consistent.
 */

export const COLORS = {
    primary: '#0D6B4F',        // Deep Forest Green – main brand color
    primaryLight: '#E8F5E9',   // Light green background tints
    primaryMid: '#A5D6A7',     // Medium green for toggles/switches
    danger: '#E74C3C',         // Red – urgent badges, errors
    warning: '#F39C12',        // Amber – food category
    info: '#3498db',           // Blue – education category
    purple: '#7B1FA2',         // Purple – general donation
    sky: '#0288D1',            // Sky blue – interest purification

    background: '#F8F9FA',     // App background
    white: '#FFFFFF',
    black: '#111111',
    textPrimary: '#333333',
    textSecondary: '#666666',
    textMuted: '#999999',
    border: '#E8E8E8',
    divider: '#F0F0F0',
};

export const FONTS = {
    xs: 9,
    sm: 11,
    base: 13,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
    xxxl: 28,
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
};

export const RADIUS = {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
    full: 9999,
};

export const SHADOW = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 4,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.10,
        shadowRadius: 15,
        elevation: 8,
    },
};
