export function capitalize(value) { // capitalizes strings
    return value.charAt(0).toUpperCase() + value.slice(1)
}

export function date(value) { // formats date string from yyyy-mm-dd to dd/mm/yyyy
    let dateFormat = new Date(value);

    return dateFormat.toLocaleDateString('pt-BR', { dateStyle: 'short', timeZone: "UTC" });
}

export function longDate(value) { // formats value to brazillian long date
    let dateFormat = new Date(value);

    return dateFormat.toLocaleDateString('pt-BR', { dateStyle: 'long', timeZone: "UTC" });
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