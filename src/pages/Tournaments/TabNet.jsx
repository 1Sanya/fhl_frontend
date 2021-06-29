import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';

const TabNet = memo((props) => {
  const [isLoadNet, setIsloadNet] = useState(true);
  const { challongeLink } = props;
  const showLogo = isLoadNet || !challongeLink;

  return (
    <>
      <h2 className="title-line">
        турнирная сетка
      </h2>
      {showLogo && (
      <div className="net-loader">
        <Logo width="80%" height="100%" />
        <span>
          {challongeLink ? 'Сетка загружается...' : 'Сетка отсутствует'}
        </span>
      </div>
      ) }
      <iframe
        src={challongeLink}
        width="100%"
        height="650"
        onLoad={() => setIsloadNet(false)}
        style={{ display: showLogo ? 'none' : 'initial' }}
        title="1"
      />
    </>
  );
});

TabNet.propTypes = {
  challongeLink: PropTypes.string,
};

TabNet.defaultProps = {
  challongeLink: null,
};

export default TabNet;
