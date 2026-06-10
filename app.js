// ==========================================================================
// DATA MATRIX 1: Dynamic Farm Events & Activities Collection
// ==========================================================================
const farmEvents = [
    {
        name: "Sunflower U-Pick",
        season: "spring",
        description: "Walk the rows and cut your own bouquet.",
        image: "assets/Events/event-sunflower-upick-family-sunset.png",
        dates: "Mid-May through June, late July bloom"
    },
    {
        name: "Strawberry Picking",
        season: "spring",
        description: "Pick fresh strawberries during U-Pick weekends.",
        image: "assets/Events/event-strawberry-upick-child-basket.png",
        dates: "April through June weekends"
    },
    {
        name: "Blueberry Picking",
        season: "summer",
        description: "Visit the berry fields and pick fresh blueberries.",
        image: "assets/Events/event-blueberry-upick-family-summer.png",
        dates: "July through early August"
    },
    {
        name: "Baby Animal Visits",
        season: "spring",
        description: "Meet chicks, ducklings, and baby goats in the barn.",
        image: "assets/Events/event-baby-animals-goats-chicks-spring.png",
        dates: "April through June"
    },
    {
        name: "Corn Maze",
        season: "fall",
        description: "5-acre maze with a new design each year.",
        image: "assets/Events/event-corn-maze-entrance-family.png",
        dates: "Labor Day through November"
    },
    {
        name: "Pumpkin Patch",
        season: "fall",
        description: "Choose from more than 20 pumpkin varieties.",
        image: "assets/Events/event-pumpkin-patch-father-son-wagon.png",
        dates: "September through November"
    },
    {
        name: "Hayrides",
        season: "fall",
        description: "Tractor-pulled wagon rides around the farm.",
        image: "assets/Events/event-hayride-tractor-wagon-sunset.png",
        dates: "Weekends through October"
    },
    {
        name: "Apple Cider Pressing",
        season: "fall",
        description: "Watch fresh cider made and take a jug home.",
        image: "assets/Events/event-apple-cider-pressing-family.png",
        dates: "September through November"
    },
    {
        name: "Fall Harvest Festival",
        season: "fall",
        description: "Food vendors, live music, crafts, and farm fun.",
        image: "assets/Events/event-fall-harvest-festival-crowds.png",
        dates: "Last two weekends of October"
    },
    {
        name: "Farm-to-Table Dinner",
        season: "summer",
        description: "Ticketed dinner in the covered pavilion.",
        image: "assets/Events/event-farm-to-table-dinner-string-lights.png",
        dates: "Select Saturday evenings"
    },
    {
        name: "Holiday Market",
        season: "winter",
        description: "Artisan goods, farm gifts, wreaths, and more.",
        image: "assets/Events/event-holiday-market-barn-lights-winter.png",
        dates: "First three weekends of December"
    },
    {
        name: "Christmas Trees",
        season: "winter",
        description: "Pre-cut and choose-and-cut trees available.",
        image: "assets/Events/event-christmas-tree-farm-choose-cut.png",
        dates: "December"
    }
];

// ==========================================================================
// DATA MATRIX 2: Dynamic Farm Store Product Catalog
// ==========================================================================
const farmProducts = [
    {
        name: "Fresh Eggs",
        category: "Dairy & Eggs",
        displayNote: "From the 200-hen flock",
        description: "Farm-fresh eggs available year-round.",
        image: "assets/productPhotos/product-fresh-eggs-dozen-carton.png",
        price: "Market Price"
    },
    {
        name: "Raw Honey",
        category: "Pantry",
        displayNote: "From farm hives",
        description: "Local raw honey from three on-site hives.",
        image: "assets/productPhotos/product-raw-honey-jar.png",
        price: "$8.00"
    },
    {
        name: "Strawberry Preserves",
        category: "Pantry",
        displayNote: "Made in-house",
        description: "Preserves made with seasonal berries.",
        image: "assets/productPhotos/product-strawberry-preserves-jar.png",
        price: "$6.50"
    },
    {
        name: "Blueberry Preserves",
        category: "Pantry",
        displayNote: "Made in-house",
        description: "Small-batch preserves from peak berry season.",
        image: "assets/productPhotos/product-blueberry-preserves-jar.png",
        price: "$6.50"
    },
    {
        name: "Fresh Apple Cider",
        category: "Seasonal",
        displayNote: "Available in fall",
        description: "Fresh cider pressed on-site, sold by the jug.",
        image: "assets/productPhotos/product-fresh-apple-cider-jug.png",
        price: "$7.00"
    },
    {
        name: "Sourdough Bread",
        category: "Baked Goods",
        displayNote: "Weekends only",
        description: "Fresh-baked bread available on weekends.",
        image: "assets/productPhotos/product-sourdough-bread-loaf.png",
        price: "$5.50"
    },
    {
        name: "Apple Pie",
        category: "Baked Goods",
        displayNote: "Weekends only",
        description: "Farm-made pie using seasonal apples.",
        image: "assets/productPhotos/product-apple-pie-bakery.png",
        price: "$14.00"
    },
    {
        name: "Seasonal Produce Basket",
        category: "Produce",
        displayNote: "Changes by season",
        description: "A rotating selection from the farm fields.",
        image: "assets/productPhotos/product-seasonal-produce-basket.png",
        price: "$25.00"
    }
];

