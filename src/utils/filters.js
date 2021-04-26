export function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

export function money(value) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };
    return value.toLocaleString('pt-BR', format);
}

export function translatedStatus(value) {
    const dictionary = {
        created: 'Solicitada',
        processing: 'Processando',
        processed: 'Concluída',
    };

    return dictionary[value];
}