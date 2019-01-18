  import { storiesOf } from '@storybook/angular';
  import { action } from '@storybook/addon-actions';
  import { HeaderMenuComponent } from '../app/menu/header-menu/header-menu.component';

  storiesOf('Menu', module)
    .add('Header menu', () => ({
      component: HeaderMenuComponent,
      props: {text: 'blabla'
      },
    }));
