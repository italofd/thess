import { useUser } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="p-2 text-4xl flex">
			<h3 className="self-center">Thess</h3>
		</div>
	);
}
