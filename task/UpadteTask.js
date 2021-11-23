import React ,{ useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from 'axios';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Hidden } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { borderColor } from "styled-system";
export default function TaskScreen({ route, navigation }) {
    const bootstrapStyle = new BootstrapStyleSheet();
    const { s } = bootstrapStyle;
    let x = '';
    const [description,SetDescription]=useState("");
    const TaskData = route.params["cInput"];
    const TaskId=route.params["taskID"];
    const email=route.params["mailId"];
    const name=route.params["name"];
    let data='';
    const onsubmit=()=>{
        if (TaskData["task status"] === "Start Task") {
            data = JSON.stringify({
                "objid": TaskId,
                "message":"Update Task Status",
                "key": "task status"
              });
        }
        else{
            data = JSON.stringify({
                "objid": TaskId,
                "message":"Task Completed Successfully",
                "key": "task status"
              });
        }
        var doPost = {
            method: "post",
            url: 'http://34.136.41.197:5000/edit',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': 'null'
            },
            data: data
          };
          axios(doPost).then(function (response) {
            console.warn(response.data.message);
          }).catch(function (error) {
            console.error(error);
          });
          const data1 = JSON.stringify({
            "assigned": email
        });
          var config = {
            method: 'POST',
            url: 'http://34.136.41.197:5000/taskassign',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': 'null'
            },
            data: data1
        };

        axios(config)
            .then(response => {
                var description = response.data["data"]
                navigation.navigate('task', { desc: description, mail: email ,name:name});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    if (TaskData["task status"] === "Start Task") {
        x =<View style={[styles.flex, styles.roundlg, styles.shadowlg]}>
        <View style={[styles.wd, styles.flex, s.p3, styles.bottom_border]}>
        <View style={[styles.roundlg]}> 
            <Text style={styles.txtclr, styles.big_font}>Start Assignment</Text>
        </View>
    </View> 
        <View style={styles.container}>
            {/* Start Task */}
            <View style={styles.inputView}>
                <Text >Task Priority</Text>
                <Text style={styles.TextInput}>
                {TaskData["task priority"]}
                </Text>
            </View>
            <View style={styles.inputView}>
                <Text>Assigned By</Text>

                <Text style={styles.TextInput}>
                {TaskData["task assigned by"]}
                </Text>
            </View>
            <View style={styles.inputView}>
                <Text>Reporting Manager</Text>
                <Text style={styles.TextInput}>
                {TaskData["task assigned by"]}
                </Text>
            </View>
            <View style={styles.inputView}>
                <Text>Task Description</Text>
                <Text style={styles.TextInput}>
                    
                    
                    {TaskData["task description"]}
                </Text>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
                <Text style={styles.loginText}>Start Assignment</Text>
            </TouchableOpacity>
        </View>
        </View>
    }
    else {
        x =<View style={[styles.flex, styles.roundlg, styles.shadowlg]}>
        <View style={[styles.wd, styles.flex, s.p3, styles.bottom_border]}>
        <View style={[styles.roundlg]}> 
            <Text style={styles.txtclr, styles.big_font}>End Assignment</Text>
        </View>
    </View>  
        <View style={styles.container} >
            <View style={styles.inputView}>
                <Text>Task Comments</Text>
                <TextInput
                    multiline={true}
                    placeholderTextColor="#003f5c"
                    onChangeText={(description) => SetDescription(description)}
                />
            </View>
            <View style={styles.inputView}>
                <Text>Upload</Text>


                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Raise A Ticket</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
                <Text style={styles.loginText}>Update Task</Text>
            </TouchableOpacity>
        </View>
        </View>
    }
    
    return (
        <View style={[styles.container]}>
            <StatusBar style="auto"></StatusBar>
            <ScrollView>
                
                    

                    {x}

                
            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
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
        backgroundColor: '#f5f7f8',
    },
    two: {
        flex: 2,
        borderLeftWidth: 2,
        borderLeftColor: "#ffff"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bimage: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        marginBottom: 40,
        width: "50%",
        height: "20%"

    },
    txtclr: {
        color: "#0d0c22",

    },
    txtMargin: {
        marginTop: "-0.5%",
        marginBottom: "0.5%"
    },
    txtclrlightblack: {
        color: "#9297ad",
    },
    txtprimary: {
        fontSize: 20,
        fontWeight: '600',
        position: "relative"
    },
    inputView: {
        backgroundColor: "#c6c1ca",
        borderRadius: 2,
        width: 410,
        height: 70,
        marginBottom: 20,
        
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        width: 410,
        textAlign: "center",
        borderColor: "#420fbf",
        fontWeight:"bold",
        fontSize:18
    },
    loginBtn: {
        width: 410,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#420fbf"
        
    },
    loginText: {
        color: "#ffff",
        textAlign: "center"
    },
    flex: {
        display: "flex",
        flexWrap: "nowrap",
        backgroundColor: "#3ac6fb"
    },
    hedding: {
        paddingTop: 10,
        position: "relative",
        paddingBottom: 10,
        alignItems: "center",
        flex: 0.3,
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "beige",


    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    roundlg: {
        borderRadius: 4,
    },
    sm: {
        margin: 4,
    },
    wd: {
        width: 1250,

    },
    shadowlg: {
        shadowColor: "#0000",
        shadowRadius: 4,
        shadowOpacity: 0.5
    },
    big_font: {
        fontSize: 20,
    },
    bottom_border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ffff"
    },
    fixed_height: {
        height: "50%",
    },
    full_height: {
        height: "330",
    },
    bottomMargin: {
        marginBottom: "0.5%",
        marginTop: "0.5%",
    },
});