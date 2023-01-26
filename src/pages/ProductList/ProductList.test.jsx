import { screen } from "@testing-library/react"
import ProductList from "./ProductList"
import { renderWithProviders } from '../../utils/test-utils'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux')


const state = {
    products: [{
        id: '1',
        img: './imgs/img1.webp',
        marca: 'Apple',
        modelo: 'Iphone 12',
        precio: 100
    }],
    isLoading: false
}


/* export const handlers = [
    rest.get('/products', (req, res, ctx) => {
        return res(ctx.json({
            id: '1',
            img: './imgs/img1.webp',
            marca: 'Apple',
            modelo: 'Iphone 12',
            precio: 100
        }), ctx.delay(150))
    })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close()) */



describe('Product List', () => {
    it('should render product cards', async () => {

        useSelector.mockImplementation((f) => f(state))
        useDispatch.mockImplementation(() => jest.fn)


        renderWithProviders(<ProductList />/* , {
            preloadedState: {
                products: state.products,
                isLoading: state.isLoading
            }
        } */)

        const cardTitle = await screen.findByText(/All Products/i)

        expect(cardTitle).toBeInTheDocument()
        /* expect(1 + 1).toEqual(2) */
    })
})

