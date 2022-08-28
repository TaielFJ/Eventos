window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='black';
    moviesListTitulo.style.padding = '20px';


    let img = document.querySelector('img')
    img.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'lightgrey';
    })
    img.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'lightblue';
    })
    
}