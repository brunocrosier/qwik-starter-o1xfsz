import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/moment">
            Moment
          </a>
        </li>
        <li>
          <a href="/moment-above">
            Above the Fold
          </a>
        </li>
        <li>
          <a href="/flower">
            Flower
          </a>
        </li>
      </ul>
    </header>
  );
});
