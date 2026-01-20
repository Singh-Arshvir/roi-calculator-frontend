import { useState } from "react";
import "./App.css";
export default function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [timeframe, setTimeframe] = useState("1 Day");
  const [apyEnabled, setApyEnabled] = useState(true);
  const [tier, setTier] = useState("Tier 1");

  const timeframes = ["1 Day", "7 Days", "30 Days", "1 Year", "5 Year"];
  const tiers = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];

  return (
    <div className="min-h-screen bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#2b2b2b]">ROI Calculator</h1>
          <button className="text-xl">✕</button>
        </div>

        {/* Currency Toggle */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-sm font-semibold">CAKE</span>
          <button
            onClick={() => setCurrency(currency === "USD" ? "CAKE" : "USD")}
            className={`w-12 h-6 rounded-full relative transition ${currency === "USD" ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${currency === "USD" ? "right-0.5" : "left-0.5"}`}
            />
          </button>
          <span className="text-sm font-semibold">USD</span>
        </div>

        {/* Amount Input */}
        <div className="bg-gray-100 rounded-xl p-4 text-right text-2xl font-bold">
          {amount.toFixed(3)} {currency}
        </div>

        {/* Quick Buttons */}
        <div className="flex gap-3">
          {[1000, 100].map(v => (
            <button
              key={v}
              onClick={() => setAmount(v)}
              className="px-4 py-2 bg-gray-100 rounded-lg font-semibold"
            >
              ${v}
            </button>
          ))}
        </div>

        {/* Timeframe */}
        <div>
          <p className="font-semibold mb-2">Timeframe</p>
          <div className="flex gap-2 flex-wrap">
            {timeframes.map(t => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${timeframe === t ? "bg-yellow-300" : "bg-gray-100"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* APY Toggle */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">Enable Accelerated APY</p>
          <button
            onClick={() => setApyEnabled(!apyEnabled)}
            className={`w-12 h-6 rounded-full relative transition ${apyEnabled ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${apyEnabled ? "right-0.5" : "left-0.5"}`}
            />
          </button>
        </div>

        {/* Tier */}
        <div>
          <p className="font-semibold mb-2">Select Tier</p>
          <div className="flex gap-2 flex-wrap">
            {tiers.map(t => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${tier === t ? "bg-yellow-300" : "bg-gray-100 text-gray-400"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ROI Result */}
        <div className="border-t pt-4">
          <p className="text-right text-sm text-gray-400">ROI at Current Rates</p>
          <div className="bg-gray-100 rounded-xl p-4 text-right text-2xl font-bold">0.00 USD</div>
          <p className="text-right text-xs text-gray-400 mt-1">~ 0.000 CAKE + 0.000000 DON</p>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 space-y-2">
          <div className="flex justify-between font-semibold">
            <span>APY</span>
            <span className="text-yellow-500">9.0%</span>
          </div>
          <ul className="list-disc list-inside">
            <li>Calculated based on current rates</li>
            <li>Figures are estimates and not guaranteed returns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
