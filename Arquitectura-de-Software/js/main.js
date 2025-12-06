// This file contains JavaScript code for interactive features of the blog

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle navigation between posts
    const postLinks = document.querySelectorAll('.post-link');
    postLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPost = this.getAttribute('href');
            loadPost(targetPost);
        });
    });

    // Function to load a post dynamically
    function loadPost(postUrl) {
        fetch(postUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector('#post-content').innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
});