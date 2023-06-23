import axios from "axios";
import { Post } from "../model/Post";
import { User } from "../model/User";
import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export function getDbUsers(): User[] | void {
	let allUsers: User[] | any = [];
	pb.collection("users")
		.getList()
		.then((res) => (allUsers = res.items));
	return allUsers;
}

export function getPosts(): Promise<Post[]> | [] {
	return axios
		.get("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			return [];
		});
}

export function getUsers(): Promise<User[]> | [] {
	return axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			return [];
		});
}
