import React from 'react'
import {
  Dimensions,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView
} from 'react-native'
import api from './utils/api'

import Loading from './Loading/Loading'
import SearchBox from './SearchBox/SearchBox'
import ChartData from './ChartData/ChartData'
import ChartPDF from './ChartPDF/ChartPDF'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      submitted: '',
      chartUrl: '',
      chartData: '',
      isFetching: false
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleDisplayChart = this.handleDisplayChart.bind(this)
    this.handleData = this.handleData.bind(this)
  }

  handleSearchSubmit () {
    if (this.state.search.length < 3) {
      Alert.alert(
            'Error',
            `Not enough characters in search query`,
            [{text: 'OK' }]
          )
      return false
    }
    this.setState({
      submitted: this.state.search,
      isFetching: true
    })
    api.searchChart(this.state.search).then((response) => {
      this.handleData(response)
      this.setState({isFetching: false})
    }).catch((error) => {
      console.error(error)
    })
  }

  handleData (data) {
    this.setState({
      chartData: data
    })
  }

  handleSearchChange (searchString) {
    this.setState({
      search: searchString
    })
  }

  handleDisplayChart (charturl) {
    this.setState({
      chartUrl: charturl
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={{fontSize: 25, color: '#ffffff'}}>AirCharts ECR</Text></View>
        {this.state.chartUrl === '' && <SearchBox searchState={this.state.search} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} />}
        {this.state.chartData !== '' && this.state.chartUrl === '' && <ChartData chartData={this.state.chartData} handleDisplayChart={this.handleDisplayChart} />}
        {this.state.chartUrl !== '' && <ChartPDF chartUrl={this.state.chartUrl} chartHandler={this.handleDisplayChart} style={{flex: 1, height: '100%', borderWidth: 1}} />}
        {this.state.isFetching && <Loading visible={this.state.isFetching} /> }
      </View>
    )
  }
}

let screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: screenHeight
  },
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }
})
