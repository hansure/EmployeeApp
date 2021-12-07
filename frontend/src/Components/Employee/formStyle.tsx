import styled from 'styled-components'

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 8px;
  justifycontent: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  margin-left: 80px;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const MutedLink = styled.a`
  font-size: 16px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 800;
  text-decoration: none;
`

export const BoldLink = styled.a`
  font-size: 22px;
  color: rgb(241, 196, 15);
  font-weight: 1000;
  text-decoration: none;
  margin: 0 4px;
`

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 15px;

  &::placeholder {
    color: rgba(20, 20, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(241, 196, 15);
  }
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 15px;
  transition: all, 24ems ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  &:hover {
    filter: brightness(1o8);
  }
`
