import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Avatar } from "react-native-elements";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default function StudentProfile() {
    const [month, setMonth] = useState('January');
    const [tableHead, setTableHead] = useState(['', 'Mon', 'Tue', 'Wed','Thu','Fri','Sat']);
    const [tableTitle, setTableTitle] = useState(['Week 1', 'Week 2', 'Week 3','Week 4' ]);
    const [tableData, setTableData] = useState([
        ['Y', 'Y', 'Y','Y','Y','Y'],
        ['Y', 'Y', 'Y','Y','Y','Y'],
        ['Y', 'Y', 'Y','Y','Y','Y'],
        ['Y', 'Y', 'Y', 'Y','Y','Y'],
       
    ]);
    const styles = StyleSheet.create({
        container: { marginTop: 190, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        head: { height: 40, },
        wrapper: { flexDirection: 'row' },
        title: { flex:1 },
        row: { height: 28 },
        text: { textAlign: 'center' }
    });

    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <View style={{ width: 414, height: 212, backgroundColor: '#1976D2', borderBottomLeftRadius: 25 }}>
                        <View style={{ top: 72, left: 34 }}>
                            <Avatar
                                size="xlarge"

                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.9}
                                avatarStyle={{ borderRadius: 10, }}

                            />
                        </View>
                        <Text style={{ marginLeft: 200, color: 'white', fontSize: 20, fontWeight: 'bold' }}>Manushi-III B</Text>
                        <Text style={{ marginLeft: 200, color: 'white', fontSize: 13 }}>Y12345</Text>
                    </View>
                    <Text style={{
                        color: 'black', fontSize: 18, top: 40, left: 37, fontWeight: '500'
                    }}>Subjects</Text>

                    <View style={{ top: 72, left: 34, flexDirection: 'row', }}>
                        <Avatar
                            size="large"

                            source={require('../assets/subject.png')}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.9}
                            avatarStyle={{ borderRadius: 10, }}

                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>Telugu</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>

                        <View style={{ left: 45 }}>
                            <Avatar
                                size="large"

                                source={require('../assets/subject.png')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.9}
                                avatarStyle={{ borderRadius: 10, }}

                            />

                        </View>
                        <View style={{ flexDirection: 'column', left: 40 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>English</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>
                    </View>

                    <View style={{ top: 92, left: 34, flexDirection: 'row', }}>
                        <Avatar
                            size="large"

                            source={require('../assets/subject.png')}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.9}
                            avatarStyle={{ borderRadius: 10, }}

                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>Hindi</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>

                        <View style={{ left: 45 }}>
                            <Avatar
                                size="large"

                                source={require('../assets/subject.png')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.9}
                                avatarStyle={{ borderRadius: 10, }}

                            />

                        </View>
                        <View style={{ flexDirection: 'column', left: 40 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>Mathematics</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>
                    </View>


                    <View style={{ top: 112, left: 34, flexDirection: 'row', }}>
                        <Avatar
                            size="large"

                            source={require('../assets/subject.png')}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.9}
                            avatarStyle={{ borderRadius: 10, }}

                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>Science</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>

                        <View style={{ left: 45 }}>
                            <Avatar
                                size="large"

                                source={require('../assets/subject.png')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.9}
                                avatarStyle={{ borderRadius: 10, }}

                            />

                        </View>
                        <View style={{ flexDirection: 'column', left: 40 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', left: 8 }}>Social</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', left: 8 }}>A_Jyothi</Text>
                        </View>
                    </View>

                    <Text style={{
                        color: 'black', fontSize: 18, top: 130, left: 37, fontWeight: '500'
                    }}>Reports</Text>


                    <View style={{ flexDirection: 'row', top: 150, left: 37 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#1976D2', width: 102,
                            height: 33, borderRadius: 10, alignItems: 'center'
                        }}><Text style={{ fontSize: 13, color: 'white', padding: 8 }}>Attendance</Text></TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#1976D2', width: 70,
                            height: 33, borderRadius: 10, marginLeft: 30, alignItems: 'center'
                        }}><Text style={{ fontSize: 13, color: 'white', padding: 8 }}>Marks</Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', top: 180, height: 200 }}>
                        <Text style={{ left: 37 }}>Select Month</Text>
                        <Picker
                            selectedValue={month}
                            onValueChange={(itemValue, itemIndex) =>
                                setMonth(itemValue)
                            }
                        >

                            <Picker.Item label="January" value="January" />
                            <Picker.Item label="February" value="February" />
                            <Picker.Item label="March" value="March" />
                            <Picker.Item label="April" value="April" />
                            <Picker.Item label="May" value="May" />
                            <Picker.Item label="June" value="June" />
                            <Picker.Item label="July" value="July" />
                            <Picker.Item label="August" value="August" />
                            <Picker.Item label="September" value="September" />
                            <Picker.Item label="October" value="October" />
                            <Picker.Item label="November" value="November" />
                            <Picker.Item label="December" value="December" />
                        </Picker>

                    </View>
                    <Text style={{ left: 37, top: 190, fontWeight: '600' }}>{month}</Text>

                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 1 }}>
                            <Row data={tableHead} flexArr={[1, 1, 1, 1,1,1,]} style={styles.head} textStyle={styles.text} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={tableData} flexArr={[1, 1, 1,1,1,1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>





                </ScrollView>

            </View>
        </SafeAreaView>
    )
}