import { FC } from 'react';
import './PageTemplate.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Brands from '../../pages/brands/Brands';
import Services from '../../pages/services/Services';
import Form from '../../pages/form/Form';
import Review from '../../pages/review/Review';
import Final from '../../pages/final/Final';

const PageTemplate: FC = () => {
  const { step } = useSelector((state: RootState) => state.wizardForm);

  const renderPages = () => {
    switch (step) {
      case 1:
        return <Brands />;
      case 2:
        return <Services />;
      case 3:
        return <Form />;
      case 4:
        return <Review />;
      case 5:
        return <Final />;
    }
  };

  return (
    <div className="template">
      <h3>Konfigurator servisa</h3>
      {renderPages()}
    </div>
  );
};

export default PageTemplate;
