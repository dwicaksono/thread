import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { BottomBar, LeftBar, RightBar, Topbar } from "@/components/shared";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Threads",
	description: "A Next.js 14 Meta Threads application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}>
			<html lang="en">
				<body className={inter.className}>
					<Topbar />
					<main className="flex flex-row">
						<LeftBar />
						<section className="main-container">
							<div className="w-full max-w-4xl">{children}</div>
						</section>
						<RightBar />
						<BottomBar />
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
