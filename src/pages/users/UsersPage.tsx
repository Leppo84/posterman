import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { User } from "../../model/User";

export function UsersPage() {
	const { isLoading, error, data } = useQuery("allUsers", () =>
		fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
			res.json()
		)
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occurred</div>;
	}

	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h4" my={2}>
				UTENTI
			</Typography>
			{data.map((user: User) => (
				<p key={user.id}>{user.name}</p>
			))}
		</Container>
	);
}
