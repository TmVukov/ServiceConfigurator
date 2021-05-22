import { FC } from 'react';
import './Review.css';
import { setNext, setPrev, setPage } from '../../store/wizardFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MainBox from '../../components/mainBox/MainBox';
import ControlsBox from '../../components/controlsBox/ControlsBox';

const Review: FC = () => {
  const dispatch = useDispatch();
  const { discountSuccess } = useSelector(
    (state: RootState) => state.wizardForm,
  );
  const { brand, name, email, phone, message } = useSelector(
    (state: RootState) => state.wizardData,
  );
  const { checkedServices, prices, totalPrice, discount } = useSelector(
    (state: RootState) => state.wizardCalc,
  );

  return (
    <MainBox>
      <h2>Korak 4. Pregled i potvrda vašeg odabira</h2>
      <p className="reviewInfo">
        Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko
        želite promijeniti neki od podataka, možete pritisnuti gumb za
        uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili
        ispravnost svojih podataka pritisnite gumb 'Pošalji' na dnu, za slanje
        upita za servis.
      </p>
      <div className="reviewContainer">
        <div className="reviewBrand">
          <div className="reviewTop">
            <h3>MODEL VOZILA</h3>
            <button onClick={() => dispatch(setPage(3))}>Uredi</button>
          </div>
          <div className="reviewBottom">
            <h5>{brand}</h5>
          </div>
        </div>

        <div className="reviewServices">
          <div className="reviewTop">
            <h3>ODABRANE USLUGE</h3>
            <button onClick={() => dispatch(setPage(2))}>Uredi</button>
          </div>
          <div className="reviewServicesInfo">
            <div className="revievBottomServices">
              {checkedServices.map((service) => (
                <h5 key={service}>{service.split('(')[0]}</h5>
              ))}
            </div>
            <div className="reviewBottomPrice">
              {prices.map((price) => (
                <h5 key={price}>{price} kn</h5>
              ))}
              {discountSuccess && <h5>Popust (30%): -{discount} kn</h5>}
              {discountSuccess ? (
                <h5>UKUPNO: {(totalPrice - discount).toFixed(2)} kn</h5>
              ) : (
                <h5>UKUPNO: {totalPrice.toFixed(2)} kn</h5>
              )}
            </div>
          </div>
        </div>

        <div className="reviewContacts">
          <div className="reviewTop">
            <h3>KONTAKT PODACI</h3>
            <button onClick={() => dispatch(setPage(1))}>Uredi</button>
          </div>
          <div className="reviewBottom">
            <div className="reviewContactsInfo">
              <h5>Ime i prezime: {name}</h5>
              <h5>Email adresa: {email}</h5>
              <h5>Broj telefona: {phone}</h5>
              <h5>Napomena: {message}</h5>
            </div>
          </div>
        </div>
      </div>
      <ControlsBox>
        <button onClick={() => dispatch(setPrev())}>Nazad</button>
        <button onClick={() => dispatch(setNext())}>Pošalji</button>
      </ControlsBox>
    </MainBox>
  );
};

export default Review;
