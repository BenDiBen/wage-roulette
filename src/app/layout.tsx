import { Provider } from "@/components/ui/provider";

const RootLayout = (props: { children: React.ReactNode }) => {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
