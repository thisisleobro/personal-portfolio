import profileImage from '../assets/profile.svg?raw'

export const prerender = true

export const GET = async ({}) => {
	return new Response(profileImage, {headers: {"Content-Type": "image/svg+xml"}})
};