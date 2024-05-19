import { FC, SyntheticEvent } from 'react';
import './AddPortfolio.css';

interface AddPortfolioProps {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio: FC<AddPortfolioProps> = ({ onPortfolioCreate, symbol }) => (
  <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
    <form onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} />
      <button
        type="submit"
        className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
      >
        Add
      </button>
    </form>
  </div>
);

export default AddPortfolio;
