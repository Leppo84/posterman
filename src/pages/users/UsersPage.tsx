import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { User } from "../../model/User";
import Spinner from "../../components/common/Spinner";
import { getDbUsers, getUsers } from "../../services/apiPost";

export function UsersPage() {
	// const { isLoading, error, data } = useQuery({
	// 	queryKey: "users",
	// 	queryFn: () => getDbUsers(),
	// });
	// console.log("ma come? ", data);
	// const millemila = getDbUsers();
	// console.log("coso db: ", millemila);

	const [allUsers, setAllUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getUsers();
				setAllUsers(users);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	// const {
	// 	isLoading,
	// 	error,
	// 	data: user,
	// } = useQuery({
	// 	queryKey: ["user", post.userId],
	// 	queryFn: () => getUser(post.userId),
	// });

	// if (error) {
	// 	return <div>An error occurred</div>;
	// }

	// console.log("Coso due: ", data);

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
			{/* {!users ? (
				<Spinner></Spinner>
			) : (
				users.map((user: User) => <p key={user.id}>{user.name}</p>)
			)} */}
		</Container>
	);
}
