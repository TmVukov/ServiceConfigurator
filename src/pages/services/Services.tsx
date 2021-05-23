import { FC, ChangeEvent } from 'react';
import './Services.css';
import { setNext, setPrev, setErrorMessage } from '../../store/wizardFormSlice';
import { setService, removeService } from '../../store/wizardCalcSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ServicesForm from './servicesForm/ServicesForm';
import MainBox from '../../components/mainBox/MainBox';
import ControlsBox from '../../components/controlsBox/ControlsBox';

const Services: FC = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state: RootState) => state.wizardForm);
  const { checkedServices } = useSelector(
    (state: RootState) => state.wizardCalc,
  );

  const serviceNames = [
    'Zamjena ulja i filtera (500kn)',
    'Promjena pakni (450kn)',
    'Promjena guma (100kn)',
    'Servis klima uređaja (299kn)',
    'Balansiranje guma (50kn)',
    'Zamjena ulja u kočnicama (229kn)',
  ];
  console.log(checkedServices)

  const getStatus = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(setService(target.value));
      dispatch(setErrorMessage(false));
    }     
    else {
      dispatch(removeService(target.value));
      dispatch(setErrorMessage(true));      
    }
  };

  const checkStatus = () => {
    return checkedServices.length > 0
      ? dispatch(setNext())
      : dispatch(setErrorMessage(true));
  };

  return (
    <MainBox>
      <h2>Korak 2. Odaberite jednu ili više usluga</h2>

      <div className="serviceContainer">
        {serviceNames.map((service) => (
          <div className="serviceNames" key={service}>
            <input
              type="checkbox" 
              name="services"
              value={service}
              checked={checkedServices.includes(service)}
              onChange={(e) => getStatus(e)}
            />
            <label htmlFor="services">{service}</label>
          </div>
        ))}
      </div>

      <ServicesForm />

      {errorMessage && checkedServices.length === 0 && (
        <p className="serviceMessage">Molimo odaberite uslugu.</p>
      )}

      <ControlsBox>
        <button onClick={() => dispatch(setPrev())}>Nazad</button>
        <button onClick={() => checkStatus()}>Dalje</button>
      </ControlsBox>
    </MainBox>
  );
};

export default Services;
