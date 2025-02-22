import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/')({
  component: RouteComponent,
});

function RouteComponent() {
  console.log('fefe');
  return <div>Hello "/test/"fefe!</div>;
}
