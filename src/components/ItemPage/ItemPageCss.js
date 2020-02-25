import { StyleSheet } from 'react-native';

export const itemPageCSS = StyleSheet.create(
    {item__container: {
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    },
    item__title:{
        color:"black",
        fontWeight:"bold",
        marginTop:20,
        marginLeft:20
    },
    item__description:{
        margin:20,
        textAlign:"justify"
    },
    item__btnsField: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        width:"100%",
    },
    item__btn:{
        width:"50%",
        height: 50,
        borderWidth:1,
        borderColor:"#bc0600",
        borderStyle:"solid",
        alignItems: "center",
        backgroundColor: "white"
    },
    item__btn_font:{
        fontWeight: "bold",
        lineHeight: 50,
        color: "#bc0600"
    },
    item__btn_font_hover: {
        color:"white"
    }
}
)