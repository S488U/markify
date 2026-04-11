import "./globals.css";
import AppShell from "@/src/components/AppShell";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ThemeProvider from "@/src/components/ThemeProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<ThemeProvider>
					<AppShell navbar={<Navbar />} footer={<Footer />}>
						{children}
					</AppShell>
				</ThemeProvider>
			</body>
		</html>
	);
}
