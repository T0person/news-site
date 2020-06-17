$(function()
{
	function resizeSearch()
	{
		if($(window).width() < 680)
		{
			var minus_width = 680 - $(window).width();

			$(".header input").css ({
				"width" : 300 - minus_width,
				"background-position-x" : 262 - minus_width,
				"background-position-y" : "center"
			});
		}
	}

	function inputButton()
	{
		if($(".header input").width() < 55)
		{
			$(".header input").remove();
			$(".header .fixed-container").append("<button id='but-input'></button>");
		}
		else if ($("button").is("#but-input") && $(window).width() > 460)
		{
			$("#but-input").remove();
			$(".header .fixed-container").one().append("<input type='search' name='' placeholder='Поиск по сайту'>");
		}
	}

	function newLogo()
	{
		if($(window).width() < 406)
		{
			$(".logo").removeAttr("class");
			$(".header img").attr("id", "logo");
			$("#logo").attr("src", "img/mini-logo.png");
			if(!$('.header .fixed-container p').is("#logo-text"))
				$(".header .fixed-container img").after("<p id='logo-text'>Новостное агенство</p>");
		}
		if ($(".header img").is("#logo") && $(window).width() > 406)
		{
			$("#logo").removeAttr("id");
			$(".header img").attr("class", "logo");
			$(".header img").attr("src", "img/logo.png");
			if($('.header .fixed-container p').is("#logo-text"))
				$("#logo-text").remove();
		}
	}


	function navBut()
	{
		if(!$('.header .fixed-container button').is("#navBut") && $(window).width() < 406)
			$('.header .fixed-container').prepend("<button id='navBut'></button>");
		else if ($('.header .fixed-container button').is("#navBut") && $(window).width() > 406)
			$('#navBut').remove();
	}

	function remCity()
	{
		if($(window).width() < 406)
		{
			if($('.header .fixed-container select').is("select"))
				$('select').remove();
			if($('.menu-container ul').is('ul'))
			{
				$('.menu-container ul').remove();
				$(".menu-container .fixed-container").replaceWith("<div class='fixed-container'></div>");
				if(!$('#time1').is('#time1'))
				{
					$(".menu-container .fixed-container").append("<time id='time1'>19 июня, Вт</time>");
					$(".menu-container .fixed-container").append("<time id='time2'>10:48</time>");
					$(".menu-container .fixed-container").append("<time id='temperature'>+22 <sup>o</sup>C</time>");
				}
			}
		}
		else if(!$('.header .fixed-container select').is("select") && !$('.menu-container ul').is('ul') && $(window).width() > 406)
		{
			$(".header .fixed-container img").after("<select></select>");
			$(".header .fixed-container select").append('<option value="Москва">Москва</option>');
			$(".header .fixed-container select").append('<option value="Казань">Казань</option>');
			$(".header .fixed-container select").append('<option value="Сочи">Сочи</option>');
			$(".header .fixed-container select").append('<option value="Чебоксары">Чебоксары</option>');
			$(".header .fixed-container select").append('<option value="Нижний-Новгород">Нижний-Новгород</option>');
			$(".header .fixed-container select").append('<option value="Екатеринбург">Екатеринбург</option>');

			$(".menu-container .fixed-container").replaceWith("<nav class='fixed-container'><ul></ul></nav>");
			$('.menu-container ul').append('<a href="">Главная</a>');
			$('.menu-container ul').append('<a href="">Политика</a>');
			$('.menu-container ul').append('<a href="">Общество</a>');
			$('.menu-container ul').append('<a href="">Экономика</a>');
			$('.menu-container ul').append('<a href="">В мире</a>');
			$('.menu-container ul').append('<a href="">Происшествия</a>');
			$('.menu-container ul').append('<a href="">Спорт</a>');
			$('.menu-container ul').append('<a href="">Наука</a>');

			$('.menu-container ul a').wrap('<li></li>');

			$('.menu-container ul li').after('/');
			$('.menu-container ul').append('<a href="">Туризм</a>');
			$('.menu-container ul a').last().wrap('<li></li>');

			$(".menu-container .fixed-container").append("<time id='time1'>19 июня, Вт</time>");
			$(".menu-container .fixed-container").append("<time id='time2'>10:48</time>");
			$(".menu-container .fixed-container").append("<time id='temperature'>+22 <sup>o</sup>C</time>");
		}
	}

	function datatimeRemove()
	{
		if($('.datatime').is('.datatime') && $(window).width() < 501)
		{
			$(".datatime").remove();
			$(".menu-container #temperature").before("<time id='time1'>19 июня, Вт</time>");
			$(".menu-container #temperature").before("<time id='time2'>10:48</time>");
		}
		else if(!$('.datatime').is('.datatime') && $(window).width() > 501)
		{
			$('#time1').remove();
			$('#time2').remove();
			$('.black-bar .fixed-container').append('<time class="datatime">12:30 19.06.2019</time>');
		}
	}

	function delTemper()
	{
		if($('.header .temperature').is('.temperature') && $(window).width() < 900)
		{
			$('.temperature').remove();
			$(".menu-container .fixed-container").append("<time id='temperature'>+22 <sup>o</sup>C</time>");
		}
		else if(!$('.header .temperature').is('.temperature') && $(window).width() > 900)
		{
			$('#temperature').remove();
			$('.header input').before('<div class="temperature">+22 <sup>o</sup>C</div>');
		}
		
	}

	function delPopup()
	{
		if($("#popup-container").is("#popup-container") && $(window).width() > 406)
		{
			$('html, body').css("overflow","");
			$("#popup-container").remove();
		}
	}

	function resizeMain()
	{
		if($(window).width() < 446)
		{
			$(".central-container .fixed-container").first().css("padding", 0);
			$("main").css("width", $(window).width());
			// alert($("main").css("padding-right"));
		}
		if($(window).width() < 421)
		{
			$(".main-new img").css("width","644px");
		}
		if($(window).width() > 420)
		{
			$(".main-new img").css("width","420px");
		}
		if($(window).width() > 445)
		{
			$(".central-container .fixed-container").first().css("padding", "0 20px");
			$("main").css("width", 420);
		}
	}

	function resizeBanner()
	{
		if($(window).width() < 545)
		{
			$('#banner1').css("left",$('.right-aside').width()/2 - 125);
			$('#banner2').css({
				"left": $('.right-aside').width()/2 - 125 + 270,
				"padding-right": $('.right-aside').width()/2 - 125
			});
		}
		else if($(window).width() > 544)
		{
			$('#banner1').css("left","");
			$('#banner2').css({
				"left": "",
				"padding-right": ""
			});
		}
	}

	function delLeft_text ()
	{
		if($(".small-text").is(".small-text") && $(window).width() < 421)
		{
			$(".small-text").remove();
		}
		else if(!$(".small-text").is(".small-text") && $(window).width() > 420)
			$(".left").append('<p class="small-text">Министерство коммерции Китая заявило, что Пекин примет «качественные» и «количественные» меры, если президент США Дональд Трамп введет дополнительные пошлины на китайские товары</p>');
	}

	function resizeFooterUp()
	{
		if($(window).width() < 665 && $('.footer-up .fixed-container').length == 1)
		{
			$(".footer-up .mini-logo").remove();
			$(".footer-up .mini-logo-text").remove();
			$(".footer-up .about-company").remove();
			$(".footer-up").append('<div class="fixed-container"><img class="mini-logo" src="img/mini-logo.png"><div class="mini-logo-text">Новостное агенство</div><ul class="about-company"><li><a class="white-a" href="">Об агенстве</a></li><li><a class="white-a" href="">Контакты</a></li><li><a class="white-a" href="">Опубликовать новость</a></li></ul></div>');
		}
		if($(window).width() < 836 && $(window).width() > 664)
		{
			if($('.footer-up .fixed-container').length == 2)
			{
				$(".footer-up .raw2").after('<ul class="about-company"><li><a class="white-a" href="">Об агенстве</a></li><li><a class="white-a" href="">Контакты</a></li><li><a class="white-a" href="">Опубликовать новость</a></li></ul>');
				$(".footer-up .raw2").after('<div class="mini-logo-text">Новостное агенство</div>');
				$(".footer-up .raw2").after('<img class="mini-logo" src="img/mini-logo.png">');
				$('.footer-up .fixed-container').last().remove();
			}
			$(".footer-up .mini-logo").css("left", $(window).width() - 400);
			$(".footer-up .mini-logo-text").css("left", $(window).width() - 351);
			$(".footer-up .about-company").css("left", $(window).width() - 400);
		}
		if($(window).width() < 538 && $(".img-a").css("float") == "right")
		{	
			$(".img-a").remove();
			$('.footer-up .fixed-container').last().append('<ul class="img-a"><a href=""><li class="soc-net1"></li></a><a href=""><li class="soc-net2"></li></a><a href=""><li class="soc-net3"></li></a><a href=""><li class="soc-net4"></li></a></ul>');
			$(".img-a").css({
				"float" : "none",
				"padding" : 0,
				"margin-bottom" : 40
			});
			$(".img-a li").css({
				"margin-left" : 0,
				"margin-right" : 21
			});
		}
		if($(window).width() > 537 && $(".img-a").css("float") == "none")
		{
			$(".img-a").remove();
			$(".raw2").after('<ul class="img-a"><a href=""><li class="soc-net1"></li></a><a href=""><li class="soc-net2"></li></a><a href=""><li class="soc-net3"></li></a><a href=""><li class="soc-net4"></li></a></ul>');
		}
		if($(window).width() < 501 && $(".phone").css("position") == "absolute")
		{
			$(".phone").remove();
			$(".message").remove();
			$(".footer-up .fixed-container").last().append('<div class="phone">+7 (499) 995-55-55</div>');
			$(".footer-up .fixed-container").last().append('<div class="message">info@agency.ru</div>');
			$(".phone").css({
				"position" : "inherit",
				"top" : 0,
				"left" : 0,
				"margin-bottom" : 30
			});
			$(".message").css({
				"position" : "inherit",
				"top" : 0,
				"left" : 0,
				"margin-bottom" : 30
			});
		}
		if($(window).width() > 500 && $(".phone").css("position") == "relative")
		{
			// alert($(".phone").css("position"))
			$(".phone").remove();
			$(".message").remove();
			$(".raw2").after('<div class="phone">+7 (499) 995-55-55</div>');
			$(".raw2").after('<div class="message">info@agency.ru</div>');
		}
		else if($(window).width() > 835)
		{
			$(".footer-up .mini-logo").css("left", 435);
			$(".footer-up .mini-logo-text").css("left", 484);
			$(".footer-up .about-company").css("left", 435);
		}
	}

	$(window).resize(function()
	{
		// Изменение футера
		resizeFooterUp();

		// Удаление текста на картине с грузовиком
		delLeft_text();

		// Размеры центрального столбца
		resizeMain();

		// Баннеры
		resizeBanner();

		//Уменьшение / увеличение поиска в header-e
		resizeSearch();

		// Вместо поиска кнопка
		inputButton();

		// Добавление / удаление logo
		newLogo();

		// Добавление / удаление кнопки навигации и все что внутри
		navBut();

		// Появление / удаление выбора города
		remCity();

		// Добавление / удаление даты
		datatimeRemove();

		// Добавление / удаление большой температуры
		delTemper();
		
		// Убрать мобильное меню
		delPopup();
	});
	// Изменение футера
		resizeFooterUp();

	// Размеры центрального столбца
	resizeMain();

	// Баннеры
	resizeBanner();

	//Уменьшение / увеличение поиска в header-e
	resizeSearch();

	// Вместо поиска кнопка
	inputButton();

	// Добавление / удаление logo
	newLogo();

	// Добавление / удаление кнопки навигации и все что внутри
	navBut();

	// Добавление / удаление большой температуры
	delTemper();

	// Добавление / удаление даты
	datatimeRemove();

	// Убрать мобильное меню
	delPopup();

	// Появление / удаление выбора города
	remCity();

	// Нажатие на мобильную кнопку
	function navBut_click()
	{
		$("body").prepend('<div id="popup-container">' +
			'<div id="popup"><div id="mobil-head">' +
			'<button id="exit"></button>' +
			'<div><img src="img/mini-logo.png"><p>Новостное агенство</p></div>' +
			'<button></button></div>' +
			'<nav><ul></ul></nav></div></div>');
		$('#popup ul').append('<a href="">Главная</a>');
		$('#popup ul').append('<a href="">Политика</a>');
		$('#popup ul').append('<a href="">Общество</a>');
		$('#popup ul').append('<a href="">Экономика</a>');
		$('#popup ul').append('<a href="">В мире</a>');
		$('#popup ul').append('<a href="">Происшествия</a>');
		$('#popup ul').append('<a href="">Спорт</a>');
		$('#popup ul').append('<a href="">Наука</a>');
		$('#popup ul').append('<a href="">Туризм</a>');
		$('#popup ul a').wrap('<li></li>');
		$('html, body').css("overflow","hidden");
	}

	$('.header').on("click", "#navBut", navBut_click);

	// Выход из мобильного меню
	function mobExit_click()
	{
		$("#popup-container").remove();
		$('html, body').css("overflow","");
	}

	$('body').on("click","#exit", mobExit_click)
	// $.get('http://data.fixer.io/api/latest', {'access_key' : '3d607da109407b55221b58b5b2914c58'}, function(response){
		
	// 	var kurs = $("<p class='kurs'></p>");
	// 	var valuta1 = $("<p class='valuta'></p");
	// 	var valuta2 = $("<p class='valuta'></p");
	// 	valuta1.text('$:');
	// 	valuta2.text('€:');
	// 	kurs.append(valuta1);

	// 	var val_text1 = $("<p class='val_text'></p>");
	// 	var val_text2 = $("<p class='val_text'></p>");
	// 	val_text1.text(response.rates.RUB.toFixed(2) + '₽');
	// 	val_text2.text((response.rates.USD * response.rates.RUB).toFixed(2) + '₽');

	// 	kurs.append(val_text1);

	// 	kurs.append(valuta2);
	// 	kurs.append(val_text2);

	// 	$(".left").append(kurs);
	// });


});