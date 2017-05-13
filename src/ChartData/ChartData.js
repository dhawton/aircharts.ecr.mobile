import React from 'react'
import {Alert, StyleSheet, ScrollView, View, Text, Button, TouchableHighlight} from 'react-native'
import he from 'he'

class ChartData extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let r = ''
    if (typeof this.props.chartData === 'string') {
      if (this.props.chartData !== '') {
        r = <Text>{this.props.chartData}</Text>
      }
    } else {
      r = (
        <ScrollView style={{flexDirection: 'column', width: '100%', paddingLeft: 10, paddingRight: 10}}>
          <View><Text style={styles.title}>Charts for {this.props.chartData.info.id} - {this.props.chartData.info.name}</Text></View>
          <View><Text style={styles.title}>General</Text></View>
          {(typeof this.props.chartData.charts.General === 'object') ? this.props.chartData.charts.General.map((chart, i) => {
            return (
              <TouchableHighlight style={{paddingBottom: 10}} onPress={() => this.props.handleDisplayChart(chart.proxy)} key={i}><Text>{he.decode(chart.chartname)}</Text></TouchableHighlight>
            )
          }) : <Text>No charts available</Text> }
          <View><Text style={styles.title}>SIDs</Text></View>
          {(typeof this.props.chartData.charts.SID === 'object') ? this.props.chartData.charts.SID.map((chart, i) => {
            return (
              <TouchableHighlight style={{paddingBottom: 10}} onPress={() => this.props.handleDisplayChart(chart.proxy)} key={i}><Text>{he.decode(chart.chartname)}</Text></TouchableHighlight>
            )
          }) : <Text>No charts available</Text> }
          <View><Text style={styles.title}>STARs</Text></View>
          {(typeof this.props.chartData.charts.STAR === 'object') ? this.props.chartData.charts.STAR.map((chart, i) => {
            return (
              <TouchableHighlight style={{paddingBottom: 10}} onPress={() => this.props.handleDisplayChart(chart.proxy)} key={i}><Text>{he.decode(chart.chartname)}</Text></TouchableHighlight>
            )
          }) : <Text>No charts available</Text> }
          <View><Text style={styles.title}>Intermediate</Text></View>
          {(typeof this.props.chartData.charts.Intermediate === 'object') ? this.props.chartData.charts.Intermediate.map((chart, i) => {
            return (
              <TouchableHighlight style={{paddingBottom: 10}} onPress={() => this.props.handleDisplayChart(chart.proxy)} key={i}><Text>{he.decode(chart.chartname)}</Text></TouchableHighlight>
            )
          }) : <Text>No charts available</Text> }
          <View><Text style={styles.title}>Approaches</Text></View>
          {(typeof this.props.chartData.charts.Approach === 'object') ? this.props.chartData.charts.Approach.map((chart, i) => {
            return (
              <TouchableHighlight style={{paddingBottom: 10}} onPress={() => this.props.handleDisplayChart(chart.proxy)} key={i}><Text>{he.decode(chart.chartname)}</Text></TouchableHighlight>
            )
          }) : <Text>No charts available</Text> }
        </ScrollView>
      )
    }

    console.log(r)

    return r
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#2196F3',
    fontSize: 14
  }
})

export default ChartData
