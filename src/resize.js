function mainResize (type) {
  const { innerWidth, innerHeight } = window;
  let vertical = innerHeight > innerWidth? 1: 0;

  let width = innerWidth - (parseInt((innerWidth / 100), 10) * 30)
  let height = innerHeight - (parseInt((innerHeight / 100), 10) * 18)

  let textHeight = vertical === 1 ? '95%': '90%';

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.overflow='hidden'
    if (type === 'app') {
      return {width: width, height: height, left: '15%', marginLeft: '0', top: '5%'}
    } else if (type === 'date') {
      return {position: 'unset', fontSize: '8px'}
    } else if (type === 'time') {
      return {fontSize: '14px'}
    } else if (type === 'hello') {
      return {fontWeight: '900', fontSize: '18px'}
    } else if (type === 'text') {
      return {overflowY: 'scroll', width: '102%', height: textHeight}
    }
  }
  if (type === 'hello') {
    return {}
  }
  return {}
}

function appResize (type) {
  const { innerWidth, innerHeight } = window;
  let vertical = innerHeight > innerWidth? 1: 0;

  let radio = 10
  let height = innerHeight - (parseInt((innerHeight / 100), 10) * 70)
  let width = Math.min(innerWidth - (parseInt((innerWidth / 100), 10) * radio), height * 1.7)

  let bottom = vertical === 1 ? '40%': '30%';
  let left = vertical === 1 ? '5%': (((100 - radio)/2 - 10) + '%');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (type === 'envelope') {
      return {width: width, height: height, left: left, bottom: bottom}
    } else if (type === 'down') {
      return {borderLeftWidth: (width / 2) + 3, borderRightWidth: (width / 2) + 1 , borderTopWidth: (height / 2)}
    } else if (type === 'up') {
      return {borderLeftWidth: (width / 2) + 3, borderRightWidth: (width / 2) + 1 , borderBottomWidth: (height / 2)}
    } else if (type === 'heart') {
      return {left: '44%', top: '40%'}
    } else if (type === 'tips') {
      return {width: width}
    }
  }
  return {}
}

export {appResize, mainResize}
