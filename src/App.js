import React from 'react';
import GlobalStyles, { ContainerModal } from './styles/GlobalStyles';
import Calc from './components/pages/smallCalc/index';

const App = function () {
  return (
    <ContainerModal>
      <GlobalStyles />
      <Calc />
    </ContainerModal>
  );
};

export default App;
