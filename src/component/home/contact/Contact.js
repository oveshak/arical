import React from 'react'
import "./contact.css"
const Contact = () => {
    const map='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29561.844862240097!2d90.41653639999998!3d22.15529225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1697898134820!5m2!1sen!2sbd  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade '
  return (
    <>
    
    <div className='container'>
    <div className='box'>
        <div className='left'>
        <iframe src={map}></iframe>
        </div>
        
        <div className='right'>

      

        
        <div class="contact_form">
        <h1 class="">Contact Us</h1>
        <div class="form_divider"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          repudiandae sint adipisci hic sit at optio nesciunt fugiat iusto
          perferendis? Qui facere quos fugit, officia ad magni esse fuga quaerat
          perspiciatis quidem amet voluptate earum veritatis eos maxime
          architecto debitis id beatae! Voluptatem ea sit quisquam eum quam
          molestias nostrum aliquid culpa. Nulla cum, aliquam corrupti
          blanditiis ab deserunt itaque, dignissimos quos vero, minus debitis?
        </p>

        <form>
        <input type="text" data-aos="fade-up" class="name aos-init aos-animate" placeholder="Your Name"/><br/>
        <input type="number" class="phone_number aos-init aos-animate" data-aos="fade-up" placeholder="Phone Number"/><br/>
        <input type="email" data-aos="fade-up" class="email aos-init aos-animate" placeholder="Email Address"/><br/>
        <textarea class="description aos-init aos-animate" cols="30" rows="7" data-aos="fade-up" placeholder="Write Message"></textarea><br/>
        <button type="submit" data-aos="fade-up" class="aos-init aos-animate">Send</button>
        </form>

        
        
      </div>














        </div>
        </div>
    </div>
   
    </>
  )
}

export default Contact;