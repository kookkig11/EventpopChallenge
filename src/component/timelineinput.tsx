import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../App.css';

function TimelineInput() {
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const dateValue: Date = new Date();

    return (
        <div className="inputpadding"
            style={{
                padding: 10, paddingTop: 3, borderRadius: 5, margin: 10
            }}>
            <h1 style={{ color: '#27a742' }}>ข้อมูลไทม์ไลน์</h1>

            <h2>วันเวลา</h2>
            <DateTimePickerComponent
                style={{
                    fontFamily: 'Prompt',
                    backgroundColor: '#fff',
                    padding: 5
                }}
                value={dateValue} />

            <h2>รายละเอียด</h2>
            <TextInput
                multiline
                numberOfLines={4}
                style={styles.textinput}
            />

            <TouchableOpacity
                onPress={() => console.log('click button')}
                style={styles.button}
            >+ เพิ่มข้อมูล
            </TouchableOpacity>
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

export default TimelineInput;