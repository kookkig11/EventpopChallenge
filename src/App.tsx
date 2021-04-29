import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './App.css';
import PatientsInput from './component/patientsinput';
import TimelineInput from './component/timelineinput';
import TimelineData from './component/timelineData';
import UseLocalStorage from './useLocalStorage';


export default class App extends React.Component {
  //patients
  gender: string;
  age: string;
  job: string;
  timeline: any;
  items: object[] = [];

  constructor(props: any) {
    super(props);

    let storage = new UseLocalStorage();
    const timelineList = {
      datetime: '',
      description: ''
    };
    const patients = {
      gender: 'หญิง',
      age: parseInt('23'),
      job: 'Frontend Developer'
    };
    storage.setPatients(patients);
    let covidData = { patients, timelineList };
    storage.setTimeline(covidData);

    this.gender = storage.getGender();
    this.age = storage.getAge();
    this.job = storage.getJob();
    this.timeline = storage.getTimeline();
    this.items = this.timeline;
  }

  render() {
    return (
      <div className="App" style={{ padding: 20 }} >
        <Text style={styles.titletext}>COVID Timeline Genetator</Text>
        <div className="App-page" style={{ display: 'flex', flexDirection: 'row' }}>

          <div className="inputData" style={{ flex: '40%' }}>
            <PatientsInput />

            <TimelineInput />
          </div>

          <TimelineData />

          {/* <div
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
              <h1>ผู้ป่วย{this.gender} อายุ {this.age} ปี</h1>
              <h2>อาชีพ {this.job}</h2>
            </View>

            {
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
            }
          </div> */}
        </div>
      </div >
    );
  }
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

  picker: {
    fontFamily: 'Prompt',
    fontSize: 16,
    height: 40,
    padding: 5,
    borderRadius: 5,
    width: '100%'
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