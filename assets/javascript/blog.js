window.onload = function() {
    const usernameReceived = localStorage.getItem('username');
    const titleReceived = localStorage.getItem('title');
    const contentReceived = localStorage.getItem('content');
    
    document.getElementById('blogUsername').innerText = usernameReceived;
    document.getElementById('blogTitle').innerText = titleReceived;
    document.getElementById('blogContent').innerText = contentReceived;
    
    
}