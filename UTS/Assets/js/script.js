 // Select elements
 const loginBtn = document.getElementById('login-btn');
 const popup = document.getElementById('popup');
 const closeBtn = document.querySelector('.close-btn');

 // Show the pop-up when "Login" button is clicked
 loginBtn.addEventListener('click', () => {
 popup.style.display = 'flex';
 });

 // Close the pop-up when the close button is clicked
 closeBtn.addEventListener('click', () => {
 popup.style.display = 'none';
 });

 // Close the pop-up when clicking outside the content area
 window.addEventListener('click', (e) => {
 if (e.target === popup) {
     popup.style.display = 'none';
 }
 });