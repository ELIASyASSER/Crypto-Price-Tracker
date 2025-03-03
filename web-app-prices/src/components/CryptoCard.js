export default function CryptoCard({ name, price, symbol }) {
    return (
      <div className="bg-gray-800 rounded-xl p-5 shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-100">{name}</h2>
        <p className="text-gray-400 uppercase">{symbol}</p>
        <p className="text-2xl font-bold text-green-400">${price}</p>
      </div>
    );
  }
  