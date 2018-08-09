import React from 'react'
import App from './App'
import {shallow} from 'enzyme'
import configure from './setUpTests';
configure();
it('renders without crashing', () => {
  shallow(<App />);
});