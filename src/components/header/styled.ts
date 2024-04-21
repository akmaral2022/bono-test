import { Button } from "antd";
import styled from "styled-components";

export const ConnectButton = styled(Button)`
&.ant-btn {
  width: 200px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ##282828 !important;  
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
  }


  &:active {
    background-color: #111111 !important; 
    color: #ffffff !important
  }
}
`;