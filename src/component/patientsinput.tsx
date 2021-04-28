import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Picker } from "react-native";
import '../App.css';

function PatientsInput() {
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const dateValue: Date = new Date();

    return (
        <div
            className="inputpadding"
            style={{
                padding: 10, paddingTop: 3, borderRadius: 5, margin: 10
            }}>
            <h1 style={{ color: '#27a742' }}>ข้อมูลผู้ป่วย</h1>

            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{ flex: '50%', marginRight: 10 }}>
                    <h2>เพศ</h2>
                    <Picker style={styles.picker}>
                        <Picker.Item label="ชาย" value="man" />
                        <Picker.Item label="หญิง" value="woman" />
                    </Picker>
                </div>

                <div style={{ flex: '50%', marginLeft: 1 }}>
                    <h2>อายุ</h2>
                    <TextInput
                        style={styles.textinput}
                    />
                </div>

            </div>

            <h2>อาชีพ</h2>
            <TextInput
                style={styles.textinput}
            />
        </div>
    );
}

const styles = StyleSheet.create({
    picker: {
        fontFamily: 'Prompt',
        fontSize: 16,
        height: 40,
        padding: 5,
        borderRadius: 5,
        width: '100%'
      },

    button: {
        alignItems: "center",
        color: '#012d5e',
        backgroundColor: '#ffc107',
        padding: 5,
        borderRadius: 5,
        fontFamily: 'Prompt',
        margin: 10
    },

    textinput: {
        fontFamily: 'Prompt',
        fontSize: 16,
        height: 40,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#fff"
    }
});

export default PatientsInput;
