// imports

const userSignUp = document.getElementById('user-sign-up'); // grabs form data from the home page

userSignUp.addEventListener('submit', function(event) {

       event.preventDefault(); // prevents redirection

       const formData = new FormData(userSignUp); // creates new form data object
       const user = makeUser(formData); // uses form data to create a user data object ??
       
       saveUser(user); // this puts used in localStorage

       window.location('map'); // redirects us to the map page
});