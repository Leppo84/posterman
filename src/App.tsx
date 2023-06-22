import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/common/Header";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/posts/PostsPage";
import { UsersPage } from "./pages/users/UsersPage";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Container
					maxWidth="xl"
					disableGutters
					sx={{ bgcolor: "lightgoldenrodyellow", minHeight: "100vh" }}
				>
					<Header />
					<Routes>
						<Route path="" element={<HomePage />} />
						<Route path="posts" element={<PostsPage />} />
						<Route path="users" element={<UsersPage />} />
						<Route path="*" element={<Navigate to="" />} />
					</Routes>
				</Container>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
