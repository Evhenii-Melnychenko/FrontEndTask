let themes = document.getElementsByName('theme');

themes.forEach((theme) => {
    theme.onclick = function() {

        localStorage.setItem('theme', this.value);

        let themeValue = localStorage.getItem('theme');
        themeValue === 'White theme' ? document.body.classList.remove('black') : document.body.classList.add('black');
        
    }
});
    
if ( localStorage.getItem('theme') ) {
    let themeValue = localStorage.getItem('theme');
    document.querySelector('input[name="theme"][value="' + themeValue + '"]').setAttribute('checked','checked');
}

let themeValue = localStorage.getItem('theme');
themeValue === 'White theme' ? document.body.classList.remove('black') : document.body.classList.add('black');