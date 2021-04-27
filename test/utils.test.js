import { capitalize, money, translatedStatus} from '../src/utils/filters';

test('capitalizes strings', () => {
    expect(capitalize('mystring')).toBe('Mystring');
    expect(capitalize('my string')).toBe('My string');
    expect(capitalize('Mystring')).toBe('Mystring');
    expect(capitalize('My string')).toBe('My string');
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