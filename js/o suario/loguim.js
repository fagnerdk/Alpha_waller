

// 1. Inicialização do socket
const socket = io('http://localhost:3009');

var inp = document.getElementById("message");
var usuario = document.querySelector(".usuario");
var lista_msg1 = document.getElementById("lista_msg");

// CONFIGURAÇÃO DO CONTÊINER: Centralizado e com balões próximos verticalmente
lista_msg1.style.display = "flex";
lista_msg1.style.flexDirection = "column";
lista_msg1.style.gap = "4px";           // Aproxima os balões verticalmente
lista_msg1.style.padding = "15px";
lista_msg1.style.listStyle = "none";
lista_msg1.style.maxWidth = "450px";    // Define uma largura máxima estável
lista_msg1.style.margin = "0 auto";     // Centraliza a caixa do chat na página

// 🚀 Variáveis globais para controle de sessão
let usuarioLogado = false;
let usuarioLogadoDados = null; // Armazenará os dados do banco (id, email, nome) após o login

// 2. OUVINTE DO SOCKET NO ESCOPO GLOBAL (Mensagens Recebidas)
socket.on('message', (text) => {
  if (!usuarioLogado) {
    console.log("Mensagem recebida bloqueada: Usuário não está logado ainda.");
    return; 
  }

  // BALÃO VERDE - MENSAGEM RECEBIDA (Canto Esquerdo)
  let balaoRecebido = document.createElement('li'); 
  
  // 🚀 ID ÚNICO: Identifica que é recebida e adiciona um marcador de tempo exclusivo
  balaoRecebido.id = "msg-rec-" + Date.now();
  
  balaoRecebido.style.backgroundColor = "rgb(5, 246, 9)"; 
  balaoRecebido.style.padding = "8px 12px";
  balaoRecebido.style.maxWidth = "70%";
  balaoRecebido.style.width = "fit-content";          // Faz o balão se ajustar ao tamanho do texto
  balaoRecebido.style.borderRadius = "15px 15px 15px 0px";
  balaoRecebido.style.margin = '5px 250px';
  balaoRecebido.innerHTML = text;
  
  lista_msg1.appendChild(balaoRecebido);
});

// 3. FUNÇÃO PARA ENVIAR MENSAGEM
function enviar_for() {
  if (!usuarioLogado) {
    alert("Você precisa fazer login para enviar mensagens!");
    return;
  }

  const text = inp.value.trim();

  if (text == '') {
    console.log('erro');
    inp.value = '';
  } else {
    socket.emit('message', text);

    // BALÃO AZUL - MENSAGEM PRÓPRIA ENVIADA (Canto Direito)
    let balaoProprio = document.createElement('li');
    
    // 🚀 ID ÚNICO E SEGURO: Combina o ID ou e-mail do usuário logado com o timestamp atual
    const identificadorUsuario = usuarioLogadoDados.id || usuarioLogadoDados.email;
    balaoProprio.id = `msg-user-${identificadorUsuario}-${Date.now()}`;
    
    balaoProprio.style.backgroundColor = "rgb(5, 134, 246)";
    balaoProprio.style.color = "white";
    balaoProprio.style.padding = "8px 12px";
    balaoProprio.style.maxWidth = "70%";
    balaoProprio.style.width = "fit-content";          // Faz o balão se ajustar ao tamanho do texto
    balaoProprio.style.borderRadius = "15px 15px 0px 15px";       
    balaoProprio.style.margin = '5px 150px';
    balaoProprio.innerHTML = text;
    
    lista_msg1.appendChild(balaoProprio);
    inp.value = '';
  }
}

// 4. LOGUIN DO USUÁRIO
async function entra() {
  let emailInput = document.getElementById("email").value.trim();
  let senhaInput = document.getElementById("senha").value.trim();

  if (emailInput == '') {
    document.getElementById("email").style.color = 'red';
    document.getElementById("email").value = ' preencha o campo email';
    return;
  } else if (senhaInput == '') {
    document.getElementById("senha").style.color = 'red';
    document.getElementById("senha").value = ' preencha o campo senha';
    document.getElementById("senha").type = 'text';
    return;
  }
  
  fetch("http://localhost:3009/lista_usuario")
    .then((conta) => conta.json())
    .then((usuarioLista) => {
      let loginComSucesso = false;
      let dadosUsuarios = Array.isArray(usuarioLista) ? usuarioLista : (usuarioLista.rows || []);

      for (var i = 0; i < dadosUsuarios.length; i++) {
        if (dadosUsuarios[i].email === emailInput && dadosUsuarios[i].senha === senhaInput) {
          loginComSucesso = true;
          // 🚀 SALVA OS DADOS DO USUÁRIO LOGADO NA VARIÁVEL GLOBAL
          usuarioLogadoDados = dadosUsuarios[i]; 
          break;
        }
      }

      if (loginComSucesso) {
        usuarioLogado = true; // 🔓 Libera a aplicação
        
        document.getElementById("caixa_loga").style.display = "none";
        document.getElementById("foto_cap").style.display = "";
        document.getElementById("usuario_root").style.display = "";
        
        document.getElementById("foto_cap").style.backgroundImage = "url(https://fbcdn.net)";
        console.log("Login bem-sucedido para:", usuarioLogadoDados.email);
      } else {
        alert("Usuário ou senha incorretos!");
      }
    })
    .catch(err => console.error("Erro ao ler dados do servidor:", err));
}

function x() {
  document.getElementById("caixa_loga").style.display = "none";
  document.getElementById("entra_loga").style.display = "";
}
