import { describe, expect, it } from 'vitest'

interface Sheep {
  name: string
  color: string
}

const sheeps: Sheep[] = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
]

const SheepCounter = (sheeps: Sheep[]): Sheep[] => {
  return sheeps
    .filter((sheep) => sheep.color === 'rojo')
    .filter(
      (sheep) =>
        sheep.name.toUpperCase().includes('n'.toUpperCase()) &&
        sheep.name.toUpperCase().includes('a'.toUpperCase())
    )
}

describe('SheepCounter', () => {
  it('should be a function', () => {
    expect(typeof SheepCounter).toBe('function')
  })

  it('should return a list of sheeps that contain red color and contains letter n and a in the name', () => {
    expect(SheepCounter(sheeps)).toStrictEqual([
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
    ])
  })
})
