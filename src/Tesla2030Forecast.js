import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, LabelList } from 'recharts';

const Tesla2030Forecast = () => {
  // Current data
  const currentPrice = 248.86;
  const currentDate = "March 2025";
  
  // Annual price forecasts with different scenarios
  const annualForecasts = [
    {
      year: 2025,
      bearish: 290,
      base: 390,
      bullish: 450,
      bearishProb: 15,
      baseProb: 40,
      bullishProb: 45,
      events: "Robotaxi Launch (Austin, TX)",
      fsdProgress: "Unsupervised FSD in TX/CA",
      energyProgress: "Megafactory Scale-up",
      optimus: "Initial Factory Deployment"
    },
    {
      year: 2026,
      bearish: 370,
      base: 520,
      bullish: 680,
      bearishProb: 20,
      baseProb: 45,
      bullishProb: 35,
      events: "Cybercab Volume Production",
      fsdProgress: "Robotaxi Expansion to Major Markets",
      energyProgress: "Energy Storage 2x Growth",
      optimus: "Commercial Sales Begin"
    },
    {
      year: 2027,
      bearish: 480,
      base: 750,
      bullish: 1200,
      bearishProb: 25,
      baseProb: 40,
      bullishProb: 35,
      events: "Optimus Mass Production",
      fsdProgress: "Global Robotaxi Deployment",
      energyProgress: "Virtual Power Plant Networks",
      optimus: "Consumer Model Launch"
    },
    {
      year: 2028,
      bearish: 620,
      base: 1100,
      bullish: 1800,
      bearishProb: 20,
      baseProb: 45,
      bullishProb: 35,
      events: "Next-gen FSD Hardware",
      fsdProgress: "10x Safer Than Human Drivers",
      energyProgress: "Terawatt-hour Scale Storage",
      optimus: "Advanced Capabilities Roll-out"
    },
    {
      year: 2029,
      bearish: 850,
      base: 1650,
      bullish: 2700,
      bearishProb: 25,
      baseProb: 40,
      bullishProb: 35,
      events: "Robovan Fleet Deployment",
      fsdProgress: "FSD Licensing Revenue Growth",
      energyProgress: "Energy Business Size Parity with Auto",
      optimus: "Service Sector Expansion"
    },
    {
      year: 2030,
      bearish: 1200,
      base: 2500,
      bullish: 4000,
      bearishProb: 30,
      baseProb: 35,
      bullishProb: 35,
      events: "100M+ Tesla Network Vehicles",
      fsdProgress: "Full Autonomy in All Markets",
      energyProgress: "Energy > Auto Revenue",
      optimus: "Mass Market Adoption"
    }
  ];

  // Business segment growth and contribution to valuation
  const businessSegments = [
    {
      year: 2025,
      autoSales: 73,
      fsdRobotaxi: 12,
      energy: 10,
      optimus: 2,
      aiServices: 3,
    },
    {
      year: 2026,
      autoSales: 65,
      fsdRobotaxi: 18,
      energy: 12,
      optimus: 3,
      aiServices: 2,
    },
    {
      year: 2027,
      autoSales: 54,
      fsdRobotaxi: 24,
      energy: 13,
      optimus: 6,
      aiServices: 3,
    },
    {
      year: 2028,
      autoSales: 42,
      fsdRobotaxi: 30,
      energy: 14,
      optimus: 10,
      aiServices: 4,
    },
    {
      year: 2029,
      autoSales: 34,
      fsdRobotaxi: 32,
      energy: 17,
      optimus: 13,
      aiServices: 4,
    },
    {
      year: 2030,
      autoSales: 28,
      fsdRobotaxi: 32,
      energy: 20,
      optimus: 15,
      aiServices: 5,
    }
  ];

  // Key milestones that would drive valuation
  const keyMilestones = [
    {
      year: 2025,
      quarter: "Q2",
      milestone: "Launch of unsupervised FSD in Austin, TX",
      impact: "High",
      probability: 80,
      segment: "FSD/Robotaxi"
    },
    {
      year: 2025,
      quarter: "Q3",
      milestone: "First Optimus robots operating in Tesla factories",
      impact: "Medium",
      probability: 70,
      segment: "Optimus"
    },
    {
      year: 2025,
      quarter: "Q4",
      milestone: "50% growth in energy storage deployments",
      impact: "Medium",
      probability: 85,
      segment: "Energy"
    },
    {
      year: 2026,
      quarter: "Q1",
      milestone: "Cybercab volume production begins",
      impact: "High",
      probability: 70,
      segment: "FSD/Robotaxi"
    },
    {
      year: 2026,
      quarter: "Q2",
      milestone: "Optimus commercial sales begin",
      impact: "High",
      probability: 60,
      segment: "Optimus"
    },
    {
      year: 2026,
      quarter: "Q4",
      milestone: "Robotaxi service in 10+ major US cities",
      impact: "Very High",
      probability: 65,
      segment: "FSD/Robotaxi"
    },
    {
      year: 2027,
      quarter: "Q2",
      milestone: "FSD licensing deals with major automakers",
      impact: "High",
      probability: 60,
      segment: "FSD/Robotaxi"
    },
    {
      year: 2027,
      quarter: "Q3",
      milestone: "Optimus consumer version launch",
      impact: "Very High",
      probability: 50,
      segment: "Optimus"
    },
    {
      year: 2028,
      quarter: "Q1",
      milestone: "Energy business reaches $50B annual revenue",
      impact: "High",
      probability: 70,
      segment: "Energy"
    },
    {
      year: 2028,
      quarter: "Q4",
      milestone: "Optimus production exceeds 100,000 units annually",
      impact: "Very High",
      probability: 40,
      segment: "Optimus"
    },
    {
      year: 2029,
      quarter: "Q2",
      milestone: "Robotaxi fleet exceeds 1 million vehicles",
      impact: "Very High",
      probability: 55,
      segment: "FSD/Robotaxi"
    },
    {
      year: 2030,
      quarter: "Q4",
      milestone: "Energy business revenue exceeds automotive",
      impact: "Very High",
      probability: 40,
      segment: "Energy"
    }
  ];

  // Annual revenue projections in billions
  const revenueProjections = [
    { year: 2024, auto: 84, energy: 13, fsdRobotaxi: 2, optimus: 0, aiServices: 1, total: 100 },
    { year: 2025, auto: 96, energy: 19, fsdRobotaxi: 6, optimus: 1, aiServices: 3, total: 125 },
    { year: 2026, auto: 110, energy: 29, fsdRobotaxi: 18, optimus: 3, aiServices: 5, total: 165 },
    { year: 2027, auto: 126, energy: 42, fsdRobotaxi: 38, optimus: 12, aiServices: 7, total: 225 },
    { year: 2028, auto: 143, energy: 60, fsdRobotaxi: 65, optimus: 25, aiServices: 12, total: 305 },
    { year: 2029, auto: 160, energy: 85, fsdRobotaxi: 92, optimus: 48, aiServices: 15, total: 400 },
    { year: 2030, auto: 175, energy: 120, fsdRobotaxi: 120, optimus: 70, aiServices: 20, total: 505 }
  ];

  // Risks and catalysts
  const risksCatalysts = {
    risks: [
      { factor: "Regulatory obstacles to FSD deployment", severity: "High", impact: "Could delay Robotaxi timeline by 1-2 years", probability: "Medium" },
      { factor: "Competitive pressure in EV market", severity: "Medium", impact: "Margin compression in automotive segment", probability: "High" },
      { factor: "Technical challenges in Optimus development", severity: "High", impact: "Delays in commercialization timeline", probability: "Medium" },
      { factor: "Energy storage supply constraints", severity: "Medium", impact: "Slower than expected energy business growth", probability: "Medium" },
      { factor: "Geopolitical tensions affecting supply chain", severity: "Medium", impact: "Production constraints and higher costs", probability: "Medium" }
    ],
    catalysts: [
      { factor: "Faster than expected FSD improvement", impact: "Accelerate robotaxi timeline by 6-12 months", probability: "Medium" },
      { factor: "Major breakthroughs in Optimus capabilities", impact: "Unlock commercial applications sooner", probability: "Medium" },
      { factor: "Energy storage cost decline acceleration", impact: "Faster growth in energy business margins", probability: "Medium-High" },
      { factor: "FSD licensing deals with multiple automakers", impact: "New high-margin revenue stream", probability: "Medium" },
      { factor: "AI inference services expansion", impact: "New recurring revenue streams", probability: "Medium" }
    ]
  };

  // Custom tooltip for the price chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = annualForecasts.find(item => item.year === label);
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-bold text-lg">{label}</p>
          <div className="mt-2">
            {payload.map((entry, index) => (
              entry.value && (
                <p key={index} style={{ color: entry.color }} className="flex justify-between">
                  <span className="font-medium">{entry.name}:</span> 
                  <span className="ml-4">${entry.value}</span>
                </p>
              )
            ))}
          </div>
          {data && (
            <div className="mt-3 pt-2 border-t border-gray-200 text-sm">
              <p><strong>FSD/Robotaxi:</strong> {data.fsdProgress}</p>
              <p><strong>Energy:</strong> {data.energyProgress}</p>
              <p><strong>Optimus:</strong> {data.optimus}</p>
              <p><strong>Key Event:</strong> {data.events}</p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Colors for the charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Tesla (TSLA) Long-Term Forecast: 2025-2030</h2>
      <p className="mb-4 text-gray-600">Current price: ${currentPrice} (as of {currentDate})</p>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Annual Price Forecast Through 2030</h3>
        <div className="mb-1 text-sm flex justify-between">
          <span className="text-green-600">Bullish case</span>
          <span className="text-blue-600">Base case</span>
          <span className="text-red-600">Bearish case</span>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={annualForecasts} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 4500]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="bullish" stroke="#22c55e" fill="#bbf7d0" name="Bullish" />
            <Area type="monotone" dataKey="base" stroke="#3b82f6" fill="#bfdbfe" name="Base Case" />
            <Area type="monotone" dataKey="bearish" stroke="#ef4444" fill="#fee2e2" name="Bearish" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Business Segment Contribution to Valuation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={businessSegments} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(tick) => `${tick}%`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="autoSales" stackId="a" fill="#0088FE" name="Auto Sales" />
              <Bar dataKey="fsdRobotaxi" stackId="a" fill="#00C49F" name="FSD/Robotaxi" />
              <Bar dataKey="energy" stackId="a" fill="#FFBB28" name="Energy" />
              <Bar dataKey="optimus" stackId="a" fill="#FF8042" name="Optimus" />
              <Bar dataKey="aiServices" stackId="a" fill="#8884d8" name="AI Services" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Annual Revenue Projections (Billions $)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueProjections} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="auto" stackId="1" stroke="#0088FE" fill="#0088FE" name="Auto" />
              <Area type="monotone" dataKey="energy" stackId="1" stroke="#FFBB28" fill="#FFBB28" name="Energy" />
              <Area type="monotone" dataKey="fsdRobotaxi" stackId="1" stroke="#00C49F" fill="#00C49F" name="FSD/Robotaxi" />
              <Area type="monotone" dataKey="optimus" stackId="1" stroke="#FF8042" fill="#FF8042" name="Optimus" />
              <Area type="monotone" dataKey="aiServices" stackId="1" stroke="#8884d8" fill="#8884d8" name="AI Services" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Key Milestones Timeline (2025-2030)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 border-b text-left">Year</th>
                <th className="py-2 px-3 border-b text-left">Quarter</th>
                <th className="py-2 px-3 border-b text-left">Milestone</th>
                <th className="py-2 px-3 border-b text-left">Segment</th>
                <th className="py-2 px-3 border-b text-left">Impact</th>
                <th className="py-2 px-3 border-b text-right">Probability</th>
              </tr>
            </thead>
            <tbody>
              {keyMilestones.map((milestone, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-3 border-b">{milestone.year}</td>
                  <td className="py-2 px-3 border-b">{milestone.quarter}</td>
                  <td className="py-2 px-3 border-b">{milestone.milestone}</td>
                  <td className="py-2 px-3 border-b">{milestone.segment}</td>
                  <td className="py-2 px-3 border-b">{milestone.impact}</td>
                  <td className="py-2 px-3 border-b text-right">{milestone.probability}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Key Investment Risks</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-3 border-b text-left">Risk Factor</th>
                  <th className="py-2 px-3 border-b text-left">Severity</th>
                  <th className="py-2 px-3 border-b text-left">Probability</th>
                </tr>
              </thead>
              <tbody>
                {risksCatalysts.risks.map((risk, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-3 border-b">{risk.factor}</td>
                    <td className="py-2 px-3 border-b">{risk.severity}</td>
                    <td className="py-2 px-3 border-b">{risk.probability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Potential Upside Catalysts</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-3 border-b text-left">Catalyst</th>
                  <th className="py-2 px-3 border-b text-left">Impact</th>
                  <th className="py-2 px-3 border-b text-left">Probability</th>
                </tr>
              </thead>
              <tbody>
                {risksCatalysts.catalysts.map((catalyst, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-3 border-b">{catalyst.factor}</td>
                    <td className="py-2 px-3 border-b">{catalyst.impact}</td>
                    <td className="py-2 px-3 border-b">{catalyst.probability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">2030 Price Targets</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-red-200 bg-red-50 p-4 rounded">
            <h4 className="font-medium mb-2 text-red-700">Bearish Case: $1,200</h4>
            <p className="text-sm">FSD/Robotaxi faces regulatory hurdles, Optimus commercialization delays, traditional auto business faces margin pressure</p>
          </div>
          <div className="border border-blue-200 bg-blue-50 p-4 rounded">
            <h4 className="font-medium mb-2 text-blue-700">Base Case: $2,500</h4>
            <p className="text-sm">Successful Robotaxi deployment in major markets, energy business growth on track, Optimus commercialization progressing</p>
          </div>
          <div className="border border-green-200 bg-green-50 p-4 rounded">
            <h4 className="font-medium mb-2 text-green-700">Bullish Case: $4,000</h4>
            <p className="text-sm">Rapid FSD/Robotaxi scaling, Optimus exceeding expectations, energy business reaches parity with auto, new AI services emerge</p>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 mt-6">
        <p className="mb-1"><strong>FSD/Robotaxi Analysis:</strong> Rollout beginning in Austin, TX in June 2025 with expansion to more markets through 2025-2026. Cybercab production starting in 2026. By 2030, this could become Tesla's largest profit driver.</p>
        <p className="mb-1"><strong>Optimus (Tesla Bot) Analysis:</strong> Initial factory deployment in 2025, commercial sales beginning in 2026, consumer model launch by 2027. Mass production scaling through 2028-2030.</p>
        <p className="mb-1"><strong>Energy Business Analysis:</strong> 50% growth in deployments expected in 2025, megafactory scaling, potential for energy revenue to reach or exceed automotive revenue by 2030.</p>
        <p className="mt-4">Note: This forecast integrates Tesla's aggressive timeline announcements with more realistic market adoption curves. Significant execution risk exists across all business segments.</p>
      </div>
    </div>
  );
};

export default Tesla2030Forecast;