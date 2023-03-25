import React,{useEffect} from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Numbers from './components/numbers'
import About1 from './components/about1'
import Services from './components/services'
import Comments from './components/comments'
import Fundraising from './components/fundraising'
import Community from './components/community'
import Contact from './components/contactUs'
import Footer from './components/footer'
import Questions from './components/questions'
import questions from './lists/questions'
import './App.css'
import "./fonts/BromnyRegular.ttf"
import AOS from 'aos'
import 'aos/dist/aos.css'
import figures from './lists/figures'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Initializing animate on scroll
function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);


  //MAPPING THROUGH THE FIGURE DATA
  const numberElement = figures.map(figuresInfo => {
    return(
      <Numbers 
        key = {figuresInfo.id}
        img = {figuresInfo.numImage}
        fig = {figuresInfo.numFig}
        title = {figuresInfo.numTitle}
        summary = {figuresInfo.numSum}
        btn = {figuresInfo.numButton}
      />
    )
  })

  //MAPPING THROUGHT THRR FREQUENTLY ASKED DATA
  const questionElement = questions.map(quesInfo => {
    return(
      <Questions
        key = {quesInfo.id}
        ques = {quesInfo.question}
        ans = {quesInfo.ans}
      />
    )
  })

  
  // HANDLING THE SLIDER ICONS

  function slideLeft(){
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  function slideRight(){
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <Navbar />
      <Hero />
      <section id='infos' data-aos='fade-up'>
        {numberElement}
      </section>

      <section id="aboutUs">
        <About1 />
      </section>

      <section>
        <Services />
      </section>

      <section id='comment-section' data-aos='fade-up'>
        <div className='comment-header'>
          <h1>Reducing postpartum <br />depression rate by 10%</h1>
          <p>Don't just hear from us, this is how we've helped several mmothers get married</p>
        </div>
        
        <div>
          <div id='slider' className='comments'>
            <Comments />
            <Comments />
            <Comments />
          </div>
          <FontAwesomeIcon onClick={slideLeft} icon={faAngleLeft} />
          <FontAwesomeIcon onClick={slideRight} icon={faAngleRight} />
        </div>

      </section>

      <section id='donate'>
        <Fundraising />
      </section>
      
      <Community />

      <section id='questions'>
        <h1>Frequently asked questions</h1>
        <div id='allques'>
          {questionElement}
        </div>
      </section>
      
      <section id='contactUs'>
        <Contact />
      </section>

      <hr className='hr'/>
      
      <Footer />
    </>
  )
}

export default App
