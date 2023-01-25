import { renderWithProviders } from "../../utils/test-utils";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux"

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe("ProductList", () => {
  it("should list products", async () => {
    renderWithProviders(<ProductList />);

    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selectorFn) => selectorFn(yourMockedStoreData));
    useDispatch.mockReturnValue(mockedDispatch);
    mount(<Router><Clients history={historyMock} /></Router>);
    expect(mockDispatch).toHaveBeenCalledWith(/*arguments your expect*/);
  });
});
