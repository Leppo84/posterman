import axios from "axios";
import { Post } from "../model/Post";
import PocketBase from "pocketbase";

import { Record } from "pocketbase";

import { QueryClient } from "react-query";
import { Address } from "cluster";
import { Company, User } from "../model/User";

export const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

// GET USERS (commentata alt con ciclo)

export async function getDbUsers(): Promise<User[]> {
	const response = await pb.collection("users").getList();
	/*let r = [];
	for (let i of response.items) {
		let n = {
			'asd': i.id
		}
		r.push(n);
	} */
	return response.items.map((k) => k as any); //.map(i => ({ 'asd': i.id }));
}

// get user name for post (to be fixed)

export async function getAuthor(authorId: string): Promise<string> {
	const response = await pb.collection("users").getOne(authorId);
	return response.name as any;
}

// GET POSTS

export async function getDbPosts(): Promise<Post[]> {
	const response = await pb.collection("posts").getList();
	return response.items.map((k) => k as any);
}

// CREATE to be fixed

// export async function loadJsonDataToDb() {
// 	let promises = [];
// 	for (let d of jsonData) {
// 		promises.push(pb.collection("posts").create(d));
// 		console.log("record creato: ", promises);
// 	}
// 	await Promise.all(promises);
// }

export async function addPost(post: Partial<Post>) {
	try {
		// const res = await ProductsApi.add(product);
		pb.collection("posts").create(post);
	} catch (e) {
		console.log("error: ", e);
	}
}
