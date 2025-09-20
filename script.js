// Global variables and data
let currentPage = 'home';
let currentRating = 5;

// Sample data
const featuredPlaces = [
    {
        name: "Mumbai",
        state: "Maharashtra",
        image: "🏙️",
        description: "The City of Dreams, Bollywood capital",
        attractions: ["Gateway of India", "Marine Drive", "Bollywood Studios"],
        rating: 4.5
    },
    {
        name: "Delhi",
        state: "Delhi",
        image: "🏛️",
        description: "Historic capital with rich heritage",
        attractions: ["Red Fort", "India Gate", "Lotus Temple"],
        rating: 4.3
    },
    {
        name: "Munnar",
        state: "Kerala",
        image: "🌿",
        description: "Hill station with tea gardens",
        attractions: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam"],
        rating: 4.7
    },
    {
        name: "Goa",
        state: "Goa",
        image: "🏖️",
        description: "Beautiful beaches and Portuguese heritage",
        attractions: ["Calangute Beach", "Fort Aguada", "Dudhsagar Falls"],
        rating: 4.6
    },
    {
        name: "Jaipur",
        state: "Rajasthan", 
        image: "🕌",
        description: "The Pink City with royal palaces",
        attractions: ["Hawa Mahal", "Amber Fort", "City Palace"],
        rating: 4.4
    },
    {
        name: "Rishikesh",
        state: "Uttarakhand",
        image: "🏔️",
        description: "Yoga capital and adventure sports",
        attractions: ["Laxman Jhula", "River Rafting", "Beatles Ashram"],
        rating: 4.5
    }
];

const exploreDestinations = [
    {
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        category: "heritage",
        rating: 4.8,
        image: "🕌",
        description: "Iconic symbol of love and UNESCO World Heritage Site",
        bestTime: "Oct - Mar",
        duration: "Half Day",
        highlights: ["Sunrise view", "Mughal architecture", "Garden walk"]
    },
    {
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        category: "nature",
        rating: 4.7,
        image: "🛶",
        description: "Serene network of canals, rivers and lakes",
        bestTime: "Nov - Feb",
        duration: "2-3 Days",
        highlights: ["Houseboat stay", "Bird watching", "Village life"]
    },
    {
        name: "Goa Beaches",
        location: "Goa",
        category: "beaches",
        rating: 4.5,
        image: "🏖️",
        description: "Golden beaches with vibrant nightlife",
        bestTime: "Nov - Apr",
        duration: "3-5 Days",
        highlights: ["Water sports", "Beach parties", "Portuguese heritage"]
    },
    {
        name: "Ladakh",
        location: "Jammu & Kashmir",
        category: "mountains",
        rating: 4.9,
        image: "🏔️",
        description: "High altitude desert with stunning landscapes",
        bestTime: "Jun - Sep",
        duration: "1 Week",
        highlights: ["Pangong Lake", "Monasteries", "Adventure rides"]
    },
    {
        name: "Varanasi",
        location: "Uttar Pradesh",
        category: "spiritual",
        rating: 4.6,
        image: "🕉️",
        description: "Spiritual capital of India on River Ganges",
        bestTime: "Oct - Mar",
        duration: "2-3 Days",
        highlights: ["Ganga Aarti", "Ancient temples", "Boat rides"]
    },
    {
        name: "Rishikesh",
        location: "Uttarakhand",
        category: "adventure",
        rating: 4.5,
        image: "🎢",
        description: "Adventure sports and yoga capital",
        bestTime: "Sep - Apr",
        duration: "3-4 Days",
        highlights: ["River rafting", "Bungee jumping", "Yoga retreats"]
    },
    {
        name: "Hampi",
        location: "Karnataka",
        category: "heritage",
        rating: 4.4,
        image: "🏛️",
        description: "Ancient Vijayanagara Empire ruins",
        bestTime: "Oct - Feb",
        duration: "2 Days",
        highlights: ["Stone chariot", "Virupaksha temple", "Boulder climbing"]
    },
    {
        name: "Andaman Islands",
        location: "Andaman & Nicobar",
        category: "beaches",
        rating: 4.8,
        image: "🏝️",
        description: "Pristine tropical paradise with coral reefs",
        bestTime: "Nov - Apr",
        duration: "5-7 Days",
        highlights: ["Scuba diving", "Radhanagar Beach", "Cellular Jail"]
    }
];

