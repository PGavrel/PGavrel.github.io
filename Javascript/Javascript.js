document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = item.getAttribute('data-target');
            const targetElement = document.querySelector(target);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Indication de surval
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.page'); // Sélectionnez toutes les sections de la page
    var navItems = document.querySelectorAll('.nav-item'); // Sélectionnez tous les éléments de la barre de navigation

    function highlightNavItem() {
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top >= -50 && rect.top <= window.innerHeight - 50) { // Décalage de 50 pixels
                var sectionId = section.getAttribute('id');
                navItems.forEach(function(item) {
                    if (item.getAttribute('data-target') === '#' + sectionId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavItem);
    window.addEventListener('resize', highlightNavItem);
});

