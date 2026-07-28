document.querySelector('.search-bar input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let query = this.value;
        if(query) {
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    }
});
