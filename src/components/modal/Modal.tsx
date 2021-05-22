import { FC } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
import { setModal } from '../../store/wizardFormSlice';
import { useDispatch } from 'react-redux';
import PageTemplate from '../pageTemplate/PageTemplate';

const portal = document.getElementById('portal');

const Modal: FC = () => {
  const dispatch = useDispatch();

  return portal
    ? ReactDom.createPortal(
        <>
          <div
            className="modalOverlay"
            onClick={() => dispatch(setModal(false))}
          />
          <div className="modal">
            <button
              onClick={() => dispatch(setModal(false))}
              className="modalBtn"
            >
              ❌
            </button>
            <PageTemplate />
          </div>
        </>,
        portal,
      )
    : null;
};

export default Modal;
