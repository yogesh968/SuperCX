# Contribution Guidelines

## 📝 Commit Convention

This project follows **Conventional Commits** format:

```
<type>(<scope>): <short description>
```

### Types
| Type | Description |
|------|-------------|
| `feat` | New feature or screen |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style / formatting |
| `refactor` | Code restructuring |
| `chore` | Build tooling, dependencies |
| `assets` | Add/update image/audio/video files |

### Examples
```
feat: Add Donation screen with Razorpay integration
fix: Correct progress bar overflow on Explore screen
assets: Add Assam flood relief campaign image
docs: Update README with setup instructions
chore: Update EAS build profile for APK
```

## 🔧 Setup

```bash
git clone https://github.com/yogesh968/SuperCX.git
cd SuperCX/myApp
npm install
npm start
```

## 🏗 Branch Strategy

- `main` – Stable production code
- `feature/*` – New features
- `fix/*` – Bug fixes

## 📱 Testing

Test on a physical device or simulator via Expo Go:
```bash
npm start
# Scan QR with Expo Go
```

## 📦 Building APK

```bash
eas build --profile preview --platform android
```
