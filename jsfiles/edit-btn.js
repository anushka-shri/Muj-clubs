
var editBtnTxt = document.querySelectorAll('#edit-txt');
var editBtnImg = document.querySelectorAll('#edit-img');


function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

editBtnTxt.forEach(function(addText){
    addText.addEventListener('click', function(){
        var html = '<p class="label"></p>' +
        '<textarea id="review" name="review" rows="4" cols="50"></textarea>' +
        '<button class="submit-btn" type="submit" value="Submit">Submit</button>';
        addElement('form-edit-txt', 'div', 'div-edit-txt' ,html);
    })
})

editBtnImg.forEach(function(addImage){
    addImage.addEventListener('click', function(){
        var html = '<input class="browse" type="file" name="datafile" size="40">' +
        '<button class=" submit-btn" type="" name="button">Submit</button>';
        addElement('form-edit-img', 'div', 'div-edit-img' ,html);
    })
})


