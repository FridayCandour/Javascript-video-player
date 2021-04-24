const label = document.getElementById('filereader')
const media_box = document.getElementById('media_box')
let fileInput = document.querySelector('input[type=file]')

if (window.File && window.FileList && window.FileReader) {
        function showFile(){
        for(var i = 0; i < fileInput.files.length; i++) {
        let file_reader = new FileReader()
                file_reader.onload = (readerEvent) => {
                let v = document.createElement('video');
                v.id = 'media';
                v.src = `${readerEvent.target.result}`;
                media_box.title = "click for full screen mode";
                label.style.display = 'none'
                v.poster.src = "poster.png"
                media_box.append(v);
                let media = document.querySelector('#media');
                v.controls = true
                pv()
                media.play();
            console.log(i)
        }    
            file_reader.readAsDataURL(fileInput.files[i])

            file_reader.onloadend = function (){
            let media = document.querySelector('#media');
            media.addEventListener('timeupdate', pv, false);
            media.play();
            media.addEventListener('ended', next, false);
                };
    }
    function pv(){
        if (!document.fullscreenElement) {
            media.requestFullscreen();
        };
    };
    function next(){
        media_box.innerHTML = ""
        label.style.display = 'flex'   
    }        
    }
}
