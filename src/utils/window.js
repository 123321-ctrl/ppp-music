/**页面最大化 */
export function requestFullScreen() {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
}
/**退出最大化 */
export function exitFullscreen() {
    const de = window.parent.document;

    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    } else if (de.msExitFullscreen) {
        de.msExitFullscreen()
    }
}

// 判断当前是否全屏
export function isFullScreen() {
    if (document.fullscreenElement === null) {
        console.log("当前不处于全屏模式");
        return false;
      } else {
        console.log("当前处于全屏模式");
        return true;
      }
  }