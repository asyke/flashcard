const button = document.querySelector('#btn')
const qBox = document.querySelector('.qBox')
const erBox = document.querySelector('.erBox')
const save = document.querySelector('.save')
const closeIcon = document.querySelector('#closeIcon')

const firstTextarea = document.querySelector('#firstTextarea')
const secondTextarea = document.querySelector('#secondTextarea')


button.addEventListener('click', () => {
    qBox.classList.add('show')

})

button.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'coral'
    this.style.color = 'black'
})
button.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'transparent'
    this.style.color = 'coral'
})


closeIcon.addEventListener('click', () => {
    qBox.classList.remove('show')
    firstTextarea.value = ''
    secondTextarea.value = ''
})


save.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#297373'
    this.style.color = 'white'
})

save.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'transparent'
    this.style.color = '#297373'
})


save.addEventListener('click', () => {

    if (!firstTextarea.value || !secondTextarea.value) {
        erBox.classList.add('show')
        qBox.prepend(erBox)
        setTimeout(() => {
            erBox.remove();
        }, 3000)
    } else {
        let secondBox = document.createElement('div')
        secondBox.style.border = '1px coral solid'
        secondBox.style.borderRadius = '5px'
        secondBox.style.width = 'fit-content'
        secondBox.style.display = 'inline-block'
        secondBox.style.margin = '10px'
        secondBox.style.padding = '10px 15px 10px 15px'
        secondBox.style.backgroundColor = 'white'
        secondBox.style.width = '300px'
        secondBox.style.overflowWrap = 'break-word'

        let resText1 = document.createElement('p')

        resText1.innerText = (firstTextarea.value).charAt(0).toUpperCase() + (firstTextarea.value).slice(1)
        resText1.style.margin = '0'
        resText1.style.fontWeight = 'bold'


        secondBox.append(resText1)

        let resTextMiddle = document.createElement('p')
        resTextMiddle.innerText = 'Show/Hide Answer'
        resTextMiddle.style.color = 'blue'
        resTextMiddle.style.cursor = 'pointer'
        resTextMiddle.style.fontSize = '0.7rem'
        resTextMiddle.addEventListener('mouseover', function () {
            this.style.textDecoration = 'underline'
        })
        resTextMiddle.addEventListener('mouseout', function () {
            this.style.textDecoration = 'none'
        })

        secondBox.append(resTextMiddle)


        let resText2 = document.createElement('p')
        resText2.style.fontWeight = 'bold'
        resText2.style.margin = '0 0 10px 0'
        resText2.style.fontSize = '0.8rem'

        resText2.innerText = secondTextarea.value
        resText2.classList.add('hide')
        secondBox.append(resText2)
        resTextMiddle.addEventListener('click', () => {
            resText2.classList.toggle('show')
        })

        let editBtn = document.createElement('button');
        editBtn.style.backgroundColor = 'transparent'
        editBtn.style.color = '#297373'
        editBtn.style.border = '#297373 solid 2px'
        editBtn.style.borderRadius = '5px'
        editBtn.style.padding = '10px'
        editBtn.style.margin = '0 15px 0'
        editBtn.innerText = 'Edit'
        editBtn.style.cursor = 'pointer'
        editBtn.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#297373'
            this.style.color = 'white'
        })
        editBtn.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent'
            this.style.color = '#297373'
        })

        editBtn.addEventListener('click', function () {
            secondBox.remove();
            secondTextarea.value = resText2.innerText
            firstTextarea.value = resText1.innerText.toLowerCase()
            qBox.classList.add('show')

        })

        secondBox.append(editBtn)

        let deleteBtn = document.createElement('button');
        deleteBtn.style.backgroundColor = 'transparent'
        deleteBtn.style.color = 'coral'
        deleteBtn.style.border = 'coral solid 2px'
        deleteBtn.style.borderRadius = '5px'
        deleteBtn.style.padding = '10px'
        deleteBtn.style.margin = '0 55px 0'
        deleteBtn.innerText = 'Delete'
        deleteBtn.style.cursor = 'pointer'
        deleteBtn.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'coral'
            this.style.color = 'white'
        })
        deleteBtn.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent'
            this.style.color = 'coral'
        })
        deleteBtn.addEventListener('click', function () {
            secondBox.remove()
        })

        secondBox.append(deleteBtn)

        document.body.append(secondBox)
        firstTextarea.value = ''
        secondTextarea.value = ''
    }

})