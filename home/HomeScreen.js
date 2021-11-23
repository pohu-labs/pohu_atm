import React from "react";
import {View, Image,StyleSheet,TextInput,TouchableOpacity,Button,Text, ImageBackground, ScrollView, FlatList} from "react-native";
import { StatusBar } from "expo-status-bar";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
export default function HomeScreen({route,navigation}){
    const bootstrapStyle=new BootstrapStyleSheet();
    const {description}=route.params;
    const {image}={uri:"https://cutewallpaper.org/21/abstract-background-hd/light-grey-abstract-background-hd-cool-7-2-Tiffany-Hayes-.jpg"};
    const {s}=bootstrapStyle;
    
    const onsubmit=()=>{
        navigation.navigate('task-update');   
    }
    return(
        <View style={[s.body,styles.container]}>
             <StatusBar style="auto"></StatusBar>
             <ImageBackground source={image} style={styles.bimage}>
             <ScrollView>
             {/* <View style={[styles.hedding,styles.boxWithShadow,styles.bottomMargin]}>
                 <Text style={[styles.txtclrlightblack,styles.txtprimary,styles.txtMargin]}>hello {JSON.stringify(name)}</Text>
                 </View> */}
             <View>
                 
                 <View style={[styles.flex,styles.roundlg,styles.shadowlg]}>
                    <View style={[styles.wd,styles.flex,s.p3,styles.bottom_border]}>
                            <View style={[styles.roundlg]}>
                                    <Text style={styles.txtclr,styles.big_font}>Today Assignment</Text>                                
                                </View>
                    </View>   
                    <View style={[styles.fixed_height]}>
                         <View style={[styles.sm,styles.wd,styles.flex,s.flexcol,s.p3]}>
                                <View style={[styles.roundlg]}>
                                <ScrollView>
                                   <FlatList style={{height:330}}
                                    data={JSON.stringify(description)}
                                    renderItem={({item})=>
                                    <TouchableOpacity style={styles.loginBtn} onPress={onsubmit}>
                                        <Text style={styles.loginText} >{item.key}</Text>
                                    </TouchableOpacity>
                                  }
                                   />     
                                   </ScrollView>                          
                                </View>
                         </View>       
                    </View>    
                 </View>
                 
             </View>
             </ScrollView>
             </ImageBackground>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fa',
      paddingLeft:"1%",
      paddingRight:"1%",
      justifyContent: 'center',
     },
     bimage: {
        flex: 1,
        justifyContent: "center"
      },
     image :{
      marginBottom: 40,
      width:"50%",
      height:"20%"
  
    },
    txtclr:{
        color:"#0d0c22",
        
    },
    txtMargin:{
        marginTop:"-0.5%",
        marginBottom:"0.5%"
    },
    txtclrlightblack:{
        color:"#9297ad",
    },
    txtprimary:{
        fontSize:20,
        fontWeight:'600',
        position:"relative"
    },
    inputView: {
        backgroundColor: "#c6c1ca",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
      },
      loginBtn: {
        height: 30,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        
      },
      loginText:{
          color:"#ffff",
          marginTop:"0.5%",
          textDecorationLine:"underline"
      },
      flex:{
          display:"flex",
          flexWrap:"nowrap",
          backgroundColor:"#3ac6fb"
      },
      hedding:{
          paddingTop:10,
          position:"relative",
          paddingBottom:10,
          alignItems:"center",
          flex: 0.3,
          borderWidth: 2,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor:"beige",

          
      },
      boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
    },
      roundlg:{ 
          borderRadius:4,
      },
      sm:{
        margin:4,
      },
      wd:{
          width:1250,
          
      },
      shadowlg:{
        shadowColor:"#0000",
        shadowRadius:4,
        shadowOpacity:0.5
      },
      big_font:{
          fontSize:20,
      },
      bottom_border:{
          borderBottomWidth:1,
          borderBottomColor:"#ffff"
      },
      fixed_height:{
          height:"50%",
      },
      full_height:{
          height:"330",
      },
      bottomMargin:{
          marginBottom:"0.5%",
          marginTop:"0.5%",
      },
  });
  
