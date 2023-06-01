import React from "react";
import { Text, ToastAndroid, Image, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as S from "./styled";

type data = {
  email: string;
  senha: string;
};

export default function Login({ navigation }) {
  const { control, handleSubmit } = useForm();

  const isEmailValid = (email: string) => {
    // Regex para validar o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password: string) => {
    // Regex para validar senha:
    // Pelo menos 8 caracteres
    // Pelo menos 1 letra maiúscula
    // Pelo menos 1 letra minúscula
    // Pelo menos 1 número
    // Pelo menos 1 caractere especial
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const onSubmit = (data: data) => {
    const { email, senha } = data;
    if (!isEmailValid(email) && !isPasswordValid(senha)) {
      const message = "Email e Senha invalidos!";
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }
    if (!isEmailValid(email)) {
      const message = "Email invalido!";
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }
    if (!isPasswordValid(senha)) {
      const message = "Senha invalida!";
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }
    console.log(data); // Você pode manipular o envio do formulário aqui
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoImage source={require("../../assets/urbtech-logo.png")} />
        <Text style={{ fontSize: 15, fontWeight: "400" }}>Acessar conta</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              placeholderTextColor="#000"
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Senha"
              placeholderTextColor="#000"
              secureTextEntry
            />
          )}
          name="senha"
          defaultValue=""
        />
        <S.ButtonSubmit onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: "#98C065", fontWeight: "600", fontSize: 20 }}>
            Entrar
          </Text>
        </S.ButtonSubmit>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Esqueceu sua senha?
        </Text>
        <S.AlignView>
          <S.Line />
          <Text style={{ fontSize: 15, fontWeight: "400" }}>ou</Text>
          <S.Line />
        </S.AlignView>
        <S.SocialButtonGoogle>
          <Image source={require("../../assets/googleicon.png")} />
          <Text>ENTRAR COM GOOGLE</Text>
        </S.SocialButtonGoogle>
        <S.SocialButtonFacebook>
          <Image source={require("../../assets/facebookicon.png")} />
          <Text style={{ color: "#FFF" }}>ENTRAR COM FACEBOOK</Text>
        </S.SocialButtonFacebook>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ fontSize: 15 }}>
            Não tem uma conta?
            <Text style={{ fontSize: 15, color: "#98C065" }}> Inscreva-se</Text>
          </Text>
        </TouchableOpacity>
      </S.LoginContainer>
    </S.Container>
  );
}