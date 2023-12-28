import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
    <div className='container'>
    <footer className="footer_section ">
      <div className="section1">
        <a href='#'><img src="./images/logo.png" alt="logo/image"/></a>
        <p>
          dolor sit amet, consectetur adipisicing elit. Eum vitae necessitatibus
          quae voluptates? Doloribus molestiae assumenda velit libero quos eaque
          aut recusandae, eligendi officiis. Voluptates consequuntur repellat ut
          atque harum?
        </p>
        <p>
          sit, amet consectetur adipisicing elit. Sint mollitia alias nisi ullam
          excepturi sit voluptatum, necessitatibus autem modi nam?
        </p>
      </div>

      <div className="section2">
        <h3>Twitter Feed</h3>
        <p>
          <i className="fab fa-twitter"></i>
          <span>rahi - 6 min ago</span> <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vitae
          necessitatibus quae voluptates? Doloribus molestiae assumenda velit
          libero quos eaque aut recusandae, eligendi officiis. Voluptates
          consequuntur repellat ut atque harum?
        </p>
        <p>
          <i className="fab fa-twitter"></i>
          <span>creative-telent - 2 min ago</span> <br/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          mollitia alias nisi ullam excepturi sit voluptatum, necessitatibus
          autem modi nam?
        </p>
      </div>
      <div className="section3">
        <h3>Social</h3>
        <p>
          <i className="fab fa-facebook"></i>
          500 Likes
        </p>
        <p>
          <i className="fab fa-github"></i>
          57+ Projects
        </p>
        <p>
          <i className="fab fa-instagram"></i>
          2000 Followers
        </p>
        <p>
          <i className="fab fa-pinterest"></i>
          2456+ Pins
        </p>
      </div>

      <div className="section4">
        <h3>Blogs</h3>
        <div className="blog1 blog_card">
          <img src="./images/scr1.png" alt=""/>
          <div>
            <span>July 23, 2023</span>
            <p>Round and round like carousel</p>
          </div>
        </div>
        <div className="blog2 blog_card">
          <img src="./images/scr3.png" alt=""/>
          <div>
            <span>September 03, 2023</span>
            <p>Round and round like carousel</p>
          </div>
        </div>
        <div className="blog2 blog_card">
          <img src="./images/scr2.png" alt=""/>
          <div>
            <span>October 01, 2023</span>
            <p>Round and round like carousel</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </>
  )
}

export default Footer