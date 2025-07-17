// import 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {

  const cook = document.querySelector('#cookie-popup');
  if(cook){
    const cookClose = document.querySelectorAll('.close-cookie');
    cookClose.forEach((item)=>{
      item.addEventListener('click', ()=>{
        cook.style.display ="none";
      })
    })
  }
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
  
  });
  document.addEventListener('DOMContentLoaded', function(){
    
    let solveSlider = new Swiper('.we-solve-swiper', {
      slidesPerView:1,
      autoHeight: true,
      spaceBetween: 12,
      speed:600,
      autoplay:{
        delay: 2500,
      },
      navigation: {
        nextEl: ".solve-swiper-button-next",
        prevEl: ".solve-swiper-button-prev",
      },
      pagination: {
        el: ".solve-swiper-pagination",
        type: "fraction",
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
    });
   
    let vizaSwiper = new Swiper('.viza-obtaining-swiper', {
       slidesPerView: 1,
       spaceBetween:16,
       speed:600,
       autoplay:{
        delay: 2500,
      },
       navigation: {
        nextEl: ".obtaining-swiper-next",
        prevEl: ".obtaining-swiper-prev",
      },
       grid:{
            rows: 2
        },
        breakpoints: {
        
        768: {
          slidesPerView: 2,
           spaceBetween: 16,
            grid:{
              rows: 1
          },
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 16,
          grid:{
              rows: 1
          },
        },
      },
    });

    const packageCardBody = document.querySelectorAll('.package-card__body');
    if(packageCardBody.length>0){
      packageCardBody.forEach((el)=>{
        el.addEventListener('click', ()=>{
          el.classList.toggle('active');
        });
      });
    }
   
     //TEAM SLIDER
    let teamSlider;
    function toggleSlider() {
        const screenWidth = window.innerWidth;
    
        if (screenWidth < 1200) {
            if (!teamSlider) {
                
                teamSlider = new Swiper('.team-wrapper', {
                    slidesPerView: 'auto',
                    spaceBetween: 16, // Пример настройки отступов между слайдами
                    grid:{
                        rows: 2
                    },
                    navigation: {
                      nextEl: ".team-swiper-next",
                      prevEl: ".team-swiper-prev",
                    },
                });
            }
        } else {
            if (teamSlider) {
                // Уничтожаем слайдер, если экран больше 768px
                teamSlider.destroy(true, true);
                teamSlider = null; // Сбрасываем переменную
            }
        }
    }
    
    // Вызываем функцию при загрузке страницы
    toggleSlider();
    
    // Добавляем слушатель для события изменения размера экрана
    window.addEventListener('resize', toggleSlider);

    //===================.freezone-swiper
    let freezoneSlider;
    function toggleFreezoneSlider() {
        const screenWidth = window.innerWidth;
    
        if (screenWidth < 1024) {
            if (!teamSlider) {
                
                freezoneSlider = new Swiper('.freezone-swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 16, // Пример настройки отступов между слайдами
                    grid:{
                        rows: 4
                    },
                    navigation: {
                      nextEl: ".freezone-swiper-next",
                      prevEl: ".freezone-swiper-prev",
                    },
                });
            }
        } else {
            if (freezoneSlider) {
                // Уничтожаем слайдер, если экран больше 768px
                teamSlider.destroy(true, true);
                teamSlider = null; // Сбрасываем переменную
            }
        }
    }
    
    // Вызываем функцию при загрузке страницы
    toggleFreezoneSlider();
    
    // Добавляем слушатель для события изменения размера экрана
    window.addEventListener('resize', toggleFreezoneSlider);
  })