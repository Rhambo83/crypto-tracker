import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Bitcoin', score: 78 },
  { name: 'Ethereum', score: 85 },
  { name: 'Dash', score: 64 },
  { name: 'Zcash', score: 52 },
  { name: 'Monero', score: 59 },
];

const colors = ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#3B82F6'];

export default function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Litecoin vs Competitors</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 60 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip />
          <Bar dataKey="score">
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}