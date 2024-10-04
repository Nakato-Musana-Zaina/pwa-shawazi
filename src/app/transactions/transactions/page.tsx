import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import SideBar from '@/app/(buyer)/buyer/components/SideBarPwa';
import { Search } from 'lucide-react';

interface Transaction {
  date: string;
  status: string;
  amount: string;
}

const Dashboard: FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/transactions');
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data.slice(0, 5)); // Get only the first 5 transactions
      } catch (err) {
        setError('Failed to load transactions. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar userRole={''} />
      <main className="flex-1 p-20">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold lg:text-3xl">Hello John, Welcome to Shawazi</h2>
          <div className="relative w-1/2">
            <input
              type="search"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-lg p-2 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </header>
        <p className="text-lg mb-8">Let&apos;s start, you have no new notifications</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-yellow-500 text-white py-8 px-6 rounded-md shadow-lg hover:bg-yellow-600 transition-colors h-40">
            Upload land documents
          </button>
          <button className="bg-yellow-500 text-white py-8 px-6 rounded-md shadow-lg hover:bg-yellow-600 transition-colors h-40">
            Go to chats
          </button>
          <button className="bg-yellow-500 text-white py-8 px-6 rounded-md shadow-lg hover:bg-yellow-600 transition-colors h-40">
            Upload receipt of payment
          </button>
        </div>
        
        <div className="w-full max-w-5xl mt-20 mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <Link href="/transactions/history-of-transactions">
              <button className="bg-hover text-white py-2 px-4 rounded-lg mb-2 md:mb-0">
                History Of Transactions
              </button>
            </Link>
            <Link href="/transactions/upload_transactions">
              <button className="bg-hover text-white py-2 px-4 rounded-lg">
                Upload Payments
              </button>
            </Link>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-black text-sm md:text-base lg:text-lg">Date</th>
                <th className="p-2 text-black text-sm md:text-base lg:text-lg">Status</th>
                <th className="p-2 text-black text-sm md:text-base lg:text-lg">Amount</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="p-2" colSpan={3}>
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td className="p-2" colSpan={3}>
                    Error: {error}
                  </td>
                </tr>
              ) : transactions.length > 0 ? (
                transactions.map((transaction, idx) => (
                  <tr key={idx} className="border-b border-primary">
                    <td className="p-2 text-sm md:text-base lg:text-lg">{formatDate(transaction.date)}</td>
                    <td className="p-2 text-sm md:text-base lg:text-lg">
                      <span
                        className={`px-2 py-2 rounded-lg text-white ${
                          transaction.status === "Complete"
                            ? "bg-hover"
                            : transaction.status === "Pending"
                            ? "bg-secondary"
                            : transaction.status === "rejected"
                            ? "bg-red-500"
                            : ""
                        }`}
                      >
                        {transaction.status === "Complete" ? "Complete" : transaction.status}
                      </span>
                    </td>
                    <td className="p-2 text-sm md:text-base lg:text-lg">{transaction.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2" colSpan={3}>
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <Link href="/transactions/history-of-transactions">
              <button className="bg-hover text-white py-2 px-4 rounded-lg">
                View More
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;