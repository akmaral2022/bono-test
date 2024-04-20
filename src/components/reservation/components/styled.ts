import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

export const SectionTitle = styled.div`
font-weight: 700;
font-size: 48px;
color: #ffffff;
line-height: 53px;
margin-bottom: 70px;
`
export const StyledForm = styled(Form)`
  background: #111111;
  padding: 2%;
  max-width: 600px;
  width: 428px;
  height: fit-content;
  border-radius: 50px;
  
  .ant-form-item {
    width: 100%;
    min-height: 58px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
  }

  .ant-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    flex-direction: column;
    min-width: 0;
}

.ant-col {
  width: 100%;
  max-width: 100% !important; 
}

.ant-form-item .ant-form-item-label {
  text-align: start;
}
  .ant-form-item-label >label {
    opacity: 60%;
    color: #ffffff !important;
  }

  .ant-form-item-control-input {
    width: 100%;
  }

  .ant-col-offset-8{
    margin-inline-start: 0 !important;
  }

`;

export const StyledInput = styled(Input)`
  border-radius: 16px;
  
`;

export const StyledSelect = styled(Select)`
height: 48px;
border-radius: 16px !important;

.ant-select-selector {
  background-color: #282828;
  border-color: #808080;
  color: #ffffff;
  border-radius: 16px !important;
}
.ant-select-selector:focus {
  border-color: #ffffff !important;
}


.ant-select-arrow {
  color: #ffffff;
}
`;

export const StyledTextArea = styled(TextArea)`
  height: fit-content;
  border-radius: 16px;
`;

export const StyledButton = styled(Button)`
  margin-top: 60px;
  width: 100%;
  background: #282828;
  border-radius: 50px;
`;