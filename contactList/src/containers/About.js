import React from 'react'
import { button } from 'react-bootstrap'
import "../App.css"

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='para'>
          <table>
            <tr>
              <td><h1 >AREEB BIN AZIM</h1></td>

            </tr>
            <tr>
              <td><h2 >Computer Systems Engineering Undergraduate @NEDUET🎓 | Python and JavaScript Developer | Tech Enthusiast | Aspiring Data Scientist</h2>
              <br></br>
                <h3>I have some hands-on experience in several Web development projects and currently learning MERN stack development.
                  I am very interested in solving different logical and real-world problems and looking for opportunities to challenge myself up as a Computer Engineer.</h3>
              </td>
              <td><div >
                <img className='pic' src='https://avatars.githubusercontent.com/u/70211234?s=400&u=867b6f1edac3cd28d948027022e1bc8cba206928&v=4' ></img>
              </div></td>
            </tr>
            <br></br>

            <tr>
              <td>
                <ul><a className='links' href='https://linkedin.com/in/areeb-bin-azim-405b19201'>· LinkedIn Profile</a></ul>
                <ul><a className='links' href='https://github.com/ARBII-xD'>· Github Profile</a></ul>
                <ul><a className='links' href='https://twitter.com/Arbii_xD'>· Twitter Profile</a></ul>
                <ul><a className='links' href='https://www.facebook.com/people/Areeb-Bin-Azim/100010194039660/'>· Facebook Profile</a></ul>


              </td>
              <td></td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr> */}

          </table>



        </div>


      </div>
    </>
  )
}

export default About