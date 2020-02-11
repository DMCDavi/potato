import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    icon_med: {
        width: 60,
        height: 69,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    icon_med_align: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    text1_login: {
        fontSize: 32,
        marginTop: 18,
        marginHorizontal: 36
    },
    text2_login: {
        fontSize: 14,
        fontWeight: '400',
        marginHorizontal: 36
    },
    text3_login: {
        color: '#979797',
        fontSize: 11,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 36
    },
    text4_login: {
        color: '#979797',
        fontSize: 11,
        fontWeight: '400',
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
        paddingHorizontal: 10,
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
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400',
    },
    text_forgot: {
        color: '#45c4e3',
        fontSize: 13,
        fontWeight: '400',
    },
    text_error: {
        color: '#ff102b',
        fontSize: 13,
        fontWeight: '400',
        marginHorizontal: 15,
        alignSelf: 'flex-start'
    },
    button_forgot: {
        marginHorizontal: 36,
        marginVertical: 25,
        alignSelf: 'flex-start'
    },
    view_separator: {
        width: '100%',
        paddingHorizontal: 20
    },
    separator: {
        backgroundColor: '#979797',
        height: 2,
        width: '100%',
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowOffset: { width: 3, height: 0 },
        marginTop: 25,
    },
    text5_login: {
        marginHorizontal: 20,
        color: '#979797',
        fontSize: 13,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 10,
    },
    icon_warning: {
        width: 23,
        height: 23,
        marginLeft: 22
    },
    icon_face: {
        width: 42,
        height: 43,
    },
    icon_google: {
        width: 42,
        height: 43,
    },
    login_google_facebook: {
        width: 115,
        marginVertical: 15,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    view_button_next_step: {
        marginVertical: 39,
        width: '100%',
        paddingHorizontal: 20,
    },
    p1_signup3: {
        fontSize: 33,
        marginHorizontal: 36,
        marginTop: 19,
    },
    view_texts_signup3: {
        marginTop: 26,
        marginHorizontal: 36,
    },
    p2_signup3: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 21,
        marginTop: 10,
        color: '#707070'
    },
    p3_signup3: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        marginTop: 27,
        color: '#707070'
    },
    p4_signup3: {
        fontSize: 14,
        marginTop: 23,
        color: '#707070'
    },
    p5_view_signup3: {
        marginTop: 23,
        marginLeft: 18,
    },
    p5_signup3: {
        fontSize: 14,
        color: '#707070'
    },
    screenTitle: {
        fontSize: 32,
        margin: 20,
        textAlign: 'center',
    },
    view_button_add: {
        marginTop: 18,
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
    white_circle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 25,
        height: 25,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 5,
    },
    text_list_empty: {
        color: '#979797',
        fontSize: 20,
        textAlign: 'center',
    },
    text1_mypills: {
        color: '#979797',
        fontSize: 13,
        textAlign: 'center',
    },
    view_text1_mypills: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    container_center: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text1_addpill: {
        fontSize: 11,
        color: '#abaaaa',
        fontWeight: '400',
        marginHorizontal: 36
    },
    view_text_image: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 51,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        elevation: 7,
        paddingHorizontal: 10,
    },
    button_minus: {
        padding: 10,
        margin: 5,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    text_images_input: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
    },
    text_inputs_addpill: {
        width: '100%',
        height: 51,
        borderRadius: 8,
        paddingHorizontal: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        elevation: 7,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    text_inputs_addpill2: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    text_add_clock: {
        color: '#13C9F2',
        fontSize: 11,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 36,
    },
    view_button_save_pill: {
        marginVertical: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    view_card_medicine: {
        flexDirection: 'row',
        borderColor: '#00FF41',
        borderStyle: 'solid',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    touch_card_medicine: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text_name_medicine: {
        color: '#000000',
        fontSize: 22,
        fontWeight: '500',
    },
    text_qnt_pills: {
        color: '#AAAAAA',
        fontSize: 17,
        fontWeight: '400',
    },
    text_clock: {
        color: '#000000',
        fontSize: 30,
        fontWeight: '400',
        textAlign: "right",
    },
    img_doctor: {
        width: 98,
        height: 98,
        shadowColor: '#000000',
        shadowOffset: { width: 6, height: 0 },
        shadowOpacity: 0.13,
        shadowRadius: 6,
        borderRadius: 49,
    },
    search_text_inputs: {
        flex: 1,
        paddingHorizontal: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000000'
    },
    text1_mydoctors: {
        color: '#48aad4',
        fontSize: 12,
        fontWeight: '400',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    view_card_doctor: {
        borderColor: '#DDDDDD',
        borderStyle: 'solid',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        padding: 10,
        justifyContent: 'space-between',
        flex: 1,
    },
    view_week: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    name_doctor: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center'
    },
    profession_doctor: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center'
    },
    already_added_doctor: {
        color: '#6fd20c',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center'
    },
    add_doctor: {
        color: '#48aad4',
        fontSize: 25,
        fontWeight: '400',
    },
    view_card_clinic: {
        backgroundColor: '#48AAD4',
        borderRadius: 6,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    day_able: {
        marginRight: 2,
        color: '#ffffff',
    },
    day_disable: {
        marginRight: 2,
        color: '#ffffff',
        opacity: 0.4,

    },
    img_clinic: {
        width: '100%',
        height: 286,
    },
    text_name_clinic: {
        width: 200,
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '700',
    },
    view_row_clinic: {
        marginBottom: 11,
        paddingHorizontal: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    scrollview_clinic: {
        marginHorizontal: 36,
        marginTop: 36,
        height: '100%'
    },
    view_text_clinic: {
        margin: 30,
    },
    text1_clinic: {
        color: '#ffffff',
        fontSize: 19,
        fontWeight: '500',
    },
    view_phone_clinic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    text2_clinic: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '300',
    },
    text3_clinic: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '300',
    },
    phone_clinic: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400',
    },
    img_maps: {
        width: 46,
        height: 46,
        resizeMode: 'contain',
    },
    text_maps: {
        color: '#ffffff',
        fontSize: 10,
        width: 46,
        textAlign: 'center',
    },
    mask_clinic: {
        backgroundColor: '#000000',
        width: '100%',
        height: 286,
        position: 'absolute',
        opacity: 0.2,
    },
    map_search: {
        marginVertical: 20,
        width: '100%',
    },
    gradient_button: {
        height: 51,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    },
    box_near_medicines: {
        width: '100%',
        height: 86,
        backgroundColor: '#2a2e43',
        alignItems: 'center',
        padding: 10
    },
    box_row: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1_box: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400',
    },
    text2_box: {
        opacity: 0.56,
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '400',
    },
    text3_box: {
        color: '#3d4255',
        fontSize: 62,
        fontWeight: '600',
    },
    separator: {
        width: '50%',
        height: 3,
        borderRadius: 1,
        backgroundColor: '#ffffff',
        opacity: 0.2,
    },
    gradient_line: {
        width: Dimensions.get('window').width,
        height: 7,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    h1_anamnesis: {
        width: '100%',
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 32,
        marginBottom: 20,
        marginTop: 30,
    },
    check_box_container: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        marginVertical: 1,
        marginLeft: 0,
    },
    check_box_text: {
        fontSize: 16,
        fontWeight: '300',
    },
    text_box: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        fontSize: 15,
        padding: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        elevation: 7,
        textAlignVertical: 'top',
        fontFamily: 'Poppins-Regular',
    },
    img_profile: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    view_img_profile: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 300,
        marginTop: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 51,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        elevation: 7,
    },
    map_center: {
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    }
})