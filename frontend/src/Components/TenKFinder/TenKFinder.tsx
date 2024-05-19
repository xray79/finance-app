import { FC, useEffect, useState } from 'react';
import './TenKFinder.css';
import { getTenK } from '../../api';
import { CompanyTenK } from '../../company';
import TenKFinderItem from '../TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

interface TenKFinderProps {
  ticker: string;
}

const TenKFinder: FC<TenKFinderProps> = ({ ticker }) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      setCompanyData(value?.data);
    };
    getTenKData();
  }, [ticker]);

  return <div className="rounded-md inline-flex shadow-sm m-4">
    {companyData ? (
      companyData?.slice(0, 5).map((tenK, i) => { return <TenKFinderItem tenK={tenK} key={i} /> })) : (<Spinner />)
    }
  </div>
};

export default TenKFinder;
