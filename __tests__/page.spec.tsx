import renderer from 'react-test-renderer';
import Home from '@/app/page';
import { JSX } from 'react';

describe('<Home>', () => {
  it('should expose a function', () => {
		expect(Home).toBeDefined();
	});
  const renderTree = (tree: JSX.Element) => renderer.create(tree);

  it('page should return expected output', () => {
    expect(renderTree(<Home />).toJSON()).toMatchSnapshot();
  });
});