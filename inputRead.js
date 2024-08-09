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
    boxText.value = '';

})
// comment box ======================================


// Delete Confirm And more Events of DOM=============
// document.getElementById('moreEvent').addEventListener('mouseenter', function(){
        //     console.log("Mouse Enter...");
        // })
        // document.getElementById('moreEvent').addEventListener('mousemove', function(){
        //     console.log("Mouse Move...");
        // })
        // document.getElementById('moreEvent').addEventListener('mouseleave', function(){
        //     console.log("Mouse Leave...");
        // })

        //input Field Events===================
        // document.getElementById('moreEventsText').addEventListener('focus', function(){

        //     console.log("Input Field Focus Events Occur...")
        // });
        // document.getElementById('moreEventsText').addEventListener('blur', function(){

        //     console.log("Input Field Blur Events Occur...")
        // });

        // document.getElementById('moreEventsText').addEventListener('keydown', function(event){

        //     console.log(event.target.value);
        // });

        // document.getElementById('moreEventsText').addEventListener('keypress', function(event){

        //     console.log(event.target.value);
        // });

        // document.getElementById('moreEventsText').addEventListener('keyup', function(event){

        //     console.log(event.target.value);
        // });
// Delete Confirm And more Events of DOM=============

// git Delete =============
document.getElementById('gitDelete').addEventListener('keyup', function(event){

    const text = event.target.value;
    const disableBtn = document.getElementById('deleteEvent');
    
    if(text === 'delete'){
        
        disableBtn.removeAttribute('disabled');

    }else{

        disableBtn.setAttribute('disabled', true);
    }
    
})

document.getElementById('deleteEvent').addEventListener('click', function(){

document.getElementById('headingDelete').style.display = 'none';
})