import { forEach, keys, pipe } from "ramda";

const config: Record<string, string | undefined> = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function trimQuotes(key: string) {
	const value = config[key];
	if (value?.charAt(0) === '"') {
		config[key] = value.substring(1, value.length - 1);
	}
}

const trimValueQuotes = pipe(
	keys<Record<string, string | undefined>>,
	forEach(trimQuotes),
);

trimValueQuotes(config);

export const firebaseConfig = config;
