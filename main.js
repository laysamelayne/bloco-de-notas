function openFilter(){
    if(!document.getElementById('filter').classList.contains('show')){
        document.getElementById('filter').classList.add('show')
    }
    else{
        document.getElementById('filter').classList.remove('show')
    }
}

let trocar = document.getElementById('trocar')
const icon = document.getElementById('icon');
function like(){
   
    icon.src = "img/icon-color.png"
}

trocar.addEventListener('click', like)


