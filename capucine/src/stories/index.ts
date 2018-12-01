import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { HomeComponent } from '../app/home/home.component';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: HomeComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
