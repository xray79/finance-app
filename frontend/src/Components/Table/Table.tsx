import { FC } from 'react';
import './Table.css';

interface TableProps {
  config: any;
  data: any;
}

const Table: FC<TableProps> = ({ config, data }) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return (
            <td className='p-4 ml-4 mt-4 mb-4 whitespace-nowrap text-sm font-normal text-gray-900'>
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    )
  })

  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className='p-4 text-left font-medium text-xs text-gray-500 uppercase tracking-wider'
        key={config.label}
      >
        {config.label}
      </th>
    )
  })

  return (
    <div className="bg-white shadow rouded-lg overflow-scroll p-4 mt-4 sm:p-6 xl:p-8 ">
      <table>
        <thead className='min-w-full divide-y divide-gray-200 m-5'>
          {renderedHeaders}
        </thead>
        <tbody>
          {renderedRows}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
