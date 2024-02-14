const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const imgLogo = document.getElementById("logo-img");
imgLogo.setAttribute("src", siteContent.images["logo-img"]);

const imgCta = document.getElementById("cta-img");
imgCta.setAttribute("src", siteContent.images["cta-img"]);

const imgAccent = document.getElementById("middle-img");
imgAccent.setAttribute("src", siteContent.images["accent-img"]);

const menuItems = document.querySelectorAll("header nav a");
menuItems.forEach((item, index) => {
  item.classList.add("italic");
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctsH1 = document.querySelector(".cta-text h1");
ctsH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const textContents = document.querySelectorAll(".text-content");
const textContentData = Object.values(siteContent["ana-içerik"]);
textContents.forEach((item, index) => {
  item.querySelector("h4").textContent = textContentData[index * 2];
  item.querySelector("p").textContent = textContentData[index * 2 + 1];
});

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.iletisim["iletişim-h4"];

const contactData = Object.values(siteContent.iletisim);
const contactItems = document.querySelectorAll(".contact p");

contactItems.forEach((item, index) => {
  item.textContent = contactData[index + 1];
});

// contact.querySelector("h4").textContent = contactData[0];

const footer = document.querySelector("footer a");
// footer.classList.add("bold");
footer.textContent = siteContent.footer["copyright"];
