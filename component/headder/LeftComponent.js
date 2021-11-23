import React, { Component,useState } from "react";
import { Text, View, Button, Image, StyleSheet, TouchableOpacity ,} from 'react-native';
import { Icon,Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from "native-base";
import Sidebar from "./sidebar";
import { SearchBar } from 'react-native-elements';
const HeadderComponent = (props) => {
  const navigation=useNavigation();
  const name=props.name;
  const email=props.mail;
  const {search,SetSearch}=useState("");
  console.log(email);
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }
  const closeDrawer = () => {
    props.drawer._root.close()
  };
  const openDrawer = () => {
    props.drawer._root.open()
  };
  return (
    <View style={{ flexDirection: 'row', height: 100, paddingTop: 40 }}>
      {/* <Drawer
        ref={ innerRef }
        content={<Sidebar />}
        onClose={() => this.closeDrawer()} >
        <Button transparent
          onPress={openDrawer.bind(this)}
        >
          <Icon name='menu' />
        </Button>
      </Drawer> */}
      <TouchableOpacity 
       style={{marginLeft:20,alignContent:'center',alignSelf:'center'}}
       onPress={()=>{
        navigation.navigate('sidebar');
        //  openDrawer(); 
      }}
        >
      <Icon name='menu' size={40} />
    </TouchableOpacity>
      <View style={{ marginLeft: "25%",width:250,marginBottom:10 }}>
        
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(search)=>SetSearch(search)}
        value={search}
        lightTheme ={true}
        round={true}
        containerStyle={{backgroundColor:"transparent",borderTopWidth:0,borderBottomWidth:0,marginBottom:10,shadowColor:"#000",shadowOpacity:0.30,shadowRadius:4.65,elevation:8,shadowOffset:{height:4}}}
        inputContainerStyle={{backgroundColor:"white"}}
      />
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            //this.props.navigation.navigate('DrawerOpen');
            console.log(email)
            navigation.navigate('qr-scanner',{name:name,mail:email});
          }}>
          <Icon name='qr-code-outline' type='ionicon' color='#000' size={30} />
        </TouchableOpacity>
      </View> */}
      {/* <View style={{ alignItems: "flex-end", alignContent: 'flex-end', alignSelf: 'center', marginLeft: 10 }}>
        <TouchableOpacity
          onPress={() => {
            //this.props.navigation.navigate('DrawerOpen');
            props.navigation.openDrawer();
          }}>
          <Icon name='notifications' type='material' color='#000' size={30} />
        </TouchableOpacity>
      </View> */}

    </View>
  );
}
export default HeadderComponent;