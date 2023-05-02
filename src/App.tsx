import './App.css'
import supervisor from '../public/images/icon-supervisor.svg'
import teambuilder from '../public/images/icon-team-builder.svg'
import karma from '../public/images/icon-karma.svg'
import calculator from '../public/images/icon-calculator.svg'

function App() {

  return (
    <div>
      <header>
        <h2>Reliable, efficient delivery</h2>
        <h3>Powered by Technology</h3>
        <p>Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful
        </p>
      </header>
      <main>
        <div className='card border-cyan'>
          <h4>Supervisor</h4>
          <p>Monitors activity to identify project roadblocks</p>
          <img src={supervisor} alt=""></img>
        </div>
        <div className='card border-red'>
          <h4>Team Builder</h4>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src={teambuilder} alt=""></img>
        </div>
        <div className='card border-orange'>
          <h4>Karma</h4>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src={karma} alt=""></img>
        </div>
        <div className='card border-blue'>
          <h4>Calculator</h4>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src={calculator} alt=""></img>
        </div>
      </main>
    </div>
  )
}

export default App
