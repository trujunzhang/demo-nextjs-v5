import { mount } from 'enzyme';
import Index from './Index';

describe('The default page', () => {
  it('should render', () => {
    const wrapper = mount(<Index />);
    expect(wrapper).toBeDefined();
  });
});
