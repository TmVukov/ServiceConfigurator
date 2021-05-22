import { FC } from 'react';
import './ControlsBox.css'

const ControlsBox: FC = ({ children }) => {
  return <div className="controlsBox">{children}</div>;
};

export default ControlsBox;
