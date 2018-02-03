import React, { Component } from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Filter from './components/Filter';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main_section">
          <Switch>
            <Route component={Auth} exact path="/" />
            <Route component={Filter} path="/filter" />
            <Route component={Step1} path="/step1" />
            <Route component={Step2} path="/step2" />
            <Route component={Step3} path="/step3" />
            <Route component={Step4} path="/step4" />
            <Route component={Step5} path="/step5" />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
