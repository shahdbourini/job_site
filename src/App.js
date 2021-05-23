import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Skills from './pages/Skills';
import JobsTable from './pages/JobTable';
import JobLocation from './pages/JobLocation';
import JobCat from './pages/JobCat';
import JobApp from './pages/JobApp';
import NewJob from './pages/NewJob';
import JobOpening from './components/job-opening/JobOpening';
import JobDetails from './components/jobs-Details/JobDetails';
import JobBoard from './pages/JobBoard';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/" component={null} />
              <Route exact path="/JobTable">
                <JobsTable />
              </Route>
              <Route exact path="/job-site">
                <JobCat />
              </Route>
              <Route exact path="/JobLocations">
                <JobLocation />
              </Route>
              <Route exact path="/Skills">
                <Skills />
              </Route>
              <Route exact path="/JobApplications">
                <JobApp />
              </Route>
              <Route exact path="/NewJob" component={NewJob} />
              <Route exact path="/jobOpenings" component={JobOpening} />
              <Route exact path="/jobDetails" component={JobDetails} />
              <Route exact path="/jobBoard" component={JobBoard} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
