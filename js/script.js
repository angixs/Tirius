document.addEventListener("DOMContentLoaded", () => {

  /* ===== MENU ===== */
  const menuBtn = document.getElementById("menuBtn");
  const dropdown = document.getElementById("dropdownMenu");

  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });
  }

  /* ===== GALLERIA THUMBS ===== */
  const thumbs = document.getElementById("thumbs");
  const prev = document.getElementById("thumbPrev");
  const next = document.getElementById("thumbNext");
  const mainImage = document.getElementById("mainImage");

  if (thumbs && prev && next) {
    next.addEventListener("click", () => {
      thumbs.scrollLeft += 150;
    });

    prev.addEventListener("click", () => {
      thumbs.scrollLeft -= 150;
    });
  }

  /* ===== CLICK MINIATURE ===== */
  if (mainImage && thumbs) {
    thumbs.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", () => {
        mainImage.src = img.src;
      });
    });
  }

});
/* ===== DRAG SCROLL MINIATURE ===== */
let isDown = false;
let startX;
let scrollLeft;

if (thumbs) {
  thumbs.addEventListener("mousedown", (e) => {
    isDown = true;
    thumbs.classList.add("active");
    startX = e.pageX - thumbs.offsetLeft;
    scrollLeft = thumbs.scrollLeft;
  });

  thumbs.addEventListener("mouseleave", () => {
    isDown = false;
  });

  thumbs.addEventListener("mouseup", () => {
    isDown = false;
  });

  thumbs.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - thumbs.offsetLeft;
    const walk = (x - startX) * 2; // velocità
    thumbs.scrollLeft = scrollLeft - walk;
  });
}
