import { useState } from 'react'
import Shortly from './assets/images/logo.svg'
import imgHome from './assets/images/illustration-working.svg'
import bgShorten from './assets/images/bg-shorten-mobile.svg'
import TargetInfo from './assets/components/TargetInfo'

import Brand from './assets/images/icon-brand-recognition.svg'
import Detailed from './assets/images/icon-detailed-records.svg'
import Fully from './assets/images/icon-fully-customizable.svg'

import BgBoost from './assets/images/bg-boost-mobile.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div id='home'>
            <img src={Shortly} alt="What a good website." />
          </div>
          <div>
            <button className='h-button'>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>
      <section className='imgHome'>
        <img id='imgHome' src={imgHome} alt="Working hard." width={520}/>
      </section>
      <section className='title'>
        <div className='f-section'>
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className='getStarted'>Get Started</button>
        </div>
      </section>
      <section className='urlShort'>
        <div className='url'>
          <img src={bgShorten} id='bg-short'/>
          <div className='w-100 bgt'>
            <input className='w-100 inptShort' type='text' placeholder='Shorten a link here...' />
            <button className='w-100 shorten btnShort'>Shorten It!</button>
          </div>
        </div>
      </section>
      <section className='f-section cards'>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <section className='cardsInfo'>
          <TargetInfo img={Brand} title='Brand Recognition' desc='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.' />
          <TargetInfo img={Detailed} title='Detailed Records' desc='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' />
          <TargetInfo img={Fully} title='Fully Customizable' desc='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' />
        </section>
      </section>
      <section>
        <div className='t-section'>
          <div className='bBck'>
            <img src={BgBoost}/>
          </div>
          <div className='getS'>
            <h2>Boost your links today</h2>
            <button className='getStarted'>Get Started</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='f-section'>
          <div className='f-logo'>
            <img src={Shortly} alt="What a good website." />
          </div>
          <div className='f-links'>
            <ul>
              <li className='lit'>Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
            <ul>
              <li className='lit'>Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
            <ul>
              <li className='lit'>Company</li>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='f-social'>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
