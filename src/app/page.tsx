import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Welcome to Motzkin Store
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Your one-stop shop for quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
              Quality Products
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We offer a wide selection of high-quality products to meet all your needs.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
              Fast Shipping
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Get your orders delivered quickly with our reliable shipping services.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
              Great Support
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our customer support team is here to help you with any questions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
