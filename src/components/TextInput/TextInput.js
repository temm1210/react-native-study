import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FONT_COLOR } from 'src/constatns/Styles/Color';
import { LOGIN_WIDTH, LOGIN_HEIGHT } from 'src/constatns/Styles/Size';

const TextInputField = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px;
  width: ${LOGIN_WIDTH};
  height: ${LOGIN_HEIGHT};
  margin-bottom: 15px;
  border-radius: ${props => (props.borderRadius ? 30 : 0)};
  border: ${props => (props.border ? '1px solid rgba(255, 255, 255, 0.9)' : 0)};
`;

const IconWrapper = styled.View`
  padding-left: 10px;
  flex: 1;
`;
const InputWrapper = styled.View`
  padding-left: 7px;
  flex: 8;
`;

const TextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholderTextColor: FONT_COLOR,
})`
  padding: 2px;
  color: ${FONT_COLOR};
`;

const TextInputForm = ({ borderRadius, border, iconProps, textInputProps }) => (
  <TextInputField borderRadius={borderRadius} border={border}>
    {iconProps ? (
      <IconWrapper>
        <Icon {...iconProps} />
      </IconWrapper>
    ) : null}
    <InputWrapper>
      <TextInput {...textInputProps} />
    </InputWrapper>
  </TextInputField>
);
// PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
TextInputForm.propTypes = {
  borderRadius: PropTypes.bool,
  border: PropTypes.bool,
  iconProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  textInputProps: PropTypes.shape({
    ref: PropTypes.object,
    placehoder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    textContentType: PropTypes.string,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
    onSubmitEditing: PropTypes.func,
  }),
};

TextInputForm.defaultProps = {
  borderRadius: false,
  border: false,
  iconProps: null,
  textInputProps: null,
};

export default TextInputForm;
