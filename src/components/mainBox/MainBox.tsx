import { FC } from 'react';
import './MainBox.css'

const MainBox: FC = ({ children }) => {
  return <div className="mainBox">{children}</div>;
};

export default MainBox;
