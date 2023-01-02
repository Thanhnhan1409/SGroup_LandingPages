// Hàm tăng số
function animateNumber(finalNumber, duration = 0, startNumber = 0, callback) {
	const startTime = performance.now()
	function updateNumber(currentTime) {
	  const elapsedTime = currentTime - startTime
	  if (elapsedTime > duration) {
		callback(finalNumber)
	  } else {
		const rate = elapsedTime / duration
		const currentNumber = Math.round(rate * finalNumber)
		callback(currentNumber)
		requestAnimationFrame(updateNumber)
	  }
	}
	requestAnimationFrame(updateNumber)
}
  

// Hàm bắt sự kiện scroll tăng số
document.addEventListener("DOMContentLoaded",function() {
	var menu = document.querySelectorAll('header.navbar');
	var menu = menu[0];
		//Truy xuất header
		var trangthai="duoi200";
	window.addEventListener("scroll",function(){
	var x = pageYOffset;
	if(x > 200){
		if(trangthai == "duoi200")
		{
			trangthai="tren200";
			
				animateNumber(10, 850, 10, function (number) {
				  const formattedNumber = number.toLocaleString()
				  document.getElementById('users').innerText = formattedNumber
				})
				
				animateNumber(23, 850, 10, function (number) {
				  const formattedNumber = number.toLocaleString()
				  document.getElementById('download').innerText = formattedNumber
				})
				
				animateNumber(9, 850, 10, function (number) {
				  const formattedNumber = number.toLocaleString()
				  document.getElementById('customer').innerText = formattedNumber
				})
			
				animateNumber(12, 850, 10, function (number) {
					const formattedNumber = number.toLocaleString()
					document.getElementById('developer').innerText = formattedNumber
				  })
			  
		}
	}
	else{
		if(trangthai=="tren200"){
			trangthai="duoi200";}
		}
	})
	})

// slick slider
$(document).ready(function () {
    $(".slick-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 2000,
	  cssEase: 'linear',
    });
  });
//scroll header
  document.addEventListener("DOMContentLoaded",function() {
	var menu = document.querySelectorAll('header.navbar');
	var menu = menu[0];
		//Truy xuất header
		var trangthai="duoi400";
	window.addEventListener("scroll",function(){
	var x = pageYOffset;
	if(x > 400){
		if(trangthai == "duoi400")
		{
			trangthai="tren400";
			menu.classList.add('navbar-sticky');
		}
	}
	else{
		if(trangthai=="tren400"){
			menu.classList.remove('navbar-sticky');
			trangthai="duoi400";}
		}
	})
	})