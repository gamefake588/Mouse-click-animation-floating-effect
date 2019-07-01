const body = document.body

body.onclick = () => {

    // 获取鼠标点击的横向坐标和纵向坐标
    let e = event || window.event
    let x = e.pageX
    let y = e.pageY

    // 创建节点并赋予属性
    const div = document.createElement('div')
    div.classList.add('random-alert')
    div.style.left = x + "px"
    div.style.top = y + "px"
    div.style.zIndex = '9999999'
    div.innerHTML = `起飞`

    // 属性添加完毕插入节点
    body.appendChild(div)

    // 每隔0ms它的top值 - 1
    setInterval(() => {
        let newlTop = parseInt(div.style.top) - 1
        div.style.top = newlTop + 'px'
    }, 0)

    // 插入节点x秒后删除节点
    setTimeout(() => {
        body.removeChild(div);
    }, 1500)

}