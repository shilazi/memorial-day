/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件
// import url from './audio/wq.mp3' // 引入背景音乐文件
// import url from './audio/test.mp3' // 引入背景音乐文件（测试用，时长6秒）
import Letter from './letter'
import { mainResize as resize } from './resize'

class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
          this.time(2019, 8, 30) // 你们的纪念日
        }, 1000)

        let delay = 8000; // 延迟播放的时间
        let songLength = 215 ;// 歌曲时长，单位：秒

        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), delay) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
        setTimeout(() =>
          setInterval(() => {
            audio.play()
          }, 1000)                    // 洗脑循环间隔时间
        , delay + songLength * 1000)  // 延迟启动洗脑循环的时间（），单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                // var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current === '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                // setTimeout(fn, 10) // 调试，快速输出内容
                setTimeout(fn, 200) // 打字机正常的速度
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000), 10)
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000), 10);
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24, 10);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60, 10);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60, 10);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (
                  <p>
                    <span style={{'float': 'right'}}>我们已经一起走过了 <span style={resize('time')} className="date-text">{d}</span> 天 <span style={resize('time')} className="date-text">{hour}</span> 小时 <span style={resize('time')} className="date-text">{minute}</span> 分 <span style={resize('time')} className="date-text">{second}</span> 秒</span>
                  </p>
                )
            }
        }
        return (
            <div style={resize('app')} id='parent' className="App animated bounceInLeft">
              <div style={resize('date')} className="date">{date()}</div>
              <div id='autotype' style={resize('text')}>
                <Letter />
              </div>
              <div style={resize('text')}></div>
              <audio id="audio" src={url}></audio>
            </div>
        )
    }
}
export default Main
