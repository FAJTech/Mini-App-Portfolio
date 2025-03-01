// script.js
document.addEventListener("DOMContentLoaded", function() {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Function to scroll smoothly to a section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1); // Remove '#'
            scrollToSection(sectionId);
        });
    });

    // Example of sending data back to Telegram (optional)
    // You can customize this to send any data you want when a button is clicked

   /*
    const sampleBotLink = document.querySelector('.bot-link');
    sampleBotLink.addEventListener('click', function(event) {
      event.preventDefault();
      const botLink = this.getAttribute('href');
      //  tg.openLink(botLink); //Open the link on telegram
      tg.openTelegramLink(botLink); //Open the link on telegram (best for telegram links)
    });
    */

    //Set Telegram Main Button

      tg.MainButton.setText("Share Portfolio");
      tg.MainButton.onClick(function(){
        tg.showAlert("Thanks for sharing.");
      });
      tg.MainButton.show();
});

