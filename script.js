function submit() {
    var coloredDiv = document.getElementById("coloredDiv")
    coloredDiv.setAttribute('style', 'background:red;')

    // envia mensagem ao app flutter
    JavascriptChannel.postMessage("Mensagem vinda do Javascript");
}

function ok() {
    var coloredDiv = document.getElementById("coloredDiv")
    coloredDiv.setAttribute('style', 'background:orange;')
}