var str = "<p class = \"introhello\"><h1 class=\"text-primary\">Hello! <span class = \"emoji\">&#x1f44b;&#x1f3fe;</span></h1> </p> <h2 class=\"introtagline\">I'm<span class=\"text-primary\"> Kenechukwu Ajufo</span>, a web developer based in Lagos, Nigeria. I am passionate about <strong>everything related to web development.</strong></h2>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 145);
}());