// Variables

const accordian = document.getElementsByClassName('content-container')
// console.log(accordian)

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function () {
        // console.log(this.classList)
        this.classList.toggle('active')
    })
}

/*
 "classList" is a property of DOM elements that allows you to manipulate the CSS classes applied to those elements, and it is part of the standard DOM API.

  It is available on all DOM elements, such as those retrieved using methods like getElementsByClassName or querySelectorAll.


*/