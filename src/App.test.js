import React from "react";
import { shallow } from "enzyme";
import Header from "./components/header";

describe('Header component', ()=> {
    it('it should render without errors', ()=> {
        const component = shallow(<Header />)
        const wrapper = component.find('[data-test="wrapper"]')
        expect(wrapper.length).toBe(1)
    })

    it('should render a logo', ()=> {
        const component = shallow(<Header />)
        const logo = component.find('[data-test="logo"]')
        expect(logo.length).toBe(1)
    })
})