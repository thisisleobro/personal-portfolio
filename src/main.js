import './style.css'
// import { setupCounter } from './counter.js'
// import repos from '../repos.json'


// const repoElementsContainer = document.querySelector('#repos')

// repos.forEach((repo) => {
// 	const title = document.createElement("p")
// 	title.textContent = repo.description ?? 'No description'
	
// 	const stars = document.createElement("p")
// 	stars.textContent = repo.stargazers_count
	
// 	const url = document.createElement("a")
// 	url.textContent = 'url'
// 	url.href = repo.html_url
// 	url.className = 'text-violet-500'

// 	const repoElement = document.createElement('div')
// 	repoElement.appendChild(title)
// 	repoElement.appendChild(stars)
// 	repoElement.appendChild(url)

// 	repoElementsContainer.appendChild(repoElement)
// })

// setupCounter(document.querySelector('#counter'))


const sections = document.querySelectorAll("body > section");
const navLi = document.querySelectorAll("#nav-links > a");

window.addEventListener('scroll', () => {
	console.log('scroll')
	var currentSectionId = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop - 300) {
			currentSectionId = section.getAttribute("id");
		}
	});

	navLi.forEach((li) => {
		li.classList.remove("active");

		if (li.href.includes(currentSectionId)) {
			li.classList.add('active');
		}
	});
}, { passive: true })