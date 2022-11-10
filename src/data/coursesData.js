import courses from './courses.json'
import removeDiacritics from './removeDiacritics'

// better with reduce but not so readable
export const categories = [
  ...new Set(courses.map((course) => course.Etiquetas)),
  '',
].sort()

export const titles = [...new Set(courses.map((course) => course.Curso))].sort()

export const levels = ['A1', 'A2', 'B1', 'B2', 'C1']

export const coursesData = courses.map((course) => ({
  ...course,
  title: removeDiacritics(course.Curso).toLowerCase(),
}))

export const areas = [
  '1.1',
  '1.2',
  '1.3',
  '1.4',
  '1.5',
  '2.1',
  '2.2',
  '2.3',
  '3.1',
  '3.2',
  '3.3',
  '3.4',
  '4.1',
  '4.2',
  '4.3',
  '5.1',
  '5.2',
  '5.3',
  '6.1',
  '6.2',
  '6.3',
  '6.4',
  '6.5',
]

export const areasAndLevels = areas.flatMap((area) =>
  levels.map((level) => `Área ${area} - Nivel ${level}`)
)
