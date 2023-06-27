import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/posts/PostCard";
import { getDbPosts } from "../../services/api";
import { Post } from "../../model/Post";
import Spinner from "../../components/common/Spinner";

export function PostsPage() {
	const [allPosts, setAllPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const posts = await getDbPosts();
				setAllPosts(posts);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography variant="h4" my={2}>
				BACHECA
			</Typography>
			<Grid container spacing={3}>
				{allPosts ? (
					allPosts.slice(-40).map((post: Post) => (
						<Grid
							key={post.id}
							item
							lg={2.4}
							md={3}
							sm={6}
							xs={12}
							sx={{
								display: "flex",
								alignItems: "baseline",
								justifyContent: "center",
							}}
						>
							<PostCard post={post}></PostCard>
						</Grid>
					))
				) : (
					<Spinner></Spinner>
				)}
			</Grid>
		</Container>
	);
}
