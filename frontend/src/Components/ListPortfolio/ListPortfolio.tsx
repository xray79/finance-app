import { FC, SyntheticEvent } from 'react';
import './ListPortfolio.css';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { v4 as uuidv4 } from "uuid"

interface ListPortfolioProps {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio: FC<ListPortfolioProps> = ({ portfolioValues, onPortfolioDelete }: ListPortfolioProps) => (
  <>
    <h3>My Portfolio</h3>
    <ul>
      {portfolioValues &&
        portfolioValues.map((portfolioValue) => {
          return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} key={uuidv4()} />
        })
      }
    </ul>
  </>
);

export default ListPortfolio;
