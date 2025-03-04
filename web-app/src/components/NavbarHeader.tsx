import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	UserButton,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export const NavbarHeader = () => {
	return (
		<div className="flex px-4 border-b-gray-900 border-b-2 justify-stretch h-14 text-2xl ">
			<div className="flex w-full gap-8">
				<Link
					to="/"
					activeOptions={{ exact: true }}
					className="flex self-center"
				>
					Home
				</Link>
			</div>
			<div className="flex justify-end w-full gap-8">
				<SignedOut>
					<SignInButton withSignUp={true} mode="modal">
						<button className="cursor-pointer">Log In</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
					<SignOutButton>
						<button className="cursor-pointer">Log Out</button>
					</SignOutButton>
				</SignedIn>
			</div>
		</div>
	);
};
