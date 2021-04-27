export function capitalize(value) { // capitalizes strings
    return value.charAt(0).toUpperCase() + value.slice(1)
}

export function money(value) { // formats value to brazillian currency with two decimal places
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };
    return value.toLocaleString('pt-BR', format);
}

export function translatedStatus(value) { // translate known status from english to portuguese and capitalizes it
    const dictionary = {
        created: 'Solicitada',
        processing: 'Processando',
        processed: 'Concluída',
    };

    return dictionary[value] ? dictionary[value] : capitalize(value);
}