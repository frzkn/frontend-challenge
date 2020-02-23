import React from 'react'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

function App() {

  const [speechId, setSpeechId] = React.useState(2)
  const [speeches, setSpeeches] = React.useState([
    {
      id: 1,
      author: 'Faraz Khan',
      title: 'Hello, First Note.',
      date: '23-02-2020',
      content: `Hello I am Faraz, aspiring fullstack web developer. Thanks for checking my submission. I believe I completed all the minimum requirements except for Storage part as I wasn't sure if it meant using localStorage/indexDB or something else. For the techstack I used React.js and wrote my own custom responsive CSS. I believe that working at GreytHR will be a great start of my career in Web development. I've heard good experiences about GreytHR and would love to be a part of it`
    },

    {
      id: 2,
      author: 'Elon Musk',
      title: 'Tesla Model X',
      date: '23-02-2020',
      content:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    }
  ])
  return (
    <main className="App">
      <Router>
        <header>
          <div className="nav-links">
            <NavLink to="/" exact activeClassName="active">
              <h1>Speech Manager</h1>
            </NavLink>
            <NavLink to="/new" exact activeClassName="active">
              <div class="add-new">
                <span>+</span>
              </div>
            </NavLink>
          </div>
        </header>

        <Switch>
          <Route path="/" exact>
            <Home speeches={speeches} />
          </Route>
          <Route path="/new">
            <New speeches={speeches} setSpeeches={setSpeeches} 
            speechId={speechId} setSpeechId={setSpeechId}/>
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App
