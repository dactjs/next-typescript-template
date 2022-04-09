import { Page, Dashboard } from '@/components';
import { EnhancedNextPage } from '@/types';

const Home: EnhancedNextPage = () => (
  <Page title="Next + TypeScript" description="Another Next App template">
    <main style={{ margin: 'auto' }}>
      <h1>Content</h1>
    </main>
  </Page>
);

Home.getLayout = (page) => <Dashboard>{page}</Dashboard>;

export default Home;