const placeDetailsData = {
    mumbai: {
        name: "Mumbai",
        description: "Mumbai, the financial capital of India, is known for its vibrant culture, Bollywood industry, and bustling street life. The city never sleeps and offers a unique blend of colonial architecture and modern skyscrapers.",
        knownFor: ["Bollywood", "Financial Hub", "Street Food", "Marine Drive"],
        safetyRating: 4.2,
        accessibility: "Wheelchair accessible metros, ramps in most public places",
        restaurants: [
            { name: "Trishna", rating: 4.8, cuisine: "Seafood", priceRange: "₹₹₹" },
            { name: "Britannia & Co.", rating: 4.5, cuisine: "Parsi", priceRange: "₹₹" },
            { name: "Khyber", rating: 4.6, cuisine: "North Indian", priceRange: "₹₹₹" }
        ],
        hotels: [
            { name: "The Taj Mahal Palace", rating: 4.9, price: "₹25,000", availability: "Available" },
            { name: "The Oberoi Mumbai", rating: 4.8, price: "₹20,000", availability: "2 rooms left" },
            { name: "ITC Grand Central", rating: 4.7, price: "₹15,000", availability: "Available" }
        ],
        metroStations: [
            { name: "Churchgate", distance: "2.1 km", petsAllowed: true },
            { name: "Marine Lines", distance: "3.5 km", petsAllowed: true },
            { name: "Charni Road", distance: "4.2 km", petsAllowed: true }
        ],
        railwayStations: [
            { name: "Mumbai Central", distance: "5.8 km", petsAllowed: false },
            { name: "Dadar", distance: "12.3 km", petsAllowed: false },
            { name: "Bandra", distance: "18.7 km", petsAllowed: false }
        ]
    },
    delhi: {
        name: "Delhi",
        description: "Delhi, the capital of India, is a city where ancient history meets modern life. From historic monuments to bustling markets, Delhi offers a rich cultural experience.",
        knownFor: ["Red Fort", "India Gate", "Street Food", "History"],
        safetyRating: 4.0,
        accessibility: "Metro stations are wheelchair accessible, most monuments have ramps",
        restaurants: [
            { name: "Karim's", rating: 4.7, cuisine: "Mughlai", priceRange: "₹₹" },
            { name: "Bukhara", rating: 4.9, cuisine: "North Indian", priceRange: "₹₹₹₹" },
            { name: "Paranthe Wali Gali", rating: 4.5, cuisine: "Traditional", priceRange: "₹" }
        ],
        hotels: [
            { name: "The Imperial", rating: 4.8, price: "₹18,000", availability: "Available" },
            { name: "The Leela Palace", rating: 4.9, price: "₹22,000", availability: "Available" },
            { name: "Hotel Maidens", rating: 4.4, price: "₹8,000", availability: "3 rooms left" }
        ],
        metroStations: [
            { name: "Rajiv Chowk", distance: "1.2 km", petsAllowed: true },
            { name: "Connaught Place", distance: "0.8 km", petsAllowed: true },
            { name: "New Delhi", distance: "2.5 km", petsAllowed: true }
        ],
        railwayStations: [
            { name: "New Delhi Railway Station", distance: "3.2 km", petsAllowed: false },
            { name: "Old Delhi Railway Station", distance: "8.5 km", petsAllowed: false },
            { name: "Nizamuddin Railway Station", distance: "12.1 km", petsAllowed: false }
        ]
    }
};

