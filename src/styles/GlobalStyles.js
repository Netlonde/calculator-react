import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif ;
}

html, body, #root {
  width: 100%;
  height: 100%
}
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(222,222,123,1);
`;
