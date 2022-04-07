// 헤더
// 슬라이드 배경
let state = 1;
let liLength = $('#slideWrap ul li').length;
let aNum;
function nextSlide(){
 state = 0;
 aNum = $('#slideWrap ul li:eq(0)').attr('class').substr(5,1)
 if (aNum == liLength) aNum = 0;
 $('#slideBtn a').removeClass('on');
 $('#slideBtn a:eq('+ aNum +')').addClass('on');

 $('#slideWrap ul li:eq(1)').addClass('active').css({opacity:0}).animate({opacity:1}, 900, function(){
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
    $('#slideBtn a').removeClass('on');
    $(this).addClass('on');

    $('#slideWrap ul .slide'+btnIndex).addClass('active').css({opacity:0}).animate({opacity:1}, function(){
      $('#slideWrap ul li').not($(this)).removeClass('active');
      for(i=1; i<btnIndex; i++){
      $('#slideWrap ul').append($('.slide'+i))
      }
    })
})

$('#slideBtn a').on('click', function(e){
  e.preventDefault;
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
})

// nav 메뉴
const nav = document.getElementById('nav')
const navLi = document.querySelectorAll('#nav > ul > li')
const snb = document.querySelectorAll('#nav .snb')
const heading1 = document.getElementsByTagName('#header h1')
  for(i=0; i<navLi.length; i++){
  navLi[i].addEventListener('mouseenter', function(){
    this.style.borderBottom = '3px solid #002270'
    nav.setAttribute("class", 'on')
    for(n=0; n<navLi.length; n++){
      snb[n].style.display = "block"
    }
    this.addEventListener('mouseleave', function(){
      this.style.border = 0
      nav.classList.remove('on')
      for(n=0; n<navLi.length; n++){
        snb[n].style.display = "none"
      }
    })
  })
}

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
 $(this).stop().animate({backgroundSize: $(this).data('size1')+"%"})
}).on('mouseleave', function(){
  $(this).children('a').stop().animate({opacity:1},400)
  $(this).stop().animate({backgroundSize:$(this).data('size2')+"%"});
})


//youtube
$('#ytbBtn a.next').on('click', function(e){
  e.preventDefault();
  $('#youtube ul li img').removeClass('on');
  $('#youtube ul').animate({marginLeft:'-456px'}, 300, function(){
    $('#youtube ul').append($(this))
    $('#youtube ul li:eq(1) img').addClass('on')
  })
})
