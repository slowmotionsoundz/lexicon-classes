// ==========================================================================
// MOBILE NAVIGATION MENU
// ==========================================================================
// Select the hamburger button and the navigation menu using DOM selectors
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('nav ul');

// Add a click event listener to toggle the mobile menu visibility
if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        // Toggles the 'active' class to show/hide the menu
        navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    // Close menu when a link inside the nav is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });

    // Close menu when clicking anywhere outside of it
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
}

// ==========================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ==========================================================================
// Select all elements with the 'fade-in' class
const fadeElements = document.querySelectorAll('.fade-in');

// Create an Intersection Observer to detect when elements enter the screen
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is visible in the viewport, add the 'visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once the animation has triggered to save performance
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

// Apply the observer to each service box
fadeElements.forEach(element => {
    scrollObserver.observe(element);
});

// ==========================================================================
// GENTLE SMOOTH SCROLLING FOR TABS & ANCHOR LINKS
// ==========================================================================
// Select all anchor links pointing to sections on the page (e.g. href="#services")
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();

            // Calculate offset position accounting for sticky header height
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL hash cleanly without instant jump
            history.pushState(null, '', targetId);

            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburgerBtn) hamburgerBtn.classList.remove('active');
            }
        }
    });
});

// Handle gentle scroll if page loads with a hash (e.g. navigating from another page)
if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);
    if (targetSection) {
        setTimeout(() => {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 150);
    }
}

// ==========================================================================
// GOOGLE MAPS & STUDIO LOCATION SWITCHER
// ==========================================================================
const studioLocations = {
    sweden: {
        title: "Studio A • Landskrona Audio Lab",
        address: "Skeppsbron 14, 261 35 Landskrona, Sweden",
        phone: "+46 (0) 418 550 20",
        hours: "Mon – Fri: 09:00 – 20:00 CET | Sat: By Appointment",
        transit: "5 min from Landskrona Centralstation. Dedicated loading bay & private artist parking.",
        mapEmbedUrl: "https://maps.google.com/maps?q=Landskrona%20Sweden&t=&z=14&ie=UTF8&iwloc=&output=embed",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=Landskrona+Sweden"
    },
    usa: {
        title: "Studio B • Huntsville Sound Lab",
        address: "100 Jefferson St N, Huntsville, AL 35801, USA",
        phone: "+1 (256) 555-0192",
        hours: "Mon – Fri: 10:00 – 21:00 CT | Sat: Live Tracking",
        transit: "Downtown Arts & Cultural District. 15 min from Huntsville Int'l Airport (HSV).",
        mapEmbedUrl: "https://maps.google.com/maps?q=Downtown%20Huntsville%20Alabama&t=&z=14&ie=UTF8&iwloc=&output=embed",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=Downtown+Huntsville+Alabama"
    }
};

function initLocationSwitcher() {
    const tabButtons = document.querySelectorAll('.location-tab-btn');
    const mapFrame = document.getElementById('googleMapFrame');
    const titleEl = document.getElementById('activeLocationTitle');
    const metaEl = document.getElementById('activeLocationMeta');
    const directionsLink = document.getElementById('directionsLink');

    if (!tabButtons.length || !mapFrame) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const locationKey = button.getAttribute('data-location');
            const data = studioLocations[locationKey];
            if (!data) return;

            // Update tab UI
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Update map iframe smoothly
            mapFrame.src = data.mapEmbedUrl;
            mapFrame.title = `Google Map showing ${data.title}`;

            // Update location text details
            if (titleEl) titleEl.textContent = data.title;
            if (metaEl) {
                metaEl.innerHTML = `<strong>📍 Address:</strong> ${data.address}<br><strong>🕒 Hours:</strong> ${data.hours}<br><strong>🚆 Transit:</strong> ${data.transit}`;
            }
            if (directionsLink) {
                directionsLink.href = data.directionsUrl;
            }
        });
    });
}

