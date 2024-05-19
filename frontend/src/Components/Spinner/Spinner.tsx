import { FC } from 'react';
import './Spinner.css';
import { ClipLoader } from 'react-spinners';

interface SpinnerProps {
  isLoading?: boolean;

}

const Spinner: FC<SpinnerProps> = ({ isLoading = true, }) => (
  <>
    <div id='loading-spinner'>
      <ClipLoader
        color='#36d7b7'
        loading={isLoading}
        size={35}
        aria-label='loading-spinner'
        data-testid='loader'
      />
    </div>
  </>
);

export default Spinner;
