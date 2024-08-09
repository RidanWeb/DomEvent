document.getElementById('btn').addEventListener('click', function readInput(){

    // const getInputValue = document.getElementById('input-field');
    // const inputText = getInputValue.value;

    // const heading = document.getElementById('inputText');
    // heading.innerText = inputText;

    const getInputValue = document.getElementById('input-field');
    const inputText = getInputValue.value;
    document.getElementById('inputText').innerText = inputText;
    getInputValue.value = '';

})




// comment box ======================================
document.getElementById('commentBtn').addEventListener('click', function commentBox(){

    const boxText = document.getElementById('CommentBox');
    boxTextValue = boxText.value;

    const commentSection = document.getElementById('commentPara');
    const para = document.createElement('p');
    para.innerText = boxTextValue;
    commentSection.append(para);

})
// comment box ======================================