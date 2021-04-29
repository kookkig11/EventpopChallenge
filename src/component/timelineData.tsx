import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import '../App.css';
import UseLocalStorage from '../useLocalStorage'

function TimelineData() {
    let storage = new UseLocalStorage();
    var gender = storage.getGender();
    var age = storage.getAge();
    var job = storage.getJob();
    var timeline = storage.getTimeline();

    return (
        <div
            style={{
                flex: '60%',
                borderColor: '#ffc107',
                borderStyle: 'solid',
                padding: 10,
                margin: 10,
                // width: '100%',
                justifyContent: 'center',
            }}>

            <Text style={[styles.titletext, styles.boldtext,]}>Timeline</Text>

            <View
                style={[styles.button, { borderRadius: 100 }]}
            >
                <h1>ผู้ป่วย{gender} อายุ {age} ปี</h1>
                <h2>อาชีพ {job}</h2>
            </View>

            {/* {
              Object.keys(this.items).map((i) =>
                <div className="timeline">
                  <div className="container right">
                    <div className="content">
                      <h2>2017</h2>
                      <p>Lorem ipsum..</p>
                    </div>
                  </div>

                  <div className="container right">
                    <div className="content">
                      <h2>2016</h2>
                      <p>Lorem ipsum..</p>
                    </div>
                  </div>
                </div>
              )
            } */}
        </div>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        color: '#012d5e',
        backgroundColor: '#ffc107',
        padding: 5,
        borderRadius: 5,
        fontFamily: 'Prompt',
        margin: 10
    },

    titletext: {
        fontFamily: 'Prompt',
        fontSize: 28,
        color: '#ffc107',
    },

    boldtext: { fontWeight: 'bold' },
});

export default TimelineData;