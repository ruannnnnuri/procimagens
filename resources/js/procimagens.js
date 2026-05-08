const checkConstante = document.getElementById('checkConstante');
const adicao = document.getElementById('adicao');
const subtracao = document.getElementById('subtracao');
const multiplicacao = document.getElementById('multiplicacao');
const divisao = document.getElementById('divisao');
const converterCinza = document.getElementById('converterCinza');
const invHorizontal = document.getElementById('invHorizontal');
const invVertical = document.getElementById('invVertical');
const girar180 = document.getElementById('girar180');
const diferenca = document.getElementById('diferenca');
const blending = document.getElementById('blending');
const media = document.getElementById('media');
const limiarizacao = document.getElementById('limiarizacao');
const logicand = document.getElementById('logicand');
const logicor = document.getElementById('logicor');
const logicnot = document.getElementById('logicnot');
const logicxor = document.getElementById('logicxor');
const negativo = document.getElementById('negativo');
const equalizacao = document.getElementById('equalizacao');
const realceMax = document.getElementById('realceMax');
const realceMin = document.getElementById('realceMin');
const realceMean = document.getElementById('realceMean');
const mediana = document.getElementById('mediana');
const ordem = document.getElementById('ordem');

/*-----------------------------------ADICAO---------------------------------------*/
adicao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    const constanteAdd = Number(document.getElementById('constante').value);
    if(checkConstante.checked){
        if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
            alert('As imagens precisam ter as mesmas dimensões!');
            return;
        }
        for (let i=0; i<pixels1.length; i+=4) {
            pixelsResult[i] = Math.min(pixels1[i]+pixels2[i], 255);
            pixelsResult[i+1] = Math.min(pixels1[i+1]+pixels2[i+1], 255);
            pixelsResult[i+2] = Math.min(pixels1[i+2]+pixels2[i+2], 255);
            pixelsResult[i+3] = 255;
        }
    }else{
        for (let i=0; i<pixels1.length; i+=4) {
            pixelsResult[i] = Math.min(pixels1[i]+constanteAdd, 255);
            pixelsResult[i+1] = Math.min(pixels1[i+1]+constanteAdd, 255);
            pixelsResult[i+2] = Math.min(pixels1[i+2]+constanteAdd, 255);
            pixelsResult[i+3] = 255;
        }
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------SUBTRACAO---------------------------------------*/
subtracao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    const constanteSubt = Number(document.getElementById('constante').value);
    if(checkConstante.checked){
        if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
            alert('As imagens precisam ter as mesmas dimensões!');
            return;
        }
        for (let i=0; i<pixels1.length; i+=4) {
            pixelsResult[i] = Math.max(pixels1[i]-pixels2[i], 0);
            pixelsResult[i+1] = Math.max(pixels1[i+1]-pixels2[i+1], 0);
            pixelsResult[i+2] = Math.max(pixels1[i+2]-pixels2[i+2], 0);
            pixelsResult[i+3] = 255;
        }
    }else{
        for (let i=0; i<pixels1.length; i+=4) {
            pixelsResult[i] = Math.max(pixels1[i]-constanteSubt, 0);
            pixelsResult[i+1] = Math.max(pixels1[i+1]-constanteSubt, 0);
            pixelsResult[i+2] = Math.max(pixels1[i+2]-constanteSubt, 0);
            pixelsResult[i+3] = 255;
        }
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------MULTIPLICACAO---------------------------------------*/
multiplicacao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    const constanteMult = Number(document.getElementById('constante').value);
    
    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = Math.min(pixels1[i]*constanteMult, 255);
        pixelsResult[i+1] = Math.min(pixels1[i+1]*constanteMult, 255);
        pixelsResult[i+2] = Math.min(pixels1[i+2]*constanteMult, 255);
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------DIVISAO---------------------------------------*/
divisao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    const constanteDiv = Number(document.getElementById('constante').value);
    
    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = Math.max(pixels1[i]/constanteDiv, 0);
        pixelsResult[i+1] = Math.max(pixels1[i+1]/constanteDiv, 0);
        pixelsResult[i+2] = Math.max(pixels1[i+2]/constanteDiv, 0);
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*---------------------CONVERTER RGB PARA ESCALA DE CINZA-------------------------*/
converterCinza.addEventListener('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;
    
    for (let i=0; i<pixels1.length; i+=4) {
        const convercao = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        pixelsResult[i] = convercao;
        pixelsResult[i+1] = convercao;
        pixelsResult[i+2] = convercao;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*----------------------------INVERTER HORIZONTAL---------------------------------*/
invHorizontal.addEventListener('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;
    
    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);
            const idxRev = ((linha * canvas1.width + (canvas1.width-1-coluna)) * 4);

            pixelsResult[idxRev] = pixels1[idx];
            pixelsResult[idxRev + 1] = pixels1[idx + 1];
            pixelsResult[idxRev + 2] = pixels1[idx + 2];
            pixelsResult[idxRev + 3] = 255;
        }
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------INVERTER VERTICAL----------------------------------*/

invVertical.addEventListener('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;
    
    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);
            const idxRev = (((canvas1.height-1-linha) * canvas1.width + coluna) * 4);

            pixelsResult[idxRev] = pixels1[idx];
            pixelsResult[idxRev + 1] = pixels1[idx + 1];
            pixelsResult[idxRev + 2] = pixels1[idx + 2];
            pixelsResult[idxRev + 3] = 255;
        }
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*--------------------------------GIRAR 180º-------------------------------------*/

girar180.addEventListener('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;
    
    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = pixels1[pixels1.length-i-4];
        pixelsResult[i+1] = pixels1[pixels1.length-i-3];
        pixelsResult[i+2] = pixels1[pixels1.length-i-2];
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*--------------------------------DIFERENCA-------------------------------------*/

diferenca.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    for (let i=0; i<pixels1.length; i+=4) {
        const aux1r = Math.max(pixels1[i]   - pixels2[i],   0);
        const aux1g = Math.max(pixels1[i+1] - pixels2[i+1], 0);
        const aux1b = Math.max(pixels1[i+2] - pixels2[i+2], 0);

        const aux2r = Math.max(pixels2[i]   - pixels1[i],   0);
        const aux2g = Math.max(pixels2[i+1] - pixels1[i+1], 0);
        const aux2b = Math.max(pixels2[i+2] - pixels1[i+2], 0);

        pixelsResult[i]   = Math.min(aux1r + aux2r, 255);
        pixelsResult[i+1] = Math.min(aux1g + aux2g, 255);
        pixelsResult[i+2] = Math.min(aux1b + aux2b, 255);
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*--------------------------------BLENDING-------------------------------------*/

blending.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    const fator = Number(document.getElementById('blendfactor').value);

    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = Math.min((fator/100) * pixels1[i] + (1-(fator/100)) * pixels2[i], 255);
        pixelsResult[i+1] = Math.min((fator/100) * pixels1[i+1] + (1-(fator/100)) * pixels2[i+1], 255);
        pixelsResult[i+2] = Math.min((fator/100) * pixels1[i+2] + (1-(fator/100)) * pixels2[i+2], 255);
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*----------------------------------MEDIA---------------------------------------*/

media.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = Math.min((pixels1[i] + pixels2[i]), 255) / 2;
        pixelsResult[i+1] = Math.min((pixels1[i+1] + pixels2[i+1]), 255) / 2;
        pixelsResult[i+2] = Math.min((pixels1[i+2] + pixels2[i+2]), 255) / 2;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-------------------------------LIMIARIZACAO------------------------------------*/

limiarizacao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let i=0; i<pixels1.length; i+=4) {
        const cinza = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        let limiar;

        if(cinza >= 128){
            limiar = 255;
        }else{
            limiar = 0;
        }

        pixelsResult[i] = limiar;
        pixelsResult[i+1] = limiar;
        pixelsResult[i+2] = limiar;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------NOT----------------------------------------*/

logicnot.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let i=0; i<pixels1.length; i+=4) {
        const cinza = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        let limiar;

        if(cinza >= 128){
            limiar = 1;
        }else{
            limiar = 0;
        }
        const resultado = (!limiar) *255;

        pixelsResult[i] = resultado;
        pixelsResult[i+1] = resultado;
        pixelsResult[i+2] = resultado;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------AND----------------------------------------*/

logicand.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    for (let i=0; i<pixels1.length; i+=4) {
        const cinza1 = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        const cinza2 = Math.floor((pixels2[i]+pixels2[i+1]+pixels2[i+2]) / 3);
        let limiar1;
        let limiar2;

        if(cinza1 >= 128){
            limiar1 = 1;
        }else{
            limiar1 = 0;
        }
        if(cinza2 >= 128){
            limiar2 = 1;
        }else{
            limiar2 = 0;
        }
        const resultado = (limiar1 && limiar2) *255;

        pixelsResult[i] = resultado;
        pixelsResult[i+1] = resultado;
        pixelsResult[i+2] = resultado;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------OR----------------------------------------*/

logicor.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    for (let i=0; i<pixels1.length; i+=4) {
        const cinza1 = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        const cinza2 = Math.floor((pixels2[i]+pixels2[i+1]+pixels2[i+2]) / 3);
        let limiar1;
        let limiar2;

        if(cinza1 >= 128){
            limiar1 = 1;
        }else{
            limiar1 = 0;
        }
        if(cinza2 >= 128){
            limiar2 = 1;
        }else{
            limiar2 = 0;
        }
        const resultado = (limiar1 || limiar2) *255;

        pixelsResult[i] = resultado;
        pixelsResult[i+1] = resultado;
        pixelsResult[i+2] = resultado;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------XOR----------------------------------------*/

logicxor.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvas2 = document.getElementById('img2Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixels2 = imageData2.data;
    const pixelsResult = imageDataResult.data;

    if (canvas1.width !== canvas2.width || canvas1.height !== canvas2.height) {
        alert('As imagens precisam ter as mesmas dimensões!');
        return;
    }

    for (let i=0; i<pixels1.length; i+=4) {
        const cinza1 = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        const cinza2 = Math.floor((pixels2[i]+pixels2[i+1]+pixels2[i+2]) / 3);
        let limiar1;
        let limiar2;

        if(cinza1 >= 128){
            limiar1 = 1;
        }else{
            limiar1 = 0;
        }
        if(cinza2 >= 128){
            limiar2 = 1;
        }else{
            limiar2 = 0;
        }
        const resultado = (limiar1 && !limiar2 || !limiar1 && limiar2) *255;

        pixelsResult[i] = resultado;
        pixelsResult[i+1] = resultado;
        pixelsResult[i+2] = resultado;
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*--------------------------------NEGATIVO-------------------------------------*/

negativo.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = 255 - pixels1[i];
        pixelsResult[i+1] = 255 - pixels1[i+1];
        pixelsResult[i+2] = 255 - pixels1[i+2];
        pixelsResult[i+3] = 255;
    }
    
    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*------------------------------EQUALIZACAO-----------------------------------*/

equalizacao.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let i=0; i<pixels1.length; i+=4) {
        const convercao = Math.floor((pixels1[i]+pixels1[i+1]+pixels1[i+2]) / 3);
        pixels1[i] = convercao;
        pixels1[i+1] = convercao;
        pixels1[i+2] = convercao;
        pixels1[i+3] = 255;
    }

    let histograma = new Array(256).fill(0);

    for (let i=0; i<pixels1.length; i+=4) {
        histograma[pixels1[i]]++;
    }

    let cfd = new Array(256);
    let cfdmin = 50000;

    for (let i=0; i<256; i++) {
        if(i==0){
            cfd[i] = histograma[i];
        }else{
            cfd[i] = cfd[i-1] + histograma[i];
        }

        if(cfd[i]<cfdmin){
            cfdmin = cfd[i];
        }
    }

    let h = new Array(256);

    for (let i=0; i<256; i++) {
        h[i] = Math.floor(((cfd[i] - cfdmin) / ((canvas1.width * canvas1.height) - cfdmin)) * (256-1)); 
    }

    for (let i=0; i<pixels1.length; i+=4) {
        pixelsResult[i] = h[pixels1[i]];
        pixelsResult[i+1] = h[pixels1[i]];
        pixelsResult[i+2] = h[pixels1[i]];
        pixelsResult[i+3] = 255;
    }

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});


/*------------------------------REALCE MAX-----------------------------------*/
realceMax.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);

            const cima        = ((linha - 1) * canvas1.width + coluna) * 4;
            const baixo       = ((linha + 1) * canvas1.width + coluna) * 4;
            const esquerda    = (linha * canvas1.width + (coluna - 1)) * 4;
            const direita     = (linha * canvas1.width + (coluna + 1)) * 4;
            const cimaEsq     = ((linha - 1) * canvas1.width + (coluna - 1)) * 4;
            const cimaDir     = ((linha - 1) * canvas1.width + (coluna + 1)) * 4;
            const baixoEsq    = ((linha + 1) * canvas1.width + (coluna - 1)) * 4;
            const baixoDir    = ((linha + 1) * canvas1.width + (coluna + 1)) * 4;

            const vizinhos = [cima, baixo, esquerda, direita, cimaEsq, cimaDir, baixoEsq, baixoDir];

            const maxR = Math.max(
                pixels1[idx], pixels1[cima], pixels1[baixo], pixels1[esquerda], pixels1[direita],
                pixels1[cimaEsq], pixels1[cimaDir], pixels1[baixoEsq], pixels1[baixoDir]
            );

            const maxG = Math.max(
                pixels1[idx+1], pixels1[cima+1], pixels1[baixo+1], pixels1[esquerda+1], pixels1[direita+1],
                pixels1[cimaEsq+1], pixels1[cimaDir+1], pixels1[baixoEsq+1], pixels1[baixoDir+1]
            );

            const maxB = Math.max(
                pixels1[idx+2], pixels1[cima+2], pixels1[baixo+2], pixels1[esquerda+2], pixels1[direita+2],
                pixels1[cimaEsq+2], pixels1[cimaDir+2], pixels1[baixoEsq+2], pixels1[baixoDir+2]
            );
            
            pixelsResult[idx] = maxR;
            pixelsResult[idx+1] = maxG;
            pixelsResult[idx+2] = maxB;
            pixelsResult[idx+3] = 255;
        }
    }

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*------------------------------REALCE MIN-----------------------------------*/
realceMin.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);

            const cima        = ((linha - 1) * canvas1.width + coluna) * 4;
            const baixo       = ((linha + 1) * canvas1.width + coluna) * 4;
            const esquerda    = (linha * canvas1.width + (coluna - 1)) * 4;
            const direita     = (linha * canvas1.width + (coluna + 1)) * 4;
            const cimaEsq     = ((linha - 1) * canvas1.width + (coluna - 1)) * 4;
            const cimaDir     = ((linha - 1) * canvas1.width + (coluna + 1)) * 4;
            const baixoEsq    = ((linha + 1) * canvas1.width + (coluna - 1)) * 4;
            const baixoDir    = ((linha + 1) * canvas1.width + (coluna + 1)) * 4;

            const minR = Math.min(
                pixels1[idx], pixels1[cima], pixels1[baixo], pixels1[esquerda], pixels1[direita],
                pixels1[cimaEsq], pixels1[cimaDir], pixels1[baixoEsq], pixels1[baixoDir]
            );

            const minG = Math.min(
                pixels1[idx+1], pixels1[cima+1], pixels1[baixo+1], pixels1[esquerda+1], pixels1[direita+1],
                pixels1[cimaEsq+1], pixels1[cimaDir+1], pixels1[baixoEsq+1], pixels1[baixoDir+1]
            );

            const minB = Math.min(
                pixels1[idx+2], pixels1[cima+2], pixels1[baixo+2], pixels1[esquerda+2], pixels1[direita+2],
                pixels1[cimaEsq+2], pixels1[cimaDir+2], pixels1[baixoEsq+2], pixels1[baixoDir+2]
            );
            
            pixelsResult[idx] = minR;
            pixelsResult[idx+1] = minG;
            pixelsResult[idx+2] = minB;
            pixelsResult[idx+3] = 255;
        }
    }

    processarBorda(canvas1.height, canvas1.width, pixelsResult);

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*------------------------------REALCE MEDIA-----------------------------------*/
realceMean.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);

            const cima        = ((linha - 1) * canvas1.width + coluna) * 4;
            const baixo       = ((linha + 1) * canvas1.width + coluna) * 4;
            const esquerda    = (linha * canvas1.width + (coluna - 1)) * 4;
            const direita     = (linha * canvas1.width + (coluna + 1)) * 4;
            const cimaEsq     = ((linha - 1) * canvas1.width + (coluna - 1)) * 4;
            const cimaDir     = ((linha - 1) * canvas1.width + (coluna + 1)) * 4;
            const baixoEsq    = ((linha + 1) * canvas1.width + (coluna - 1)) * 4;
            const baixoDir    = ((linha + 1) * canvas1.width + (coluna + 1)) * 4;

            const meanR = (
                pixels1[idx] + pixels1[cima] + pixels1[baixo] + pixels1[esquerda] + pixels1[direita] +
                pixels1[cimaEsq] + pixels1[cimaDir] + pixels1[baixoEsq] + pixels1[baixoDir]
            ) / 9;

            const meanG = (
                pixels1[idx] + pixels1[cima+1] + pixels1[baixo+1] + pixels1[esquerda+1] + pixels1[direita+1] +
                pixels1[cimaEsq+1] + pixels1[cimaDir+1] + pixels1[baixoEsq+1] + pixels1[baixoDir+1]
            ) / 9;

            const meanB = (
                pixels1[idx] + pixels1[cima+2] + pixels1[baixo+2] + pixels1[esquerda+2] + pixels1[direita+2] +
                pixels1[cimaEsq+2] + pixels1[cimaDir+2] + pixels1[baixoEsq+2] + pixels1[baixoDir+2]
            ) / 9;
            
            pixelsResult[idx] = meanR;
            pixelsResult[idx+1] = meanG;
            pixelsResult[idx+2] = meanB;
            pixelsResult[idx+3] = 255;
        }
    }

    processarBorda(canvas1.height, canvas1.width, pixelsResult);

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*------------------------------MEDIANA-----------------------------------*/
mediana.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);

            if(!(coluna === 0 || linha === 0 || coluna === canvas1.width - 1 || linha === canvas1.height - 1)){
                const cima        = ((linha - 1) * canvas1.width + coluna) * 4;
                const baixo       = ((linha + 1) * canvas1.width + coluna) * 4;
                const esquerda    = (linha * canvas1.width + (coluna - 1)) * 4;
                const direita     = (linha * canvas1.width + (coluna + 1)) * 4;
                const cimaEsq     = ((linha - 1) * canvas1.width + (coluna - 1)) * 4;
                const cimaDir     = ((linha - 1) * canvas1.width + (coluna + 1)) * 4;
                const baixoEsq    = ((linha + 1) * canvas1.width + (coluna - 1)) * 4;
                const baixoDir    = ((linha + 1) * canvas1.width + (coluna + 1)) * 4;

                const listaR = [
                    pixels1[idx], pixels1[cima], pixels1[baixo], pixels1[esquerda], pixels1[direita],
                    pixels1[cimaEsq], pixels1[cimaDir], pixels1[baixoEsq], pixels1[baixoDir]
                ].sort((a, b) => a - b);

                const listaG = [
                    pixels1[idx], pixels1[cima+1], pixels1[baixo+1], pixels1[esquerda+1], pixels1[direita+1],
                    pixels1[cimaEsq+1], pixels1[cimaDir+1], pixels1[baixoEsq+1], pixels1[baixoDir+1]
                ].sort((a, b) => a - b);

                const listaB = [
                    pixels1[idx], pixels1[cima+2], pixels1[baixo+2], pixels1[esquerda+2], pixels1[direita+2],
                    pixels1[cimaEsq+2], pixels1[cimaDir+2], pixels1[baixoEsq+2], pixels1[baixoDir+2]
                ].sort((a, b) => a - b);

                pixelsResult[idx] = listaR[4];
                pixelsResult[idx+1] = listaG[4];
                pixelsResult[idx+2] = listaB[4];
            }
            pixelsResult[idx+3] = 255;
        }
    }

    processarBorda(canvas1.height, canvas1.width, pixelsResult);

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*------------------------------ORDEM-----------------------------------*/
ordem.addEventListener ('click', function() {
    const canvas1 = document.getElementById('img1Preview');
    const canvasResult = document.getElementById('resultPreview');

    canvasResult.width = canvas1.width;
    canvasResult.height = canvas1.height;

    const ctx1 = canvas1.getContext('2d');
    const ctxResult = canvasResult.getContext('2d');
    
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageDataResult = ctxResult.createImageData(canvas1.width, canvas1.height);
    
    const pixels1 = imageData1.data;
    const pixelsResult = imageDataResult.data;

    const posicaoOrdem = Number(document.getElementById('posicaoOrdem').value);

    for (let linha=0; linha<(canvas1.height); linha++) {
        for (let coluna=0; coluna<(canvas1.width); coluna++) {
            const idx = ((linha * canvas1.width + coluna) * 4);

            if(!(coluna === 0 || linha === 0 || coluna === canvas1.width - 1 || linha === canvas1.height - 1)){
                const cima        = ((linha - 1) * canvas1.width + coluna) * 4;
                const baixo       = ((linha + 1) * canvas1.width + coluna) * 4;
                const esquerda    = (linha * canvas1.width + (coluna - 1)) * 4;
                const direita     = (linha * canvas1.width + (coluna + 1)) * 4;
                const cimaEsq     = ((linha - 1) * canvas1.width + (coluna - 1)) * 4;
                const cimaDir     = ((linha - 1) * canvas1.width + (coluna + 1)) * 4;
                const baixoEsq    = ((linha + 1) * canvas1.width + (coluna - 1)) * 4;
                const baixoDir    = ((linha + 1) * canvas1.width + (coluna + 1)) * 4;

                const listaR = [
                    pixels1[idx], pixels1[cima], pixels1[baixo], pixels1[esquerda], pixels1[direita],
                    pixels1[cimaEsq], pixels1[cimaDir], pixels1[baixoEsq], pixels1[baixoDir]
                ].sort((a, b) => a - b);

                const listaG = [
                    pixels1[idx], pixels1[cima+1], pixels1[baixo+1], pixels1[esquerda+1], pixels1[direita+1],
                    pixels1[cimaEsq+1], pixels1[cimaDir+1], pixels1[baixoEsq+1], pixels1[baixoDir+1]
                ].sort((a, b) => a - b);

                const listaB = [
                    pixels1[idx], pixels1[cima+2], pixels1[baixo+2], pixels1[esquerda+2], pixels1[direita+2],
                    pixels1[cimaEsq+2], pixels1[cimaDir+2], pixels1[baixoEsq+2], pixels1[baixoDir+2]
                ].sort((a, b) => a - b);

                pixelsResult[idx] = listaR[posicaoOrdem];
                pixelsResult[idx+1] = listaG[posicaoOrdem];
                pixelsResult[idx+2] = listaB[posicaoOrdem];
            }
            pixelsResult[idx+3] = 255;
        }
    }

    processarBorda(canvas1.height, canvas1.width, pixelsResult);

    ctxResult.putImageData(imageDataResult, 0, 0);

    canvasResult.style.width = '100%';
    canvasResult.style.maxWidth = '280px';
    canvasResult.style.height = 'auto';
});

