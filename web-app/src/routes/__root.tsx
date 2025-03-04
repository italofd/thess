import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { checkEnv } from "../checkEnv";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { LoadingAnimation } from "../components/Loading";
import { NavbarHeader } from "../components/NavbarHeader";

export const Route = createRootRoute({
	component: RootComponent,
	beforeLoad: () => {
		checkEnv();
	},
});

function RootComponent() {
	return (
		<>
			<ClerkProvider
				publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
			>
				<RootChildren />
			</ClerkProvider>
		</>
	);
}

const RootChildren = () => {
	const { isLoaded } = useUser();

	return (
		<div className="max-h-dvh max-w-full mx-20">
			{isLoaded ? (
				<>
					<NavbarHeader />
					<Outlet />
					<TanStackRouterDevtools position="bottom-right" />
				</>
			) : (
				<div className="flex h-dvh w-full justify-center place-items-center">
					<LoadingAnimation />
				</div>
			)}
		</div>
	);
};
