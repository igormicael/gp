import styled from 'styled-components';

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
  }
`;

export const Status = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  margin: 3px;
`;
