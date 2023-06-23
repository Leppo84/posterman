import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Post } from "../../model/Post";
import { getUsers } from "../../services/apiPost";
import { useQuery } from "react-query";

interface PostCardProps {
	post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	// 	const {
	// 		isLoading,
	// 		error,
	// 		data: user,
	// 	} = useQuery({
	// 		queryKey: ["user", post.userId],
	// 		queryFn: () => getUser(post.userId),
	// 	});

	return (
		<Card
			sx={{
				color: "slategray",
				bgcolor: "lightcyan",
			}}
		>
			{/* <Typography variant="body1">Author: {user?.name}</Typography>
			<Typography variant="h4">{post.title}</Typography>
			<Typography variant="body2">{post.body}</Typography> */}
		</Card>
	);
};

export default PostCard;
