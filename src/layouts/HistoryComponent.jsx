import { useEffect, useState } from "react";

const HistoryComponent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions (Replace with your actual API call or Firebase query)
    const fetchTransactions = async () => {
      const mockTransactions = [
        // {
        //   id: 1,
        //   amount: "$500",
        //   type: "Deposit",
        //   date: "2025-02-15",
        //   currency: "USD",
        //   status: "Completed",
        // },
        // {
        //   id: 2,
        //   amount: "$300",
        //   type: "Withdrawal",
        //   date: "2025-02-14",
        //   currency: "USD",
        //   status: "Pending",
        // },
      ];
      setTransactions(mockTransactions);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-2 px-4 border-b border-gray-700">S/N</th>
              <th className="py-2 px-4 border-b border-gray-700">Amount</th>
              <th className="py-2 px-4 border-b border-gray-700">
                Transaction Type
              </th>
              <th className="py-2 px-4 border-b border-gray-700">Date</th>
              <th className="py-2 px-4 border-b border-gray-700">Currency</th>
              <th className="py-2 px-4 border-b border-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <tr
                  key={tx.id}
                  className="text-center border-b border-gray-700"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{tx.amount}</td>
                  <td className="py-2 px-4">{tx.type}</td>
                  <td className="py-2 px-4">{tx.date}</td>
                  <td className="py-2 px-4">{tx.currency}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      tx.status === "Completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryComponent;
