import React from 'react';
import ListItem from '../ListItem/ListItem';

/**
 * Компонент отрисовки всех пользователей
 * @param {Array} list Массив данных
 * @param {Object} navigation Объект для организации навигации
 * 
 */
export const ListItems =({list, navigation}) => {
    return list.map((item, idx) => <ListItem {...{item: item}} navigation={navigation} idx={idx} key={idx} />);
};