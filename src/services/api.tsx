import axios from "axios";
import { Post } from "../model/Post";
import PocketBase from "pocketbase";
import { Record } from "pocketbase";

import { QueryClient } from "react-query";
import { Address } from "cluster";
import { Company } from "../model/User";

export interface UserResponse {
	address: Address;
	"@collectionId": string;
	"@collectionName": string;
	company: Company;
	created: string;
	"@expand": {};
	id: string;
	email: string;
	name: string;
	phone: string;
	updated: string;
	username: string;
	website: string;
}

export const pb = new PocketBase("http://127.0.0.1:8090");

export const realTime = async (index: [string], queryClient: QueryClient) => {
	return await pb.realtime.subscribe("users", function (e) {
		console.log("real time users", e.record);
	});
};

export async function getDbUsers(): Promise<Record[]> {
	const response = await pb.collection("users").getList();
	return response.items;
}

export async function getAuthor(authorId: number): Promise<Record> {
	const response = await pb.collection("users").getList();
	return response.items[authorId];
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

// export function getUsers(): Promise<User[]> | [] {
// 	return axios
// 		.get("https://jsonplaceholder.typicode.com/users")
// 		.then((response) => response.data)
// 		.catch((error) => {
// 			console.error(error);
// 			return [];
// 		});
// }
