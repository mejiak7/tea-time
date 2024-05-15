const blogArray = JSON.parse(localStorage.getItem('blogArray'));
const blogTimeline = document.getElementById('timeline');

// creating a function called timeLine
function timeLine() {
    console.log(blogArray);
    // displaying new blog post
    // for loop that displays multiple array of blog posts in reverse
    for (let i = blogArray.length - 1; i >= 0; i--) {
        const recentBlogPost = blogArray[i];

        // creating elements for username, title, and content
        const blogPost = document.createElement('article');
        const blogTitle = document.createElement('h3');
        const blogContent = document.createElement('p');
        const user = document.createElement('h5');

        // setting data onto created elements
        blogTitle.textContent = recentBlogPost.title;
        blogContent.textContent = recentBlogPost.content;
        user.textContent = recentBlogPost.user;

        // appending new data on to html
        blogTimeline.append(blogPost);
        blogPost.appendChild(blogTitle);
        blogPost.appendChild(blogContent);
        blogPost.appendChild(user);
    }
}

// creating a back button 
const backButton = document.getElementById('back-button');

backButton.addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = 'index.html';

});

// when window loads it will call the function timeLine to display
window.onload = function () {
    timeLine()
}