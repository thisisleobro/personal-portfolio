import profileImage from '../assets/profile.svg?raw'

export const GET = async ({}) => {
	return new Response(profileImage, {headers: {"Content-Type": "image/svg+xml"}})
};