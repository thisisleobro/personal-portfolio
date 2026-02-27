import sharp from 'sharp'
import profileImageSvg from '../assets/profile.svg?raw'
import type { APIContext } from 'astro'


export async function GET(context: APIContext): Promise<Response> {
	const profileImagePng = await sharp(Buffer.from(profileImageSvg))
		.resize(Number(context.params.width || 32))
		.png()
		.toBuffer()

	return new Response(profileImagePng, {headers: {"Content-Type": 'image/png'}})
};

export function getStaticPaths() {
	return [
		{ params: { width: "32" } },
		{ params: { width: "64" } },
		{ params: { width: "128" } },
		{ params: { width: "256" } },
		{ params: { width: "512" } },
		{ params: { width: "1024" } },
	];
}