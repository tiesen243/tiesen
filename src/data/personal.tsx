import type { Person } from '../types/person'
const me: Person = {
  name: 'Trần Tiến',
  DoB: '22/06/2004',
  Place: 'Ho Chi Minh City, Viet Nam',
  avatar: require('../assets/images/1640249997536.jpg'),
  banner: require('../assets/images/bg_4x.png'),
  college: 'Industrial University of Ho Chi Minh City',
  favourite: ['Coding', 'Reading', 'Music', 'Game'],
  languages: ['Vietnamese', 'English'],
  skills: ['python', 'javascript', 'typescript', 'C++'],
}

export default me
