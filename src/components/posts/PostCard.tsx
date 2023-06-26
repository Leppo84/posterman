import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Post } from "../../model/Post";
// import { useQuery } from "react-query";
// import Spinner from "../common/Spinner";
import { getAuthor } from "../../services/api";
import { Record } from "pocketbase";

interface PostCardProps {
	post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const [author, setAuthor] = useState<Record>();

	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				const author = await getAuthor(post.id);
				setAuthor(author);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAuthor();
	}, []);

	// const {
	// 	isLoading,
	// 	error,
	// 	data: author,
	// } = useQuery({
	// 	queryKey: ["user", post.userId],
	// 	queryFn: () => getAuthor(post.userId),
	// });

	console.log("non va: ", author?.name);

	return (
		<Card
			sx={{
				color: "slategray",
				bgcolor: "lightcyan",
			}}
		>
			<Typography variant="body1">Author: {author?.id}</Typography>
			<Typography variant="h4">{post.title}</Typography>
			<Typography variant="body2">{post.body}</Typography>
		</Card>
	);
};

export default PostCard;
