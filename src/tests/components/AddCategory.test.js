import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {

    const setCategories = () => {}
    test('should show correctly', () => {
        const wrapper = shallow(<AddCategory setCategories={AddCategory}/>)
        expect(wrapper).toMatchSnapshot()
    })
    
})