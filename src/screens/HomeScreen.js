import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import BResfresh from '../../assets/ButtonRefresh.png';
import BackgroundImage from '../../assets/BackgroundImage.jpg'
import useResults from '../hooks/useResults';


const HomeScreen = () => {

const [searchApi, results ] = useResults();
const [joke, setJoke] = useState([]);

useEffect (() => {
    searchApi();
    setJoke(results);
}, []);

const refresh = () => {
    searchApi();
    setJoke(results);
};


return (
    <SafeAreaView>
             <View style={styles.container}>
                <ImageBackground source={BackgroundImage} style={styles.backgroundImageStyle}>
                     <View style={styles.box}>
                        <View style={styles.backgroundBoxUp} />
                        <View style={styles.textContainerBoxUp} >
                                <Text style={styles.textContainerBoxUpStyle}>{joke}</Text>
                        </View>             
                    </View>
                    <View style={styles.box}> 
                        <TouchableOpacity style={styles.refershContainerStyle} onPress={() => refresh()} >
                                <Image source={BResfresh} style={styles.refreshImageStyle}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
             </View>

                            
    </SafeAreaView>
);

};

const styles = StyleSheet.create({
    container: {
        height:'100%',
    },
    box: {
        //borderColor:'red',
        //borderWidth: 5,
        height: '50%'
    },
    backgroundBoxUp: {
        height:'100%',
        backgroundColor: 'blue',
        opacity: 0.5,
    },
    textContainerBoxUp: {
        position: 'absolute',
        top: '50%',
        left: '20%',
        right: '20%'
    },
    textContainerBoxUpStyle :{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center', 

    },
    refershContainerStyle: {
         position: 'absolute',
         top: '80%',
         right: '50%',
         width:40,
         height:40,
         backgroundColor:'white',
         borderRadius: 40
    },
    refreshImageStyle:{
         width:20,
         height:20, 
         top:10, 
         justifyContent:'center', 
         alignSelf:'center'
    },
    backgroundImageStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    


});

export default HomeScreen;