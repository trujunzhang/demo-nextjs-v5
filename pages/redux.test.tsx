import { shallow } from 'enzyme';
import { Redux } from './redux';
import Enthusiasm, { Props } from '../redux/enthusiasm/types/enthusiasm';

describe('The main Redux page', () => {
  it('should render', () => {
    const mockEnthusiasm: Enthusiasm = {
      languageName: 'JavaScript',
      enthusiasmLevel: 1
    };
    const mockProps: Props = {
      name: 'Test',
      enthusiasm: mockEnthusiasm
    };
    const wrapper = shallow(<Redux {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
