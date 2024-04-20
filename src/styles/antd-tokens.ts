import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  components: {
    Form: {
      Item: {
        labelColor: '#ffffff',
      }
    },
    Input: {
      colorText: '#ffffff',
      colorTextPlaceholder: '808080',
      paddingBlock: '11px 16px',
      activeBorderColor: '#ffffff',
      labelColor: '#ffffff',
      colorBgContainer: '#282828',
      colorBorder: '#808080',
      hoverBorderColor: '#ffffff',
    },
    Select: {
      optionSelectedColor: '808080',
      colorText: '#ffffff',
      labelColor: '#ffffff',
      colorBgContainer: '#282828',
      colorBorder: '#808080',
      colorBgElevated: '#282828',
    },
    Button: {
      colorPrimaryActive: '#000000',
      colorPrimaryHover: '#424242',
    },
  },
};

export { theme };