import styled from 'styled-components';

const Box = styled.div`
min-width: 250px;
padding: 40px;
background: white;
border-radius: 15px;

.display {
  min-width: 250px;
  font-size: 1.4rem;
  padding: 8px;
  text-align: right;
}

.btn {
  min-width: 25%;
  font-size: 1.2rem;
  padding: 12px;
  border: 1px solid #fff;
  cursor: pointer;
  background-color: rgba(122,122,122,0.4);
}

.btn:hover{
  background-color: rgba(222,222,123,0.5);
}

.equal{
  background-color: rgba(222,222,123,0.5);
}

.equal:hover{
  background-color: aquamarine;
}

@media (max-width: 600px){

  .display {
  max-width: 250px;
  }
}
`;

export default Box;
