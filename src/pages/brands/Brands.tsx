import { FC, ChangeEvent } from 'react';
import './Brands.css';
import { setNext, setErrorMessage } from '../../store/wizardFormSlice';
import { setBrandName } from '../../store/wizardDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MainBox from '../../components/mainBox/MainBox';
import ControlsBox from '../../components/controlsBox/ControlsBox';

const Brands: FC = () => {
  const dispatch = useDispatch();
  const { brand } = useSelector((state: RootState) => state.wizardData);
  const { errorMessage } = useSelector((state: RootState) => state.wizardForm);

  const carBrands = [
    'Peugeot',
    'Volkswagen',
    'Citroen',
    'Audi',
    'Bmw',
    'Seat',
    'Alfa Romeo',
    'Kia',
    'Hyundai',
    'Toyota',
  ];

  const getStatus = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      dispatch(setBrandName(target.value));
      dispatch(setErrorMessage(false));
    }
  };

  const checkStatus = () => {
    return brand ? dispatch(setNext()) : dispatch(setErrorMessage(true));
  };

  return (
    <MainBox>
      <h2>Korak 1. Odaberite proizvođača vašeg vozila</h2>

      <div className="brandContainer">
        {carBrands.map((car) => (
          <div className="brandNames" key={car}>
            <input
              type="radio"
              name="cars"
              value={car}
              checked={car === brand}
              onChange={(e) => getStatus(e)}
            />
            <label htmlFor="cars">{car}</label>
          </div>
        ))}
      </div>

      {errorMessage && !brand && (
        <p className="brandMessage">Molimo odaberite marku vašeg vozila.</p>
      )}

      <ControlsBox>
        <button onClick={() => checkStatus()}>Dalje</button>
      </ControlsBox>
    </MainBox>
  );
};

export default Brands;
