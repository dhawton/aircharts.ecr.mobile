import React, { Component } from 'react'
import {View, TextInput, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class SearchBox extends Component {
  constructor (props) {
    super(props)

    this.state = {text: ''}
  }

  render () {
    return (
      <View style={{
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#E3F2FD',
        paddingBottom: 5,
        marginBottom: 10
      }}>
        <View style={{flex: 1}}>
          <TextInput style={{
            alignItems: 'center',
            justifyContent: 'center'
          }} value={this.state.search} editable maxLength={4} onChangeText={(text) => this.setState({search: text})} onSubmitEditing={(event) => this.props.handleSearchSubmit(this.state.search)} placeholder='ICAO' keyboardType='web-search' ref='searchBar' />
        </View>
        <TouchableHighlight style={{
          alignItems: 'center',
          justifyContent: 'center'
        }} underlayColor='transparent' onPress={(e) => this.props.handleSearchSubmit(this.state.search)}>
          <View>
            <Icon name='search' style={{
              backgroundColor: '#4285F4',
              color: '#ffffff',
              padding: 10,
              borderWidth: 1,
              borderColor: '#ffffff',
              borderRadius: 4
            }} size={20} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SearchBox
