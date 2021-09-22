var xhr = new XMLHttpRequest();
xhr.open('GET', 'html Parts/Header.html', true);
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    document.getElementById('Header').innerHTML = this.responseText;
};
xhr.send();