let reviews = [
    {
        place: "Mumbai",
        rating: 5,
        text: "Amazing city with so much to explore! The street food is incredible and the people are very friendly. Marine Drive at sunset is absolutely beautiful.",
        reviewer: "Priya Sharma",
        date: "2024-01-15"
    },
    {
        place: "Goa",
        rating: 4,
        text: "Perfect for a relaxing beach vacation. The beaches are pristine and the seafood is fantastic. Loved the Portuguese architecture in Old Goa.",
        reviewer: "Rajesh Kumar",
        date: "2024-01-10"
    },
    {
        place: "Kerala",
        rating: 5,
        text: "The backwaters experience was magical! Staying in a houseboat and waking up to the serene waters was unforgettable. Highly recommend!",
        reviewer: "Anjali Nair",
        date: "2024-01-08"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupEventListeners();
    renderFeaturedPlaces();
    renderExploreDestinations();
    renderReviews();
    setupStarRating();
    setupCategoryFilters();
}

// Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Page Navigation
function showPage(pageName, placeName = null) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;

        // Special handling for place details
        if (pageName === 'place-details' && placeName) {
            loadPlaceDetails(placeName);
        }
    }

    // Update URL without refreshing
    const newUrl = pageName === 'home' ? '/' : `/${pageName}`;
    history.pushState({ page: pageName }, '', newUrl);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    const page = e.state?.page || 'home';
    showPage(page);
});

// Search functionality
function searchPlace(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        const placeName = query.toLowerCase().replace(/\s+/g, '-');
        showPage('place-details', placeName);
    }
}

function exploreSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('explore-search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    filterExploreDestinations(query);
}

