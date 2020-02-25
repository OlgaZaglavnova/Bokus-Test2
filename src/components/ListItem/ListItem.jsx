import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import { Font } from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {listItemCSS} from './ListItemCss';
/**
 * Компонент отрисовки отдельного элемента списка на странице 2 "Список"
 * @param {Object} item param0 - Элемент массива данных, объект {id, title, description} 
 * @param {Number} idx param1 
 * @param {Object} route param2
 * @param {Object} navigation param3
 */
const ListItem =({item, idx, route, navigation}) =>{
    const handleOnPress = (e) => {
        e.preventDefault();
        navigation.navigate('Item', {idx: idx});
    };
    return(
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={listItemCSS.listItemText}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}

const mapStateToProps=({listReducer}, props)=>{
    return {
        item: props.item,
        idx: props.idx
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        item: props.item,
        idx: props.idx,
        route: props.route,
        navigation: props.navigation,
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ListItem);