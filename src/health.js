/**
 * Определяет статус здоровья персонажа
 * @param {{name: string, health: number}} character
 * @returns {'healthy' | 'wounded' | 'critical'}
 */
export function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}