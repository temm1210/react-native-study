import React, { useRef } from 'react';
import { ICON_LARGE } from 'src/constatns/Styles/Size';
import { FONT_COLOR } from 'src/constatns/Styles/Color';
import TextInput from 'src/components/TextInput';

export const LoginFields = () => {
  const passwordRef = useRef(null);
  const fields = [
    {
      id: 1,
      icon: {
        name: 'user',
        size: ICON_LARGE,
        color: FONT_COLOR,
      },
      textInput: {
        textContentType: 'username',
        keyboardType: 'email-address',
        placeholder: 'Email',
        returnKeyType: 'next',
        onSubmitEditing: () => passwordRef.current.focus(),
      },
    },
    {
      id: 2,
      icon: {
        name: 'lock',
        size: ICON_LARGE,
        color: FONT_COLOR,
      },
      textInput: {
        ref: passwordRef,
        placeholder: 'Password',
        secureTextEntry: true,
        textContentType: 'password',
        returnKeyType: 'done',
      },
    },
  ];

  return fields.map(field => (
    <TextInput
      key={field.id}
      borderRadius
      border
      iconProps={field.icon}
      textInputProps={field.textInput}
    />
  ));
};

export default LoginFields;
