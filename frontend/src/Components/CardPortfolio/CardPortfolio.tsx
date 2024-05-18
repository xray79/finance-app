import { FC, SyntheticEvent } from 'react';
import './CardPortfolio.css';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface CardPortfolioProps {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: FC<CardPortfolioProps> = ({ portfolioValue, onPortfolioDelete }: CardPortfolioProps) => (
  <>
    <h4>{portfolioValue}</h4>
    <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
  </>
);

export default CardPortfolio;
