import sharp from 'sharp'
import profileImageSvg from '../assets/profile.svg?raw'


export const GET = async () => {
	const profileImagePng = await sharp(Buffer.from(profileImageSvg), { density: 72 })
		.png()
		.toBuffer()

	return new Response(profileImagePng, {headers: {"Content-Type": 'image/png'}})
}
