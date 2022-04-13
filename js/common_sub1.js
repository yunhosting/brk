// nav 메뉴
let state = 1;
let state2 = 0;

const nav = document.getElementById('nav')
const head = document.querySelector('#header')
const navLi = document.querySelectorAll('#nav > ul > li')
const snb = document.querySelectorAll('#nav .snb')
const heading1 = document.getElementsByTagName('#header h1')
  for(i=0; i<navLi.length; i++){
  navLi[i].addEventListener('mouseenter', function(){
    this.style.borderBottom = '3px solid #002270'
    head.setAttribute("class", 'on')
    for(n=0; n<navLi.length; n++){
      snb[n].style.display = "block"
    }
    this.addEventListener('mouseleave', function(){
      this.style.border = 0
      head.classList.remove('on')
      for(n=0; n<navLi.length; n++){
        snb[n].style.display = "none"
      }
      if (state2 == 1 ){
        head.setAttribute('class', 'over')}
  })
})
}

let pos = $('#company').position().top - 200;
$(window).scroll(function(){
  if($(window).scrollTop() >= pos ){
    $('#header').addClass('over')
    state2 = 1;
  }
  else {$('#header').removeClass('over');
        state2 = 0;}
})

//서브메뉴클릭
$('.subMenu li a').on('click', function(e){
  e.preventDefault();
  let aId = $(this).attr('href');
  let aPos = $(aId).position().top - 150;
  $('.subMenu li a').removeClass('on')
  $(this).addClass('on');

  $('html, body').not(':animated').animate({scrollTop: aPos}, 1000)
})


//어사이드
$('#aside').click( () => {
  $('html, body').not(':animated').animate({scrollTop:0})
})


//스크롤이벤트
function scrolling(){
  let scroll = $(window).scrollTop()
  $('section').each(function(){
    if(scroll >= $(this).position().top - 300){
      $(this).children('div').animate({opacity:1, paddingTop:100}, 1000)
    }

    else if(scroll < $(this).position().top - 200){
      $(this).children('div').css({opacity:0, paddingTop:200})
    }
  })
}
$(window).on('scroll', scrolling)
//   if (scroll >= $('#company').position().top-200 && state == 1){
//     $('#intro').animate({opacity:1, paddingTop:100},1000, function(){
//       state = 0
//     })
//   }
//   else if (scroll >= $('#brand').position().top - 100){
//     state = 1;
//     $('#brand').animate({opacity:1, paddingTop:200}, 850, function(){
//       state = 0
//     })
//   }
//   else if (scroll >= $('#mNv').position().top - 100){
//     state = 1;
//     $('#intro2').css({opacity:0, paddingTop:200}).animate({opacity:1, paddingTop:100})
//   }
// }


//롤오버이벤트
$('.brandline ul li').on('mouseenter', function(){
  $(this).children().animate({opacity:1});
}).on('mouseleave', function(){
  $(this).children().animate({opacity:0});
})
