// Service details data
const serviceDetails = {
    hemming: {
        title: "Professional Hemming Services",
        description: "Our expert hemming service ensures your garments have the perfect length and fit. Using state-of-the-art equipment and traditional techniques, we deliver precise, durable, and professional results that maintain the original design of your garment.",
        priceList: [
            { service: "Pants/Trousers Hemming", price: "$15-20" },
            { service: "Jeans with Original Hem", price: "$20-25" },
            { service: "Skirt Hemming (Simple)", price: "$20-25" },
            { service: "Skirt Hemming (Lined)", price: "$25-35" },
            { service: "Dress Hemming (Simple)", price: "$25-35" },
            { service: "Dress Hemming (Formal)", price: "$35-45" },
            { service: "Sleeve Length Adjustment", price: "$20-30" }
        ],
        features: [
            "Original hem preservation available",
            "Blind stitch hemming for invisible results",
            "Same-day service available for simple hems",
            "Expert handling of all fabric types",
            "Multiple fitting options available",
            "Guaranteed length accuracy",
            "Free consultation and measuring"
        ],
        additionalInfo: {
            turnaround: "1-3 business days",
            guarantee: "Perfect fit guarantee",
            fabricTypes: "All fabric types (denim, silk, wool, etc.)",
            specialNotes: "We recommend bringing shoes you plan to wear with the garment for accurate length measurement."
        }
    },
    suit: {
        title: "Professional Suit Tailoring",
        description: "Transform your off-the-rack suit into a custom-fitted masterpiece. Our master tailors combine traditional craftsmanship with modern techniques to ensure your suit fits perfectly and enhances your professional appearance.",
        priceList: [
            { service: "Jacket Sleeve Adjustment", price: "$45-55" },
            { service: "Jacket Waist Adjustment", price: "$55-75" },
            { service: "Jacket Shoulder Adjustment", price: "$75-95" },
            { service: "Pants Waist Adjustment", price: "$35-45" },
            { service: "Pants Leg Tapering", price: "$40-50" },
            { service: "Complete Suit Alteration", price: "$150-200" },
            { service: "Rush Service", price: "+50%" }
        ],
        features: [
            "Detailed initial consultation",
            "Multiple fitting sessions included",
            "Hand-finished details",
            "Premium materials used",
            "Expert pattern modification",
            "Structure preservation",
            "Comprehensive measurements"
        ],
        additionalInfo: {
            turnaround: "5-7 business days",
            guarantee: "Perfect fit guarantee",
            expertise: "30+ years combined experience",
            specialNotes: "We recommend scheduling an initial consultation for complex alterations."
        }
    },
    dress: {
        title: "Expert Dress Alterations",
        description: "Whether it's a wedding dress, evening gown, or casual dress, our skilled tailors provide precise alterations to ensure your dress fits perfectly and enhances your silhouette. We specialize in both simple adjustments and complex reconstructions.",
        priceList: [
            { service: "Wedding Dress (Basic)", price: "$200-300" },
            { service: "Wedding Dress (Complex)", price: "$300-500" },
            { service: "Evening Gown", price: "$75-150" },
            { service: "Bridesmaid Dress", price: "$65-95" },
            { service: "Casual Dress", price: "$35-75" },
            { service: "Dress Restyling", price: "$100-200" },
            { service: "Rush Service", price: "+50%" }
        ],
        features: [
            "Bridal specialists available",
            "Private fitting rooms",
            "Preservation services",
            "Beading and lace expertise",
            "Multiple fittings included",
            "Detailed documentation",
            "Emergency alterations available"
        ],
        additionalInfo: {
            turnaround: "7-14 days (standard), 3-5 days (rush)",
            guarantee: "Perfect fit guarantee",
            specialServices: "Preservation, restoration, and redesign",
            specialNotes: "Book early for wedding dresses - minimum 2-3 months before event recommended."
        }
    },
    repairs: {
        title: "Expert Repair Services",
        description: "Restore your beloved garments to their former glory with our professional repair services. From simple fixes to complex reconstructions, our skilled team can handle any repair challenge while maintaining the integrity of your clothing.",
        priceList: [
            { service: "Simple Seam Repair", price: "$20-30" },
            { service: "Complex Seam Repair", price: "$30-45" },
            { service: "Zipper Replacement", price: "$25-40" },
            { service: "Button Replacement", price: "$5-10" },
            { service: "Patch Work", price: "$30-50" },
            { service: "Hole/Tear Repair", price: "$25-45" },
            { service: "Lining Replacement", price: "$45-75" }
        ],
        features: [
            "Invisible mending available",
            "Color matching expertise",
            "Fabric reinforcement",
            "Quality materials used",
            "Structural integrity check",
            "Free repair assessment",
            "Emergency repairs available"
        ],
        additionalInfo: {
            turnaround: "2-5 business days",
            guarantee: "Durability guarantee",
            specialServices: "Invisible mending, fabric restoration",
            specialNotes: "Free evaluation of repair complexity before starting work."
        }
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    function createModalContent(details) {
        return `
            <div class="service-title-banner">
                <h2>${details.title}</h2>
            </div>
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <p class="service-description">${details.description}</p>
                
                <div class="price-list">
                    <h3>Service Pricing</h3>
                    <ul>
                        ${details.priceList.map(item => `
                            <li>
                                <span>${item.service}</span>
                                <span>${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="features">
                    <h3>Service Features</h3>
                    <ul>
                        ${details.features.map(feature => `
                            <li>${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="additional-info">
                    <h3>Additional Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Turnaround Time:</span>
                            <span class="info-value">${details.additionalInfo.turnaround}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Guarantee:</span>
                            <span class="info-value">${details.additionalInfo.guarantee}</span>
                        </div>
                        ${details.additionalInfo.specialServices ? `
                            <div class="info-item">
                                <span class="info-label">Special Services:</span>
                                <span class="info-value">${details.additionalInfo.specialServices}</span>
                            </div>
                        ` : ''}
                        <div class="info-item">
                            <span class="info-label">Note:</span>
                            <span class="info-value">${details.additionalInfo.specialNotes}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Update event listeners to use buttons instead of cards
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const serviceType = this.closest('.service-item').dataset.service;
            const details = serviceDetails[serviceType];
            
            modal.querySelector('.modal-content').innerHTML = createModalContent(details);
            modal.style.display = 'block';
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });

            // Reattach close button event listener
            const newCloseButton = modal.querySelector('.close-modal');
            newCloseButton.addEventListener('click', closeModal);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add keyboard support for closing modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}); 