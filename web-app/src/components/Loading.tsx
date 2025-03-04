//OBS: I will just not import libraries for this now #PURECSS FTW
export const LoadingAnimation = () => {
	return (
		<>
			<style>
				{`
.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
}
.loader:before {
  content:"Loading..."
}
@keyframes l4 {to{clip-path: inset(0 -1ch 0 0)}}`}
			</style>
			<div className="loader"></div>
		</>
	);
};
