import Head from 'next/head';

export interface PageProps {
  title: string;
  description?: string;
}

export const Page: React.FC<PageProps> = ({ title, description, children }) => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>

    {children}
  </div>
);

export default Page;
