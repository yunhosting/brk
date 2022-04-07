// 헤더
// 슬라이드 배경
let state = 1;
let state2 = 0;
let liLength = $('#slideWrap ul li').length;
let aNum;
function nextSlide(){
 state = 0;
 aNum = $('#slideWrap ul li:eq(0)').attr('class').substr(5,1)
 if (aNum == liLength) aNum = 0;
 $('#slideBtn a').removeClass('on');
 $('#slideBtn a:eq('+ aNum +')').addClass('on');

 $('#slideWrap ul li:eq(1)').not(':animated').addClass('active').css({opacity:0}).animate({opacity:1}, 900, function(){
   state = 1;
   $('#slideWrap ul').append($('#slideWrap ul li:first'));
   $('#slideWrap ul li:last').removeClass('active');
 })
}
let timer = setInterval(nextSlide, 3000)

//슬라이드배경 버튼클릭
$('#slideBtn a').on('click', function(e){
    e.preventDefault();
    let btnIndex = $(this).index()+1;
    num = btnIndex;

    $('#slideBtn a').removeClass('on');
    $(this).addClass('on');

    $('#slideWrap ul li.slide'+btnIndex).not(":animated").addClass('active').css({opacity:0}).animate({opacity:1}, function(){
      $('#slideWrap ul li').not($(this)).removeClass('active');
      for(i=1; i<liLength; i++){
        if(num == liLength) num = 0;
          num++
          $('#slideWrap ul').append($('li.slide'+num))
        }
        state = 1;
    })
})

$('#slideBtn a').on('click', function(e){
  e.preventDefault;
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
})

// nav 메뉴
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

//메인메뉴스크롤시배경변화
let pos = $('main').position().top - 200;
$(window).scroll(function(){
  if($(window).scrollTop() >= pos ){
    $('#header').addClass('over')
    state2 = 1;
  }
  else {$('#header').removeClass('over');
        state2 = 0;}
})

//메인시작
//brandWrap - popcorn
const popImg = document.querySelectorAll('#popcorn img')
function changePop (){
  let i = 0;
  let imgNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  while ( imgNum.length > 0  )  {
    let num = Math.floor( Math.random() * imgNum.length )
    let n = imgNum[num];
    popImg[i].src = "images/dessert/dessert"+n+".png";
    imgNum.splice(num, 1)
    i++;
  }
}
// changePop()
setInterval(changePop, 800)

//brandWrap
$('#articleWrap article').on('mouseenter', function(){
  $(this).addClass('on').css({backgroundSize: '+=5%'})
}).on('mouseleave', function(){
  $(this).removeClass('on').css({backgroundSize:'100%'})
})

//newsWrap
$('#newsWrap ul li').on('mouseenter', function(){
 $(this).children('a').stop().animate({opacity:0},400);
 $(this).stop().animate({backgroundSize:$(this).data('size1')+'%'})
}).on('mouseleave', function(){
  $(this).children('a').stop().animate({opacity:1},400)
  $(this).stop().animate({backgroundSize:$(this).data('size2')+"%"});
})


//youtube
$('#ytbBtn a.next').on('click', function(e){
  e.preventDefault();
  $('#youtube ul li:eq(2) img').animate({width:423, height:238, marginTop:'-27px'}, 1300)
  $('#youtube ul li:eq(1) img').animate({width:328, height:184, marginTop:0}, 1300)
  $('#youtube ul:not(:animated)').animate({marginLeft:'-403px'}, 1000 , function(){
    $('#youtube ul').append($('#youtube ul li:first'))
    $(this).css({marginLeft:'-25px'})
  })
})

$('#ytbBtn a.prev').on('click', function(e){
  e.preventDefault();
  $('#youtube ul li:eq(0) img').animate({width:423, height:238, marginTop:'-27px'}, 1300)
  $('#youtube ul li:eq(1) img').animate({width:328, height:184, marginTop:0}, 1300)
  $('#youtube ul').prepend($('#youtube ul li:last')).css({marginLeft:'-328px'});
  $('#youtube ul:not(:animated)').animate({marginLeft:'-25px'}, 1000, function(){
  })
})


//recruit1
$("#recruitWrap div article").on('mouseenter', function(){
  $(this).addClass("on");
}).on('mouseleave', function(){
  $(this).removeClass('on');
})
