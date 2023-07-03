import {
	Button,
	Container,
	InputLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Post } from "../../model/Post";
import Spinner from "../../components/common/Spinner";

// FORM SETTINGS

const initialState: Partial<Post> = {
	title: "",
	body: "",
	userId: "9x9esoqlt98e4bi",
};

export function PostDetail() {
	// 	const [allPosts, setAllPosts] = useState<Post[]>([]);

	// 	useEffect(() => {
	// 		const fetchData = async () => {
	// 			try {
	// 				const posts = await getDbPosts();
	// 				setAllPosts(posts);
	// 			} catch (error) {
	// 				console.error(error);
	// 			}
	// 		};

	// 		fetchData();
	// 	}, []);

	// CREATE POST

	const [formData, setFormData] = useState(initialState);
	const [dirty, setDirty] = useState<boolean>(false);

	useEffect(() => {
		setFormData(initialState);
	}, []);

	function changeHandler(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const value = e.currentTarget.value;
		const name = e.currentTarget.name;
		setFormData((s) => ({ ...s, [name]: value }));
		setDirty(true);
	}

	function saveHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		// addPost(formData);

		setFormData(initialState);
	}

	const isNameValid = formData.title?.length;
	const isDescrValid = formData.body?.length;

	const isValid = isNameValid && isDescrValid;

	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h4" my={2}>
				{/* {post.title} */}
			</Typography>
			<Container>
				<Typography variant="h6" m={2}>
					{/* autore {user.name} */}
				</Typography>
				<Stack
					width={"100%"}
					direction={"column"}
					gap={1}
					spacing={1}
					alignItems={"stretch"}
					flexWrap={"nowrap"}
					mb={2}
				>
					<InputLabel sx={{ flexGrow: 1 }}>Inserisci un titolo:</InputLabel>
					<TextField
						id="title"
						name="title"
						label="Titolo..."
						required
						variant="outlined"
						value={formData.title}
						onChange={changeHandler}
						sx={{ flexGrow: 2 }}
					/>
					<InputLabel sx={{ flexGrow: 1 }}>Inserisci il contenuto:</InputLabel>
					<TextField
						id="body"
						name="body"
						label="Contenuto..."
						required
						variant="outlined"
						value={formData.body}
						onChange={changeHandler}
						sx={{ flexGrow: 2 }}
					/>
					<Button
						onClick={saveHandler}
						disabled={!isValid}
						sx={{ flexGrow: 2 }}
						variant="outlined"
					>
						SAVE
					</Button>
				</Stack>
			</Container>
		</Container>
	);
}
