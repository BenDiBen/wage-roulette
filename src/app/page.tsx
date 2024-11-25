import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { SignInButton } from "./components/sign-in-button";

const Home = async () => {
	const { currentUser } = await getAuthenticatedAppForUser();
	return (
		<Stack align="flex-start" m={10}>
			<Heading>Home</Heading>
			<SignInButton />
			<Text>{currentUser?.displayName}</Text>
		</Stack>
	);
};

export default Home;
