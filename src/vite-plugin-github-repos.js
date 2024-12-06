import { parse, HTMLElement } from 'node-html-parser';
import repos from '../repos.json'


export default function() {
	return {
		name: 'vite-plugin-github-repos',
		// apply: 'build',
		transformIndexHtml: {
			order: 'pre',
			handler: (htmlString) => {
				const document = parse(htmlString)

				const repoElementsContainer = document.getElementById('repos')

				repos.forEach((repo) => {
					const title = new HTMLElement('p', {id: `title-${repo.name}`})
					title.textContent = repo.description ?? 'No description'

					const stars = new HTMLElement('p', {id: `stars-${repo.name}`})
					stars.setAttribute('class', '')
					stars.textContent = repo.stargazers_count

					const url = new HTMLElement('a', {id: `url-${repo.name}`, href: 'google.com'})
					url.textContent = 'url'
					url.setAttribute('href', repo.html_url)
					url.setAttribute('target', '_blank')
					url.setAttribute('class', 'text-red-500')

					const repoElement = new HTMLElement('div', {id: `repo-${repo.name}`})

					repoElement.appendChild(title)
					repoElement.appendChild(stars)
					repoElement.appendChild(url)

					repoElementsContainer.appendChild(repoElement)
				})

				// console.log(document.toString())

				return document.toString()
			},
		}
	}
}