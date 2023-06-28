import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
	const pagesLink = [
		{ name: "posts", id: 1 },
		{ name: "users", id: 2 },
	];
	const settings = [
		{ name: "Profile", id: 3 },
		{ name: "Logout", id: 4 },
	];

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const { t } = useTranslation(["translation", "common"]);
	t("key");

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Stack
						sx={{
							flexDirection: "row",
							direction: "inherit",
							justifyContent: "space-between",
							alignItems: "center",
							alignContent: "center",
							flexGrow: 1,
						}}
					>
						<NavLink to={"home"} style={{ width: "12wv" }}>
							<Button
								sx={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<Icon
									icon="emojione-monotone:postal-horn"
									width={48}
									style={{ marginBottom: 6 }}
								/>
								<Typography
									variant="h6"
									sx={{
										mx: 2,
										display: { xs: "none", sm: "flex" },
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: ".3rem",
										color: "inherit",
										textDecoration: "none",
									}}
								>
									POSTERMAN
								</Typography>
							</Button>
						</NavLink>

						{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
						<Box sx={{ flexGrow: 10, textAlign: "start" }}>
							{pagesLink.map((page) => (
								<NavLink to={page.name}>
									<Button
										key={page.id}
										// onClick={handleCloseNavMenu}
										sx={{
											my: 2,
											color: "white",
											// display: "block",
											textDecoration: "none",
										}}
									>
										{t(page.name)}
									</Button>
								</NavLink>
							))}
						</Box>
						<Box sx={{ flexGrow: 2, textAlign: "end" }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting.id} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
