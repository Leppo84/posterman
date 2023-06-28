import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";

const Header: React.FC = () => {
	const bannerMessage = `🚀 Site under construction. Warning: some pages may explode!  🚀`;

	return (
		<Box>
			<Typography
				fontWeight="medium"
				sx={(theme) => ({
					color: "#fff",
					py: "12px",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 14,
					background: "black",
				})}
			>
				{bannerMessage}
			</Typography>
			<Navbar />
		</Box>
	);
};

export default Header;
