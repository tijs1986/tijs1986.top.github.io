
function logout(){
    localStorage.setItem('authenticated','false');
}


window.onload = function(){
    const btn01 = document.getElementById('button01');
    const btn02 = document.getElementById('button02');
    const btn03 = document.getElementById('button03');
    let $btnfwd = document.getElementById('forward');
    let $btnback = document.getElementById('back');
    let $image = document.getElementById('image');


    let actual = 1;

    var imgs = [
        'https://assets.onecompiler.app/42vw3gfvx/42vw3nywv/airplane%2001.jpg',
        'https://assets.onecompiler.app/42vw3gfvx/42vw3nywv/airplane%2002.webp',
        'https://www.poweruptoys.com/cdn/shop/articles/fun_airplane_facts_1600x.jpg?v=1670522839',
        'https://cdn.hswstatic.com/gif/airplane-windows.jpg',
        'https://honeywell.scene7.com/is/image/honeywell/AeroBT-s_414384259_Business-Jet_2880x1440'

    ];

    if(localStorage.getItem('authenticated')==='true'){

        btn01.hidden = true;
        btn02.hidden = false;
        btn03.hidden = true;
    }else{

        btn02.hidden = true;
    }

    function forward(){
        if(actual > imgs.length-1){
            actual = 1;
        }else{
            actual++;
        }
        render();
    }

    function back(){
        if(actual<=1){
            actual = imgs.length;
        }else{
            actual--;
        }
        render();
    }

    function render(){
        $image.style.backgroundImage = `url(${imgs[actual-1]})`;
    }

    $btnfwd.addEventListener('click',forward);
    $btnback.addEventListener('click',back);
    render();

}