// ==========================================================================
// DYNAMIC DOM RENDERING PIPELINES
// ==========================================================================

// 1. Core Event Iteration Generator
function renderEvents(eventsToDisplay) {
    const targetElement = document.getElementById('events-container-target');
    if (!targetElement) return;
    
    targetElement.innerHTML = '';
    
    if (eventsToDisplay.length === 0) {
        targetElement.innerHTML = `<div class="col-12 text-center text-muted py-4"><p>No dynamic seasonal items matched your filter criteria.</p></div>`;
        return;
    }

    eventsToDisplay.forEach(event => {
        const template = `
            <div class="col-sm-6 col-lg-4">
                <article class="card farm-card h-100 shadow-sm border-0">
                    <img src="${event.image}" class="card-img-top" alt="${event.name}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <span class="badge bg-success text-uppercase mb-2">${event.season}</span>
                            <h3 class="card-title h5 text-dark fw-bold">${event.name}</h3>
                            <p class="card-text small text-secondary">${event.description}</p>
                        </div>
                        <div class="border-top pt-2 mt-3">
                            <small class="text-muted fw-bold d-block">🗓️ Schedule Window:</small>
                            <small class="text-dark-emphasis">${event.dates}</small>
                        </div>
                    </div>
                </article>
            </div>
        `;
        targetElement.innerHTML += template;
    });
}

// 2. Core Store Product Iteration Generator
function renderStore(productsToDisplay) {
    const targetElement = document.getElementById('products-container-target');
    if (!targetElement) return;
    
    targetElement.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        targetElement.innerHTML = `<div class="col-12 text-center text-muted py-4"><p>No product inside the current store matrix matches your search term.</p></div>`;
        return;
    }

    productsToDisplay.forEach(product => {
        const template = `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card farm-card h-100 shadow-sm border-0">
                    <div class="p-3 bg-light text-center">
                        <img src="${product.image}" class="img-fluid rounded" style="max-height: 180px; object-fit: contain;" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge bg-secondary-subtle text-dark border small">${product.category}</span>
                                <small class="text-danger-emphasis fw-bold bg-danger-subtle px-2 py-0.5 rounded" style="font-size:0.75rem;">${product.displayNote}</small>
                            </div>
                            <h3 class="card-title h6 fw-bold text-dark mb-2">${product.name}</h3>
                            <p class="card-text small text-muted mb-3">${product.description}</p>
                        </div>
                        <div class="border-top pt-2 mt-auto d-flex justify-content-between align-items-center">
                            <span class="text-muted small">Price</span>
                            <span class="fw-bold text-success fs-5">${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        targetElement.innerHTML += template;
    });
}

// ==========================================================================
// CONTROLLERS & INTERACTIVE ROUTERS
// ==========================================================================

// Season Tab Filter Manager System
function setupEventsFilterSystem() {
    const groupElement = document.getElementById('filterButtonGroupArea');
    if (!groupElement) return;

    groupElement.addEventListener('click', (event) => {
        if (!event.target.classList.contains('filter-btn')) return;

        // Toggle active design styles across selector elements
        groupElement.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Parse array based on chosen season attribute
        const chosenFilter = event.target.getAttribute('data-season');
        if (chosenFilter === 'all') {
            renderEvents(farmEvents);
        } else {
            const matches = farmEvents.filter(item => item.season.toLowerCase() === chosenFilter.toLowerCase());
            renderEvents(matches);
        }
    });
}

// Option 1: Live Real-Time Product Keyword Input Filtering Engine
function setupStoreSearchEngine() {
    const textEntryField = document.getElementById('storeSearchField');
    if (!textEntryField) return;

    textEntryField.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();
        
        const filteredInventory = farmProducts.filter(item => {
            return item.name.toLowerCase().includes(query) || 
                   item.category.toLowerCase().includes(query) || 
                   item.description.toLowerCase().includes(query);
        });
        
        renderStore(filteredInventory);
    });
}

// Bootstrap Form Front-End Custom Interfacing Engine
function setupFormValidationEngine() {
    const contactFormInstance = document.getElementById('hcfContactForm');
    const responseBanner = document.getElementById('formSuccessFeedback');
    if (!contactFormInstance) return;

    contactFormInstance.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (contactFormInstance.checkValidity()) {
            responseBanner.classList.remove('d-none');
            contactFormInstance.reset();
            contactFormInstance.classList.remove('was-validated');
            
            setTimeout(() => {
                responseBanner.classList.add('d-none');
            }, 5000);
        } else {
            responseBanner.classList.add('d-none');
            contactFormInstance.classList.add('was-validated');
        }
    }, false);
}

// ==========================================================================
// INITIAL APPLICATION ENTRY RUNTIME
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(farmEvents);
    renderStore(farmProducts);
    setupEventsFilterSystem();
    setupStoreSearchEngine();
    setupFormValidationEngine();
});