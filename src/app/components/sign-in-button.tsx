"use client";

import { signInWithGoogle } from "@/lib/firebase/auth";
import { Button } from "@chakra-ui/react";

export const SignInButton = () => {
	return <Button onClick={signInWithGoogle}>Sign In</Button>;
};
