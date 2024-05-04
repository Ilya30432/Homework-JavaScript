const input = document.querySelector('.input');
const submitButton = document.querySelector('.btn');
const title = document.querySelector('.title')
const text = document.querySelector('.text')
const buttonComent = document.querySelector('.btn-comment')
const commentInfo = document.querySelector('.comment')

submitButton.addEventListener('click',function(){
    if( input.value > 0 && input.value < 101){
        fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`).then(response => response.json())
        .then(post => {
        title.textContent = post.title;
        text.textContent = post.body;
        buttonComent.style.display = 'block'
        commentInfo.textContent = ''
        }).catch(error => alert('Ошибка'));
        
    }else{
        alert('Введите число от 1 до 100')
    }
})

buttonComent.addEventListener('click',function(){
    buttonComent.style.display = 'none'
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${input.value}`).then(response => response.json())
    .then(comment => {
        commentInfo.textContent = ''
        comment.forEach(text => {
        const textComment = document.createElement('p')
        textComment.textContent = `
        Id - ${text.id} ;
        Name: ${text.name};
        Email: ${text.email};
        Text: ${text.body};`
        commentInfo.appendChild(textComment)
        });
    }).catch(error => alert('Ошибка'));
})