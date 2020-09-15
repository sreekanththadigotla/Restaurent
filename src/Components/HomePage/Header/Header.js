import  React, { Component } from 'react';

import classes from './Header.css';

import { IoIosTimer,IoMdPizza,IoIosWifi,IoIosPeople,IoMdMail ,IoLogoTwitter,IoLogoFacebook,IoLogoYoutube} from "react-icons/io";
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";


class Header extends Component{
 
      render()

     {


        return ( 
           <div className={classes.Body}>

               <div className={classes.Persp}>
            <div className={classes.Head}>
                   
                <div className={classes.Maintain}>

                      <div className={classes.Primary}>
                           <span className={classes.S}>S</span>
                           <span className={classes.P}>p</span>
                           <span className={classes.I}>i</span>
                           <span className={classes.C}>c</span>
                           <span className={classes.Y}>y</span>
                           <span className={classes.B}>B</span>
                           <span className={classes.I}>i</span>
                           <span className={classes.T}>t</span>
                           <span className={classes.E}>e</span>
                           <span className={classes.SS}>s</span>
                            
                      </div>

                      <div className={classes.Secondary}>
                        <span className={classes.a}>E</span>
                        <span>at</span>
                        <span className={classes.b}>H</span>
                         <span>ealthy</span> 
                        <span className={classes.c}>S</span>
                        <span>tay</span>
                        <span className={classes.d}>H</span>
                        <span>ealthy</span>
                      </div>

                </div>

                    <div className={classes.Second}></div>
                    <div className={classes.Third}>
                        <div className={classes.ThirdHeading}>
                             <span className={classes.Dt}>D</span>
                             <span className={classes.It}>I</span>
                             <span className={classes.St}>S</span>
                             <span className={classes.Ht}>H</span>
                             <span className={classes.Et}>E</span>
                             <span className={classes.St}>S</span>
                        </div>
                        <div className={classes.ThirdMenu}>
                            <div className={classes.FirstItem}>
                                <div className={classes.FirstItemImage}>
                                    
                                    <div className={classes.Name} >
                                     
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     Indian
                                    
                                     </div>
                                    <div className={classes.Image1}>
                                         </div>
                                </div>
                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     American</div>
                                    <div className={classes.Image2}> </div>
                                </div>
                                 
                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                        Italian</div>
                                    <div className={classes.Image3}> </div>
                                </div>

                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                        Singapore</div>
                                    <div className={classes.Image7}> </div>
                                </div>
                                
                            </div>

                            <div className={classes.FirstItem2}>
                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                         China</div> 
                                    <div className={classes.Image4}> </div>
                                </div>
                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                         Japam</div>
                                    <div className={classes.Image5}> </div>
                                </div>
                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                        
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                        Thailand</div>
                                    <div className={classes.Image6}> </div>
                                </div>

                                <div className={classes.FirstItemImage}>
                                    <div className={classes.Name} >
                                         
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                        Malasia</div>
                                    <div className={classes.Image8}> </div>
                                </div>
                            </div>

                           

                            {/* <div className={classes.FirstItem}>
                                <div className={classes.FirstItemImage}>First</div>

                                <div className={classes.FirstItemImage}>Second</div>

                                <div className={classes.FirstItemImage}></div>

                            </div> */}
                           
                        </div>

                        {/* <div className={classes.Four}> 
                        <div  className={classes.Fourts}>               
                        <div className={classes.Fourth}>
                         <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>
                        

                        <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>


                        <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>

                        
                        <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>

                        
                        <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>
                        <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>




                         <div className={classes.FourthMaintian}>
                            <div className={classes.Review}>
                               <div className={classes.PP}>
                                   <div className={classes.Photo}></div>
                                   <div className={classes.Names}>Sulekha</div>
                               </div>
                               <div className={classes.RR}>
                                   <div className={classes.RRR} >
                                   The food was fresh, properly prepared and a great value for the price.
                                   </div>
                               </div>
                            </div>
                        </div>
 IoIosTimer,IoMdPizza,IoIosWifi,IoIosPeople

                        </div>
                        </div>
                        </div> */}

                        <div className={classes.Five}>
                            
                            <div className={classes.Our}>
                                <span className={classes.A5}>A</span>
                                <span className={classes.B5}>B</span>
                                <span className={classes.O5}>O</span>
                                <span className={classes.U5}>U</span>
                                <span className={classes.T5}>T</span>
                            </div>
                            <div className={classes.AboutDetails}>
                            <div className={classes.Food}>
                                <div className={classes.Card}>
                                    <IoMdPizza className={classes.Pizza}/>
                                    <p className={classes.Para}> We Serve almost all the continental dishes, We never compromise on 
                                                                 Quality and taste to give to our cusotmers Because Our Chefs are best
                                                                 </p>
                                </div>
                            </div>
                                <div className={classes.Wifi}>
                                <div className={classes.Card}>
                                    <IoIosTimer className={classes.Timer}/>
                                    <p className={classes.Para}>  We are successfully delivering more than 300  deliveries daily and 
                                                                  till now we delivered more than 3,00,000 orders and  around 50,000
                                                                  Catering orders </p>
                                </div>
                                </div>

                                <div className={classes.Chef}> 
                                <div className={classes.Card}>
                                    <IoIosPeople className={classes.People}/>
                                    <p className={classes.Para}> There are around 1,00,00000 Happy customers around the Globe.
                                                                 Almost EveryOne Loves our Quality ,Tastful and Hygiene Food EveryTime </p>
                                </div>
                                </div>

                            </div>
                         
                        
                 


                      


                     </div>

                     {/* <div className={classes.Six}>
                               <div className={classes.SixContainer}>
                                   <div className={classes.R1}></div>
                                   <div className={classes.R2}></div>
                                   <div className={classes.R3}></div> 
                                   <div className={classes.R4}></div>
                                   <div className={classes.R5}></div>
                                 
                                </div>
                        </div>   */}







<div className={classes.Che}>
                           <div className={classes.Re}>
                             <span className={classes.ww}>W</span>
                             <span className={classes.hh}>h</span>
                             <span className={classes.ee}>e</span>
                             <span className={classes.rr}>r</span>
                             <span className={classes.ee}>e</span>
                             <span className={classes}> </span>
                             <span className={classes.aa}>a</span>
                             <span className={classes.rr}>r</span>
                             <span className={classes.ee}>e</span>
                             <span className={classes}> </span>
                             <span className={classes.ww}>w</span>
                             <span className={classes.ee}>e</span>
                             <span className={classes.qq}>?</span>
                           </div>
                           <div className={classes.We1}>
                                <div className={classes.Fir}>
                                <div className={classes.We1PhotoB}>                                   
                                </div>    
                             </div>

                               <div className={classes.Sec}>
                               <div className={classes.We1Review}>
                                   <div className={classes.City}>Bangalore</div>
                                   <div className={classes.Street}>
                                       <div className={classes.Ads}>    Gate No 7, Ncc, Near Marathalli, Bangalore</div>
                                       <div>Ph:9703951256</div>
                                   </div>
                               </div>

                            </div>

                              

                           </div>

                           
                           <div className={classes.We1}>
                           <div className={classes.Sec}>
                           <div className={classes.We1Review}>
                                   <div className={classes.City}>Hyderabad</div>
                                   <div className={classes.Street}>
                                       <div className={classes.Ads}>S116 -a, 5th street, Vengal Rao Nagar ,Hyderabad</div>
                                       <div>Ph:9908803652</div>
                                   </div>
                            </div>
                        </div>
                         <div className={classes.Fir}>
                               <div className={classes.We1PhotoH}></div>
                            </div>   
                           </div>


                           <div className={classes.We1}>
                           <div className={classes.Fir}>
                           <div className={classes.We1Photo}></div>
                           </div>
                                <div className={classes.Sec}>
                                 <div className={classes.We1Review}>
                                   <div className={classes.City}>Mumbai</div>
                                   <div className={classes.Street}>
                                       <div className={classes.Ads}>Shop No 12, Plot No 56, Gate No 7, Ncc, Malwani,Mumbai</div>
                                       <div>Ph:9852315685</div>
                                   </div>
                                 </div>
                                     
                               </div>
{/* kk */}
                           </div>
                           </div>


                          {/* <video>
                              <source src={}></source>
                          </video> */}
 
                     <div className={classes.Seven}>
                         
                         <div className={classes.SevenHeading}>
                                <span className={classes.A5}>R</span>
                                <span className={classes.B5}>E</span>
                                <span className={classes.O5}>V</span>
                                <span className={classes.U5}>I</span>
                                <span className={classes.T5}>E</span>
                                <span className={classes.T5}>W</span>
                         </div>
                         <div className={classes.SevenReview}>
                         

                             <div className={classes.FirstReview}>
                                  <div className={classes.FirstReviewsPhoto1}>
                                      <div className={classes.FirstPhoto1}></div>
                                  </div>
                                  <div className={classes.FirstReviewDes}>I stumbled on this undiscovered gem right in our neighboorhood. The food was flavorful, savory, and succulent and good waiter's  </div>  
                                   
                             </div>

                              <div className={classes.FirstReview}>
                                  <div className={classes.FirstReviewsPhoto2}>
                                      <div className={classes.FirstPhoto2}></div>
                                  </div>
                                  <div className={classes.FirstReviewDes}>Yumm-o! The food was cooked to perfection. The decor was unique and incredible. After my meal, I was knocked into a food coma </div>  
                                   
                             </div>

                              <div className={classes.FirstReview}>
                                  <div className={classes.FirstReviewsPhoto3}>
                                      <div className={classes.FirstPhoto3}></div>
                                  </div>
                                  <div className={classes.FirstReviewDes}>It was much better than I expected. The food was cooked to perfection. The waiter was prompt and polite. </div>  
                                   
                             </div>

                              <div className={classes.FirstReview}>
                                  <div className={classes.FirstReviewsPhoto4}>
                                      <div className={classes.FirstPhoto4}></div>
                                  </div>
                                  <div className={classes.FirstReviewDes}>Best experience ever! The experience was heavenly as I was served a meal fit for God himself. Everything I tried was bursting with flavor. </div>  
                                   
                             </div> 

                             

                         </div>

                         

                     </div>


                     <div className={classes.Fuckk}>
                         <div className={classes.FuckkHeading}>
                            <span className={classes.GG}>G</span>
                            <span className={classes.AA}>A</span>
                            <span className={classes.LL}>L</span>
                            <span className={classes.LL}>L</span>
                            <span className={classes.EE}>E</span>
                            <span className={classes.RR}>R</span>
                            <span className={classes.YY}>Y</span>


                         </div>
                     <div className={classes.Fuck}>
                        
                        <div className={classes.Outerwrapper}> 
                            
                                  
                            <div className={classes.Wrapper}>
                                <div className={classes.EOne}></div>
                                <div className={classes.ETwo}></div>
                                <div className={classes.EThree}></div>
                                <div className={classes.EFour}></div>
                                <div className={classes.EFive}></div>
                             </div>
                             
                        
                    </div>
                            
                        </div>
                      
  

                     </div>



                     <div className={classes.Footer}>
                      
                         <div className={classes.Left}>

                             <div className={classes.InnerMaintian}>
                             <div className={classes.OfficeAddress}>
                                 <div>
                                 <FaMapMarkerAlt className={classes.Mark}/>
                                 </div>
                                 <div className={classes.Add}>
                                    <div>Sree Lakshmi Narasimha Nilayam,</div>
                                   <div>Ramanjaneya Layout,Near Kalamandir,</div>
                                   <div>Marathalli, Bangalore, India</div>
                                 </div>     
                             </div>

                             <div className={classes.OfficeAddress}>
                                 <div>
                                 <FaPhoneAlt className={classes.Mark}/>
                                 </div>
                                 <div className={classes.Add}>
                                    <div>+91 6281134952</div>
                                    
                                 </div>     
                             </div>

                             <div className={classes.OfficeAddress}>
                                 <div>
                                 <IoMdMail className={classes.Mark}/>
                                 </div>
                                 <div className={classes.Add}>
                                    <div>Sreekanth970@gmail.com</div>
                                    
                                 </div>     
                             </div>

                             </div>

                         </div>
                         <div className={classes.Right}>
                             <div className={classes.RightMaintain}>
                             <div className={classes.Want}>Want to know about US?</div>
                             <div className={classes.Email}>
                                 <input className={classes.Inputs} placeholder=" Enter your email" type="text"/>
                                 <div className={classes.BBS}>
                                     <a className={classes.aaL}>Submit</a>
                                   
                                 </div>
                             </div>
                            
                              </div>

                             

                            
                         </div>
                        
                     </div>

                     <div className={classes.AfterFooter} >
                         <div>Follow Us On </div>
                         <div>
                           <IoLogoFacebook className={classes.Other}/> 
                           <IoLogoYoutube className={classes.Other}/>  
                           <IoLogoTwitter className={classes.Other} />
                         </div>
                  
                     </div>
                   
                          




                       </div>
                      


                    </div>

            </div>

                
               </div>
               

               
     
            
         
       
             )


     }
   
}

export default Header;