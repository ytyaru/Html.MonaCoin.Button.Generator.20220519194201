class MpurseSendButtonGenerator {
    async copy() {
        try {
            this.#toast('クリップボードにコピーしました！')
            await navigator.clipboard.writeText(document.getElementById('export').innerHTML) 
        }
        catch(e) { console.debug('クリップボードのコピーに失敗しました……。', e) }
    }
    #toast(message) {
        if (Toastify) {
            Toastify({
                text: message,
                position: 'center',
                //duration: 3000,
                //destination: "https://github.com/apvarun/toastify-js",
                //newWindow: true,
                //close: true,
                //gravity: "top", // `top` or `bottom`
                //position: "left", // `left`, `center` or `right`
                //stopOnFocus: true, // Prevents dismissing of toast on hover
                //style: {
                //    background: "linear-gradient(to right, #00b09b, #96c93d)",
                //},
                //onClick: function(){} // Callback after click
            }).showToast();
        } else { alert(message) }
    }
    async generate(button) {
        const a = this.#makeA()
        a.appendChild(this.#makeImg())
        this.#export(a)
    }
    #export(a) {
        document.getElementById('export').innerHTML = ''
        document.getElementById('export').appendChild(a)
        document.getElementById('export-image-size').innerHTML = this.#exportImageSize()
        document.getElementById('export-code').value = document.getElementById('export').innerHTML
    }
    #exportImageSize() {
        if (document.getElementById('image-url').value) { return '? B' }
        else { return document.querySelector(`#export > a > img`).getAttribute('src').length + ' B' }
    }
    #makeA() {
        const a = document.createElement('a')
        const address = document.getElementById('address').value
        const asset = document.getElementById('asset').value || 'MONA'
        const amount = document.getElementById('amount').value || 0.114
        const memo = document.getElementById('memo').value
        const memoType = (memo) ? 'plain' : 'no' // 'no', 'hex', 'plain'
        const ok = document.getElementById('call-back-ok').value
        const ng = document.getElementById('call-back-ng').value
        a.setAttribute('href', `javascript:window.mpurse.sendAsset('${address}', '${asset}', ${amount}, '${memoType}', '${memo}').then(result=>{${ok}}, error=>{${ng}});`)
        a.setAttribute('title', document.getElementById('a-title').value)
        return a
    }
    #makeImg() {
        const img = document.createElement('img')
        const size = document.getElementById(`image-size`).value
        img.setAttribute('width', `${size}`)
        img.setAttribute('height', `${size}`)
        let imgSrc = document.getElementById('image-url').value
        const imgSize = (64 < size) ? 256 : 64
        if (!imgSrc) {
            const targetId = `base64-${document.getElementById('image').value.split('.')[0]}-${imgSize}`
            imgSrc = document.getElementById(targetId).value
        }
        img.setAttribute('src', `${imgSrc}`)
        return img
    }
}

