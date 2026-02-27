import profileImage from '../assets/profile.svg?raw'

export const GET = () => new Response(profileImage, {headers: {"Content-Type": "image/svg+xml"}})