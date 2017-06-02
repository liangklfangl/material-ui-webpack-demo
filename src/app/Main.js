/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500,red900} from 'material-ui/styles/colors';
//你使用任何颜色必须是通过这里导入的
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//getMuiTheme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};
//getMuiTheme方法可以接收的参数值
//Detail:http://www.material-ui.com/#/customization/themes
//Detail:http://www.material-ui.com/#/customization/colors
//分别为自定义颜色和自定义theme，getMuiTheme接收一个muiTheme参数，它会使用
//这个参数来计算并返回一个增强的muiTheme对象
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    accent2Color: red900
  },
});

class Main extends Component {
  /**
   * 这里的构造函数接收props和context两个参数
   */
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      open: false,
    };
  }
 /**
  * 关闭弹窗
  */
  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
 /**
  * 打开弹窗
  */
  handleTouchTap() {
    this.setState({
      open: true,
    });
  }
 /**
  * MuiThemeProvider接收一个theme作为参数，同时将它传递给下面层级的组件
  * 其实现原理是通过React的context特征来完成的
  */
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
           {/*这里的RaisedButton主要是为了显示点击按钮的*/}
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;