import { FC } from 'react';
import './App.css';
import { setModal } from './store/wizardFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/modal/Modal';
import { RootState } from './store/store';

const App: FC = () => {
  const dispatch = useDispatch();

  const { modal } = useSelector((state: RootState) => state.wizardForm);

  return (
    <div className="App">
      <button onClick={() => dispatch(setModal(true))}>
        Pokreni konfigurator
      </button>

      {modal ? <Modal /> : null}
    </div>
  );
};

export default App;
