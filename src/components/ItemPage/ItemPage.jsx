import React, {useState} from 'react';

import {Text, ScrollView, View, TouchableHighlight} from 'react-native';
import { Font } from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser} from '../../actions/listAction';

import {itemPageCSS} from './ItemPageCss';
/**
 * Страница 3 - График
 * @param {Object} item param0 
 * @param {Object} route param1
 * @param {Object} navigation param2
 * @param {Function} setUserName param2
 */
const ItemPage =({item, route, navigation, setUserName}) =>{
    const [backActive, setBackActive]=useState(false);
    const [homeActive, setHomeActive]=useState(false);
    const handleBtnBack = (e) => {
        e.preventDefault();
        navigation.goBack();
    };
    const handleBtnHome = (e) => {
        e.preventDefault();
        setUserName('');
        navigation.navigate('Login');
    };

    return(
        <View style={itemPageCSS.item__container}>
            <ScrollView>
                <View><Text style={itemPageCSS.item__title}>{item.title}</Text></View>
                <View><Text style={itemPageCSS.item__description}>{item.description}</Text></View>
            </ScrollView>
            <View style={itemPageCSS.item__btnsField}>
                <TouchableHighlight
                    style={itemPageCSS.item__btn} 
                    underlayColor={"#bc0600"}
                    onHideUnderlay={()=>{setBackActive(false)}}
                    onShowUnderlay={()=>{setBackActive(true)}}
                    onPress={handleBtnBack}>
                    <Text style={[itemPageCSS.item__btn_font, backActive && {"color": "white"}]} >
                        Назад
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={itemPageCSS.item__btn} 
                    underlayColor={"#bc0600"}
                    onHideUnderlay={()=>{setHomeActive(false)}}
                    onShowUnderlay={()=>{setHomeActive(true)}} onPress={handleBtnHome}>
                    <Text style={[itemPageCSS.item__btn_font, homeActive && {"color": "white"}]}>Выйти из аккаунта</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const mapStateToProps=({listReducer}, props)=>{
    const idx = props.route.params.idx;
    return {
        item: listReducer.list[idx],
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({setUser}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        item: stateProps.item,
        route: props.route,
        navigation: props.navigation,
        setUserName: (login) => dispatchProps.setUser(login),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ItemPage);
