import { useState, FC } from 'react';
import './ServicesForm.css';
import { setDiscountSuccess } from '../../../store/wizardFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const ServicesForm: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [couponValue, setCouponValue] = useState<string>('');
  const [discountInfo, setDiscountInfo] = useState<boolean>(false);

  const { discountSuccess } = useSelector(
    (state: RootState) => state.wizardForm,
  );
  const { checkedServices, totalPrice, discount } = useSelector(
    (state: RootState) => state.wizardCalc,
  );

  const showForm = () => {
    setIsOpen(true);
    setDiscountInfo(false);
  };

  const showDiscount = () => {
    setDiscountInfo(true);
    if (couponValue === 'Tokić123') {
      dispatch(setDiscountSuccess(true));
    }
  };

  return (
    <div className="servicePrice">
      {!discountSuccess && (
        <p className="serviceLink" onClick={() => showForm()}>
          Imam kupon
        </p>
      )}
      {isOpen && !discountInfo && checkedServices.length > 0 && (
        <div className="serviceForm">
          <input
            type="text"
            placeholder="Unesite kod kupona ovdje"
            onChange={(e) => setCouponValue(e.target.value)}
          />
          <button onClick={() => showDiscount()}>Primijeni</button>
        </div>
      )}
      {isOpen && !checkedServices.length && (
        <p className="infoMessage">Molimo odaberite uslugu.</p>
      )}
      {couponValue === 'Tokić123' && discountInfo && (
        <div className="serviceDiscount">
          <p className="successMessage">
            Hvala Vam, unijeli ste ispravan kod kupona.
          </p>
          <h4>OSNOVICA: {totalPrice.toFixed(2)} kn</h4>
          <p>Popust (30%): -{discount.toFixed(2)} kn</p>
        </div>
      )}
      {couponValue !== 'Tokić123' && discountInfo && (
        <p className="errorMessage">
          Unijeli ste krivi kod kupona. Pokušajte ponovo.
        </p>
      )}
      {discountSuccess ? (
        <h3>UKUPNO: {(totalPrice - discount).toFixed(2)} kn</h3>
      ) : (
        <h3>UKUPNO: {totalPrice.toFixed(2)} kn</h3>
      )}
    </div>
  );
};

export default ServicesForm;
