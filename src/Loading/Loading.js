import React from 'react'
import {Text, View} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

class Loading extends React.Component {
  constructor (props) {
    super()
    this.state = {
      visible: true
    }
  }

  /* eslint react/no-did-mount-set-state: 0 */
  /* componentDidMount () {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      })
    }, 3000)
  } */

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.props.visible} textContent={'Loading...'} textStyle={{color: '#FFF'}} />
      </View>
    )
  }
}

export default Loading
