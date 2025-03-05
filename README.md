# Interview Pastel Grid

Interview Pastel Grid is an application developed using Expo and React Native, supporting drag-and-drop elements in a grid layout.

## 🚀 Technologies Used

- **React Native**: 0.76.7
- **Expo**: 52.0.37
- **React**: 18.3.1
- **TypeScript**
- **react-native-drag-sort**: 2.4.4
- **@testing-library/react-native**: 13.1.0

## 📦 Installation

⚠️ Note: This project requires Node.js 20 or later. Please ensure you have the correct version installed before proceeding.

Make sure you have Node.js and Expo CLI installed.

### 1. Clone the repository

```sh
git clone https://github.com/perryhoang2012/interview-pastel-grid.git
cd interview-pastel-grid
```

### 2. Install dependencies

```sh
yarn
```

or

```sh
npm install
```

## ▶️ Run the Application

### Run with prebuild (iOS & Android folders required)

If you want to run the application in prebuild mode with native iOS and Android folders, switch to the appropriate branch:

```
git checkout feature/prebuild
```

Then, install dependencies and run:

```
expo prebuild
```

### Run on a device or emulator ios

```sh
yarn ios
```

or

```sh
npm run ios
```

### Run on a device or emulator android

```
yarn android
```

or

```
npm run android
```

Then, scan the QR code using Expo Go (iOS/Android) or choose to run on an emulator.

## 🛠 Key Features

- Drag and drop elements in a grid using **react-native-drag-sort**
- Implemented a function to **generate random color palettes**
- Write tests using **@testing-library/react-native**

## 🧪 Run Tests

```sh
yarn test
```

or

```sh
npm test
```

## 💡 Challenges Faced

During development, we encountered several challenges when searching for a flexible list interface that supports a dynamic grid layout:

**FlatList**: Not **flexible** enough for a dynamic grid layout.

**ScrollView**: Allowed flexible layouts but **lacked drag-and-drop functionality**.

**react-native-draggable-gridview**: Had drag-and-drop support but did **not scroll** properly and has not been actively maintained.

**react-native-drag-sort**: **Worked** well, allowing smooth drag-and-drop functionality.

**Implemented a function to generate a random color palette dynamically**.

**Calculating item sizes for different screen types to ensure a consistent and responsive layout across devices.**

## 📝 Notes

- Make sure you have **Expo Go** installed on your mobile device to run the app.
- If you encounter issues, check your **Node.js** and **Expo CLI** versions.

💡 **If you have any questions or need support, feel free to open an issue on GitHub or contact me!**
