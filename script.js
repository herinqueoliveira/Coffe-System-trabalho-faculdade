const detalhesPDV = {
  tradicional: {
    titulo: "PDV Tradicional",
    descricao: "Computador, monitor touch, gaveta de dinheiro, impressora térmica, leitor de código de barras. Ideal para cafeterias estruturadas."
  },
  movel: {
    titulo: "PDV Móvel",
    descricao: "Tablet ou smartphone, impressora Bluetooth, máquina de cartão. Ideal para espaços reduzidos."
  },
  auto: {
    titulo: "PDV Autoatendimento",
    descricao: "Totem com tela touch ou tablet fixo. Reduz atendentes e otimiza o atendimento."
  },
  qr: {
    titulo: "PDV com QR Code",
    descricao: "Pedido e pagamento pelo celular. Ótimo para modernizar a experiência e evitar filas."
  },
  web: {
    titulo: "PDV Web-Based",
    descricao: "Funciona direto no navegador, sem instalar nada. Leve, acessível e barato."
  }
};
function mostrarDetalhes(tipo) {
  const info = detalhesPDV[tipo];
  document.getElementById('titulo-pdv').innerText = info.titulo;
  document.getElementById('descricao-pdv').innerText = info.descricao;
  document.getElementById('detalhes-pdv').style.display = 'block';
}
