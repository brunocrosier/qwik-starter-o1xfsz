import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import moment from 'moment';

export const head: DocumentHead = {
    title: 'Moment.js Example',
};


export default component$(() => {
    return <Clock />
});

export const Clock = component$(() => {

    const store = useStore<{ time: string }>({
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
