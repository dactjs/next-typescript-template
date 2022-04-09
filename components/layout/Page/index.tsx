import Head from 'next/head';

export interface PageProps {
  title: string;
  description?: string;
}

export const Page: React.FC<React.PropsWithChildren<PageProps>> = ({
  title,
  description,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>

    {children}
  </>
);

export default Page;
