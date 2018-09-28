import React from 'react';

import Renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl.js';

configure({ adapter: new Adapter() });

describe('<BuildControl />', () => {
  it('should exist', () => {
    const wrapper = shallow(<BuildControl />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have button', () => {
    const wrapper = shallow(<BuildControl />);
    expect(wrapper.find('button')).toBeDefined();
  });
  it('should have more button', () => {
    const wrapper = shallow(<button name="More" />);
    expect(wrapper.find('button').hasClass('added')).toBeDefined();
  });
  it('should have less button', () => {
    const wrapper = shallow(<button name="Less" />);
    expect(wrapper.find('button').hasClass('removed')).toBeDefined();
  });
  it('should have less button', () => {
    const wrapper = shallow(<button name="Less" />);
    expect(wrapper.find('button').hasClass('disabled')).toBeDefined();
  });
});
