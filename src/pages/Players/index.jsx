import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';
import { getPlayers } from '../../actions/players';
import Player from './player';

const Players = memo(() => {
  const dispatch = useDispatch();
  const { players, error, loading } = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getPlayers());
  }, []);
  if (loading) {
    return <div>Загружается...</div>;
  }
  if (error) {
    return <div>Ошибочка</div>;
  }

  function splitString(stringToSplit) {
    return stringToSplit.split(' ');
  }

  players.forEach(
    (e) => { if (e.additional_roles) { e.additional_roles = splitString(e.additional_roles); } },
  );

  const wholePlayers = players.map((p) => (
    <Player
      id={p.id}
      nickname={p.nick_name}
      rank={p.rank}
      main_role={p.main_role}
      additional_roles={p.additional_roles}
    />
  ));

  return (
    <>
      <div className="main">
        <Header isShowNavigation />
        <div className="container">
          <h2 className="title-line">
            Игроки
          </h2>
          <div className="players">
            <div className="players__column">
              <div className="players__column__item-first">№</div>
              <div className="players__column__item-first">Ник</div>
            </div>
            <div className="players__column">
              <div className="players__column__item-second">Ранг</div>
              <div className="players__column__item-second">Позиция</div>
              <div className="players__column__item-second">Доп</div>
            </div>
          </div>
          {wholePlayers}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Players;
