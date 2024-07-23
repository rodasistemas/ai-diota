import renderer from 'react-test-renderer';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import RootLayout, { metadata } from "@/app/layout";
import { JSX } from 'react';

jest.mock("next");
jest.mock("next/font/google");
jest.mock("@/app/globals.css");

const renderTree = (tree: JSX.Element) => renderer.create(tree);
describe('<RootLayout>', () => {
  it('should render component', () => {
    expect(renderTree(<RootLayout children={undefined}    />).toJSON()).toMatchSnapshot();
  });
  
});


describe('metadata', () => {
  
});