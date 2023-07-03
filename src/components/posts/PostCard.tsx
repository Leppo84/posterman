import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Post } from "../../model/Post";
import Spinner from "../common/Spinner";
import { useQuery } from "react-query";
import { getAuthor, removePost } from "../../services/api";

interface PostCardProps {
	post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const { isLoading, error, data } = useQuery("author", () =>
		getAuthor(post.userId)
	);

	const [author, setAuthor] = useState<string>();

	useEffect(() => {
		const fetchData = async () => {
			getAuthor(post.userId)
				.then((user) => setAuthor(user))
				.catch((err) => console.log(err));
		};
		fetchData();
	}, []);

	if (error) {
		return <div>An error occurred</div>;
	}

	return (
		<Card
			sx={{
				color: "slategray",
				bgcolor: "lightcyan",
				p: 1,
			}}
		>
			{isLoading ? (
				<Spinner></Spinner>
			) : (
				<Typography variant="body1">Author: {author}</Typography>
			)}
			<Typography variant="h4">{post.title}</Typography>
			<Typography variant="body2">{post.body}</Typography>
			<Button
				variant="outlined"
				color="error"
				onClick={() => removePost(post.id)}
				sx={{ m: 2 }}
			>
				CANCELLA POST
			</Button>
		</Card>
	);
};

export default PostCard;
