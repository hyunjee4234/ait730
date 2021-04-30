import React from 'react'


const Landing = () => {
  return (
     
      <section className="landing">

    <div className="hero" id="home"> 
    <div className="hero__container">
    <h1 className="hero__heading">Welcome!</h1>
    <h2 className="hero__heading2">What we do?</h2>
    <h3 className="hero__heading3">We provide academic tutoring for Elementary School Students</h3>

</div>
</div>


<div class="main" id="viewgradereport">
    <div class="main__container">
        <div class="main__content">
            <h1>*Grade Reports</h1>
            <br/>
            <h2>Elementry School Students</h2>
             <ul>
           
            <li><a href="1st grade el.pdf" download> Download 1st Grade Report</a></li>
            <li><a href="2nd grade el.pdf" download> Download 2nd Grade Report</a></li>
            <li><a href="3rd grade el.pdf" download> Download 3rd Grade Report</a></li>
            <li><a href="4th grade el.pdf" download> Download 4th Grade Report</a></li>
            <li><a href="5th grade el.pdf" download> Download 5th Grade Report</a></li>
            </ul>
            <br/>
            <h3>Middle School Students</h3>
            <ul>
                <li><a href="6th grade el.pdf" download> Download 6th Grade Report</a></li>
                <li><a href="7th grade el.pdf" download> Download 7th Grade Report</a></li>
                <li><a href="8th grade el.pdf" download> Download 8th Grade Report</a></li>
            
                </ul>

        </div>
    </div>
</div>

<div class="main" id="viewschedule">
    <div class="main__container">
<div class="main__content">
    <h1>*Schedule</h1>
    <br/>
    <h2>Elementry School</h2>
     <ul>
     <li><a href="1st-grade.pdf" download>1st Grade Students</a></li>
     <li><a href="2nd-grade.pdf" download>2nd Grade Students</a></li>
     <li><a href="3rd-grade.pdf" download>3rd Grade Students</a></li>
     <li><a href="4th-grade.pdf" download>4th Grade Students</a></li>
     <li><a href="5th-grade.pdf" download>5th Grade Students</a></li>
    </ul>
    <br/>
    <h3>Middle School</h3>
    <ul>
        <li><a href="6th-grade.pdf" download>6th Grade Students</a></li>
        <li><a href="7th-grade.pdf" download>7th Grade Students</a></li>
        <li><a href="8th-grade.pdf" download>8th Grade Students</a></li>
        </ul>
        
    </div>
</div>
</div>

<div class="main" id="tuitionfee">
    <div class="main__container">
<div class="main__content">
    <h1>*Tuition Fee</h1>
    <br/>
    <h2>Elementry School</h2>
     <ul>
    <li>$100/hr for 1-2nd Grade </li>
    <li>$150/hr for 3-5th Grade</li>
    </ul>
    <br/>
    <h3>Middle School</h3>
    <ul>
        <li>$150/hr for 6th Grade</li>
        <li>$200/hr for 7-8th Grade</li>
        </ul>
        
    </div>
</div>
</div>


<div class="main" id="contactus">
    <div className="light__container">
<div class="light__content">
    <h1 className="light__heading">Contact Us</h1>

    <form class="contact-form" action="index.html" method="post">
        <input type="text" class="contact-form-text" placeholder="Your name"></input>
        <input type="email" class="contact-form-text" placeholder="Your email"></input>
        <input type="text" class="contact-form-text" placeholder="Your phone"></input>
        <textarea class="contact-form-text" placeholder="Your message"></textarea>
        <input type="submit" class="contact-form-btn" value="Send"></input>
    </form>

        
    </div>
</div>
</div>


<footer>

    <div className="main-content">
        <div className="heavy__container">
        <div className="heavy__content">
        <div className="left box">
            <h1> About us </h1>
            <div className="content">
                <p>Private Academy is providing tutoring services for Elementary and Middle School students</p>
                
                </div>
                <div className="center box">
                    <h2> Address</h2>
                    <div className="content">
                   
                        <div className="place">
                            <span className="fas fa-map-marker-alt">
                            </span>
                            <span className="text">19 Skidmore ct, MD 21015</span>
                        </div>
                        <div class="phone">
                            <span className="fas fa-map-marker-alt">
                            </span>
                            <span className="text">443-123-4567</span>
                        </div>
                        <div class="email">
                            <span className="fas fa-map-marker-alt">
                            </span>
                            <span className="text">abc@gmail.com</span>
                        </div>

                    </div>

                </div>
            </div>
            </div>
            </div>
        </div>
   
</footer>




</section>
  )

    
}
export default Landing