// Render functions
function renderFeaturedPlaces() {
    const container = document.getElementById('featured-places');
    if (!container) return;

    container.innerHTML = featuredPlaces.map((place, index) => `
        <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s" onclick="showPage('place-details', '${place.name.toLowerCase()}')">
            <div class="card-header">
                <div class="card-emoji">${place.image}</div>
                <h3 class="card-title">${place.name}</h3>
                <p class="card-subtitle">${place.state}</p>
            </div>
            <div class="card-content">
                <p class="card-description">${place.description}</p>
                <div class="card-rating">
                    <span class="star-icon">★</span>
                    <span class="rating-text">${place.rating}</span>
                </div>
                <div class="attractions-list">
                    <p class="attractions-title">Top Attractions:</p>
                    ${place.attractions.slice(0, 2).map(attraction => 
                        `<p class="attraction-item">• ${attraction}</p>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderExploreDestinations(filteredDestinations = exploreDestinations) {
    const container = document.getElementById('explore-destinations');
    if (!container) return;

    container.innerHTML = filteredDestinations.map((destination, index) => `
        <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s" onclick="showPage('place-details', '${destination.name.toLowerCase().replace(/\s+/g, '-')}')">
            <div class="card-header">
                <div class="card-emoji">${destination.image}</div>
                <h3 class="card-title">${destination.name}</h3>
                <p class="card-subtitle">📍 ${destination.location}</p>
            </div>
            <div class="card-content">
                <div class="card-rating">
                    <span class="star-icon">★</span>
                    <span class="rating-text">${destination.rating}</span>
                </div>
                <p class="card-description">${destination.description}</p>
                <div class="attractions-list">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">🕒 Best: ${destination.bestTime}</span>
                        <span class="badge" style="font-size: 0.75rem;">${destination.duration}</span>
                    </div>
                    <p class="attractions-title">Highlights:</p>
                    ${destination.highlights.slice(0, 2).map(highlight => 
                        `<span class="badge" style="margin: 0.125rem; font-size: 0.75rem;">${highlight}</span>`
                    ).join('')}
                    ${destination.highlights.length > 2 ? `<span class="badge" style="margin: 0.125rem; font-size: 0.75rem;">+${destination.highlights.length - 2} more</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `Found ${filteredDestinations.length} amazing destinations`;
    }
}


function loadPlaceDetails(placeName) {
    const normalizedName = String(placeName || '').toLowerCase();

    // Try to find detailed data in placeDetailsData (if keyed by city names)
    let placeData = null;
    if (typeof placeDetailsData !== 'undefined') {
        // find exact key match
        for (const key in placeDetailsData) {
            if (key.toLowerCase() === normalizedName) {
                placeData = placeDetailsData[key];
                break;
            }
        }
    }

    // If not found, try to find in featuredPlaces or exploreDestinations by name (case-insensitive)
    function findInArray(arr) {
        if (!Array.isArray(arr)) return null;
        return arr.find(p => String(p.name || '').toLowerCase() === normalizedName || (p.location && String(p.location).toLowerCase().includes(normalizedName)));
    }

    if (!placeData) {
        const fp = findInArray(window.featuredPlaces);
        const ed = findInArray(window.exploreDestinations);
        const source = fp || ed;
        if (source) {
            // create a normalized placeData object from available fields
            placeData = {
                name: source.name || source.location || placeName,
                description: source.description || source.summary || '',
                knownFor: source.attractions || source.highlights || [],
                safetyRating: source.safetyRating || 'N/A',
                accessibility: source.accessibility || 'Information not available',
                restaurants: source.restaurants || [],
                hotels: source.hotels || [],
                metroStations: source.metroStations || [],
                railwayStations: source.railwayStations || []
            };
        }
    }

    // Final fallback: if still not found, show a minimal message
    if (!placeData) {
        placeData = {
            name: placeName || 'Unknown Place',
            description: 'Details not available for this place in the demo.',
            knownFor: [],
            safetyRating: 'N/A',
            accessibility: 'Information not available',
            restaurants: [],
            hotels: [],
            metroStations: [],
            railwayStations: []
        };
    }

    // Update place name and description
    const placeNameEl = document.getElementById('place-name');
    const placeDescEl = document.getElementById('place-description');
    const safetyScoreEl = document.getElementById('safety-score');
    const accessibilityEl = document.getElementById('accessibility-info');

    if (placeNameEl) placeNameEl.textContent = placeData.name;
    if (placeDescEl) placeDescEl.textContent = placeData.description;
    if (safetyScoreEl) safetyScoreEl.textContent = (placeData.safetyRating === 'N/A') ? placeData.safetyRating : (placeData.safetyRating + '/5');
    if (accessibilityEl) accessibilityEl.textContent = placeData.accessibility;

    // Update badges (knownFor)
    const badgesContainer = document.getElementById('place-badges');
    if (badgesContainer) {
        if (Array.isArray(placeData.knownFor) && placeData.knownFor.length) {
            badgesContainer.innerHTML = placeData.knownFor.map(b => `<span class="badge">${b}</span>`).join('');
        } else {
            badgesContainer.innerHTML = `<span class="badge">Information not available</span>`;
        }
    }

    // Update restaurants
    const restaurantsList = document.getElementById('restaurants-list');
    if (restaurantsList) {
        if (Array.isArray(placeData.restaurants) && placeData.restaurants.length) {
            restaurantsList.innerHTML = placeData.restaurants.map(restaurant => `
                <div class="detail-item">
                    <div class="item-info">
                        <h4>${restaurant.name}</h4>
                        <p>${restaurant.cuisine || ''} • ${restaurant.priceRange || ''}</p>
                    </div>
                    <div class="item-rating"><span class="star-icon">★</span><span>${restaurant.rating || '-'}</span></div>
                </div>
            `).join('');
        } else {
            restaurantsList.innerHTML = '<p>No restaurant data available for this place in the demo.</p>';
        }
    }

    // Update hotels
    const hotelsList = document.getElementById('hotels-list');
    if (hotelsList) {
        if (Array.isArray(placeData.hotels) && placeData.hotels.length) {
            hotelsList.innerHTML = placeData.hotels.map(hotel => `
                <div class="detail-item">
                    <div class="item-info">
                        <h4>${hotel.name}</h4>
                        <p>${hotel.availability || ''} • ${hotel.price || ''}</p>
                    </div>
                    <div class="item-rating"><span class="star-icon">★</span><span>${hotel.rating || '-'}</span></div>
                </div>
            `).join('');
        } else {
            hotelsList.innerHTML = '<p>No hotel data available for this place in the demo.</p>';
        }
    }

    // Update metro stations
    const metroList = document.getElementById('metro-list');
    if (metroList) {
        if (Array.isArray(placeData.metroStations) && placeData.metroStations.length) {
            metroList.innerHTML = placeData.metroStations.map(station => `
                <div class="detail-item">
                    <div class="item-info"><h4>${station.name}</h4><p>${station.distance || ''}</p></div>
                    <div class="item-meta"><span>${station.petsAllowed ? 'Pet Friendly' : 'No Pets'}</span></div>
                </div>
            `).join('');
        } else {
            metroList.innerHTML = '<p>No metro data available for this place in the demo.</p>';
        }
    }

    // Update railway stations
    const railwayList = document.getElementById('railway-list');
    if (railwayList) {
        if (Array.isArray(placeData.railwayStations) && placeData.railwayStations.length) {
            railwayList.innerHTML = placeData.railwayStations.map(station => `
                <div class="detail-item">
                    <div class="item-info"><h4>${station.name}</h4><p>${station.distance || ''}</p></div>
                    <div class="item-meta"><span>${station.petsAllowed ? 'Pet Friendly' : 'No Pets'}</span></div>
                </div>
            `).join('');
        } else {
            railwayList.innerHTML = '<p>No railway data available for this place in the demo.</p>';
        }
    }
}


// Category filtering for explore page
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter destinations
            const category = this.dataset.category;
            filterDestinationsByCategory(category);
        });
    });
}

