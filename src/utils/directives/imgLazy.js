import defaultGif from '../../assets/gif/loading.gif' //默认图

let imgs = []

function loadingImg(imgDom) {
    //获取该img元素的src信息
    let imgSrc = imgs.filter((img) => img.dom === imgDom)[0].src;
    const tempImg = new Image()
    tempImg.onload = function () {
        imgDom.src = imgSrc
    }
    tempImg.src = imgSrc
    imgs = imgs.filter((i) => i.dom !== imgDom) //将加载好的图片进行删除
}

const io = new IntersectionObserver((entries) => {
    //entries 为 IntersectionObserverEntry对像数组
    entries.forEach((item) => {
        //item为 IntersectionObserverEntry 对象

        // isIntersecting是一个Boolean值，判断目标元素当前是否可见
        if (item.isIntersecting) {
            //img元素可见时
            loadingImg(item.target); //加载该img元素
            io.unobserve(item.target); //图片加载完后即停止监听该元素
        }
    });
})

export default {
    inserted(el, bindings) {
        el.src = defaultGif
        io.observe(el)
        const img = {
            dom: el,
            src: bindings.value
        }
        imgs.push(img)
    },
    unbind(el) {
        io.unobserve(el)
        imgs = imgs.filter((img) => img.dom !== el)
    }
}