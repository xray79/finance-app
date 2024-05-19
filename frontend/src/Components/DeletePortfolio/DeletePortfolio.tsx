import { FC, SyntheticEvent } from 'react';
import './DeletePortfolio.css';

interface DeletePortfolioProps {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio: FC<DeletePortfolioProps> = ({ onPortfolioDelete, portfolioValue }: DeletePortfolioProps) => (
  <div>
    <form onSubmit={onPortfolioDelete}>
      <input hidden={true} defaultValue={portfolioValue} />
      <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
        X
      </button>
    </form>
  </div>
);

export default DeletePortfolio;
