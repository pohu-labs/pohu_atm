import React from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, ScrollView, FlatList, TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from 'axios';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { background, backgroundColor, boxShadow, height, marginTop, width } from "styled-system";
import { Center } from "native-base";
import { ThemeProvider, Button, Avatar, Input } from "@react-navigation/native";
import { Header } from "react-native-elements/dist/header/Header";
import Sidebar from "../component/headder/LeftComponent";
import HeadderComponent from "../component/headder/LeftComponent";
import FooterComponent from "../component/footer/FooterComponent";
import { Card, ListItem, Icon,FAB ,Divider} from 'react-native-elements';

export default function MainScreen({ route, navigation, props, isExtended, setIsExtended }) {
    const navigationOptions = {
        drawerLabel: 'MainScreen',
    }
    const theme = {
        Button: {
            raised: true,
        },
        container: {
            flex: 1,
            backgroundColor: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
        },
        backgroundColor: "#000000"

    }
    const bootstrapStyle = new BootstrapStyleSheet();

    const name = route.params["name"];
    const mail = route.params["mail"];
    console.log(mail);
    const description = route.params["desc"];
    const { image } = { uri: "https://cutewallpaper.org/21/abstract-background-hd/light-grey-abstract-background-hd-cool-7-2-Tiffany-Hayes-.jpg" };
   

    const x = Object.keys(description).map((key, index) => (

        <TouchableOpacity style={styles.feeditem} key={index} onPress={() => onsubmit(description[key])}>
            <View style={styles.footerRow} >
             
                    <Icon
                        raised
                        name='adjust'
                        type='font-awesome'
                        color='#18aefa' 
                        />
               
                <View style={[styles.sbox, styles.fcol]} >
                    <Text>APR 13</Text>
                    <Text style={{fontSize:20}}>{key}</Text>
                </View>
            </View>
        </TouchableOpacity>
    ))
    const onsubmit = () => {
        const data = JSON.stringify({
            "assigned": mail
        });
        var config = {
            method: 'POST',
            url: 'http://34.136.41.197:5000/taskassign',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': 'null'
            },
            data: data
        };

        axios(config)
            .then(response => {
                var description = response.data["data"]
                navigation.navigate('task', { desc: description, mail: mail ,name:name});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onQR=()=>{
            // navigation.navigate('qr-scanner',{ mail: mail ,name:name});
            const datas = JSON.stringify({
                "data": "b9355707-0fb2-464f-bc87-a5fa3ff1bc15"
            });
            console.log(datas);
            var config = {
                method: 'POST',
                url: 'http://34.136.41.197:5000/qrcode',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': 'null'
                },
                data: datas
            };
        
            axios(config)
                .then(response => {
                    const QR_Data = response.data["data"]
                    console.log(mail);  
                    navigation.navigate("attendance-t",{cls:QR_Data["class"],name:name,mail:mail});
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
            
    
    return (

        <View style={styles.container}>
            <View>
                <HeadderComponent name={name} mail={mail}/>
            </View>
                <ScrollView style={{marginTop:1}}> 
                    <Card style={{borderTopLeftRadius:20,paddingLeft:1}}>
                        <Card.Title style={{textAlign:"left",alignItems:"flex-start",fontSize:20}}>Notice</Card.Title>
                        <Card.Divider />
                        {x}
                    </Card>
                    <Card style={styles.section}>
                        <View style={styles.row}>
                            <View style={[styles.box]}>
                                <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
                                <Icon
                                    
                                    name='calendar'
                                    type='evilicon'
                                    color='#18aefa'
                                    size={90}
                                    style={{textAlign:"center",alignItems:"center",marginLeft:50}}
                                    />
                                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: "30%" }}>Tasks</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box]}>
                                <TouchableOpacity style={styles.loginBtn} onPress={onQR}>
                                    <Icon
                                    name='qr-code-outline'
                                    type='ionicon'
                                    color='#18aefa'
                                    size={60}
                                    style={{textAlign:"center",alignItems:"center",marginLeft:60}}
                                    />
                                    
                                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: 50 }}>QR-Scan</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box]}>
                                <TouchableOpacity style={styles.loginBtn} >
                                <Icon
                                    name='clean-hands'
                                    type='material'
                                    color='#18aefa'
                                    size={60}
                                    style={{textAlign:"center",alignItems:"center",marginLeft:60}}
                                    />
                                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: 30 }}>Attendance</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={[styles.box, styles.two]}>
                                <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
                                    <Image source={require('../assets/qr-code.png')} style={{ width: 90, height: 90, marginLeft: 50 }}></Image>
                                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: 50 }}>QR-Scan</Text>
                                </TouchableOpacity>
                            </View> */}

                        </View>
                    </Card>
                </ScrollView>
            <FooterComponent email={mail} name={name}></FooterComponent>
        </View>

        // <ThemeProvider theme={theme}>
        //     <HeadderComponent {...props} showName="MainScreen" />
        // <View style={[s.body, styles.container]}>
        //     <View style={[styles.hedding, styles.boxWithShadow, styles.bottomMargin]}>
        //         <Text style={[styles.txtclrlightblack, styles.txtprimary, styles.txtMargin]}>hello {JSON.stringify(name)}</Text>
        //     </View>
        //     <View style={styles.row}>
        //         <View style={[styles.box, styles.two]}>
        //             <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
        //                 <Image source={require('../assets/to-do-list.png')} style={{ width: 90, height: 90, marginLeft: 50 }}></Image>
        //                 <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: 60 }}>Tasks</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={[styles.box, styles.two]}>
        //             <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
        //                 <Image source={require('../assets/qr-code.png')} style={{ width: 90, height: 90, marginLeft: 50 }}></Image>
        //                 <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginLeft: 50 }}>QR-Scan</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View>
        // </ThemeProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        justifyContent: 'space-around',
    },
    bgImage: {
        flex: 1,
        marginHorizontal: -20,
    },
    section: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionLarge: {
        flex: 2,
        justifyContent: 'space-around',
    },
    sectionHeader: {
        marginBottom: 8,
    },
    priceContainer: {
        alignItems: 'center',
    },
    description: {
        padding: 15,
        lineHeight: 25,
    },
    titleDescription: {
        color: '#19e7f7',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
    title: {
        marginTop: 30,
    },
    price: {
        marginBottom: 5,
    },
    priceLink: {
        borderBottomWidth: 1,
        borderBottomColor: '#555CC4',
    },
    row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        marginTop: 10
    },
    box: {
        flex: 1,
        height: 170,
        backgroundColor: 'transparent',
    },
    sbox: {
        flex: 1,
        height: 60,
        backgroundColor: 'transparent',
    },
    two: {
        flex: 2,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,

    },
    fcol: {
        flex: 1,
    },
    loginBtn: {
        height: 170,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,

    },
    footerbtn: {
        height: 60,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10,
    },
    card: {
        flex: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        marginBottom: 1.85,
        width: 420
    },

    bgone: {
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: "#fdbb38",
        backgroundColor: "#f0c162",
        height: 100,
        width: 409,
        marginLeft: 12
    },
    pgmargin: {
        marginLeft: 10,
        height: 100,
        width: 300,
    },
    alignItemCenter: {
        alignItems: "center"
    },
    justifycontentbetwwn: {
        justifyContent: "center"
    },
    dflex: {
        display: "flex"
    },
    dbIcon: {
        fontSize: 25,
        width: 60,
        height: 60,
        borderRadius: 10,
        color: "#ffff"
    },
    cardbody: {
        padding: 24,
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    cardHeader: {
        backgroundColor: "#ffff",
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
        padding: 15
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,

    },
    playButton: {
        backgroundColor: '#FEFEFE',
        alignItems: 'flex-start',
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    footerRow: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
    },
    activityfeed: {
        marginLeft: 5,
        padding: 0
    },
    feeditem: {
        borderLeftWidth: 1,
        borderLeftColor: "#e4e8eb",
        paddingLeft: 20,
        position: "relative"
    },
    feedtext: {
        color: "#777",
        position: "relative",
        fontSize: 20
    },
    feeddate: {
        position: "relative",
        color: "#777",
        textTransform: "uppercase",
        fontSize: 13
    }

});

