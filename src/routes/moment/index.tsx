import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import moment from 'moment';

export const head: DocumentHead = {
  title: 'Moment.js Example',
};


export default component$(() => {
  const items = new Array(40).fill(null).map((_, index) => 'item ' + index);

  return (
    <div>
      <p>This is an example of lazily executing a heavy JavaScript library like <strong>moment.js</strong> when the component becomes visible.</p>

      <p>
        ⬇️ <strong>Scroll down</strong> until the time is in view.
      </p>

      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <Clock />
    </div>
  );
});

export const Clock = component$(() => {

  const store = useStore<{time: string}>({
    time: ''
  });

  useClientEffect$(() => {
    const update = () => {
      store.time = moment().format('MMMM Do YYYY, h:mm:ss a')
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  return (
    <div>
    <pre>moment().format('MMMM Do YYYY, h:mm:ss a')</pre>
    <p>{store.time}</p>
    </div>
  );
});
