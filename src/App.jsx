/* eslint-disable jsx-a11y/anchor-has-content */
import React,{Component} from 'react'


import './Framework.css'
import './Mainn.css'
import './AJ'


import Sec1 from './Sec1/Sec1-About.jsx'
import Sec2 from './Sec2/Sec2-Resume.jsx'
import Sec3 from './Sec3/Sec3-Works.jsx'
import Sec4 from './Sec4/Sec4-Contact.jsx'

// import Logo from './img/Logo.png'
import Pg from './img/Pg.jpg'
import Me from './img/Me.jpg'


export default class Main extends Component{

  render(){
      
      return(
          <>
        <main className="main1 col-t-100 col-m-100">
            
            <section className="col-t-100 back">
                  <div class="area" >
                      <ul class="circles">
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                      </ul>
                  </div >
            </section>
            
             <div className="row-b-90 row-d-80 row-t-90">
                <Menu />
                <Part1 />
                <Part2 />
            </div>
        </main>
        </>
      )
  }
    
}




class Menu extends Component{

    render(){
       
        return(
            <>
            <ul className="col-b-7 col-d-12 col-t-13 col-m-100">
                <li className="col-t-100 col-m-100">
                <section className="mfg">
                   <svg id="logo" width="100" height="50" viewBox="0 0 500 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100.005 33.4894C106.156 33.4894 111.635 34.734 116.44 37.2234C121.246 39.6206 125.042 43.2624 127.829 48.1489C130.617 53.0355 132.01 58.9823 132.01 65.9894V110.66H119.035V67.7872C119.035 60.227 117.065 54.4645 113.125 50.5C109.28 46.4433 104.042 44.4149 97.4104 44.4149C90.5866 44.4149 85.1563 46.5355 81.1197 50.7766C77.083 54.9255 75.0647 60.9645 75.0647 68.8936V110.66H62.0897V67.7872C62.0897 60.227 60.1195 54.4645 56.1789 50.5C52.3345 46.4433 47.0965 44.4149 40.4648 44.4149C33.641 44.4149 28.2107 46.5355 24.1741 50.7766C20.1374 54.9255 18.1191 60.9645 18.1191 68.8936V110.66H5V34.8723H18.1191V45.7979C20.7141 41.8333 24.1741 38.7908 28.4991 36.6702C32.9202 34.5496 37.7737 33.4894 43.0598 33.4894C49.6915 33.4894 55.5542 34.9184 60.6481 37.7766C65.742 40.6348 69.5383 44.8298 72.0372 50.3617C74.2477 45.0142 77.9 40.8652 82.9938 37.9149C88.0877 34.9645 93.7582 33.4894 100.005 33.4894Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M185.679 45.2447H169.1V110.66H155.981V45.2447H145.745V34.8723H155.981V29.4787C155.981 20.9965 158.24 14.8192 162.757 10.9468C167.37 6.98227 174.723 5 184.814 5V15.5106C179.048 15.5106 174.963 16.617 172.56 18.8298C170.254 20.9504 169.1 24.5 169.1 29.4787V34.8723H185.679V45.2447Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M233.557 33.6277C240.381 33.6277 246.34 35.0567 251.434 37.9149C256.624 40.773 260.468 44.3688 262.967 48.7021V34.8723H276.23V112.319C276.23 119.234 274.693 125.365 271.617 130.713C268.541 136.152 264.12 140.394 258.354 143.436C252.683 146.479 246.052 148 238.459 148C228.079 148 219.429 145.649 212.509 140.947C205.589 136.245 201.504 129.837 200.255 121.723H213.23C214.671 126.333 217.651 130.021 222.168 132.787C226.685 135.645 232.116 137.074 238.459 137.074C245.667 137.074 251.53 134.908 256.047 130.574C260.66 126.241 262.967 120.156 262.967 112.319V96.4149C260.372 100.84 256.528 104.528 251.434 107.479C246.34 110.429 240.381 111.904 233.557 111.904C226.541 111.904 220.15 110.245 214.383 106.926C208.713 103.606 204.243 98.9503 200.976 92.9574C197.708 86.9645 196.074 80.1418 196.074 72.4894C196.074 64.7447 197.708 57.9681 200.976 52.1596C204.243 46.2589 208.713 41.695 214.383 38.4681C220.15 35.2411 226.541 33.6277 233.557 33.6277ZM262.967 72.6277C262.967 66.9114 261.766 61.9326 259.363 57.6915C256.96 53.4504 253.692 50.2234 249.56 48.0106C245.523 45.7057 241.054 44.5532 236.152 44.5532C231.251 44.5532 226.781 45.6596 222.745 47.8723C218.708 50.0851 215.488 53.3121 213.086 57.5532C210.683 61.7943 209.481 66.773 209.481 72.4894C209.481 78.2979 210.683 83.3688 213.086 87.7021C215.488 91.9433 218.708 95.2163 222.745 97.5213C226.781 99.734 231.251 100.84 236.152 100.84C241.054 100.84 245.523 99.734 249.56 97.5213C253.692 95.2163 256.96 91.9433 259.363 87.7021C261.766 83.3688 262.967 78.344 262.967 72.6277Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M337.614 33.4894C343.572 33.4894 348.955 34.734 353.76 37.2234C358.566 39.6206 362.314 43.2624 365.005 48.1489C367.792 53.0355 369.186 58.9823 369.186 65.9894V110.66H356.211V67.7872C356.211 60.227 354.241 54.4645 350.3 50.5C346.36 46.4433 340.977 44.4149 334.154 44.4149C327.234 44.4149 321.707 46.4894 317.574 50.6383C313.538 54.7872 311.519 60.8262 311.519 68.7553V110.66H298.4V8.31915H311.519V45.6596C314.114 41.7872 317.671 38.7908 322.188 36.6702C326.801 34.5496 331.943 33.4894 337.614 33.4894Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M394.797 111.489C392.298 111.489 390.183 110.66 388.453 109C386.723 107.34 385.858 105.312 385.858 102.915C385.858 100.518 386.723 98.4894 388.453 96.8298C390.183 95.1702 392.298 94.3404 394.797 94.3404C397.2 94.3404 399.218 95.1702 400.852 96.8298C402.582 98.4894 403.447 100.518 403.447 102.915C403.447 105.312 402.582 107.34 400.852 109C399.218 110.66 397.2 111.489 394.797 111.489Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M427.661 22.5638C425.162 22.5638 423.048 21.734 421.318 20.0745C419.588 18.4149 418.723 16.3865 418.723 13.9894C418.723 11.5922 419.588 9.56383 421.318 7.90426C423.048 6.24468 425.162 5.41489 427.661 5.41489C430.064 5.41489 432.082 6.24468 433.716 7.90426C435.446 9.56383 436.311 11.5922 436.311 13.9894C436.311 16.3865 435.446 18.4149 433.716 20.0745C432.082 21.734 430.064 22.5638 427.661 22.5638ZM434.004 34.8723V110.66H420.885V34.8723H434.004Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                     <path d="M469.483 47.1809C471.789 42.8475 475.057 39.4823 479.286 37.0851C483.611 34.6879 488.849 33.4894 495 33.4894V46.4894H491.54C476.835 46.4894 469.483 54.1418 469.483 69.4468V110.66H456.364V34.8723H469.483V47.1809Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1)"/>
                   </svg>
                </section>

                  {/* <img className="col-m-70" src={Logo} alt="logo" /> */}
                  <span className="col-t-50 col-m-"><img src="https://img.icons8.com/emoji/48/000000/united-states-emoji.png"/></span>
                    <span className="col-t-50 col-m-"><img src="https://img.icons8.com/emoji/48/000000/iran-emoji.png"/></span>
             </li>
                <li data-count="0">
                 {/* <span><img src="https://img.icons8.com/emoji/48/000000/woman-medium-light-skin-tone.png"/></span> */}
                 {/* <span><i class="fas fa-user-alt"></i></span> */}
                 {/* <span><i class="far fa-user-circle"></i></span> */}
                 <span><i class="lni lni-user"></i></span>
                 <p className="eng">about</p>
                 <p className="per">درباره من</p>
             </li>
                <li data-count="1">
                 {/* <span><img src="https://img.icons8.com/emoji/48/000000/page-with-curl.png"/></span> */}
                 {/* <span><i class="far fa-address-card"></i></span> */}
                 {/* <span><i class="lni lni-popup"></i></span> */}
                 <span><i class="lni lni-license"></i></span>
                 <p className="eng">resume</p>
                 <p className="per">رزومه</p>
             </li>
                <li data-count="2">
                 {/* <span><img src="https://img.icons8.com/emoji/48/000000/artist-palette.png"/></span> */}
                 {/* <span><i class="fas fa-palette"></i></span> */}
                 <span><i class="lni lni-brush"></i></span>
                 <p className="eng">work</p>
                 <p className="per">نمونه کارها</p>
             </li>
                <li data-count="3">
                 {/* <span><img src="https://img.icons8.com/emoji/50/000000/telephone.png"/></span> */}
                 {/* <span><i class="fas fa-mobile-alt"></i></span> */}
                 <span><i class="lni lni-phone-set"></i></span>
                 <p className="eng">contact</p>
                 <p className="per">راه های ارتباطی</p>
             </li>
         </ul>   

         </>
        )
    }
}



