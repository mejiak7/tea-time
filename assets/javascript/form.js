const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function (event) {
      event.preventDefault();
        //Getting data inputted 
        const inputUsername = document.getElementById('userName').value;
        const inputTitle = document.getElementById('title').value;
        const inputContent = document.getElementById('content').value;
    
        // Store data in local storage
        localStorage.setItem('username', inputUsername);
        localStorage.setItem('title', inputTitle);
        localStorage.setItem('content', inputContent);

        console.log(inputUsername, inputTitle, inputContent);
        // Navigate to the new page
        window.location.href = 'blog.html';
    
});
