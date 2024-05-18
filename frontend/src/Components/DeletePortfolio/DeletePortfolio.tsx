import React, { FC, SyntheticEvent } from 'react';
import './DeletePortfolio.css';

interface DeletePortfolioProps {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio: FC<DeletePortfolioProps> = ({ onPortfolioDelete, portfolioValue }: DeletePortfolioProps) => (
  <div>
    <form onSubmit={onPortfolioDelete}>
      <input hidden={true} defaultValue={portfolioValue} />
      <button>X</button>
    </form>
  </div>
);

export default DeletePortfolio;