function filterDestinationsByCategory(category) {
    let filtered = exploreDestinations;
    
    if (category !== 'all') {
        filtered = exploreDestinations.filter(dest => dest.category === category);
    }
    
    renderExploreDestinations(filtered);
}

function filterExploreDestinations(query) {
    let filtered = exploreDestinations;
    
    if (query) {
        filtered = exploreDestinations.filter(dest => 
            dest.name.toLowerCase().includes(query) ||
            dest.location.toLowerCase().includes(query) ||
            dest.description.toLowerCase().includes(query)
        );
    }
    
    renderExploreDestinations(filtered);
}

// Trip planner functionality
function changeValue(inputId, change) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const currentValue = parseInt(input.value);
    const min = parseInt(input.min) || 1;
    const max = parseInt(input.max) || 100;
    const newValue = Math.max(min, Math.min(max, currentValue + change));
    
    input.value = newValue;
}

function calculateTrip(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const hotel = document.getElementById('hotel');
    const people = parseInt(document.getElementById('people').value);
    const days = parseInt(document.getElementById('days').value);
    const transport = document.querySelector('input[name="transport"]:checked');
    
    if (!destination || !hotel.value || !transport) {
        alert('Please fill in all fields');
        return;
    }
    
    // Get prices
    const hotelPrice = parseInt(hotel.selectedOptions[0].dataset.price);
    const transportPrice = parseInt(transport.dataset.price);
    
    // Calculate costs
    const hotelCost = hotelPrice * days;
    const transportCost = transportPrice * people;
    const miscCost = people * days * 1000; // ₹1000 per person per day for food and misc
    const totalCost = hotelCost + transportCost + miscCost;
    
    // Display results
    document.getElementById('hotel-cost').textContent = `₹${hotelCost.toLocaleString()}`;
    document.getElementById('transport-cost').textContent = `₹${transportCost.toLocaleString()}`;
    document.getElementById('misc-cost').textContent = `₹${miscCost.toLocaleString()}`;
    document.getElementById('total-cost').textContent = `₹${totalCost.toLocaleString()}`;
    
    // Show breakdown
    const breakdown = document.getElementById('cost-breakdown');
    if (breakdown) {
        breakdown.style.display = 'block';
        breakdown.scrollIntoView({ behavior: 'smooth' });
    }
}

