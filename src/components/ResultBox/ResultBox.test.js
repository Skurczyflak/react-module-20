import { render, screen, cleanup  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCasesPLN = [
      { amount: 100, result: 'PLN 100.00 = $28.57', },
      { amount: 20, result: 'PLN 20.00 = $5.71', },
      { amount: 200, result: 'PLN 200.00 = $57.14', },
      { amount: 345, result: 'PLN 345.00 = $98.57', },
];

const testCasesUSD = [
      { amount: 100, result: '$100.00 = PLN 350.00', },
      { amount: 20, result: '$20.00 = PLN 70.00', },
      { amount: 200, result: '$200.00 = PLN 700.00', },
      { amount: 345, result: '$345.00 = PLN 1,207.50', },
];

const tastCasesSame = [
    { amount: 100, fromTo: 'PLN', result: 'PLN 100.00 = PLN 100.00', },
    { amount: 100, fromTo: 'USD', result: '$100.00 = $100.00', },
]


  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
        for(const testObj of testCasesPLN) {

        render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
        // find field elems
        const resultText = screen.getByTestId('result');
        expect(resultText).toHaveTextContent(testObj.result);
        cleanup();
        }
    });
    it('should render proper info about conversion when USD -> PLN', () => {
        for(const testObj of testCasesUSD) {

        render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
        // find field elems
        const resultText = screen.getByTestId('result');
        expect(resultText).toHaveTextContent(testObj.result);
        cleanup();
        }
    });
    it('should render proper info about conversion PLN -> PLN && USD -> USD', () => {
        for(const testObj of tastCasesSame) {
            render(<ResultBox from={testObj.fromTo} to={testObj.fromTo} amount={testObj.amount} />);
            // find field elems
            const resultText = screen.getByTestId('result');
            expect(resultText).toHaveTextContent(testObj.result);
            cleanup();
        }
    });
    it('should render "Wrong value... if amount is negative"', () => {
        render(<ResultBox from="USD" to="PLN" amount={-1} />);
        // find field elems
        const resultText = screen.getByTestId('result');
        expect(resultText).toHaveTextContent("Wrong value…");
        cleanup();
    });
});