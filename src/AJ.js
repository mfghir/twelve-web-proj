/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-implied-eval */
import $ from "jquery";



    $(function() {
       
      
        $('.main1>div>ul>li').click(function() {

            let mvUp = $(this).attr('data-count') ;
            let h = parseInt($('.sec2>section').outerHeight()) ;
            let w = $('body , html').outerWidth() ;
            if( w < 768){
                $('.sec2').animate({  scrollTop: (( mvUp * (h / 0.92) ) * 1.09 )  + "%"  }, 1000) ;
            }
            
            
            

            $('.main1>div>ul>li').css('color', '#ffffffd9') ;
            $(this).css('color', '#0856c1') ;

         
        $('.main1>div>ul>li:nth-of-type(2)').click(function() {
            $('.sec2>section').css('left', '-100%');
            $('.sec2>section:nth-of-type(1)').css('left', '0');
            $('.sec21>p , .sec21>ul>li').addClass('appear');
        })
        $('.main1>div>ul>li:nth-of-type(3)').click(function() {
            $('.sec2>section').css('left', '-100%');
            $('.sec2>section:nth-of-type(2)').css('left', '0') ;
            $(' .sec22>ul>li').addClass('appear') ;
        })
        $('.main1>div>ul>li:nth-of-type(4)').click(function() {
            $('.sec2>section').css('left', '-100%') ;
            $('.sec2>section:nth-of-type(3)').css('left', '0') ;
            $('.sec23>div>figure').addClass('appear') ;
        })
        $('.main1>div>ul>li:nth-of-type(5)').click(function() {
            $('.sec2>section').css('left', '-100%')
            $('.sec2>section:nth-of-type(4)').css('left', '0')
            $('.sec24>div>div').addClass('appear2')

        })

  })
    
})

//--------------------------------------end right to left secs-------------------------- 
$(function(){
    $('.main1>div>ul>li:nth-of-type(1)>span:nth-of-type(1)').click(function() {
        $('.eng ').css('display' , 'inline-block')
        $('.engSp , .sec22>ul>li>div').css('display' , 'block')
        $('.per').css('display' , 'none')
        $('.perH , .perSP').css('display' , 'none')
        $('.perI').css('float' , 'left')

        $('.perA').text('')
        $('.engA').text('my personal page')

        $('.Hline').css('background-image' , 'linear-gradient(45deg,white,  #ffffff00, #ffffff00 )')
        $('.sec24 ').css('background-position' , 'right bottom')
        $('.sec2>section').removeClass('perr')

        $('.perH3').removeClass('H3df')
        $('.engH3').addClass('H3df')
        $('.perSP').removeClass('SPdf')
        $('.engSP').addClass('SPdf')

    })
        $('.main1>div>ul>li:nth-of-type(1)>span:nth-of-type(2)').click(function() {
            $('.eng , .engSp').css('display' , 'none')
            $('.per').css( {  'display' : 'inline-block' ,'font-family': "'Harmattan', sans-serif"  } )
            $('.perSP').css('display' , 'block')
            $('.perH ').css('display' , 'inline-block')
            $('.perI').css('float' , 'right')

            $('.perA').text('پیج شخصی')
            $('.engA').text('')

            $('.Hline').css('background-image' , 'linear-gradient(45deg,  #ffffff00, #ffffff00 ,white)')
            // $('.sec22>ul>li>h3').css({ 'display': 'flex' , 'justify-content': 'center' , 'align-items': 'center'  })
            // $('.sec22>ul>li>h3').removeClass('EngH3df')
            $('.engH3').removeClass('H3df')
            $('.perH3').addClass('H3df')
            $('.engSP').removeClass('SPdf')
            $('.perSP').addClass('SPdf')
            
            $('.sec24 ').css('background-position' , 'left bottom')
            $('.sec2>section').addClass('perr')
        })

        
})
//--------------------------------------end eng per--------------------------

// -----------------------------start go to top---------------------------------------
$(function(){
     let h = parseInt($('html,body').outerHeight())

     $('.sec2').scroll(function() {
        // let x = $(this).scrollTop()

        if ( ($(this).scrollTop()) > h ) {
            $('.goUp').css('display', 'flex')
        }else {
            $('.goUp').css('display', 'none')
        }

    })

    $('.goUp').click(function() {
        $('.sec2').animate({ scrollTop: 0  }, 1000)
        $('.goUp').css('display', 'none')
    })

})

// -----------------------------end go to top---------------------------------------
$(function(){
    
    let screenPosition = window.innerHeight / 1.23 ;
    let w = $('body , html').outerWidth() ;
    $('.sec2').scroll(function(){
        var xx = $(this).scrollTop() ;
        $('.sec21>p , .sec21>ul>li').addClass('appear');

        if(w < 768){

            if( xx < screenPosition){
              $(' .sec22>ul>li ,.sec23>div>figure ').addClass('appear');
              $('.sec21>p , .sec21>ul>li').addClass('appear');
              $('.sec24>div>div').addClass('appear2') ;
            }
            
        }
    
    })

    
})

// --------------Start Circle Progress----------------------------------

$(function(){
    $('.circlechart').circlechart();
  
  });
// ----------------Start Name Changer--------------------------------

const text =[ 'Web Developer' , 'Front End' , "I'm Fateme Ghafari" ] ;
let count = 0 ;
let index = 0 ;
let currentText ='' ;
let  letter = '' ;

  
  function writeText() {

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice( 0 , ++index);
    document.querySelector('.typing').innerText = letter ;
        if(letter.length === currentText.length){
            count++ ;
            index = 0 ;
        }
  }
  
  setInterval(writeText, 400);

// ------------------------------------



