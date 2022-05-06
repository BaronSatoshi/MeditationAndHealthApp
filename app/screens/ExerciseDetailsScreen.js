import React, {useState} from "react";
import {View, Text, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS, SIZES } from "../constants";


let sessions_data = [
    'Sessão 01',
    'Sessão 02',
    'Sessão 03',
    'Sessão 04',
    'Sessão 05',
    'Sessão 06',
]

const ExerciseDetailsScreen = ({route}) =>{
    const [exercise, setExercise] = useState(route.params.exercise)

    const SessionItem = ({session, index}) => {
        return(
            <View
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
                }}
            >
                <View style={{width: 35, height: 40, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: COLORS.purple, backgroundColor: index == 0 ? COLORS.purple : COLORS.white, marginRight: 15, borderRadius: 20,}}>
                    <FontAwesome5Icon name='play' style={{color: index == 0 ? COLORS.white : COLORS.purple}}/>
                </View>
                <Text>{session}</Text>
            </View>
        )
    }


    return(
        <SafeAreaView style={{flex: 1, position: 'relative'}}>
            <StatusBar
                backgroundColor={'#C7B8F5'}
                barStyle={'dark-content'}
                animated={true}
            />
            <View style={{
                width: '100%',
                height: 0.5 * SIZES.height,
                padding: 30,
                backgroundColor: '#C7B8F5',
                position: 'relative',
            }}>
                <Image source={require('../assets/images/BgPurple.png')} style={{position: 'absolute', top: 40, left: -50,}}/> 
                <Text style={{fontSize: 30, lineHeight: 45}}>{exercise.title}</Text>
                <Text style={{fontSize: 16, opacity: 0.6, marginVertical: 10}}>{exercise.duration}</Text>
                <Text style={{fontSize: 16, width: '85%'}}>{exercise.subTitle}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: COLORS.white, 
                        width: '60%',
                        height: 50,
                        borderRadius: 25,
                        marginVertical: 30,
                    }}
                >
                    <FontAwesome5Icon
                        name="search"
                        size={22}
                        style={{
                            marginHorizontal: 20,
                        }}
                    />
                    <TextInput placeholder="Search" style={{flex: 1,}}/>
                </View>
                <Image source={exercise.image} style={{position: 'absolute', bottom: 40, right: -130, width: 350, height: 350, resizeMode: 'contain'}}/>
            </View>
            <View style={{marginTop: -20}}>
                <FlatList
                    data={sessions_data}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({item, index}) => (
                        <SessionItem session={item} index={index} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default ExerciseDetailsScreen;