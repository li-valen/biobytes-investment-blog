import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

// Dividend growth data
const dividendData = [
  { year: 2015, dividend: 2.80 },
  { year: 2016, dividend: 3.08 },
  { year: 2017, dividend: 3.08 },
  { year: 2018, dividend: 3.12 },
  { year: 2019, dividend: 3.44 },
  { year: 2020, dividend: 4.12 },
  { year: 2021, dividend: 4.44 },
  { year: 2022, dividend: 4.80 },
  { year: 2023, dividend: 5.20 },
  { year: 2024, dividend: 5.64 },
];

// Revenue growth data
const revenueData = [
  { year: 2019, revenue: 39121 },
  { year: 2020, revenue: 41518 },
  { year: 2021, revenue: 48704 },
  { year: 2022, revenue: 59283 },
  { year: 2023, revenue: 60115 },
  { year: 2024, revenue: 64840 },
  { year: 2025, revenue: 69936 },
  { year: 2026, revenue: 75433 },
  { year: 2027, revenue: 81363 },
  { year: 2028, revenue: 87758 },
];

// Colors for the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Dividend growth chart component
const DividendGrowthChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={dividendData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="dividend" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

  
  // EBIT data
  const ebitData = [
    { year: 2019, ebit: 7926, margin: 20.3 },
    { year: 2020, ebit: 5548, margin: 13.4 },
    { year: 2021, ebit: 13199, margin: 27.1 },
    { year: 2022, ebit: 18282, margin: 30.8 },
    { year: 2023, ebit: 2954, margin: 4.9 },
    { year: 2024, ebit: 12514, margin: 19.3, projectedEBIT: 12514 },
    { year: 2025, ebit: null, margin: 19.3, projectedEBIT: 13498 },
    { year: 2026, ebit: null, margin: 19.3, projectedEBIT: 14559 },
    { year: 2027, ebit: null, margin: 19.3, projectedEBIT: 15703 },
    { year: 2028, ebit: null, margin: 19.3, projectedEBIT: 16937 },
  ];
  
  // Unlevered FCF data
  const dcfData = [
    { year: 2019, historicalFCF: 8379, projectedFCF: null },
    { year: 2020, historicalFCF: 7866, projectedFCF: null },
    { year: 2021, historicalFCF: 14283, projectedFCF: null },
    { year: 2022, historicalFCF: 18667, projectedFCF: null },
    { year: 2023, historicalFCF: 3656, projectedFCF: null },
    { year: 2024, historicalFCF: 13070, projectedFCF: 13070 }, // Last historical point
    { year: 2025, historicalFCF: null, projectedFCF: 14170 }, // First projected point
    { year: 2026, historicalFCF: null, projectedFCF: 15284 },
    { year: 2027, historicalFCF: null, projectedFCF: 16485 },
    { year: 2028, historicalFCF: null, projectedFCF: 17781 },
  ];
  
  
  
  // Revenue growth chart component
  const RevenueGrowthChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#82ca9d" />
        <Line type="monotone" dataKey="growth" stroke="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
  
  // EBIT chart component
  const EBITChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={ebitData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
          {/* Line for historical data (solid line) */}
          <Line
            type="monotone"
            dataKey="ebit"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
  
          {/* Line for projected data (dotted line) */}
          <Line
            type="monotone"
            dataKey="projectedEBIT"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            strokeDasharray="5 5"
          />
        <Line type="monotone" dataKey="margin" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  const DCFChart: React.FC = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dcfData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis /> {/* Adjusted Y-axis */}
          <Tooltip />
  
          {/* Line for historical data (solid line) */}
          <Line
            type="monotone"
            dataKey="historicalFCF"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
  
          {/* Line for projected data (dotted line) */}
          <Line
            type="monotone"
            dataKey="projectedFCF"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  // Main Merck analysis component that renders all charts
  const MerckAnalysis: React.FC = () => (
    <div>
      <h2>Merck Revenue Growth</h2>
      <RevenueGrowthChart />
      <h2>Merck EBIT Growth</h2>
      <EBITChart />
      <h2>DCF Analysis Breakdown</h2>
      <DCFChart />
    </div>
  );
  


export default MerckAnalysis;