// ==========================================================================
// CONTACT & BOOKING FORM VALIDATION
// ==========================================================================
function initContactFormValidation() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    const alertBox = document.getElementById('formAlert');
    const submitBtn = document.getElementById('submitBtn');
    const sessionDateInput = document.getElementById('sessionDate');

    // Prevent past dates in session date input
    if (sessionDateInput) {
        const today = new Date().toISOString().split('T')[0];
        sessionDateInput.setAttribute('min', today);
    }

    // Input fields definitions
    const fields = {
        fullName: {
            element: document.getElementById('fullName'),
            validate: (val) => {
                const trimmed = val.trim();
                if (!trimmed) return "Please enter your full name or artist/band name.";
                if (trimmed.length < 2) return "Name must be at least 2 characters long.";
                if (!/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF0-9]/.test(trimmed)) return "Name must contain letters or numbers.";
                if (/[<>{}\\\/]/.test(trimmed)) return "Name contains invalid characters.";
                return "";
            }
        },
        email: {
            element: document.getElementById('email'),
            validate: (val) => {
                const trimmed = val.trim();
                if (!trimmed) return "Please enter your email address.";
                // RFC 5322 compliant practical regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(trimmed)) return "Please enter a valid email address (e.g. artist@example.com).";
                return "";
            }
        },
        phone: {
            element: document.getElementById('phone'),
            validate: (val) => {
                const trimmed = val.trim();
                // Phone is optional, but if provided, validate pattern & length
                if (!trimmed) return "";
                if (!/^[+0-9\s().-]+$/.test(trimmed)) return "Please enter a valid phone number (digits, +, spaces, hyphens, or parentheses).";
                const digits = trimmed.replace(/\D/g, '');
                if (digits.length < 7 || digits.length > 15) return "Phone number must contain between 7 and 15 digits.";
                return "";
            }
        },
        location: {
            element: document.getElementById('location'),
            validate: (val) => {
                if (!val) return "Please select a preferred studio location or remote.";
                return "";
            }
        },
        service: {
            element: document.getElementById('service'),
            validate: (val) => {
                if (!val) return "Please select the service you are requesting.";
                return "";
            }
        },
        sessionDate: {
            element: document.getElementById('sessionDate'),
            validate: (val) => {
                if (!val) return ""; // Optional
                const selectedDate = new Date(val);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) return "Session date cannot be in the past.";
                return "";
            }
        },
        message: {
            element: document.getElementById('message'),
            validate: (val) => {
                const trimmed = val.trim();
                if (!trimmed) return "Please tell us about your project or inquiry.";
                if (trimmed.length < 10) return "Please provide at least 10 characters so we understand your project.";
                return "";
            }
        },
        consent: {
            element: document.getElementById('consent'),
            validate: (val, el) => {
                if (!el.checked) return "You must consent to data processing to submit.";
                return "";
            }
        }
    };

    // Helper: show field error
    function setFieldError(fieldObj, errorMsg) {
        const el = fieldObj.element;
        if (!el) return;
        const group = el.closest('.form-group') || el.closest('.checkbox-group');
        const errorEl = group ? group.querySelector('.error-msg') : null;

        if (group) {
            group.classList.remove('is-valid');
            group.classList.add('has-error');
        }
        el.setAttribute('aria-invalid', 'true');
        if (errorEl) {
            errorEl.textContent = errorMsg;
            errorEl.style.display = 'block';
        }
    }

    // Helper: clear field error
    function clearFieldError(fieldObj) {
        const el = fieldObj.element;
        if (!el) return;
        const group = el.closest('.form-group') || el.closest('.checkbox-group');
        const errorEl = group ? group.querySelector('.error-msg') : null;

        if (group) {
            group.classList.remove('has-error');
            // Only add is-valid if value is not empty
            const val = el.type === 'checkbox' ? el.checked : el.value.trim();
            if (val) {
                group.classList.add('is-valid');
            } else {
                group.classList.remove('is-valid');
            }
        }
        el.setAttribute('aria-invalid', 'false');
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.style.display = 'none';
        }
    }

    // Live validation on blur and input / change
    Object.keys(fields).forEach(key => {
        const fieldObj = fields[key];
        const el = fieldObj.element;
        if (!el) return;

        const eventType = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';

        el.addEventListener(eventType, () => {
            const error = fieldObj.validate(el.value, el);
            if (error) {
                // If user is currently typing and it had an error, update message
                const group = el.closest('.form-group') || el.closest('.checkbox-group');
                if (group && group.classList.contains('has-error')) {
                    setFieldError(fieldObj, error);
                }
            } else {
                clearFieldError(fieldObj);
            }
        });

        el.addEventListener('blur', () => {
            const error = fieldObj.validate(el.value, el);
            if (error) {
                setFieldError(fieldObj, error);
            } else {
                clearFieldError(fieldObj);
            }
        });
    });

    // Sync location selector with map tab if user selects Landskrona or Huntsville
    const locationSelect = fields.location.element;
    if (locationSelect) {
        locationSelect.addEventListener('change', () => {
            const val = locationSelect.value;
            if (val === 'sweden' || val === 'usa') {
                const targetTab = document.querySelector(`.location-tab-btn[data-location="${val}"]`);
                if (targetTab) targetTab.click();
            }
        });
    }

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let hasError = false;
        let firstInvalidElement = null;
        const errorsList = [];

        Object.keys(fields).forEach(key => {
            const fieldObj = fields[key];
            const el = fieldObj.element;
            if (!el) return;

            const error = fieldObj.validate(el.value, el);
            if (error) {
                setFieldError(fieldObj, error);
                errorsList.push(error);
                if (!firstInvalidElement) {
                    firstInvalidElement = el;
                }
                hasError = true;
            } else {
                clearFieldError(fieldObj);
            }
        });

        if (hasError) {
            // Show alert box with summary
            if (alertBox) {
                alertBox.className = 'form-alert alert-error';
                alertBox.innerHTML = `
                    <h4>⚠️ Please correct the errors below</h4>
                    <p>There are ${errorsList.length} field(s) requiring your attention before we can receive your session request.</p>
                `;
                alertBox.style.display = 'block';
            }
            if (firstInvalidElement) {
                firstInvalidElement.focus();
                firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Form is valid - initiate submission state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="submit-spinner" aria-hidden="true"></span> Transmitting Request...`;
        }

        // Simulate network processing
        setTimeout(() => {
            const clientName = fields.fullName.element.value.trim();
            const clientEmail = fields.email.element.value.trim();
            const serviceName = fields.service.element.options[fields.service.element.selectedIndex].text;
            const locationName = fields.location.element.options[fields.location.element.selectedIndex].text;
            const targetDate = fields.sessionDate.element.value ? `Target Date: <strong>${fields.sessionDate.element.value}</strong> &bull; ` : '';

            // Display success alert
            if (alertBox) {
                alertBox.className = 'form-alert alert-success';
                alertBox.innerHTML = `
                    <h4>✓ Session Request Received!</h4>
                    <p style="margin-bottom: 8px;">Thank you, <strong>${clientName}</strong>! Your inquiry for <strong>${serviceName}</strong> (${locationName}) has been securely logged.</p>
                    <p style="font-size: 0.88rem; color: #a7f3d0;">${targetDate}Our engineering desk will review your stems / session notes and email you at <strong>${clientEmail}</strong> within 24 hours.</p>
                `;
                alertBox.style.display = 'block';
                alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Reset form
            form.reset();

            // Clear all success classes
            document.querySelectorAll('.form-group, .checkbox-group').forEach(group => {
                group.classList.remove('is-valid');
                group.classList.remove('has-error');
            });

            // Restore submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Send Booking Request</span> <span class="btn-arrow" aria-hidden="true">&rarr;</span>`;
            }
        }, 650);
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLocationSwitcher();
        initContactFormValidation();
    });
} else {
    initLocationSwitcher();
    initContactFormValidation();
}

