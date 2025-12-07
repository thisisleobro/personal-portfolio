// TODO: remove this as this is a temporary fix. Crawled '/en' page no longer in use. Default language (/en) now defaults to '/'


export async function GET({redirect}) {
	return redirect('/', 301);
}