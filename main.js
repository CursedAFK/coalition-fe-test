// Carousel Logic

// Select the carousel element from the DOM
const carousel = document.querySelector('.carousel')

// Select all carousel indicators
const carouselIndicators = document.querySelectorAll('.carousel-indicator')

// Add a scroll event listener to the carousel
carousel.addEventListener('scroll', () => {
	// Get the current scroll position of the carousel
	const scrollPosition = carousel.scrollLeft

	// Get the width of the carousel
	const carouselWidth = carousel.offsetWidth

	// Get the number of items in the carousel
	const carouselItemsCount = carousel.childElementCount

	// Calculate the width of each indicator
	const indicatorWidth = carouselWidth / carouselItemsCount

	// Calculate the active index based on the scroll position and indicator width
	const activeIndex = Math.floor(scrollPosition / indicatorWidth)

	// Remove the 'active' class from all indicators
	carouselIndicators.forEach(indicator => {
		indicator.classList.remove('active')
	})

	// Add the 'active' class to the indicator corresponding to the active index
	carouselIndicators[activeIndex].classList.add('active')
})

// Tab Logic

// Select the first tab element
const tab1 = document.querySelector('.climb-h4-1')

// Select the second tab element
const tab2 = document.querySelector('.climb-h4-2')

// Select the tab image element
const tabImage = document.querySelector('.climb-image')

// Select all tab date elements
const tabDates = document.querySelectorAll('.tab-text')

// Select the first tab aside element
const tab1Aside = document.querySelector('.climb-aside-1')

// Select the second tab aside element
const tab2Aside = document.querySelector('.climb-aside-2')

// Set initial states for tab aside visibility
let tab1AsideIsOpen = false
let tab2AsideIsOpen = false

// Define image sources for each tab
const imageSrc = {
	tab1: '/images/mountain-tab-1.png',
	tab2: '/images/mountain-tab-2.png'
}

// Define text content for each tab's dates
const tabsTextContent = {
	tab1Dates: {
		firstParagraph: '25 Nov 2016',
		secondParagraph: '28 Nov 2016',
		thirdParagraph: '18 Dec 2016',
		fourthParagraph: '7 Jan 2017'
	},
	tab2Dates: {
		firstParagraph: '17 Nov 2016',
		secondParagraph: '13 Dec 2016',
		thirdParagraph: '28 Dec 2016',
		fourthParagraph: '9 Feb 2017'
	}
}

// Add a click event listener to the first tab
tab1.addEventListener('click', () => {
	// Remove the 'active-h4-parent' class from the second tab's parent element
	tab2.parentElement.classList.remove('active-h4-parent')

	// Remove the 'active-h4' class from the second tab
	tab2.classList.remove('active-h4')

	// Close the second tab aside if it's open
	if (tab2AsideIsOpen) {
		tab2Aside.classList.remove('active-tab')
		tab2AsideIsOpen = false
	}

	// Set the tab image source to the first tab's image source
	tabImage.src = imageSrc.tab1

	// Add the 'active-h4-parent' class to the first tab's parent element
	tab1.parentElement.classList.add('active-h4-parent')

	// Add the 'active-h4' class to the first tab
	tab1.classList.add('active-h4')

	// Update the tab dates with the first tab's date content
	tabDates[0].firstElementChild.textContent =
		tabsTextContent.tab1Dates.firstParagraph
	tabDates[1].firstElementChild.textContent =
		tabsTextContent.tab1Dates.secondParagraph
	tabDates[2].firstElementChild.textContent =
		tabsTextContent.tab1Dates.thirdParagraph
	tabDates[3].firstElementChild.textContent =
		tabsTextContent.tab1Dates.fourthParagraph

	// Toggle the visibility of the first tab aside
	if (tab1AsideIsOpen) {
		tab1Aside.classList.remove('active-tab')
		tab1AsideIsOpen = false
	} else {
		tab1Aside.classList.add('active-tab')
		tab1AsideIsOpen = true
	}
})

// Add a click event listener to the second tab
tab2.addEventListener('click', () => {
	// Remove the 'active-h4-parent' class from the first tab's parent element
	tab1.parentElement.classList.remove('active-h4-parent')

	// Remove the 'active-h4' class from the first tab
	tab1.classList.remove('active-h4')

	// Close the first tab aside if it's open
	if (tab1AsideIsOpen) {
		tab1Aside.classList.remove('active-tab')
		tab1AsideIsOpen = false
	}

	// Set the tab image source to the second tab's image source
	tabImage.src = imageSrc.tab2

	// Add the 'active-h4-parent' class to the second tab's parent element
	tab2.parentElement.classList.add('active-h4-parent')

	// Add the 'active-h4' class to the second tab
	tab2.classList.add('active-h4')

	// Update the tab dates with the second tab's date content
	tabDates[0].firstElementChild.textContent =
		tabsTextContent.tab2Dates.firstParagraph
	tabDates[1].firstElementChild.textContent =
		tabsTextContent.tab2Dates.secondParagraph
	tabDates[2].firstElementChild.textContent =
		tabsTextContent.tab2Dates.thirdParagraph
	tabDates[3].firstElementChild.textContent =
		tabsTextContent.tab2Dates.fourthParagraph

	// Toggle the visibility of the second tab aside
	if (tab2AsideIsOpen) {
		tab2Aside.classList.remove('active-tab')
		tab2AsideIsOpen = false
	} else {
		tab2Aside.classList.add('active-tab')
		tab2AsideIsOpen = true
	}
})

const tabAsideContainer = document.querySelector('.aside-container')

// Function to handle the click event outside of the tabs
document.addEventListener('click', e => {
	// Check if the clicked element is outside of the tab container
	if (!tabAsideContainer.contains(e.target)) {
		// Hide the visibility of the tab asides if they are open
		if (tab1AsideIsOpen) {
			tab1Aside.classList.remove('active-tab')
			tab1AsideIsOpen = false
		}

		if (tab2AsideIsOpen) {
			tab2Aside.classList.remove('active-tab')
			tab2AsideIsOpen = false
		}
	}
})
