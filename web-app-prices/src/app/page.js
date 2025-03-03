"use client";

import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Loading from "@/components/loading";

export default function Home() {
  const [prices, setPrices] = useState({});
  const [status, setStatus] = useState("idle");
  const [search, setSearch] = useState("");

  // Fetch Prices Function
  const fetchPrices = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/crypto");
      const data = await res.json();
      setPrices(data);
      setStatus("succeeded");
    } catch (error) {
      setStatus("failed");
    }
  };

  useEffect(() => {
    fetchPrices(); // Fetch prices initially
  }, []);

  // Filter Prices
  const filteredPrices = Object.keys(prices || {}).filter((key) =>
    key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        🚀 Crypto Price Tracker
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        className="w-full max-w-md p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Refresh Button */}
      <button
        onClick={fetchPrices} // Call fetchPrices instead of reloading
        className="px-6 py-3 mb-5 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition cursor-pointer"
      >
        🔄 Refresh Prices
      </button>

      {/* Loading & Error Handling */}
      {status === "loading" && (
        <Loading/>
      )}
      {status === "failed" && <p className="text-red-500">Error loading prices.</p>}

      {/* Crypto Prices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPrices.length > 0 ? (
          filteredPrices.map((key) => (
            <CryptoCard key={key} name={key.toUpperCase()} symbol={key} price={prices[key].usd} />
          ))
        ) : (
          <p className="text-gray-500">No cryptocurrencies found.</p>
        )}
      </div>
    </div>
  );
}
