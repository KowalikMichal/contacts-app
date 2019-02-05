import React, { Component } from 'react';
import API from '../../API/API'
import _ from "lodash";
import update from 'immutability-helper';

import RenderContact from './renderContacts';
import withLoader from '../../hoc/withLoader/withLoader';


class App extends Component {
  state = {
    data: null,
    render: false,
    dataCopy: null,
    loading: true,
  }

  addfavourite = key => {
    const currentstate = this.state.data[key].favourite;

    let newState = update(this.state, {
      data: {
        [key]: {
          favourite: { $set: !currentstate }
        }
      }
    });

    this.setState(newState);
  }

  async componentDidMount() {
		const data = await API.getRandomUsers();

    data.results.map(element => (
      element.favourite = false
    ))
    this.setState({ data: data.results, render: true, dataCopy: data.results, loading: false });
  }

  handleFilter = _.debounce((text) => {

    let newState = _.filter(this.state.data, (o) => {
      return o.name.first.indexOf(text) > -1
    });

    if (text.length === 0) { newState = this.state.dataCopy; }

    this.setState({ data: newState })

  }, 300);


  render() {
    const { data, render } = this.state;
    
    return (
      <div style={{ textAlign: 'center' }}>
        {
          (render) && < RenderContact data={data} addfavourite={this.addfavourite} />
        }
      </div>
    );
  }
}

export default withLoader(App);
