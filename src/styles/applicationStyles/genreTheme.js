import theme from "styled-theming";

export const textColor = theme("genre", {
	grandPhilosophers: "#34e89e",
	luminaries: "#9900cc"
});

export const gradient = theme("genre", {
	grandPhilosophers:
		"-webkit-linear-gradient( 210deg, rgba(0, 0, 0, 0) 0%, rgba(6, 160, 88, 0.301) 100% )",
	luminaries:
		"-webkit-linear-gradient( 210deg, rgba(0, 0, 0, 0) 0%, rgba(153, 0, 153, 0.301) 100% )"
});

export const stopColor1 = theme("genre", {
	grandPhilosophers: "#34e89e",
	luminaries: "#9900cc"
});
