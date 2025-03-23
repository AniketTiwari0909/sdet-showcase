// Function to toggle loader
const loader = document.getElementById("loader");

function toggleLoader(show) {
    if (show) {
        loader.classList.add("active");
    } else {
        loader.classList.remove("active");
    }
}

// Sidebar Toggle functionality
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
const sections = document.querySelectorAll("section");

// Buttons for each section
const aboutBtn = document.getElementById("about-btn");
const skillsBtn = document.getElementById("skills-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");
const experienceBtn = document.getElementById("experience-btn");
const certBtn = document.getElementById("certificates-btn");
const homeLink = document.getElementById("home-link");
const bugZapperBtn = document.getElementById("bug-zapper-btn");

// Set default section to Home
let activeSection = document.getElementById("home-section");
activeSection.style.display = "block";

// Hide all sections except the active one
function hideAllSections() {
    sections.forEach(section => {
        section.style.display = "none";
    });
}


// When the page loads, show Home section
window.onload = function() {
    hideAllSections();
    activeSection = document.getElementById("home-section");
    activeSection.style.display = "block";

    // Ensure sidebar is closed and main content isn't shifted
    sidebar.classList.remove("active");
    toggleBtn.classList.remove("active");
    mainContent.classList.remove("shifted");
    toggleLoader(true);

    // Fetch and insert content from home.html into the Home section
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => {
            console.error('Error loading home.html:', error);
            // Fallback: Display a message if fetch fails
            document.getElementById('home-section').innerHTML = `
                <div class="home-content">
                    <div class="hero-section">
                        <div class="hero-text">
                            <h1 class="fade-in">Welcome to My SDET Journey</h1>
                            <p class="slide-up">Crafting Quality Software Through Testing & Automation</p>
                        </div>
                    </div>
                </div>
            `;
            toggleLoader(false);
        });
};

// Sidebar button functionality to switch sections
aboutBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("about-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading about.html:', error));
});

skillsBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("skills-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('skills.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('skills-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading skills.html:', error));
});

certBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("certificates-section");
    activeSection.style.display = "block";

    toggleLoader(true);

    fetch('certificates.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('certificates-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading skills.html:', error));
});

experienceBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("experience-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('experience.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('experience-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading experience.html:', error));
});

contactBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("contact-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading contact.html:', error));
});

// Existing window.onload and other event listeners remain unchanged...

