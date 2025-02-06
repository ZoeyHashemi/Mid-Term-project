const createNav = () => {
   let nav = document.querySelector('.navbar');
   nav.innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="index.html"><img src="img/main-logo.png" class="brand-logo" alt="AR Design logo"></a>
       <button class="navbar-toggler nav-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav mr-auto">
               <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-instagram"></i></a></li>
               <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-behance"></i></a></li>
               <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/zohreh-hashemi/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
               <li class="nav-item"><a class="nav-link" href="https://dribbble.com/zoey-hash" target="_blank"><i class="fab fa-dribbble"></i></a></li>
               <li class="nav-item"><a class="nav-link" href="https://youtube.com/@zohrehashemi8445?si=BFLfR-4lm3eBEPhP" target="_blank"><i class="fab fa-youtube"></i></a></li>
           </ul>
           <ul class="navbar-nav">
               <li class="nav-item"><a class="nav-link" href="#"><img src="img/loupe.png" alt="search icon"></a></li>
               <li class="nav-item"><a class="nav-link" href="#"><img src="img/user.png" alt="user icon"></a></li>
               <li class="nav-item"><a class="nav-link" href="wishlist.html"><img src="img/heart.png" alt="wishlist icon"></a></li>
               <li class="nav-item"><a class="nav-link" href="shopping-cart.html"><img src="img/shopping-bag.png" alt="shopping bag icon" id="cart-icon"><span id="cart-count">0</span></a></li>
           </ul>
       </div>
   </nav>
   <div class="hamburger">
       <div class="line"></div>
       <div class="line"></div>
       <div class="line"></div>
   </div>
   <ul class="link-container">
       <li class="link-item"><a href="index.html" class="link" aria-label="Home">Home</a></li>
       <li class="link-item"><a href="#" class="link" aria-label="Best sellers">Best sellers</a></li>
       <li class="link-item"><a href="#" class="link" aria-label="Clothing">Clothing</a></li>
       <li class="link-item"><a href="#" class="link" aria-label="Dresses">Dresses</a></li>
       <li class="link-item"><a href="#" class="link" aria-label="Accessories">Accessories</a></li>
       <li class="link-item"><a href="#" class="link" aria-label="Collection">Collection</a></li>
       <li class="link-item"><a href="about.html" class="link" aria-label="About">About</a></li>
       <li class="link-item"><a href="contact.html" class="link" aria-label="Contact">Contact</a></li>
   </ul>`;
}

document.addEventListener('DOMContentLoaded', () => {
   createNav();
   const navToggle = document.querySelector('.nav-toggle');
   const navItems = document.querySelector('.nav-items');
   const linkContainer = document.querySelector('.link-container');

   if (navToggle) {
       navToggle.addEventListener('click', () => {
           navItems.classList.toggle('show');
           linkContainer.classList.toggle('show');
       });
   }
});