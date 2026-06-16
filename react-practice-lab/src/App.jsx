import './index.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Lesson01Variables from './pages/Lesson01Variables'
import Lesson02State from './pages/Lesson02State'
import Lesson03Events from './pages/Lesson03Events'
import Lesson04Arrays from './pages/Lesson04Arrays'
import Lesson05Props from './pages/Lesson05Props'
import Lesson06Forms from './pages/Lesson06Forms'
import Lesson07StateOwnership from './pages/Lesson07StateOwnership'
import Lesson08Storage from './pages/Lesson08Storage'
import Lesson09Async from './pages/Lesson09Async'
import Lesson10Effects from './pages/Lesson10Effects'

function App() {
  return (
    <BrowserRouter>
      <div className="layout-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1>React Lab</h1>
          </div>
          <nav className="nav-links">
            {/* TODO: Add React Router Link/NavLink components here */}
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/lesson-1">Lesson 1: Variables</NavLink>
            <NavLink className="nav-link" to="/lesson-2">Lesson 2: State</NavLink>
            <NavLink className="nav-link" to="/lesson-3">Lesson 3: Events</NavLink>
            <NavLink className="nav-link" to="/lesson-4">Lesson 4: Arrays</NavLink>
            <NavLink className="nav-link" to="/lesson-5">Lesson 5: Props</NavLink>
            <NavLink className="nav-link" to="/lesson-6">Lesson 6: Forms</NavLink>
            <NavLink className="nav-link" to="/lesson-7">Lesson 7: State Ownership</NavLink>
            <NavLink className="nav-link" to="/lesson-8">Lesson 8: Storage</NavLink>
            <NavLink className="nav-link" to="/lesson-9">Lesson 9: Async</NavLink>
            <NavLink className="nav-link" to="/lesson-10">Lesson 10: Effects</NavLink>
          </nav>
        </aside>

        <main className="main-content">
          <header className="top-header">
            <h2>Learning Workspace</h2>
          </header>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<>
                <div className="todo-section">
                  <h3 className="todo-title">🛠️ Lesson 0: Router Setup</h3>
                  <p><strong>Goal:</strong> Implement React Router to handle navigation.</p>
                  <ul>
                    <li>Install <code>react-router-dom</code></li>
                    <li>Setup <code>BrowserRouter</code>, <code>Routes</code>, and <code>Route</code> components.</li>
                    <li>Replace the sidebar <code>div</code> links with proper router <code>NavLink</code> components.</li>
                    <li>Render the correct Lesson component here inside the <code>page-container</code>.</li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Welcome to React Practice Lab!</h3>
                  <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                    Follow the instructions in Lesson 0 above to get started.
                    Once routing is working, clicking the links in the sidebar will load the practice exercises.
                  </p>
                </div>
              </>
              } />
              <Route path="/lesson-1" element={<Lesson01Variables />} />
              <Route path="/lesson-2" element={<Lesson02State />} />
              <Route path="/lesson-3" element={<Lesson03Events />} />
              <Route path="/lesson-4" element={<Lesson04Arrays />} />
              <Route path="/lesson-5" element={<Lesson05Props />} />
              <Route path="/lesson-6" element={<Lesson06Forms />} />
              <Route path="/lesson-7" element={<Lesson07StateOwnership />} />
              <Route path="/lesson-8" element={<Lesson08Storage />} />
              <Route path="/lesson-9" element={<Lesson09Async />} />
              <Route path="/lesson-10" element={<Lesson10Effects />} />
            </Routes>

          </div>
        </main>
      </div>


    </BrowserRouter>
  )
}

export default App
