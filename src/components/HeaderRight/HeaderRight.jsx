import React from 'react';

import {Text} from 'react-native';
import { Font } from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * Компонент отображения имени пользователя в правой части заголовка страниц 2 и 3
 * @param {String} userName param0 
 */
const HeaderRight =({userName}) =>{
    return(
        <Text style={{color: 'white', marginRight: 20}}>
            {userName} {"  "}
            <Icon name='user' style={{color: 'white', padding: 20, fontSize: 20, margin: 30}}/> 
        </Text>
    )
}

const mapStateToProps=({listReducer}, props)=>{
    return {
        userName: listReducer.userName
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        userName: stateProps.userName
       };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HeaderRight);
