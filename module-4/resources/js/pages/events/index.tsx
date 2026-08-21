import { Form, Head } from '@inertiajs/react';
import EventController from '@/actions/App/Http/Controllers/EventController';
import { Button } from '@/components/ui/button';
import { create, index } from '@/routes/events';
import type { MeetupGroup } from '@/types';
import EventForm from './eventForm';

export default function EventCreate({ meetupGroups }: { meetupGroups: MeetupGroup[] }) {
    return (
        <>
            <Head title="Create Event" />

            <Form {...EventController.store.form()} className="max-w-xl space-y-6">
                {({ processing, errors }) => (
                    <>
                        <EventForm errors={errors} meetupGroups={meetupGroups} />

                        <Button type="submit" disabled={processing}>
                            {processing ? 'Creating...' : 'Create Event'}
                        </Button>
                    </>
                )}
            </Form>
        </>
    );
}

EventCreate.layout = {
    breadcrumbs: [
        { title: 'Upcoming Events', href: index.url() },
        { title: 'Create Event', href: create.url() },
    ],
};