/*-----------------------------------UPLOAD---------------------------------------*/
const carregarImagens = document.querySelectorAll('.carregarImagem');

function uploadImage(input, canvas) {
    const arquivo = input.files[0];
      
    if (!arquivo) return;
            
    if (!arquivo.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido!');
        return;
    }
            
    const leitor = new FileReader();
            
    leitor.onload = function(e) {
        const img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.style.width = '100%';
            canvas.style.maxWidth = '280px';
            canvas.style.height = 'auto';
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
        }
        img.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
}
        
carregarImagens.forEach(input => {
    input.addEventListener('change', function() {
        // Encontra o preview dentro do mesmo div
        const preview = this.closest('div').querySelector('.preview');
        uploadImage(this, preview);
    });
});

/*-----------------------------------OUTROS---------------------------------------*/
const constante = document.getElementById('constante');
const blendfactor = document.getElementById('blendfactor');
const posicaoOrdem = document.getElementById('blendfactor');

function ajustarValor(a) {
    let valor = parseFloat(a.value);
    const min = parseFloat(a.min);
    const max = parseFloat(a.max);
    
    if (isNaN(valor)) {
        a.value = min;
    } else if (valor < min) {
        a.value = min;
    } else if (valor > max) {
        a.value = max;
    }

    return a;
}

