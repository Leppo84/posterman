import axios from "axios";
import { Post } from "../model/Post";
import { User } from "../model/User";

export function getPosts(): Promise<Post[]> | [] {
	return axios
		.get("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			return [];
		});
}

export function getUser(id: number): Promise<User> | undefined {
	return axios
		.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			return {};
		});
}
