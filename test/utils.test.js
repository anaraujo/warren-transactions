import { capitalize, date, longDate, money, translatedStatus} from '../src/utils/filters';

test('capitalizes strings', () => {
    expect(capitalize('mystring')).toBe('Mystring');
    expect(capitalize('my string')).toBe('My string');
    expect(capitalize('Mystring')).toBe('Mystring');
    expect(capitalize('My string')).toBe('My string');
});

test('formats date string from yyyy-mm-dd to dd/mm/yyyy', () => {
    expect(date('2020-04-29')).toBe('29/04/2020');
    expect(date('04-29-2020')).toBe('29/04/2020');
    expect(date('2020/04/29')).toBe('29/04/2020');
    expect(date('04/29/2020')).toBe('29/04/2020');
    expect(date('29/04/2020')).toBe('Invalid Date');
    expect(date('29-04-2020')).toBe('Invalid Date');
    expect(date('20-04-29')).toBe('Invalid Date');
});

test('formats value to brazillian long date', () => {
    expect(longDate('2020-04-29')).toBe('29 de abril de 2020');
    expect(longDate('04-29-2020')).toBe('29 de abril de 2020');
    expect(longDate('2020/04/29')).toBe('29 de abril de 2020');
    expect(longDate('04/29/2020')).toBe('29 de abril de 2020');
    expect(longDate('29/04/2020')).toBe('Invalid Date');
    expect(longDate('29-04-2020')).toBe('Invalid Date');
    expect(longDate('20-04-29')).toBe('Invalid Date');
});

test('formats value to brazillian currency with two decimal places', () => {
    expect(money(1000)).toBe('R$ 1.000,00');
    expect(money(1000.22)).toBe('R$ 1.000,22');
    expect(money(3)).toBe('R$ 3,00');
    expect(money(3000000)).toBe('R$ 3.000.000,00');
    expect(money('R$ 30.000,00')).toBe('R$ 30.000,00');
});

test('translate known status from english to portuguese and capitalizes it', () => {
    expect(translatedStatus('created')).toBe('Solicitada');
    expect(translatedStatus('processing')).toBe('Processando');
    expect(translatedStatus('processed')).toBe('Concluída');
    expect(translatedStatus('unknown')).toBe('Unknown');
});