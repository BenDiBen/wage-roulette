"use client";

import { type User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "./firebase/clientApp";

export function useUser() {
	const [user, setUser] = useState<User | null>();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (authUser) => {
			setUser(authUser);
		});

		return () => unsubscribe();
	}, []);

	return user;
}