class Part1 extends Component{
    
    render(){
         
        return(
            <section className="sec1 col-b-32 col-t-85 col-m-100 mt-m-5">
            
            <figure className="col-t-100 col-m-100">  <img src={Pg} alt="backimage" /> </figure>
            <figure>
               <img src={Me} alt="me" />
               {/* <img src="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" alt="me" /> */}
               <a className="eng engA df jc-c ai-c" href="https://www.instagram.com/miss_f_g/" target="_blank" rel="noreferrer">my personal page</a>
               <a className="per perA df jc-c ai-c" href="https://www.instagram.com/miss_f_g/" target="_blank" rel="noreferrer"> </a>
            </figure>
            
            <h2 className="eng col-t-100 col-m-100 mt-d-20 mt-t-20 mt-m-30">fateme ghafari</h2>
            <h2 className="per col-t-100 col-m-100 mt-d-20 mt-t-20 mt-m-30">فاطمه غفاری</h2>
            <h4 className="col-t-100 col-m-100 mt-t-5 mt-m-5">
                <div className="text col-t-100 col-m-100">
                   <div className="name">
                       <div className="typing"></div>
                   </div>
                </div>
            </h4>
            
            <div className="col-t-100 col-m-100 mt-t-5 mb-t-5 mt-m-5 pb-m-5 df jc-c ai-c">
               <a href="https://www.instagram.com/mfgh.ir/" target="_blank" rel="noreferrer"><i class="lni lni-instagram"></i></a>
               <a href="https://t.me/mfghir" target="_blank" rel="noreferrer"><i class="lni lni-telegram"></i></a>
               <a href="https://wa.me/989224585055" target="_blank" rel="noreferrer"><i class="lni lni-whatsapp"></i></a>
               <a href="https://codepen.io/miss_f_g/" target="_blank" rel="noreferrer"><i class="lni lni-codepen"></i></a>
               <a href="https://github.com/mfghir" target="_blank" rel="noreferrer"><i class="lni lni-github"></i></a>
            </div>
            {/* <div className="col-t-100 col-m-100 mt-t-5 mb-t-5 mt-m-5 pb-m-5 df jc-c ai-c">
               <a href="https://www.instagram.com/mfgh.ir/" target="_blank" rel="noreferrer"><i class="fa fa-instagram" aria-hidden="true"></i></a>
               <a href="https://t.me/mfghir" target="_blank" rel="noreferrer"><i class="fa fa-telegram" aria-hidden="true"></i></a>
               <a href="https://wa.me/989224585055" target="_blank" rel="noreferrer"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
               <a href="https://codepen.io/miss_f_g/" target="_blank" rel="noreferrer"><i class="fa fa-codepen" aria-hidden="true"></i></a>
               <a href="https://github.com/mfghir" target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
            </div> */}
            
       </section>
        )
    }
}




class Part2 extends Component{
    render(){
        return(
        <>
        <span className='goUp'><i class="fa fa-chevron-up" aria-hidden="true"></i></span>
        <section class="sec2 col-b-60 col-t-85 col-m-100 ">
            
            {/* <div class="col-t-100"> */}
               <section className="sec21 row-t-95 row-m-90"><Sec1 /></section> 
               <section className="sec22 row-t-95 row-m-90"><Sec2 /></section> 
               <section className="sec23 row-t-95 row-m-90"><Sec3 /></section> 
               <section className="sec24 row-t-95 row-m-90"><Sec4 /></section> 
            {/* </div> */}
         </section>
         </>
        )
    }
}

