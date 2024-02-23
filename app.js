setInterval(function () {
    var date = new Date()
    var currTime = date.getTime()
    console.log(date.getHours)

    var hour = document.querySelector('#hour')
    var min = document.querySelector('#min')
    var sec = document.querySelector('#sec')

    var hours = date.getHours()
    hour.innerHTML = hours

    var mints = date.getMinutes()
    min.innerHTML = mints

    var secs = date.getSeconds()
    sec.innerHTML = secs

    // var hours = (currTime % (1000 *60 * 60 * 24 ) / (1000 *60 * 60) + 3)
    // // var hours = date.getHour()
    // var hours_res = Math.floor(hours)
    // hour.innerHTML = hours_res

    // var mints = currTime % (1000 * 60 * 60) / (1000 * 60)
    // var mints_res = Math.floor(mints)
    // min.innerHTML = mints_res

    // var secs = currTime % (1000 * 60) / (1000)
    // var secs_res = Math.floor(secs)
    // sec.innerHTML = secs_res
    // console.log(hours_res)
}, 1000)