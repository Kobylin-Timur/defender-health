import { getHealthStatus } from './health.js';

describe('getHealthStatus', () => {
  test('возвращает "healthy" при здоровье > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  test('возвращает "wounded" при здоровье от 15 до 50 включительно', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Паладин', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Жрец', health: 15 })).toBe('wounded');
  });

  test('возвращает "critical" при здоровье < 15', () => {
    expect(getHealthStatus({ name: 'Разбойник', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Некромант', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Призрак', health: -5 })).toBe('critical');
  });
});