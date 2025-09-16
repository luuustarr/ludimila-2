const form = document.getElementById('contatoForm'); 
const msg = document.getElementById('msg'); 
form.addEventListener('submit', function(e) { 
e.preventDefault(); 
const nome = document.getElementById('nome').value.trim(); 
const email = document.getElementById('email').value.trim(); 
const mensagem = document.getElementById('mensagem').value.trim(); 
if (nome && email && mensagem) { 
msg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`; 
msg.style.color = "green"; 
form.reset(); 
} else { 
msg.textContent = "Por favor, preencha todos os campos.";