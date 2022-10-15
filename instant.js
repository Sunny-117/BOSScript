// console.log(location.href.includes('job_detail'), 'asmdlka')
// if (location.href.includes('job_detail')) {

// }

// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log('DOMContentLoaded')
//     const btn = document.getElementsByClassName('btn-container')[0]

//     if (btn) {
//         const aLink = btn.getElementsByClassName('btn-startchat')[0]
//         if (aLink) {
//             aLink.click()
//         } else {
//             console.log('aLink挂了', aLink)
//         }
//     } else {
//         console.log('btn挂了', btn)
//     }
// })



// js跨浏览器标签页通信 storage
// iframe
// 获取页面一的a标签，发送请求获取a标签对应的链接的数据，再从中得到立即沟通对应的请求，发送请求
// 写一个浏览器脚本，把以上三行代码放进去就行


// 定时器5s轮训一次，一旦有了跳出轮训，没有继续，10次后结束提示错误

function fetch() {
    const btn = document.getElementsByClassName('btn-container')[0]
    if (btn) {
        const aLink = btn.getElementsByClassName('btn-startchat')[0]
        if (aLink) {
            aLink.click()
        } else {
            console.log('aLink挂了', aLink)
        }
    } else {
        console.log('btn挂了', btn)
    }

}
fetch()
const timer = setInterval(() => {
    console.log('重新轮训')
    fetch()
    const textBtn = document.getElementsByClassName('btn-startchat')[0]
    if (!textBtn && location.pathname === '/web/geek/job') {
        clearInterval(timer)
        console.log('是主页，不管他')
        return
    }
    if (location.pathname === '/web/geek/chat') {
        window.close()
        return
    }
    if(leftTitle){
        clearInterval(timer)
        window.close()
        return;
    }
    if (textBtn.innerText === '继续沟通') {
        console.log('玩事了')
        clearInterval(timer)
        window.close()
    }
}, 10);
