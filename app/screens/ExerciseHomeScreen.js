import React from "react";
import {View, Text,SafeAreaView, StatusBar, Image, TextInput, FlatList, TouchableOpacity  } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS, SIZES } from "../constants";

let exercises = [
    {
      title: 'Recomendação de Dieta',
      image: require('../assets/images/Exercise1.png'),
      subTitle:
        'Live happier and healthier by learning the fundamentals of diet recommendation',
      duration: '5-20 MIN Curso',
    },
    {
      title: 'Exercicios',
      image: require('../assets/images/Exercise2.png'),
      subTitle:
        'Live happier and healthier by learning the fundamentals of kegel exercises',
      duration: '10-20 MIN Curso',
    },
    {
      title: 'Meditação',
      image: require('../assets/images/Exercise3.png'),
      subTitle:
        'Viva feliz e saudavel aprendendo os fundamentos da meditação',
      duration: '3-10 MIN Curso',
    },
    {
      title: 'Yoga',
      image: require('../assets/images/Exercise4.png'),
      subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
      duration: '5-10 MIN Curso',
    },
];

const ExerciseHomeScreen = ({navigation}) =>{

    const ExerciseItem = ({exercise}) =>{
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate('ExercisesDetailsScreen', {exercise: exercise})}
                activeOpacity={0.8}
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 45,
                    margin: 11,
                    height: 135,
                    borderRadius: 10,
                    padding: 15,
                    shadowColor: '#09e9898',
                    elevation: 5,
                }}
            >
                <Image 
                    source={exercise.image}
                    style={{
                        width: '100%',
                        resizeMode: 'cover',
                        flex: 1
                    }}
                />
                <Text style={{marginTop: 5, textAlign: 'center', fontSize: 13, fontWeight: 'bold'}}>{exercise.title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={{felx: 1, position: 'relative'}}>
            <StatusBar backgroundColor={COLORS.accent + '30'} barStyle="dark-content" animated={true}/>
            <View style={{
                width: '100%',
                height: 0.55 * SIZES.height,
                padding: 30,
                backgroundColor: COLORS.accent + '20',
                position: 'relative'
            }}>
                <Image source={require('../assets/images/BgOrange.png')} style={{
                    position: 'absolute', 
                    top: 5,
                    left: -50,
                }}/>
            

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <View style={{
                    width: 60,
                    height: 60,
                    marginTop: -60,
                    marginRight: -15,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                </View>
            </View>
                <Text style={{fontSize: 30, lineHeight: 45}}>Bom dia João</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: COLORS.white,
                    marginVertical: 40,
                }}>
                    <FontAwesome5Icon name="search" size={22} style={{marginHorizontal: 20}}/>
                    <TextInput placeholder="Search" style={{flex: 1}}/>
                </View>
                <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent + '55', position: 'absolute', right: -30, bottom: 50}}>

                </View>
            </View>

            <FlatList 
                data={exercises}
                style={{
                    paddingHorizontal: 20,
                    marginTop: -140
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) => <ExerciseItem exercise={item}/> }
            />    
        </SafeAreaView>
    )
}

export default ExerciseHomeScreen;