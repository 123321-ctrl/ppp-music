import debounce from 'lodash/debounce'

export const setDomFontSize = () =>{
    let width = document.documentElement.clientWidth || document.body.clientWidth
    let fontSize = (width <= 1200 ? 1300 : width)/100 + 'px'
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize
}

//防抖
const setDomFontSizeDebounce = debounce(setDomFontSize,500)

window.addEventListener('resize',setDomFontSizeDebounce)