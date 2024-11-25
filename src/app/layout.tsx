import { Provider } from "@/components/ui/provider";
import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
