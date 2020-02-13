import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text3_login: {
        fontSize: 11,
        marginTop: 10,
        marginHorizontal: 36
    },
    text4_login: {
        fontSize: 11,
        marginTop: 5,
        marginHorizontal: 16,
        marginBottom: 5
    },
    view_text_inputs: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    text_inputs: {
        height: 51,
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#000',
        borderColor: '#00FF41',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: "space-mono",
        color: '#00FF41',
    },
    view_button_submit: {
        flex: 1,
        paddingHorizontal: 20,
    },
    button_submit: {
        height: 51,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#00FF41"
    },
    text_submit: {
        fontSize: 16,
    },
    text_error: {
        fontSize: 13,
        marginHorizontal: 15,
        alignSelf: 'flex-start'
    },
    screen_title: {
        fontSize: 32,
        margin: 20,
        textAlign: 'center',
    },
    view_card_prank: {
        flexDirection: 'row',
        borderColor: '#00FF41',
        borderStyle: 'solid',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    text_name_prank: {
        color: '#000000',
        fontSize: 22,
    },
    img_royal: {
        width: '100%',
        height: 400,
    },
    view_text_royal: {
        margin: 30,
    },
    text_royal: {
        fontSize: 19,
        textAlign: 'center',
    },
})
