function blackwhite(self) {
    var target = document.querySelector('body');
        if(self.value === '검은색 배경') {
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
            self.value = '흰색 배경';
        } else {
            target.style.backgroundColor = '#f1f1f1';
            target.style.color = 'black';
            self.value = '검은색 배경';
        }
}