document.addEventListener("DOMContentLoaded", function () {
  
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".navlinks");

  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  
  const form = document.getElementById("volunteerForm");
  const formMsg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name === "" || email === "" || message === "") {
        formMsg.style.color = "red";
        formMsg.textContent = "Please fill in all fields.";
      } else {
        formMsg.style.color = "green";
        formMsg.textContent = "Thank you for volunteering! We'll contact you soon.";

        
        form.reset();

        
        setTimeout(() => {
          formMsg.textContent = "";
        }, 5000);
      }
    });
  }
});
