document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const contentDivs = document.querySelectorAll("#content > div");

    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);

        contentDivs.forEach((div) => {
          if (div.id === targetId) {
            if (targetId == "auth") {
                div.style.display = "flex";
            } else {
                div.style.display = "block";
            }
          } else {
            div.style.display = "none";
          }
        });

        links.forEach((link) => {
          link.classList.remove("selected");
        });

        this.classList.add("selected");
      });
    });

    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Add email sending logic here
        // Figure out how to get the recipient, message and subject from the form
        // Pass this to background script
        alert("Email sent successfully!");  
    })
  });