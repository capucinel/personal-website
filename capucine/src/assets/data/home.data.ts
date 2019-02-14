import { HomeData, HomeDataMenu } from './home.model';

export const homeInfos: HomeData[] = [
{
  key: 'Disponibilité :',
  value: 'Immédiate'
},

{
  key: 'Age :',
  value: '34 ans'
},
{
  key: 'Villes :',
  value: 'Nantes & Paris'
},
{
  key: 'Email :',
  value: 'capucine.leclerc@gmail.com'
}
];

export const menuInfos: HomeDataMenu[] = [
{
  value: 'home',
  link: '/',
},
{
  value: 'about me',
  link: 'about'
},
{
  value: 'my resume',
  link: 'resume'

},
{
  value: 'services',
  link: 'services'

},
{
  value: 'portfolio',
  link: 'about'

},
{
  value: 'contact',
  link: 'about'

}];
