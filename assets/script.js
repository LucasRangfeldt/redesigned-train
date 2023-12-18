document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Hardware', 'Software', 'Gaming', 'Mobile', 'Internet', 'Security', 'Social Media', 'Programming', 'Setups and Looks', 'Other'];

    const main = document.querySelector('main');
    const categoryLinks = document.querySelectorAll('.dropdown-content a');

    categories.forEach((category, index) => {
        const section = document.createElement('section');
        section.classList.add('main-section');
        section.id = category.toLowerCase().replace(' ', '-');

        const h2 = document.createElement('h2');
        h2.textContent = category;

        section.appendChild(h2);
        main.appendChild(section);

        categoryLinks[index].addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelector('.main-section:not(:first-child):not([style*="display: none"])').style.display = 'none';
            document.querySelector(`#${category.toLowerCase().replace(' ', '-')}`).style.display = 'block';
        });
    });    

});
    