// 叮咚提醒首页登录组件，发起用户授权
import Taro, { Component } from "@tarojs/taro"
import { View, Button, Image } from "@tarojs/components"

export default class Login extends Component {
  state = {
    oauthBtnStatus: true, // 授权按钮是否显示 默认为显示
    userInfo: null // 用户信息
  }
  componentWillMount() {
    // 获取用户当前授权状态
    this.getOauthStatus()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  // 获取用户授权结果
  getOauthStatus = () => {
    Taro.getSetting().then(res => {
      console.log(res)
      if(Object.keys(res.authSetting).length === 0 || !res.authSetting['scope.userInfo']){ // 用户信息无授权
        console.log(res.authSetting)
        console.log('用户无授权信息')
      }else{ // 用户允许授权获取用户信息
        // 隐藏授权按钮
        this.setState({oauthBtnStatus: false})
        // 获取用户信息
        this.getUserInfo()
      }
    })
    .catch(err => console.log(err))
  }
  // 获取用户信息
  
  getUserInfo = () => {
    Taro.getUserInfo({
      lang: 'zh_CN'
    }).then( res => { // 用户授权成功
      this.setState(()=>({
        userInfo: res.userInfo
      }))
      console.log(res)
    } )
    .catch( err => console.log(err) )
  }
  // 用户授权
  openOauth = () => {
    Taro.authorize({
      // 授权项目
      scope: 'scope.userInfo'
    }).then( () => { // 用户同意授权获取用户信息
      
    })
    .catch(err => console.log(err))
  }
  render() {
    const { oauthBtnStatus, userInfo } = this.state
    return (
      <View className='index'>
        { oauthBtnStatus ? <Button open-type='getUserInfo'>微信授权登录</Button> : null}
        { userInfo ? JSON.stringify(userInfo) : null}
        { userInfo ? <Image src={userInfo.avatarUrl} /> : null}
      </View>
    )
  }
}
