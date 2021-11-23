import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { Divider, Icon, Avatar } from 'react-native-elements';
import { MaterialIcons } from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCreated from './TaskCreated';
import HeadderComponent from '../component/headder/LeftComponent';
import FooterComponent from '../component/footer/FooterComponent';
const PAGES = [<TaskCreated />, 'task started', 'task finished', 'task approved',];

const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: '#4aae4f',
    separatorUnFinishedColor: '#a4d4a5',
    stepIndicatorFinishedColor: '#4aae4f',
    stepIndicatorUnFinishedColor: '#a4d4a5',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: '#4aae4f',
};

const secondIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
};

const thirdIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7eaec4',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7eaec4',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#7eaec4',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#7eaec4',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#7eaec4',
};

const getStepIndicatorIconConfig = (
    position,
    stepStatus,
) => {
    const iconConfig = {
        name: 'feed',
        color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
        size: 15,
    };
    switch (position) {
        case 0: {
            iconConfig.name = 'shopping-cart';
            break;
        }
        case 1: {
            iconConfig.name = 'location-on';
            break;
        }
        case 2: {
            iconConfig.name = 'assessment';
            break;
        }
        case 3: {
            iconConfig.name = 'payment';
            break;
        }
        case 4: {
            iconConfig.name = 'track-changes';
            break;
        }
        default: {
            break;
        }
    }
    return iconConfig;
};

export default function TaskProfile(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const name = props.route.params["name"];
    const email = props.route.params["mail"];
    console.log("name is:"+name);
    console.log("email is:"+email);
    const onStepPress = (position) => {
        setCurrentPage(position);
    };

    const renderViewPagerPage = (data) => {
        return (
            <View key={data} style={styles.page}>
                <Text>{data}</Text>
            </View>
        );
    };

    const renderStepIndicator = (params) => (
        <MaterialIcons {...getStepIndicatorIconConfig(params)} />
    );

    const renderLabel = (
        position,
        label,
        currentPosition,
    ) => {
        return (
            <Text
                style={
                    position === currentPosition
                        ? styles.stepLabelSelected
                        : styles.stepLabel
                }
            >
                {label}
            </Text>
        );
    };

    return (
        <View style={{backgroundColor:"#fff"}}>
            <HeadderComponent name={name} mail={email}/>
            <SafeAreaView style={{height:700,top:"-5.7%"}}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={{ left: 125 }}>
                            <Icon
                                name='edit'
                                type='material'
                                color='#1976D2'

                            />
                        </View>
                        <Text style={styles.title}>Task profile</Text>

                    </View>
                    <Divider orientation="horizontal" style={{ top: 40 }} />
                    <View style={styles.stepIndicator}>
                        <StepIndicator
                            customStyles={firstIndicatorStyles}
                            currentPosition={currentPage}

                            labels={['Task Created', 'Task Started', 'Task Finished', 'Task Approved',]}
                            stepCount={4}

                            renderStepIndicator={(stepPosition, stepStatus) => {
                                renderStepIndicator(stepPosition, stepStatus);
                            }}
                            onPress={onStepPress}
                        />
                    </View>

                    <Swiper
                        style={{ flexGrow: 1 }}
                        loop={false}
                        index={currentPage}
                        autoplay={false}
                        showsButtons
                        onIndexChanged={(page) => {
                            setCurrentPage(page);
                        }}
                    >
                        {PAGES.map((page) => renderViewPagerPage(page))}
                    </Swiper>
                </View>
            </SafeAreaView>
            <View >
                <FooterComponent email={email} name={name}></FooterComponent>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    stepIndicator: {
        marginVertical: 50,
    },
    page: {
        flex: 1,

    },
    stepLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#999999',
    },
    headerContainer: {
        flexDirection: 'row',
        top: 25
    },
    title: {
        color: '#1976D2',
        fontSize: 20,
        left: 125,


    },
    stepLabelSelected: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4aae4f',
    },
});