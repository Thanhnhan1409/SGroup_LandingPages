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

//nav-mobile
	let parent = document.getElementsByClassName("nav-listitem");
	let parentChild = document.getElementsByClassName("navbar__mobile--dropdown");
	let isClose = [];
	
	for(let k = 0; k < parent.length; k++){
		isClose.push('false');
	}
	
	for (let i = 0; i < parent.length; i++) {
		parent[i].addEventListener("click", displayParentChild);
		function displayParentChild() {
			for (let j = 0; j <= parent.length; j++) {
				if (isClose[j] == true && isClose[j] != isClose[i]) {
					parentChild[j].style.display = "none";
					isClose[j] = false;
				}
			}
			if (isClose[i] == false) {
				parentChild[i].style.display = "block";
				isClose[i] = true;
			} else {
				parentChild[i].style.display = "none";
				isClose[i] = false;
			}
		}
	}
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

//scroll footer
document.addEventListener("DOMContentLoaded",function() {
	var menu = document.querySelectorAll('footer.footer__area');
	var menu = menu[0];
	let trangthai="duoi9000";
	window.addEventListener("scroll",function(){
	let x = pageYOffset;
	if(x < 9000){
		if(trangthai == "duoi9000")
		{
			trangthai="tren9000";
			menu.style.display='none';
		}
	}
	else{
		if(trangthai=="tren9000"){
			menu.style.display='block';
			trangthai="duoi9000";}
		}
	})
	})

// back-to-top
let offset = 500;
let duration = 350;
function scrollToTop(){
	window.addEventListener("scroll",function(){
	if ($(this).scrollTop() > offset)
		$('#top-up').fadeIn(duration);
	else
		$('#top-up').fadeOut(duration);
	});
	$('#top-up').click(function () {
	$('body,html').animate({scrollTop: 0}, 500);
	});
};
scrollToTop();