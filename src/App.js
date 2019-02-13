import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routers from './routing/routers';
import _ from "lodash";

import Appbar from './components/Appbar/Appbar';
import NotFound from './NotFound'

import withLoader from './hoc/withLoader/withLoader';

class App extends Component {
  state = {
    data: null,
    render: false,
    dataCopy: null,
    loading: true,
  }


  handleFilter = _.debounce((text) => {

    let newState = _.filter(this.state.data, (o) => {
      return o.name.first.indexOf(text) > -1
    });

    if (text.length === 0) { newState = this.state.dataCopy; }

    this.setState({ data: newState })

  }, 300);

  handleData = (data) =>{
    console.log(data)
  }


  render() {

    return (
      <div style={{ textAlign: 'center' }}>


        <Router>
          <>
            <Appbar handleFilter={this.handleFilter} />
            <Switch basename={process.env.PUBLIC_URL}>
              {
                routers.map((element, key) =>(
                  <Route exact path={element.path} component={element.component} key={key} />
                ))
              }
              <Route path='*' exact component={NotFound}/>
            </Switch>
          </>
        </Router>

      </div>
    );
  }
}

export default withLoader(App);
