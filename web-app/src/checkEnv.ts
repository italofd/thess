const REQUIRED_VARS = ["VITE_CLERK_PUBLISHABLE_KEY"];

export const checkEnv = () => {
	let missingVars: typeof REQUIRED_VARS = [];

	for (const varKey of REQUIRED_VARS) {
		if (!import.meta.env[varKey]) missingVars.push(varKey);
	}

	if (missingVars.length)
		throw new Error(
			`Cabecinha de guidão provavelmente esqueceu as env vars: ${missingVars.join(" ; ")}`
		);
};
