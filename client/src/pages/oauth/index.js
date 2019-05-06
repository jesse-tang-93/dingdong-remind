import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import Login from '../../components/login/login'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '授权登录'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Login />
      </View>
    )
  }
}
