window.addEventListener('scroll',()=>
{
    document.body.style.setProperty['--scroll',window.pageXOffset/document.body.offsetHeight-window.innerHeight]
})