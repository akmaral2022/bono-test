import { Form } from "antd"
import { StyledButton, StyledForm, StyledInput, StyledSelect, StyledTextArea } from "./styled";
import { FormValues, timeOptions } from "../../../types/reservation";
import { emailRules } from "../../../types/rules";

export const ResevationForm = () => {
  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: string) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <StyledForm
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={() => onFinish}
      onFinishFailed={() => onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="ФИО клиента"
        name="username"
      >
        <StyledInput autoComplete="name" />
      </Form.Item>
      <Form.Item
        label="email"
        name="useremail"
        rules={emailRules}
      >
        <StyledInput autoComplete="email" />
      </Form.Item>
      <Form.Item
        label="Номер клиента"
        name="usernumber"
      >
        <StyledInput autoComplete="number" />
      </Form.Item>
      <Form.Item label="Время нахождения">
        <StyledSelect options={timeOptions} />
      </Form.Item>
      <Form.Item
        label="Время брони"
        name="Reservtime"
      >
        <StyledInput />
      </Form.Item>
      <Form.Item
        label="Количество гостей"
        name="Guestsnumb"
      >
        <StyledInput />
      </Form.Item>
      <Form.Item
        label="Коментарий"
      >
        <StyledTextArea
          rows={4} placeholder="Ваш комментарий" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <StyledButton type="primary" htmlType="submit">
          Submit
        </StyledButton>
      </Form.Item>
    </StyledForm>
  )
}