
const ulList = document.getElementsByClassName('job-list-box')[0]
const lilists = ulList.getElementsByTagName('li');

// const fetchData = async (url) => {
//     const res = await fetch(url);
//     const html = await res.text()
//     console.log(html.includes('立即沟通'))
// }
const autoClick = (url) => {
    window.open(url)
}
const waitAutoClickArr = [];
[...lilists].forEach(ele => {
    const a = ele.getElementsByTagName('a')[0]
    if (a) {
        waitAutoClickArr.push(a.href)
    }
})
// console.log(waitAutoClickArr)
waitAutoClickArr.forEach((ele, index) => {
    autoClick(ele);
})