// Atualiza valor quando clicar fora
constante.addEventListener('blur', function(){
    ajustarValor(constante)
});

blendfactor.addEventListener('blur', function(){
    ajustarValor(blendfactor)
});

posicaoOrdem.addEventListener('blur', function(){
    ajustarValor(posicaoOrdem)
});

// Atualiza valor quando apertar Enter
constante.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajustarValor(constante);
    }
});
blendfactor.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajustarValor(blendfactor);
    }
});
posicaoOrdem.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajustarValor(posicaoOrdem);
    }
});

// Desativar botões de multiplicação e divisão
checkConstante.addEventListener('change', function() {
    multiplicacao.disabled = this.checked;
    divisao.disabled = this.checked;
});

function processarBorda(height, width, pixelsResult){
    for (let linha=0; linha<(height); linha++) {
        for (let coluna=0; coluna<(width); coluna++) {
            const idx = ((linha * width + coluna) * 4);
            const cima        = ((linha - 1) * width + coluna) * 4;
            const baixo       = ((linha + 1) * width + coluna) * 4;
            const esquerda    = (linha * width + (coluna - 1)) * 4;
            const direita     = (linha * width + (coluna + 1)) * 4;
            const cimaEsq     = ((linha - 1) * width + (coluna - 1)) * 4;
            const cimaDir     = ((linha - 1) * width + (coluna + 1)) * 4;
            const baixoEsq    = ((linha + 1) * width + (coluna - 1)) * 4;
            const baixoDir    = ((linha + 1) * width + (coluna + 1)) * 4;

            if(coluna === 0 && linha === 0){
                pixelsResult[idx] = pixelsResult[baixoDir];
                pixelsResult[idx+1] = pixelsResult[baixoDir+1];
                pixelsResult[idx+2] = pixelsResult[baixoDir+2];
            }else if(coluna === 0 && linha === height-1){
                pixelsResult[idx] = pixelsResult[cimaDir];
                pixelsResult[idx+1] = pixelsResult[cimaDir+1];
                pixelsResult[idx+2] = pixelsResult[cimaDir+2];
            }else if(coluna === width-1 && linha === 0){
                pixelsResult[idx] = pixelsResult[baixoEsq];
                pixelsResult[idx+1] = pixelsResult[baixoEsq+1];
                pixelsResult[idx+2] = pixelsResult[baixoEsq+2];
            }else if(coluna === 0){
                pixelsResult[idx] = pixelsResult[direita];
                pixelsResult[idx+1] = pixelsResult[direita+1];
                pixelsResult[idx+2] = pixelsResult[direita+2];
            }else if(linha === 0){
                pixelsResult[idx] = pixelsResult[baixo];
                pixelsResult[idx+1] = pixelsResult[baixo+1];
                pixelsResult[idx+2] = pixelsResult[baixo+2];
            }else if(coluna === width - 1){
                pixelsResult[idx] = pixelsResult[esquerda];
                pixelsResult[idx+1] = pixelsResult[esquerda+1];
                pixelsResult[idx+2] = pixelsResult[esquerda+2];
            }else if(linha === height - 1){
                pixelsResult[idx] = pixelsResult[cima];
                pixelsResult[idx+1] = pixelsResult[cima+1];
                pixelsResult[idx+2] = pixelsResult[cima+2];
            }
        }
    }
}