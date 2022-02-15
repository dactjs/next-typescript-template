import { Page, Dashboard } from '@/components';
import { EnhancedNextPage } from '@/types';

const Home: EnhancedNextPage = () => (
  <Page title="Next + TypeScript" description="Another Next App template">
    <main>
      <h1>Building Something Great!</h1>
    </main>
  </Page>
);

Home.getLayout = (page) => <Dashboard>{page}</Dashboard>;

export default Home;
