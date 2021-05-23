import { useRef, FC, ChangeEvent } from 'react';
import './Form.css';
import { setNext, setPrev, setErrorMessage } from '../../store/wizardFormSlice';
import {
  setName,
  setEmail,
  setPhone,
  setMessage,
} from '../../store/wizardDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MainBox from '../../components/mainBox/MainBox';
import ControlsBox from '../../components/controlsBox/ControlsBox';

const Form: FC = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { name, email, phone, message } = useSelector(
    (state: RootState) => state.wizardData,
  );
  const { errorMessage } = useSelector((state: RootState) => state.wizardForm);

  const resetMessageStatus = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length) dispatch(setErrorMessage(false));
    else dispatch(setErrorMessage(true));
  };

  const checkStatus = () => {
    dispatch(setName(nameRef.current!.value));
    dispatch(setEmail(emailRef.current!.value));
    dispatch(setPhone(phoneRef.current!.value));
    dispatch(setMessage(messageRef.current?.value));

    return nameRef.current!.value &&
      emailRef.current!.value &&
      phoneRef.current!.value
      ? dispatch(setNext())
      : dispatch(setErrorMessage(true));
  };

  return (
    <MainBox>
      <h2>Korak 3. Vaši kontakt podaci</h2>

      <div className="formContainer">
        <div className="formTop">
          <input
            type="text"
            placeholder="Ime i prezime*"
            ref={nameRef}
            defaultValue={name}
            onChange={(e) => resetMessageStatus(e)}
          />
          <input
            type="email"
            placeholder="Email adresa*"
            ref={emailRef}
            defaultValue={email}
            onChange={(e) => resetMessageStatus(e)}
          />
        </div>

        <div className="formBottom">
          <input
            type="phone"
            placeholder="Broj telefona*"
            ref={phoneRef}
            defaultValue={phone}
            onChange={(e) => resetMessageStatus(e)}
          />
          <textarea
            cols={20}
            rows={5}
            placeholder="Napomena (opcionalno)"
            ref={messageRef}
            defaultValue={message}
          ></textarea>
        </div>
      </div>

      {errorMessage && (
        <p className="formMessage">
          Molimo ispunite polja označena zvjezdicom (*).
        </p>
      )}

      <ControlsBox>
        <button onClick={() => dispatch(setPrev())}>Nazad</button>
        <button onClick={() => checkStatus()}>Dalje</button>
      </ControlsBox>
    </MainBox>
  );
};

export default Form;
