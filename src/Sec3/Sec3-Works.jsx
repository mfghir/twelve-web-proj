import react from 'react'
import React,{Component} from 'react'

import Demo from './../img/Demo.jpg'
import Proj1 from './../img/Proj1.png'
import Proj2 from './../img/Proj2.png'
import Proj3 from './../img/Proj3.png'
import Proj4 from './../img/Proj4.png'
import Proj5 from './../img/Proj5.png'
import Proj6 from './../img/Proj6.png'
import Proj7 from './../img/Proj7.png'
import Proj8 from './../img/Proj8.png'
import Proj9 from './../img/Proj9.png'


export default class Sec3 extends Component{

    render(){
        return(
            <>
                {/* <section className="sec23 row-t-95 row-m-95"> */}
                     <h2 className="eng"><span className="eng">recent</span> works</h2>
                     <nav className="eng Hline"></nav>
                     <h2 className="per perH"><span className="per">کارهای</span> اخیر</h2>
                     <nav className="per Hline"></nav>
                     <div className="row-t-95 row-m-95 mt-t-10 mt-m-10 df jc-b ai-c fw-w">
                         <figure className="col-t-45  mb-m-5">
                            <img src={Proj1} alt="Proj1" />
                            <a className="eng" href="http://mfgh.ir/Projects/proj1/proj1-rovella.html" target="_blank" rel="noreferrer">proj 1 <br/> without responsive</a>
                            <a className="per" href="http://mfgh.ir/Projects/proj1/proj1-rovella.html" target="_blank" rel="noreferrer">پروژه اول<br/>  بدون ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                           <img src={Proj2} alt="Proj2" />
                            <a className="eng" href="http://mfgh.ir/Projects/proj2/proj2-soledad.html" target="_blank" rel="noreferrer">proj 2 <br/> with responsive</a>
                            <a className="per" href="http://mfgh.ir/Projects/proj2/proj2-soledad.html" target="_blank" rel="noreferrer">پروژه دوم <br/> ریسپانسیو</a>
                         </figure>

                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj3} alt="Proj3" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">proj 3 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">پروژه سوم<br/> ریسپانسیو</a>
                         </figure>

                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj4} alt="Proj4" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj4/proj4-gourmet.html" target="_blank" rel="noreferrer">proj 4 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj4/proj4-gourmet.html" target="_blank" rel="noreferrer">پروژه چهارم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj5} alt="Proj5" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj5-PrevMyWeb/proj5-PrevMyWeb.html" target="_blank" rel="noreferrer">proj 5 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj5-PrevMyWeb/proj5-PrevMyWeb.html" target="_blank" rel="noreferrer">پروژه پنجم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj6} alt="Proj6" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj6-PrevMyWeb/proj6-PrevMyWeb.html" target="_blank" rel="noreferrer">proj 6 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj6-PrevMyWeb/proj6-PrevMyWeb.html" target="_blank" rel="noreferrer">پروژه ششم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj7} alt="Proj7" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj7/proj7-Kpop.html" target="_blank" rel="noreferrer">proj 7 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj7/proj7-Kpop.html" target="_blank" rel="noreferrer">پروژه هفتم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj8} alt="" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj8/proj8-nika.html" target="_blank" rel="noreferrer">proj 8 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj8/proj8-nika.html" target="_blank" rel="noreferrer">پروژه هشتم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Proj9} alt="" />
                             <a className="eng" href="http://mfgh.ir/Projects/proj9/proj9-marimar.html" target="_blank" rel="noreferrer">proj 9 <br/> with responsive</a>
                             <a className="per" href="http://mfgh.ir/Projects/proj9/proj9-marimar.html" target="_blank" rel="noreferrer">پروژه نهم<br/> ریسپانسیو</a>
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Demo} alt="" />
                             {/* <a className="eng" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">proj 6 <br/> with responsive</a> */}
                             {/* <a className="per" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">پروژه ششم<br/> ریسپانسیو</a> */}
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Demo} alt="" />
                             {/* <a className="eng" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">proj 6 <br/> with responsive</a> */}
                             {/* <a className="per" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">پروژه ششم<br/> ریسپانسیو</a> */}
                         </figure>
                         <figure className="col-t-45 mt-m-15">
                             <img src={Demo} alt="" />
                             {/* <a className="eng" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">proj 6 <br/> with responsive</a> */}
                             {/* <a className="per" href="http://mfgh.ir/Projects/proj3/proj3-miranda.html" target="_blank" rel="noreferrer">پروژه ششم<br/> ریسپانسیو</a> */}
                         </figure>
                     </div>
                 {/* </section> */}
            </>
        )
    }

}