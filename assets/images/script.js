document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Hardware', 'Software', 'Gaming', 'Mobile', 'Internet', 'Security', 'Social Media', 'Programming', 'Setups and Looks', 'Other'];

    const main = document.querySelector('.main');

    categories.forEach(category => {
        const section = document.createElement('section');
        section.classList.add('main-section');

        const h2 = document.createElement('h2');
        h2.textContent = category;

        section.appendChild(h2);
        main.appendChild(section);
    });

});