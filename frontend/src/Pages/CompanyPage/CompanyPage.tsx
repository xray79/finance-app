import { FC, useEffect, useState } from 'react';
import './CompanyPage.css';
import { useParams } from 'react-router';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import TenKFinder from '../../Components/TenKFinder/TenKFinder';

interface CompanyPageProps { }

const CompanyPage: FC<CompanyPageProps> = () => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Company Price" subTitle={"$" + company.price.toString()} />
            <Tile title="Company Sector" subTitle={company.sector} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toFixed(3).toString()} />
            <TenKFinder ticker={company.symbol} />
            <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
};

export default CompanyPage;
