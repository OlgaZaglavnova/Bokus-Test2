import React from 'react';

import { ScrollView} from 'react-native';
import { Font } from 'expo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListItems} from '../ListItems/ListItems';

import {listPageCSS} from './ListPageCss';
/**
 * Вторая страница - Список
 * @param {Array} list param0 
 * @param {Object} route param1
 * @param {Object} navigation param2
 */
const ListPage =({list, route, navigation}) =>{
    return(
    <ScrollView style={listPageCSS.container}>
        <ListItems list={list} navigation={navigation} />
    </ScrollView>
    )
}

const mapStateToProps=({listReducer}, props)=>{

    return {
        list: listReducer.list,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        ...stateProps,
        route: props.route,
        navigation: props.navigation,
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ListPage);
