javascript
// Script JavaScript principal (pode ser usado para funcionalidades como formulários, validações, etc.)
// Exemplo: Adicionar comportamento ao formulário de contato
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Aqui você pode adicionar lógica para enviar os dados do formulário via AJAX, por exemplo
        // Exemplo básico para alerta ao enviar o formulário
        alert('Formulário enviado com sucesso!');
    });
});
