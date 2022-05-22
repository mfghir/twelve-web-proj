import React,{Component} from 'react'
import './../Mainn.css'
import './../AJ'
import './progresscircle.css'
import './progresscircle'



export default class Sec2 extends Component{

    render(){
        return(
            <>
                {/* <section className="sec22 row-t-95 row-m-95"> */}
                    <h2 className="eng"><span className="eng">r</span>esume</h2>
                    <nav className="eng Hline"></nav>
                    <h2 className="per perH"><span className="per">ر</span>زومه</h2>
                    <nav className="per Hline"></nav>
                    <ul className="mb-t-10 mb-m-20">
                        <li className="col-t-45 mr-t-5 col-m-100">
                            {/* <i className="perI fa fa-briefcase" aria-hidden="true"></i> */}
                            <img src="https://img.icons8.com/emoji/48/000000/backpack-emoji.png" alt="backpack"/>
                            <h3 className="eng engH3 H3df">experience</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH3">تجربه</h3>
                            <nav className="per Hline"></nav>
                            <span className="engSp">2019 - 2020</span>
                            <span className="per perSp">1398 - 1400</span>
                            <p className="eng">Collaborate with creative and development teams on the execution of ideas.</p>
                            <p className="per"> در مورد اجرای ایده ها همکاری با تیم های خلاق و توسعه  .</p>
                        </li>
                        <li className="col-t-45 ml-t-5 col-m-100">
                            {/* <i className="perI fa fa-graduation-cap" aria-hidden="true"></i> */}
                            <img src="https://img.icons8.com/emoji/48/000000/graduation-cap-emoji.png" alt="graduation"/>
                            <h3 className="eng engH3 H3df">education</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH3">تحصیلات</h3>
                            <nav className="per Hline"></nav>
                            <span className="engSp">2017 - 2020</span>
                            <span className="per perSp">1396 - 1399</span>
                            <p className="eng">South Tehran Branch of Azad University, Department of Management ,<br /> Insurance Management</p>
                            <p className="per">دانشگاه آزاد واحد تهران جنوب ،  رشته مدیریت بیمه</p>
                        </li>
                    </ul>
{/* <!---------------------------end ul1-------------------------> */}
                    <h2 className="eng"><span className="eng">my</span> skils</h2>
                    <nav className="eng Hline"></nav>
                    <h2 className="per perH col-m-100"><span className="per">مهارت</span> های من</h2>
                    <nav className="per Hline"></nav>
                    <ul>
                        <li className="col-t-45 mr-t-5 col-m-100">
                           {/* <i className="perI fa fa-magic" aria-hidden="true"></i> */}
                           <img src="https://img.icons8.com/color/50/000000/roller-brush--v2.png" alt="rollerbrush"/>
                            <h3 className="eng engH3 H3df">design</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH perH3">طرح</h3>
                            <nav className="per Hline"></nav>
                            <div className="eng">photoshp</div>
                            <div className="per perH">فتوشاپ</div>
                            <div className="eng">web design</div>
                            <div className="per perH">طراحی وب سایت</div>
                            <div className="eng">graphic design</div>
                            <div className="per perH">طراحی گرافیک</div>
                        </li>
                        
                        <li className="col-t-45 ml-t-5 col-m-100">
                        <img src="https://img.icons8.com/emoji/48/000000/globe-showing-europe-africa-emoji.png" alt="globe"/>
                            <h3 className="eng engH3 H3df">languages</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH perH3">زبان ها</h3>
                            <nav className="per Hline"></nav>

                            <ul>
                                <div className="eng">english</div>
                                <div className="per">انگلیسی</div>
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
                            <ul>
                                <div className="eng">korean</div>
                                <div className="per">کره ای</div>
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
                            <ul>
                                <div className="eng">german</div>
                                <div className="per">آلمانی</div>
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
                        </li>
                        
                        <li className="col-t-45 mr-t-5 col-m-100">
                            {/* <i className="perI fa fa-code" aria-hidden="true"></i> */}
                            <img src="https://img.icons8.com/emoji/48/000000/keyboard-emoji.png" alt="keyboard"/>
                            <h3 className="eng engH3 H3df">coding</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH perH3">کد زدن</h3>
                            <nav className="per Hline"></nav>
                            <ul className="mt-t-10 df jc-c ai-c fw-w">
                                <li className="col-m-40  "> <div className="circlechart "  data-percentage="90">HTML/CSS</div></li>
                                <li className="col-m-40"> <div className="circlechart " data-percentage="80">jQuery</div></li>
                                <li className="col-m-40 "> <div className="circlechart"  data-percentage="70">JavaScript</div></li>
                                <li className="col-m-40  "> <div className="circlechart " data-percentage="40">React</div></li>
                                <li className="col-m-40  "> <div className="circlechart " data-percentage="30">React Native</div></li>
                            </ul>
                        </li>
                        
                        <li className="col-t-45 ml-t-5 col-m-100">
                            {/* <i className="perI fa fa-file-text" aria-hidden="true"></i> */}
                            <img src="https://img.icons8.com/emoji/48/000000/books-emoji.png" alt="book"/>
                            <h3 className="eng engH3 H3df">knowladge</h3>
                            <nav className="eng Hline"></nav>
                            <h3 className="per perH perH3">دانش</h3>
                            <nav className="per Hline"></nav>
                            
                            <i className="perI fa fa-check" aria-hidden="true"></i>
                            <span className="eng engSp">Website hosting</span>
                            <span className="per perSP">میزبانی وب سایت</span>
                            <i className="perI fa fa-check" aria-hidden="true"></i>
                            <span className="eng engSp">iOS and android apps</span>
                            <span className="per perSP">برنامه های iOS و Android</span>
                            <i className="perI fa fa-check" aria-hidden="true"></i>
                            <span className="eng engSp">Create logo design</span>
                            <span className="per perSP">طراحی آرم </span>
                            <i className="perI fa fa-check" aria-hidden="true"></i>
                            <span className="eng engSp">Design for print</span>
                            <span className="per perSP">طراحی برای چاپ</span>
                            <i className="perI fa fa-check" aria-hidden="true"></i>
                            <span className="eng engSp">Graphics and animations</span>
                            <span className="per perSP">گرافیک و انیمیشن</span>
                        </li>
                        
                    </ul>
                    
                 {/* </section> */}
            </>
        )
    }

}