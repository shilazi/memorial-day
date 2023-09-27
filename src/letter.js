import React, { Component } from 'react'
import { mainResize as resize } from './resize'


class Letter extends Component {

  render(){
    return (
      <div id='letter'>
        <h1 style={resize('hello')}>哈喽，雅秋！</h1>
        <p>在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
        <p>今天是我们两周年的纪念日，从2016年4月23日到现在，我们一起经历了许许多多的事情，有欢笑也有争吵，也曾因为一些事情闹过分手，但是我们都走过来了。</p>
        <p>高三那会，每天都期待着见到你，上课的时候视线会不自觉的到你身上；吃早餐帮你打好早餐，帮你洗早餐盒；下课的时候假装凑到你身边看看你在干啥，有没有不会的题目，然后就可以教你做题，表面上是想展现自己的学霸风采。实际上啊，是因为喜欢和你呆在一起。喜欢看你的甜美的笑容，喜欢轻轻地闻你的发香，慢慢地开始喜欢你身上的一切。当从别人口中得知你喜欢我这句话时候，我那一整天都笑的合不拢嘴，晚上也睡不着，脑海里一直重复着那句话。</p>
        <p>在4月23日那天晚上，在书店，我还记得清清楚楚，你穿着T恤和短裤，头发还散发着清香，我的心好像有什么感应一样，一靠近你就开始加速跳动。在回去的路上，我正要说出“我喜欢你”这四个字的时候，你突然打断我说：“我也是！”。那一刻感觉时间都静止了，整个人都处于一种飘飘然的状态。再到后来高考后的那个暑假，也是我一生当中最难忘的暑假，初吻、约会、每天都歪腻在一起，真心的感谢你陪我度过的那些时光。</p>
        <p>然后我们就开始了漫长的异地恋，还记得我们异地后的第一次见面嘛，分别那天傍晚，一个人开着电动车哭到哽咽，口头上说着没事，但没想到分别竟然是如此刺痛，那时候我就决定，“我魏锐，非汪雅秋不娶”。在异地的期间里，我们一起去过很多地方，留下过很多难忘的回忆。有人说：“异地恋其实并不难坚持，因为它真实地考验了两个人的心”。是啊！我们异地经历的那些事，让我们能够看清对方的真心，也让我们的感情更加深厚。最近很喜欢《谁愿放手》中的一句话，“年年月月逝去越是觉得深爱你”。</p>
        <p>我不善于文字表达，写这一个网页和说那么多话也就想表达“我爱你”这简单的三个字而已，说煽情一点就是：“我的心室是单人间，只住得下你一人！”。好期待以后结束异地后的同居生活啊，希望那一天早点到来。</p>
        <p>最后祝wuli趴布猪两周年纪念日快乐哦！</p>
        <div style={{ textAlign: 'right' }}>
          <p>爱你的♥魏锐</p>
          <p>2018年05月20日</p>
        </div>
      </div>
    )
  }
}

export default Letter
