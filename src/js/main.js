// import 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function() {
    const mainHeader = document.getElementById("header");
    
    if (window.scrollY > 50) {
      mainHeader .classList.add("fixed-header");
    } else {
      mainHeader .classList.remove("fixed-header");
    }
  };

  function animateCounter(el, duration = 2000) {
    const target = +el.dataset.target;
    const frameRate = 60; // кадров в секунду
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = target / totalFrames;
  
    let current = 0;
    let frame = 0;
  
    const counterUpdate = () => {
      frame++;
      current += increment;
      if (frame >= totalFrames) {
        el.textContent = target;
      } else {
        el.textContent = Math.round(current);
        requestAnimationFrame(counterUpdate);
      }
    };
  
    requestAnimationFrame(counterUpdate);
  }
  
  const counters = document.querySelectorAll('.anim-counter');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, 2000); // общее время
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

    let sertificatesSwiper = new Swiper('.sertificates-swiper', {
      slidesPerView: 'auto',
      spaceBetween:16,
      speed: 1500,
      navigation: {
        nextEl: ".sertificates-swiper-next",
        prevEl: ".sertificates-swiper-prev",
      },
      autoplay:{
        delay: 2500,

      }
    });
    let reviewSwiper = new Swiper('.review-slider', {
      slidesPerView: 'auto',
      spaceBetween:16,
      speed: 2500,
      navigation: {
        nextEl: ".review-swiper-next",
        prevEl: ".review-swiper-prev",
      },
      autoplay:{
        delay: 2500,

      }
    });
    
  });
  document.querySelectorAll('.drop').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.drop__button');
    const dropDownList = dropDownWrapper.querySelector('.drop__list');
    const dropDownListItems = dropDownList.querySelectorAll('.drop__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.drop__input-hidden');
    console.log(dropDownListItems);
  
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('drop__list--visible');
      this.classList.toggle('drop__button--active');
    });
      
  
    dropDownListItems.forEach(function (listItem) {
      
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        
        dropDownList.classList.remove('drop__list--visible');
        dropDownBtn.classList.remove('drop__button--active');
        
      });
    });
 
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('drop__button--active');
        dropDownList.classList.remove('drop__list--visible');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('drop__button--active');
        dropDownList.classList.remove('drop__list--visible');
      }
    });
  
    let solveSlider = new Swiper('.we-solve-swiper', {
      slidesPerView:1,
      autoHeight: true,
      spaceBetween: 12,
      speed:600,
      navigation: {
        nextEl: ".solve-swiper-button-next",
        prevEl: ".solve-swiper-button-prev",
      },
      breakpoints: {
        
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
          
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 12,
          autoHeight: false,
        },
      },
    })
   
  });