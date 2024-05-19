import { FC } from 'react';
import './DesignPage.css';
import Table from '../../Components/Table/Table';
import RatioList from '../../Components/RatioList/RatioList';
import { testIncomeStatementData } from '../../Components/Table/testData';

interface DesignPageProps { }

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage: FC<DesignPageProps> = () => (
  <>
    <h1>Finshark Design Page</h1>
    <h2>This is Finshark's design page, this is where we will house various design aspects of the app</h2>
    <RatioList data={testIncomeStatementData} config={tableConfig} />
    <Table config={testIncomeStatementData} data={tableConfig} />
    <h3>
      Table - Table takes in a configuration object and company data as params. Use the config to style the table
    </h3>
  </>
);

export default DesignPage;
