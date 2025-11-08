// Gerador de QR Codes personalizado para e-commerces usando Node.js

const qrcode = require('qrcode-terminal');

function gerarQRCode(link) {
    qrcode.generate(link, { small: true });
    console.log('QR Code gerado com sucesso para o link:', link);
}

// Exemplo de uso do gerador de QR Codes
const linkProduto = 'https://exemplo.com/produto123';
gerarQRCode(linkProduto);
