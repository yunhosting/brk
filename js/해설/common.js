// 헤더
// 슬라이드 배경
let state = 1;
let liLength = $('#slideWrap li').length;
let aNum;
function nextSlide(){
 state = 0;
 aNum = $('#slideWrap li:eq(0)').attr('class').substr(5,1)
 if (aNum == liLength) aNum = 0;
 $('#slideBtn a').removeClass('on');
 $('#slideBtn a:eq('+ aNum +')').addClass('on');

 $('#slideWrap li:eq(1)').addClass('active').css({opacity:0}).animate({opacity:1}, function(){
   state = 1;
   $('#slideWrap').append($('#slideWrap li:first'));
   $('#slideWrap li:last').removeClass('active');
 })
}
let timer = setInterval(nextSlide, 2000)

//슬라이드배경 버튼클릭
$('#slideBtn a').on('click', function(e){
    e.preventDefault();
    let btnIndex = $(this).index()+1;
    let liSlide = $('#slideWrap li.slide'+btnIndex)
    $('#slideBtn a').removeClass('on');
    $(this).addClass('on');

      $(liSlide).addClass('active').css({opacity:0}).animate({opacity:1}, function(){
        $('#slideWrap li').not(this).removeClass('active'); })
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
const popImg = document.querySelectorAll('#popcorn > img')
function changePop (){
  let i = 0;
  let imgNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  while( imgNum.length > 0 ) {
    let num = Math.floor( Math.random() * imgNum.length )

    popImg[0].src = "images/dessert/dessert"+imgNum[num]+".png";
    imgNum.splice(num, 1)
    console.log(num)
  }
}
changePop()
// setInterval(changePop, 800)






//
