const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');
const formTitle = document.getElementById('formTitle');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnLoginPanel = document.getElementById('btnLoginPanel');

let isLogin = false; // Estado inicial: tela cadastro

btnLoginPanel.addEventListener('click', () => {
    if (!isLogin) {
        // Muda para login
        isLogin = true;
        formTitle.textContent = 'ENTRAR NA SUA CONTA';
        btnSubmit.textContent = 'ENTRAR';
        nameInput.style.display = 'none'; // Esconde o campo nome no login
        btnLoginPanel.textContent = 'CADASTRAR';
    } else {
        // Muda para cadastro
        isLogin = false;
        formTitle.textContent = 'CRIA SUA CONTA';
        btnSubmit.textContent = 'CADASTRAR';
        nameInput.style.display = 'block';
        btnLoginPanel.textContent = 'ENTRAR';
    }
    form.reset();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (isLogin) {
        // Simulação Login
        if (email === '' || password === '') {
            alert('Por favor, preencha e-mail e senha para entrar.');
            return;
        }

        // Aqui você pode validar o login (exemplo simples)
        if (email === 'rafaelplss.dev@gmail.com' && password === '1234') {
            alert(`Login realizado com sucesso!\nUsuário: ${email}`);
            window.location.href = 'index.html'; // redireciona para nova página
        } else {
            alert('E-mail ou senha incorretos!');
        }
        if (email === 'rafaelplss.admin@gmail.com' && password === '1234') {
            alert(`Login realizado com sucesso!\nUsuário: ${email}`);
            window.location.href = 'admin/admin.html'; // redireciona para nova página
        } else {
            alert('E-mail ou senha incorretos!');
        }
    } else {
        // Simulação Cadastro
        if (name === '' || email === '' || password === '') {
            alert('Por favor, preencha todos os campos para cadastrar.');
            return;
        }

        // Aqui você pode armazenar o cadastro
        alert(`Cadastro realizado com sucesso!\nNome: ${name}\nEmail: ${email}`);
        form.reset();
    }
});
