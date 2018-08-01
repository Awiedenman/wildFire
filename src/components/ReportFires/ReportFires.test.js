import React from 'react';
import { ReportFires } from './ReportFires';
import { shallow  } from 'enzyme';

describe('ReportFires', () => {
  test('should match the snapshot', () => {
    const wrapper = shallow(
      <ReportFires/>);

    expect(wrapper).toMatchSnapshot();
  });
  
});
