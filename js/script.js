const eleGrid = document.querySelector('.grid')
const eleButton = document.querySelector('button')
const eleLevel = document.getElementById ('level')


for (let i = 1; i <= 100; i++) {

    const eleCell = document.createElement('div')
        eleCell.innerHTML = `${i}`
        eleCell.classList.add('cell')
        eleGrid.append(eleCell);
        eleCell.style.width = "calc(100% / 10)"
        eleCell.style.width = "calc(100% / 10)"

        eleCell.addEventListener('click', function(){
            this.classList.toggle('active')
        })
}


eleButton.addEventListener('click', function() {

    eleGrid.replaceChildren()

    let levelIndex

    if (eleLevel.value == 1) {
        levelIndex = 100
    } else if (eleLevel.value == 2) {
        levelIndex = 81
    } else {
        levelIndex = 49
    }

    for (let i = 1; i <= levelIndex; i++) {

        const eleCell = document.createElement('div')
        eleCell.innerHTML = `${i}`
        eleCell.classList.add('cell')
        eleGrid.append(eleCell);

        if (levelIndex == 100) {
            eleCell.style.width = "calc(100% / 10)"
            eleCell.style.width = "calc(100% / 10)"
        } else if (levelIndex == 81) {
            eleCell.style.width = "calc(100% / 9)"
            eleCell.style.height = "calc(100% / 9)"
        } else {
            eleCell.style.width = "calc(100% / 7)"
            eleCell.style.height = "calc(100% / 7)"
        }

        eleCell.addEventListener('click', function(){
            this.classList.toggle('active')
        })

    }

})

