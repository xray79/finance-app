import { FC, SyntheticEvent } from 'react';
import './AddPortfolio.css';

interface AddPortfolioProps {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio: FC<AddPortfolioProps> = ({ onPortfolioCreate, symbol }) => (
  <form onSubmit={onPortfolioCreate}>
    <input readOnly={true} hidden={true} value={symbol} />
    <button type='submit'>Add</button>
  </form>
);

export default AddPortfolio;
