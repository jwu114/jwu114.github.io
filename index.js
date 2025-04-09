document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById("scrollDownButton");
    const button2 = document.getElementById("scrollUpButton");
    const scrollUpContainer = document.getElementById("scroll-up-button");

    // Function to check scroll position and update button visibility
    function updateScrollButtonVisibility() {
        if (window.scrollY > 100) {
            scrollUpContainer.style.display = 'block';
        } else {
            scrollUpContainer.style.display = 'none';
        }
    }

    // Initial check when page loads
    updateScrollButtonVisibility();

    // Check on scroll
    window.addEventListener('scroll', updateScrollButtonVisibility);

    button1.addEventListener("click", scrollDown);
    button2.addEventListener("click", scrollUp);

    function scrollDown() {
        const id = "about";
        const elm = document.getElementById(id);
        if (elm) {
            window.scrollTo({top: elm.offsetTop - 100, behavior: "smooth"});
        }
    }
    function scrollUp() {
        const id = "about";
        const elm = document.getElementById(id);
        if (elm) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                window.history.pushState(null, null, targetId);
            }
        });
    });

    // Theme functionality (dark / light mode)
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else {
        // Set default theme to light
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Scroll Down Button
    const scrollDownButton = document.getElementById('scrollDownButton');
    scrollDownButton.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Scroll Up Button
    const scrollUpButton = document.getElementById('scrollUpButton');
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Paper Info Buttons
    const infoButtons = document.querySelectorAll('.info-button');
    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoType = button.getAttribute('data-info');
            const paperInfo = button.closest('.paper-desc').querySelector(`.paper-info.${infoType}`);
            
            // If the clicked info is already visible, hide it
            if (paperInfo.style.display === 'block') {
                paperInfo.style.display = 'none';
                return;
            }
            
            // Otherwise, hide all paper info first
            document.querySelectorAll('.paper-info').forEach(info => {
                info.style.display = 'none';
            });
            
            // Then show the clicked paper info
            paperInfo.style.display = 'block';
        });
    });

    // Paper navigation in tablet mode
    const papersWrapper = document.querySelector('.papers-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const papers = document.querySelectorAll('.paper');
    
    if (papersWrapper && prevButton && nextButton) {
        let currentIndex = 0;
        
        function updateButtons() {
            if (currentIndex === 0) {
                prevButton.classList.remove('visible');
            } else {
                prevButton.classList.add('visible');
            }
            
            if (currentIndex === papers.length - 1) {
                nextButton.classList.remove('visible');
            } else {
                nextButton.classList.add('visible');
            }
        }
        
        function scrollToPaper(index) {
            const paper = papers[index];
            papersWrapper.scrollTo({
                left: paper.offsetLeft - papersWrapper.offsetLeft,
                behavior: 'smooth'
            });
        }
        
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToPaper(currentIndex);
                updateButtons();
            }
        });
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < papers.length - 1) {
                currentIndex++;
                scrollToPaper(currentIndex);
                updateButtons();
            }
        });
        
        // Update buttons on scroll
        papersWrapper.addEventListener('scroll', () => {
            const scrollLeft = papersWrapper.scrollLeft;
            const paperWidth = papers[0].offsetWidth + 100; // 100px gap
            currentIndex = Math.round(scrollLeft / paperWidth);
            updateButtons();
        });
        
        // Initial button state
        updateButtons();
    }

    // Handle navigation button clicks
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            // Hide all buttons first
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('visible');
            });
            
            const wrapper = document.querySelector('.papers-wrapper');
            const scrollAmount = wrapper.clientWidth;
            const scrollDirection = button.classList.contains('prev-button') ? -1 : 1;
            
            wrapper.scrollBy({
                left: scrollAmount * scrollDirection,
                behavior: 'smooth'
            });
            
            // Show buttons again after a delay
            setTimeout(() => {
                updateButtons();
            }, 500);
        });
    });

    // Hamburger menu functionality
    const hamburgerButton = document.querySelector('.hamburger-button');
    const hamburgerDropdown = document.querySelector('.hamburger-dropdown');

    if (hamburgerButton && hamburgerDropdown) {
        hamburgerButton.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburgerDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerButton.contains(e.target) && !hamburgerDropdown.contains(e.target)) {
                hamburgerDropdown.classList.remove('active');
            }
        });

        // Handle hamburger menu links
        hamburgerDropdown.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    window.history.pushState(null, null, targetId);
                    hamburgerDropdown.classList.remove('active');
                }
            });
        });
    }

    // Handle ellipsis and other-authors click for paper3 authors
    const ellipsisElements = document.querySelectorAll('.ellipsis');
    const otherAuthorsElements = document.querySelectorAll('.other-authors');
    
    ellipsisElements.forEach(ellipsis => {
        ellipsis.addEventListener('click', () => {
            const otherAuthors = ellipsis.nextElementSibling;
            if (otherAuthors.classList.contains('other-authors')) {
                otherAuthors.classList.add('visible');
                ellipsis.classList.add('hidden');
            }
        });
    });

    otherAuthorsElements.forEach(otherAuthors => {
        otherAuthors.addEventListener('click', () => {
            otherAuthors.classList.remove('visible');
            const ellipsis = otherAuthors.previousElementSibling;
            if (ellipsis.classList.contains('ellipsis')) {
                ellipsis.classList.remove('hidden');
            }
        });
    });
})