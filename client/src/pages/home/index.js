// 提醒首页面
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Home extends Component {
  config = {
    navigationBarTitleText: '选个日子，说件事情，我来提醒'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>1</Text>
      </View>
    )
  }
}