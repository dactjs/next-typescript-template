import { NextPage } from 'next';

type Component = React.ReactElement;

export type EnhancedNextPage<P = unknown> = NextPage<P> & {
  getLayout?: (page: Component) => Component;
};

export default EnhancedNextPage;
