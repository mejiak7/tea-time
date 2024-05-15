//  getting data
const inputUsername = document.getElementById('userName');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const submitButton = document.getElementById('form');
const blogArray = JSON.parse(localStorage.getItem('blogArray')) || []

// creating a submit button
submitButton.addEventListener('submit', function (event) {
  event.preventDefault();
  // creating an object to hold enduser data
  const usersBlogPost = {
    user: inputUsername.value,
    title: inputTitle.value,
    content: inputContent.value.trim(),
  }
  // if statement for if any fields in the form are left blank
  if (!usersBlogPost.user || !usersBlogPost.title || !usersBlogPost.content) {
    alert('Please complete all fields');
  } else {

    // pushing that object into an array
    blogArray.push(usersBlogPost)

    // then using localStorage to store array
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    window.location.href = 'blog.html';
  }
});