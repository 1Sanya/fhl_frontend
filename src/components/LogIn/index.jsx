import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { hideModal } from '../../actions/home';
import { loginRequest } from '../../actions/auth';
import './index.css';
import CONSTANTS from '../../constants';

const LogInModal = () => {
  const home = useSelector((state) => state.home);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  const submitLoginForm = (event) => {
    event.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  return (
    <Modal
      isOpen={home.showModal}
      appElement={document.querySelector('#root')}
      onRequestClose={() => handleCloseModal()}
      closeTimeoutMS={500}
      style={{
        overlay: {
          backgroundColor: 'rgba(28, 34, 68, 0.5)',
          zIndex: 1050,
        },
        content: {
          maxWidth: '630px',
          maxHeight: '375px',
          background: '#3D3F51',
          border: '1px solid rgba(0,0,0,.2)',
          borderRadius: '.3rem',
          padding: 0,
          margin: 'auto',
        },
      }}
    >
      <div className="popup__header">
        <h5 className="modal-title popup__title">
          ВХОД В АККАУНТ
        </h5>
        <button type="button" className="close" onClick={() => handleCloseModal()}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1659 7.50083L14.4461 3.21805C14.6215 3.04323 14.7607 2.8355 14.8557 2.60677C14.9507 2.37804 14.9996 2.13281 14.9996 1.88515C14.9996 1.63748 14.9507 1.39225 14.8557 1.16352C14.7607 0.934795 14.6215 0.727064 14.4461 0.552243C14.2713 0.376814 14.0636 0.23762 13.8348 0.142645C13.6061 0.0476689 13.3609 -0.0012207 13.1132 -0.0012207C12.8655 -0.0012207 12.6203 0.0476689 12.3916 0.142645C12.1629 0.23762 11.9551 0.376814 11.7803 0.552243L7.5001 4.83245L3.21732 0.552243C3.0425 0.376814 2.83477 0.23762 2.60604 0.142645C2.37731 0.0476689 2.13208 -0.0012207 1.88442 -0.0012207C1.63675 -0.0012207 1.39152 0.0476689 1.16279 0.142645C0.934063 0.23762 0.726331 0.376814 0.55151 0.552243C0.376081 0.727064 0.236888 0.934795 0.141912 1.16352C0.0469365 1.39225 -0.00195312 1.63748 -0.00195312 1.88515C-0.00195313 2.13281 0.0469365 2.37804 0.141912 2.60677C0.236888 2.8355 0.376081 3.04323 0.55151 3.21805L4.83172 7.50083L0.55151 11.781C0.198002 12.1345 -0.00059706 12.614 -0.000597055 13.1139C-0.000597049 13.6139 0.198002 14.0933 0.55151 14.4468C0.905019 14.8004 1.38448 14.999 1.88442 14.999C2.38435 14.999 2.86381 14.8004 3.21732 14.4468L7.5001 10.1666L11.7803 14.4468C12.1338 14.8004 12.6133 14.999 13.1132 14.999C13.6131 14.999 14.0926 14.8004 14.4461 14.4468C14.7996 14.0933 14.9982 13.6139 14.9982 13.1139C14.9982 12.614 14.7996 12.1345 14.4461 11.781L10.1659 7.50083Z" fill="white" />
          </svg>
        </button>
      </div>
      <form onSubmit={submitLoginForm}>
        <div className="popup__body">
          <div className="form-group mb-3">
            <input
              type="text"
              name="user_email"
              placeholder="Логин"
              className="form-control input popup__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="text-danger" />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="user_password"
              placeholder="Пароль"
              className="form-control input popup__input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="text-danger" />
          </div>
        </div>
        <div className="popup__footer">
          <div className="popup__label">
            {'Нет аккаунта? '}
            <Link
              to={CONSTANTS.REGISTRATION}
              onClick={() => handleCloseModal()}
              className="popup__link"
            >
              Зарегистрироваться
            </Link>
          </div>
          <div className="popup__btn-group">
            <button type="submit" className="button btn popup__btn">
              Войти
            </button>
          </div>
          <div className="popup__label">
            <Link
              className="popup__link"
              to={CONSTANTS.FORGOT}
              onClick={() => handleCloseModal()}
            >
              Забыл пароль
            </Link>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default memo(LogInModal);