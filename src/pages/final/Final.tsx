import { FC } from 'react';
import './Final.css';
import { setModal } from '../../store/wizardFormSlice';
import { useDispatch } from 'react-redux';

const Final: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="final">
      <h2>Vaša prijava je uspješno poslana!</h2>
      <p>
        Vaša prijava je uspješno poslana. Kontaktirat ćemo vas u najkraćem
        mogućem roku.
      </p>
      <p>Zahvaljujemo na povjerenju.</p>
      <button onClick={() => dispatch(setModal(false))}>Zatvori</button>
    </div>
  );
};

export default Final;
