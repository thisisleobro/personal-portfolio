import { parse, HTMLElement } from 'node-html-parser';
import repos from '../repos.json'


export default function() {
	return {
		name: 'vite-plugin-github-repos',
		// apply: 'build',
		transformIndexHtml: (htmlString) => {
			const document = parse(htmlString)

			const repoElementsContainer = document.getElementById('github-repos')

			repos.forEach((repo) => {
				// Name
				const name = new HTMLElement('p', {id: `name-${repo.name}`})
				name.textContent = repo.name ?? 'No Name'
				name.setAttribute('class', '')

				// description
				const description = new HTMLElement('p', {id: `description-${repo.name}`})
				description.textContent = repo.description ?? 'No description'

				//stars
				const stars = new HTMLElement('p', {id: `stars-${repo.name}`})
				stars.setAttribute('class', '')
				stars.textContent = repo.stargazers_count

				// url
				const url = new HTMLElement('a', {id: `url-${repo.name}`})
				url.textContent = 'url'
				url.setAttribute('href', repo.html_url)
				url.setAttribute('target', '_blank')
				url.setAttribute('class', '')

				const repoElement = new HTMLElement('div', {id: `repo-${repo.name}`})
				repoElement.setAttribute('class', '')

				repoElement.appendChild(name)
				repoElement.appendChild(description)
				repoElement.appendChild(stars)
				repoElement.appendChild(url)

				repoElementsContainer.appendChild(repoElement)
			})

			// console.log(document.toString())

			return document.toString()
		},
		
	}
}