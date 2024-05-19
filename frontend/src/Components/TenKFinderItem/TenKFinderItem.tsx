import { FC } from 'react';
import './TenKFinderItem.css';
import { CompanyTenK } from '../../company';
import { Link } from 'react-router-dom';

interface TenKFinderItemProps {
  tenK: CompanyTenK;
}

const TenKFinderItem: FC<TenKFinderItemProps> = ({ tenK }) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear();

  return <Link reloadDocument to={tenK.finalLink} type='button' className='inline-flex items-center p-4 mr-1 text-md text-white bg-lightGreen rounded-md'> 10K - {tenK.symbol} - {fillingDate}</Link>
};

export default TenKFinderItem;
