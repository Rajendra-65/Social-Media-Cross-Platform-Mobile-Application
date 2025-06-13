// app/_layout.tsx
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. P;ease set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
    )
}

export default function Layout() {
    return (
        <ClerkProvider publishableKey={publishableKey}>
            <ClerkLoaded>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, }}>
                        <Stack
                            screenOptions={{ headerShown: false }}
                        />
                    </SafeAreaView>
                </SafeAreaProvider>
            </ClerkLoaded>
        </ClerkProvider>
    )
}
