 $(document).ready(function () {
     $('.slider__small').slick({
         arrows: false, //вкл./выкл. стрелки
         dots: false, //вкл./выкл.  точки переключения
         slidesToShow: 7, // Кол-во слайдов на экране
         slidesToScroll: 1, // Кол-во слайдов пролистывается за раз
         speed: 500, // Скорость пролистывания
         cssEase: "linear", //Тип анимации пролист.
         infinite: true, //Бесконечная прокрутка
         initialSlide: 0, //Стартовый слайдер
         autoplay: false,
         asNavFor: ".slider__big",
     });
 });

 $(document).ready(function () {
     $('.slider__big').slick({
         arrows: false, //вкл./выкл. стрелки
         dots: false, //вкл./выкл.  точки переключения
         slidesToShow: 1, // Кол-во слайдов на экране
         slidesToScroll: 1, // Кол-во слайдов пролистывается за раз
         speed: 500, // Скорость пролистывания
         cssEase: "linear", //Тип анимации пролист.
         infinite: true, //Бесконечная прокрутка
         initialSlide: 0, //Стартовый слайдер
         autoplay: false,
         fade: false,
         asNavFor: ".slider__small",
     });
 });