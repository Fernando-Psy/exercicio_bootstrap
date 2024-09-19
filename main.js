document.getElementById('telefone').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, '');
    
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    input.value = value;
});