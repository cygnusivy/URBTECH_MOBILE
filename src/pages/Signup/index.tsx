import React, { useContext } from "react";
import { Text, ToastAndroid, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as S from "./styled";
import { UserContext } from "../../contexts/UserContext";

type data = {
  nome: string;
  email: string;
  senha: string;
  confirmSenha: string;
};

export default function Signup({ navigation }) {
  const { control, handleSubmit } = useForm();
  const { registerUser } = useContext(UserContext);

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

  const onSubmit = async (data: data) => {
    const { email, senha, nome, confirmSenha } = data;

    if (senha !== confirmSenha) {
      const message = "As senhas não são iguais";
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }

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
    const response = await registerUser(
      data.nome,
      data.email,
      data.senha,
      data.confirmSenha
    );

    if (response != 201) {
      ToastAndroid.show(
        "Não foi possivel criar sua conta!",
        ToastAndroid.SHORT
      );
      return;
    }
    ToastAndroid.show("Conta criado com sucesso!", ToastAndroid.SHORT);
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoImage source={require("../../assets/urbtech-logo.png")} />
        <Text style={{ fontSize: 15, fontWeight: "400" }}>Criar Conta</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome"
              placeholderTextColor="#000"
            />
          )}
          name="nome"
          defaultValue=""
        />
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
            />
          )}
          name="senha"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Repita sua senha"
              placeholderTextColor="#000"
              secureTextEntry
            />
          )}
          name="confirmSenha"
          defaultValue=""
        />
        <S.ButtonSubmit onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: "#98C065", fontWeight: "600", fontSize: 20 }}>
            Criar conta
          </Text>
        </S.ButtonSubmit>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontSize: 15 }}>
            Já possui uma conta?
            <Text style={{ fontSize: 15, color: "#98C065" }}> Entrar</Text>
          </Text>
        </TouchableOpacity>
      </S.LoginContainer>
    </S.Container>
  );
}
