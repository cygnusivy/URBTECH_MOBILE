import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #161b31;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.View`
  width: 92%;
  height: 80%;
  border-radius: 5px;
  gap: 15px;
  align-items: center;
  background-color: #f3fce7;
`;
export const LogoImage = styled.Image`
  width: 158px;
  height: 155px;
`;
export const Input = styled.TextInput`
  background-color: rgba(4, 12, 51, 0.22);
  padding-left: 12px;
  border-radius: 17px;
  width: 82%;
  height: 44px;
  color: #000;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  width: 82%;
  height: 44px;
  background-color: #161b31;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  border-width: 1px;
  border-color: #040c33;
  width: 30%;
`;
export const AlignView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const SocialButtonGoogle = styled.TouchableOpacity`
  background-color: rgba(4, 12, 51, 0.13);
  border-radius: 26px;
  justify-content: center;
  align-items: center;
  width: 82%;
  height: 44px;
  gap: 10px;
  flex-direction: row;
`;
export const SocialButtonFacebook = styled.TouchableOpacity`
  background-color: #3b5998;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
  width: 82%;
  height: 44px;
  gap: 10px;
  flex-direction: row;
`;
