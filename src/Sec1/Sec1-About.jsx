import react from 'react'
import React,{Component} from 'react'
import Desk from './../img/Desk.png'
// import './../Framework.css'
// import './../Mainn.css'
// import './../App.css'
// import './../AJ.js'
// import './../Jq'
// import { BrowserRouter, Link } from 'react-router-dom'
// import { Router, Route, Switch } from 'react-router'


export default class Sec1 extends Component{


    render(){
        return(
            <>
             {/* <section className="sec21 row-t-95 row-m-95"> */}
                     <h2 className="eng"><span className="eng">about</span> me</h2>
                     <nav className="eng Hline"></nav>
                     <h2 className="per perH"><span className="per">درباره</span> من</h2>
                     <nav className="per Hline"></nav>

                     <strong className="eng col-t-100">Hello ! I'm Fateme Ghafari</strong>
                     <strong className="per col-t-100">سلام ! فاطمه غفاری هستم </strong>
                     
                     <p className="eng col-b-55 col-d-48 mr-d-5 ">I was born on September 5, 1998 in Tehran,Iran . I studied experimental field in high school and insurance management at university. On July 29, I started learning the site design course , and over the past five months I have been able to gain information and experience in this field.</p>
                     <p className="eng col-b-55 col-d-48 ">During this time, I learned concepts such as html, css, scss , bootstrap , JavaScript, jQuery, React , ReactNative . I'm currently practicing JavaScript , React and ReactNative . Finally, I'm glad to see my works.</p>
                     <p className="per col-b-55 col-d-48 ml-d-5 ">من در14 شهریور سال 1377 در تهران به دنیا اومدم . در دبیرستان رشته تجربی  و در دانشگاه رشته مدیریت بیمه خوندم . در یک تیر سال نود و هشت شروع به یادگیری  دوره طراحی سایت کردم و در طی پنج ماه دوره ای که گذشت ،  موفق به کسب اطلاعات و تجربیاتی در این زمینه شدم .</p>
                     <p className="per col-b-55 col-d-48 ">دراین دوره ، مفاهیمی مثل html , css, scss , bootstrap , JavaScript, jQuery , React , ReactNative را یادگرفتم . در حال حاضر مشغول تمرین در زمینه JavaScript و React  و ReactNative  هستم .  و این که خوشحال میشم از نمونه کارهام دیدن کنید .</p>


                     <figure className='eng col-t-20 row-m-80'><img className="eng engImg" src={Desk} alt="desk"/></figure>
                     <figure className='per perFig col-t-20 row-m-80'><img className="per perImg" src={Desk} alt="desk"/></figure>
                     
                     
                     <h2 className="eng col-t-100 mt-t-20 mt-m-50"><span className="eng">my</span> experience <nav className="eng Hline"></nav></h2>
                     {/* <nav className="eng Hline"></nav> */}
                     <h2 className="per perH col-t-100 mt-t-20 mt-m-50"><span className="per"> تجربیات </span> من  <nav className="per Hline"></nav></h2>
                     {/* <nav className="per Hline"></nav> */}
                     <ul className="col-t-100 col-m-100 mb-t-7">
                         <li className="col-t-47 col-m-100">
                             {/* <i className="fa fa-code" aria-hidden="true"></i> */}
                             <img src="https://img.icons8.com/emoji/48/000000/globe-with-meridians-emoji.png"/>
                             <h2 className="eng">Web Development</h2>
                             <h2 className="per">توسعه وب</h2>
                             <p className="eng">Modern and mobile-ready website that will help you reach all of your marketing</p>
                             <nav className="eng Hline"></nav>
                             <p className="per">وب سایت مدرن و موبایل که به شما کمک می کند تا به همه بازاریابی خود برسید</p>
                             <nav className="per Hline"></nav>
                         </li>
                         <li className="col-t-47 col-m-100">
                             {/* <i className="fa fa-bullhorn" aria-hidden="true"></i> */}
                             <img src="https://img.icons8.com/emoji/48/000000/loudspeaker-emoji.png"/>
                             <h2 className="eng">Advetising</h2>
                             <h2 className="per">تبلیغات</h2>
                             <p className="eng">Advertising services include television, radio, print, mail, and web apps.</p>
                             <nav className="eng Hline"></nav>
                             <p className="per">خدمات تبلیغاتی شامل برنامه های تلویزیونی ، رادیویی ، چاپی ، پست الکترونیکی و وب .</p>
                             <nav className="per Hline"></nav>
                         </li> 
                         <li className="col-t-47 col-m-100">
                             {/* <i className="fa fa-gamepad" aria-hidden="true"></i> */}
                             <img src="https://img.icons8.com/emoji/48/000000/video-game.png"/>
                             <h2 className="eng">Game Development</h2>
                             <h2 className="per">توسعه بازی</h2>
                             <p className="eng">Developing memorable and unique mobile android, ios and video games.</p>
                             <nav className="eng Hline"></nav>
                             <p className="per">توسعه بازی های اندرویدی ، ios و ویدیویی به یاد ماندنی و بی نظیر تلفن همراه. به زودی</p>
                             <nav className="per Hline"></nav>
                         </li>
                         <li className="col-t-47 col-m-100">
                             {/* <i className="fa fa-handshake-o" aria-hidden="true"></i> */}
                             <img src="https://img.icons8.com/emoji/48/000000/handshake-light-skin-tone.png"/>
                             <h2 className="eng">Cooperations</h2>
                             <h2 className="per">همکاری ها</h2>
                             <p className="eng">Ready to collaborate on various projects </p>
                             <nav className="eng Hline"></nav>
                             <p className="per">آماده همکاری در پروژه های مختلف</p>
                             <nav className="per Hline"></nav>
                         </li>
                     </ul>
                     
                 {/* </section> */}
                </>
        )
    }

}