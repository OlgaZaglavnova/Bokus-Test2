
import React, {useState} from 'react';
import {Text} from 'react-native';
import { Container, Form, Item, Label, Input, Content, Button} from 'native-base';
import { Font } from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser} from '../../actions/listAction';

import {loginPageCSS} from './LoginPageCss';
/**
 * Стартовая страница - Вход в личный кабинет
 * @param {String} userName param0 
 * @param {String} userPassword param1 
 * @param {Object} navigation param2
 * @param {Function} setUserName param3
 */
const LoginPage = ({userName, userPassword, navigation, setUserName}) => {
        const [login, setLogin] = useState(userName);
        const [password, setPassword] = useState(userPassword);
    
        const handleSubmit =(e) => {
            e.preventDefault();
            setUserName(login);
            setLogin('');
            setPassword('');
            navigation.navigate('List', {userName: login});
        }
        return (
            <Container style={loginPageCSS.container}>
            <Content style={loginPageCSS.main}>
                <Text style={loginPageCSS.main__title}>Вход</Text>
                <Text style={loginPageCSS.main__description}>Согласно классификации М.Вебера, форма политического сознания предсказуема.
                    Политическая психология, согласно традиционным представлениям, символизирует системный культ личности</Text>
                <Form>
                    <Item floatingLabel>
                    <Label>Логин</Label>
                    <Input onChange={(e)=>{
                        setLogin(e.nativeEvent.text);
                        }} value={login}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Пароль</Label>
                        <Input onChange={({nativeEvent: {text}})=>setPassword(text)} value={password} secureTextEntry={true} />
                    </Item>
                    <Button style={loginPageCSS.login__submitBtn} onPress={handleSubmit}>
                        <Text style={loginPageCSS.login__submitBtnText}> Войти </Text>
                    </Button>
                </Form>
            </Content> 
          </Container> 
            );
}


const mapStateToProps=({listReducer}, props)=>{
    return {
        userName: listReducer.userName,
        userPassword: "",
        props
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({setUser}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        userName: stateProps.userName,
        userPassword: stateProps.userPassword,
        navigation: props.navigation,
        setUserName: (login) => dispatchProps.setUser(login),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginPage);



