// سنة ديناميكية في الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// فتح / إغلاق قائمة الموبايل
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  // إغلاق القائمة عند الضغط على أي رابط
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
    });
  });
}

// تمرير سلس لقسم التواصل من الأزرار
document.querySelectorAll(".scroll-contact").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// رسالة بسيطة عند إرسال النموذج (فرونت إند فقط)
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formFeedback) {
      formFeedback.textContent =
        "تم إرسال بياناتك بنجاح (نموذج تجريبي – يمكن ربطه لاحقًا بنظام حقيقي).";
      formFeedback.style.color = "#16a34a";
    }
    contactForm.reset();
  });
}
// ========== Lightbox لعرض صور المعرض بالحجم الكامل ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {
  // عند الضغط على أي صورة داخل معرض الصور
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  // إغلاق عند الضغط على الخلفية
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });
}