// Reviews functionality
function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            currentRating = rating;
            
            // Update hidden input
            const ratingInput = document.getElementById('review-rating');
            if (ratingInput) {
                ratingInput.value = rating;
            }
            
            // Update star display
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
}

function toggleReviewForm() {
    const formContainer = document.getElementById('review-form-container');
    if (!formContainer) return;
    
    const isHidden = formContainer.style.display === 'none' || !formContainer.style.display;
    formContainer.style.display = isHidden ? 'block' : 'none';
    
    if (isHidden) {
        formContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

function submitReview(event) {
    event.preventDefault();
    
    const place = document.getElementById('review-place').value;
    const rating = currentRating;
    const text = document.getElementById('review-text').value;
    const reviewer = document.getElementById('reviewer-name').value;
    
    if (!place || !text || !reviewer) {
        alert('Please fill in all fields');
        return;
    }
    
    // Add review to array
    const newReview = {
        place: place,
        rating: rating,
        text: text,
        reviewer: reviewer,
        date: new Date().toISOString().split('T')[0]
    };
    
    reviews.unshift(newReview);
    
    // Clear form
    document.getElementById('review-place').value = '';
    document.getElementById('review-text').value = '';
    document.getElementById('reviewer-name').value = '';
    currentRating = 5;
    
    // Reset stars
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < 5) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    // Hide form and re-render reviews
    toggleReviewForm();
    renderReviews();
    
    // Show success message
    alert('Review submitted successfully!');
}

function renderReviews() {
    const container = document.getElementById('reviews-list');
    if (!container) return;
    
    container.innerHTML = reviews.map(review => `
        <div class="review-card animate-fade-in">
            <div class="review-header">
                <div class="review-info">
                    <h4>${review.place}</h4>
                    <p>By ${review.reviewer} • ${formatDate(review.date)}</p>
                </div>
                <div class="review-rating">
                    ${Array.from({length: 5}, (_, i) => 
                        `<span class="star ${i < review.rating ? 'active' : ''}">★</span>`
                    ).join('')}
                </div>
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// --- Simple Authentication (in-memory only) ---
let isLoggedIn = false;

function openAuthTab(tab) {
    const signinForm = document.getElementById('auth-signin-form');
    const signupForm = document.getElementById('auth-signup-form');
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    if (!signinForm || !signupForm) return;
    if (tab === 'signin') {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabSignin.classList.add('active');
        tabSignup.classList.remove('active');
    } else {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabSignin.classList.remove('active');
        tabSignup.classList.add('active');
    }
}

function handleLogin(event) {
    event.preventDefault();
    // No storage, no validation — just mark as logged in
    isLoggedIn = true;
    updateNavAuth();
    showPage('home');
}

function handleLogout() {
    isLoggedIn = false;
    updateNavAuth();
    showPage('home');
}

function updateNavAuth() {
    // Find the auth link added in nav-menu; if not present, create it
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) return;
    let authLink = navMenu.querySelector('.auth-link');
    if (!authLink) {
        authLink = document.createElement('a');
        authLink.className = 'nav-link auth-link';
        authLink.href = '#';
        navMenu.appendChild(authLink);
    }
    if (isLoggedIn) {
        authLink.textContent = 'Sign Out';
        authLink.onclick = function(e) { e.preventDefault(); handleLogout(); };
    } else {
        authLink.textContent = 'Sign In';
        authLink.onclick = function(e) { e.preventDefault(); showPage('auth'); };
    }
}

// Wrap the existing showPage to block navigation if not logged in
(function() {
    if (typeof showPage !== 'function') {
        // if showPage not defined yet, try to setup after load
        document.addEventListener('DOMContentLoaded', updateNavAuth);
        return;
    }
    const baseShowPage = showPage;
    showPage = function(page) {
        // allow home and auth pages always; otherwise require login
        if (!isLoggedIn && page !== 'home' && page !== 'auth') {
            baseShowPage('auth');
            return;
        }
        baseShowPage(page);
    };
    // initial update of nav
    document.addEventListener('DOMContentLoaded', updateNavAuth);
})();
