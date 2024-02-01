const i = id => document.getElementById(id);
const qs = selector => document.querySelector(selector);
const qsa = selector => document.querySelectorAll(selector);

function crel(options){
    // {
    //     element
    //     id
    //     class
    //     parent
    //     chiled
    //     inner - InnerHTML
    //     text - innerText
    //     style - {}
    //     attr - {}
    // }

    const id = ('id' in options) ? options.id : '';
    const cls = ('class' in options) ? options.class : '';

    let element = document.createElement(options.element);
    element.id = id;
    element.className = cls;

    if('style' in options) {
        for(const prop in options.style){
            element.style[prop] = options.style[prop];
        }
    }

    if('attr' in options) {
        for(const prop in options.attr){
            element[prop] = options.attr[prop];
        }
    }

    if ('inner' in options) {
        element.innetHTML = options.inner;
    }

    if ('text' in options) {
        element.textContent  = options.text;
    }

    if ('chiled' in options) {
        element.appendChild(options.chiled);
    }

    if ('parent' in options) {
        if (typeof options.parent === "object") {
            options.parent.appendChild(element);
        }else{
            const parent = qs(options.parent);
            parent.appendChild(element);
        }
    }

    return element;
}