import { Post } from "../model/Post";
import PocketBase from "pocketbase";
import { User } from "../model/User";
import { useQuery } from "react-query";

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

// get user name for post

export async function getAuthor(authorId: string): Promise<string> {
	const response = await pb.collection("users").getOne(authorId);
	return response.name as any;
}

// GET POSTS

export async function getDbPosts(): Promise<Post[]> {
	const response = await pb.collection("posts").getList(undefined, 150);
	return response.items.map((k) => k as any);
}

// CREATE Post

export async function addPost(post: Partial<Post>) {
	try {
		// const res = await ProductsApi.add(product);
		pb.collection("posts").create<Post>(post);
	} catch (e) {
		console.log("error: ", e);
	}
}

// DELETE post

export function removePost(id: string) {
	pb.collection("posts").delete(id);
	getDbPosts();
}
