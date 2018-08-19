import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);

});
test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter starts at 0', () => {
  //test the state
});

test('clicking button increments counter display', () => {
  //testing the display is the furthest removed from the implementation
});
