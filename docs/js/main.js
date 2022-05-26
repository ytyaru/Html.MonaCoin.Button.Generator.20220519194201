window.addEventListener('load', async(event) => {
    try {
        window.mpurse.updateEmitter.removeAllListeners()
          .on('stateChanged', isUnlocked => console.log(isUnlocked))
          .on('addressChanged', address => console.log(address));
        document.getElementById('address').value = await window.mpurse.getAddress()
    } catch(e) { console.debug(e) }
    const gen = new MpurseSendButtonGenerator() 
    await gen.generate()
    document.getElementById('get-address').addEventListener('click', async(event) => {
        document.getElementById('address').value = await window.mpurse.getAddress()
        await gen.generate()
    })
    document.getElementById('address').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('amount').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('asset').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('memo').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('image').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('image-url').addEventListener('change', async(event) => { await gen.generate() })
    document.getElementById('image-size').addEventListener('change', async(event) => { await gen.generate() })
    document.getElementById('a-title').addEventListener('change', async(event) => { await gen.generate() })
    document.getElementById('call-back-ok').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('call-back-ng').addEventListener('input', async(event) => { await gen.generate() })
    document.getElementById('copy-to-clipboard').addEventListener('click', async(event) => { await gen.copy() })
    const mention = new WebMention(30) 
    await mention.make() 
});

