import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../components/common/Spinner";
import { getDbUsers } from "../../services/api";
import { User } from "../../model/User";

export function UsersPage() {
	const { isLoading, error, data } = useQuery("users", getDbUsers);

	const [allUsers, setAllUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getDbUsers();
				setAllUsers(users);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	if (error) {
		return <div>An error occurred</div>;
	}

	console.log("Coso due: ", data);

	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h4" my={2}>
				UTENTI
			</Typography>
			{!allUsers ? (
				<Spinner></Spinner>
			) : (
				allUsers.map((user: User) => <p key={user.id}>{user.name}</p>)
			)}
		</Container>
	);
}
