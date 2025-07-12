// document.querySelectorAll(".faq-item").forEach(function (item) {
//   const header = item.querySelector(".faq-item-header");
//   const content = item.querySelector("pre");

//   header.addEventListener("click", function () {
//     content.classList.toggle("active");
//     header.classList.toggle("active");
//   });
// });

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const header = item.querySelector(".faq-item-header");
  const content = item.querySelector("pre");

  header.addEventListener("click", function () {
    // Close all other items
    faqItems.forEach(function (otherItem) {
      const otherContent = otherItem.querySelector("pre");
      const otherHeader = otherItem.querySelector(".faq-item-header");

      if (otherItem !== item) {
        otherContent.classList.remove("active");
        otherHeader.classList.remove("active");
      }
    });

    // Toggle the current one
    content.classList.toggle("active");
    header.classList.toggle("active");
  });
});
