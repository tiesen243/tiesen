import type { Person } from '../types/person'
import { cover } from './images'
const me: Person = {
  name: 'Trần Tiến',
  nickname: 'Tiesen',
  DoB: '22/06/2004',
  Place: 'Ho Chi Minh City, Viet Nam',
  banner: cover,
  college: 'Industrial University of Ho Chi Minh City',
  favourite: ['Coding', 'Reading', 'Music', 'Game'],
  languages: ['Vietnamese', 'English'],
  skills: ['Python', 'JavaScript', 'TypeScript', 'C++'],
}

export default me