// Bug Zapper logic (moved from bug-zapper.js)
function initializeBugZapper() {
    const startBtn = document.getElementById("start-zapper");
    const bugArea = document.getElementById("bug-area");
    const bugCountSpan = document.getElementById("bug-count");

    if (!startBtn || !bugArea || !bugCountSpan) {
        console.error("Bug Zapper elements not found:", { startBtn, bugArea, bugCountSpan });
        return;
    }

    let bugCount = 0;
    const totalBugs = 5;

    const bugNames = [
        "NullPointerException Ned",
        "RaceCondition Ralph",
        "InfiniteLoop Izzy",
        "OffByOne Oliver",
        "MemoryLeak Mandy"
    ];
    const zapMessages = [
        "Zapped by Selenium! No more sneaky bugs!",
        "WebDriverIO strikes again! Bug eliminated!",
        "Postman delivers a fatal blow! Bug gone!",
        "JMeter overloads the bug! Zap complete!",
        "Cypress catches you! Bug zapped!"
    ];

    startBtn.addEventListener("click", () => {
        bugArea.innerHTML = "";
        bugCount = 0;
        bugCountSpan.textContent = bugCount;
        startBtn.disabled = true;
        startBtn.textContent = "Automation Running...";

        for (let i = 0; i < totalBugs; i++) {
            createBug(i);
        }

        setTimeout(() => {
            zapBugs();
        }, 1000);
    });

    function createBug(index) {
        const bug = document.createElement("div");
        bug.classList.add("bug");
        bug.dataset.name = bugNames[index];
        bug.style.left = `${Math.random() * (bugArea.offsetWidth - 40)}px`;
        bug.style.top = `${Math.random() * (bugArea.offsetHeight - 40)}px`;
        bugArea.appendChild(bug);
    }

    function zapBugs() {
        const bugs = document.querySelectorAll(".bug");
        let zapIndex = 0;

        const zapInterval = setInterval(() => {
            if (zapIndex < bugs.length) {
                const bug = bugs[zapIndex];
                const bugName = bug.dataset.name;
                const zapMessage = zapMessages[zapIndex];

                const zapEffect = document.createElement("div");
                zapEffect.classList.add("zap-effect");
                zapEffect.style.left = `${parseFloat(bug.style.left) - 5}px`;
                zapEffect.style.top = `${parseFloat(bug.style.top) - 5}px`;
                bugArea.appendChild(zapEffect);

                const message = document.createElement("div");
                message.classList.add("zap-message");
                message.textContent = `${bugName}: ${zapMessage}`;
                message.style.left = `${parseFloat(bug.style.left) + 50}px`;
                message.style.top = `${parseFloat(bug.style.top) - 10}px`;
                bugArea.appendChild(message);

                bug.remove();

                bugCount++;
                bugCountSpan.textContent = bugCount;

                zapIndex++;
            } else {
                clearInterval(zapInterval);
                startBtn.disabled = false;
                startBtn.textContent = "Run Bug Zapper Automation Again";
                if (bugCount === totalBugs) {
                    setTimeout(() => {
                        alert("All bugs zapped! Code is now 100% bug-free… or is it? 😄");
                    }, 500);
                }
            }
        }, 1500);
    }
}

// Update the bugZapperBtn event listener to initialize the game after content is loaded
bugZapperBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("bug-zapper-section");
    activeSection.style.display = "block";

    toggleLoader(true);
    fetch('bug-zapper.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bug-zapper-section').innerHTML = data;
            toggleLoader(false);
            // Initialize the Bug Zapper game after content is loaded
            initializeBugZapper();

            // Add CSS shapes for bug and zap effect (moved from bug-zapper.js)
            const style = document.createElement("style");
            style.textContent = `
                .bug {
                    background: none;
                    border-radius: 50%;
                    background-color: #ff5555;
                    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
                }
                .zap-effect {
                    background: none;
                    width: 50px;
                    height: 50px;
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    background-color: #ffd700;
                }
            `;
            document.head.appendChild(style);
        })
        .catch(error => {
            console.error('Error loading bug-zapper.html:', error);
            document.getElementById('bug-zapper-section').innerHTML = `
                <div class="bug-zapper-content">
                    <h2 class="section-title fade-in">Bug Zapper: Automation in Action</h2>
                    <p class="intro-text slide-up">Oops! The Bug Zapper is down. Try again later!</p>
                </div>
            `;
            toggleLoader(false);
        });
});


projectsBtn.addEventListener("click", () => {
    hideAllSections();
    activeSection = document.getElementById("projects-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('projects.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('projects-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading projects.html:', error));
});

// Sidebar Toggle functionality
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    mainContent.classList.toggle("shifted");
});

homeLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    hideAllSections();
    activeSection = document.getElementById("home-section");
    activeSection.style.display = "block";
    toggleLoader(true);

    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home-section').innerHTML = data;
            toggleLoader(false);
        })
        .catch(error => console.error('Error loading home.html:', error));

    // Collapse the sidebar
    sidebar.classList.remove("active");
    toggleBtn.classList.remove("active");
    mainContent.classList.remove("shifted");
});

// Get the sidebar and menu items
const sidebar1 = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.sidebar-nav ul li a');

// Loop through each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Collapse the sidebar
        sidebar1.classList.remove('active');
        toggleBtn.classList.remove('active');
        mainContent.classList.remove('shifted');
    });
});
