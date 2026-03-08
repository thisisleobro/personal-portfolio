import { getCollection } from "astro:content"

// TODO: only support language filter for now. We should support more
export const getPosts = async (language: string) => {
	const posts = await getCollection('blog')

	return posts.filter(post => post.data.language === language)
}