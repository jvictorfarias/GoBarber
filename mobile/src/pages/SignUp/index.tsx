import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="E-mail" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="senha" icon="lock" placeholder="Senha" />

            <Button onPress={() => console.log('deu')}>Criar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
