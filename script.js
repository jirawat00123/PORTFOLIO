document.addEventListener("DOMContentLoaded", () => {
  // --- 1. เริ่มการทำงานของ AOS (Animate On Scroll) ---
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // --- 2. Sticky Navbar Effect (เปลี่ยนสีเมนูเมื่อเลื่อน) ---
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- 3. Typed.js Effect (พิมพ์ข้อความอัตโนมัติ) ---
  // เช็คก่อนว่ามี class .typed-text ไหมป้องกัน error หน้าอื่น
  if (document.querySelector(".typed-text")) {
    new Typed(".typed-text", {
      strings: [
        "IT Student",
        "Web Developer",
        "Full Stack Developer",
        "Designer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
    });
  }

  // --- 4. Hero Background Slideshow (เปลี่ยนรูปพื้นหลังอัตโนมัติ) ---
  const heroImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
  ];

  const heroSection = document.getElementById("home");
  const slideDuration = 3500; // ปรับเป็น 3.5 วินาที (กำลังดี)
  let currentImageIndex = 0;

  function changeHeroBackground() {
    if (!heroSection) return;
    const imageUrl = heroImages[currentImageIndex];
    heroSection.style.backgroundImage = `url('${imageUrl}')`;
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  }

  // เริ่มทำงานทันทีและวนลูป
  if (heroSection) {
    changeHeroBackground();
    setInterval(changeHeroBackground, slideDuration);
  }

  // --- 5. Back to Top Button (ปุ่มเลื่อนขึ้นบน) ---
  const backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    // แสดงปุ่มเมื่อเลื่อนลงมา 300px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // เมื่อกดปุ่ม ให้เลื่อนขึ้นบนสุด
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- 6. Mobile Menu Toggle (เมนูมือถือ) ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      // สลับคลาส active เพื่อแสดง/ซ่อนเมนู (ต้องมี CSS รองรับ)
      navLinks.classList.toggle("active");

      // เปลี่ยนไอคอนจาก ขีดๆ เป็น กากบาท (Optional)
      const icon = hamburger.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // ปิดเมนูเมื่อกดลิงก์ข้างใน
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }
});
