import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import i18n from "../i18n";
import { Container, Typography } from "@mui/material";

export function HomePage() {
	const { t } = useTranslation(["translation", "common"]);
	t("key");

	const changeLang = (lang: string) => {
		if (lang === "it") {
			i18n.changeLanguage("it-IT");
		}
		if (lang === "en") {
			i18n.changeLanguage("en-US");
		}
	};

	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h4" my={2}>
				HOME
			</Typography>
			<div>
				<h2>{t("hello")}</h2>
				<span>
					{t("welcome")} USER! {t("selectLanguage")}
				</span>
			</div>
			<div>
				<Icon
					width="40"
					icon="openmoji:flag-italy"
					cursor={"pointer"}
					onClick={() => changeLang("it")}
				/>
				<Icon
					width="40"
					icon="openmoji:flag-us-outlying-islands"
					cursor={"pointer"}
					onClick={() => changeLang("en")}
				/>
			</div>
		</Container>
	);
}
