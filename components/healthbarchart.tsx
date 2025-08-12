import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface IngredientData {
  name: string;
  healthStatus: number;
}

interface Props {
  ingredientData: IngredientData[];
}

const COLORS = ['#FF4C4C', '#FFBB28', '#00C49F']; // Unhealthy, Moderate, Healthy

const HealthBarChart: React.FC<Props> = ({ ingredientData }) => {
  const countByHealthStatus = (ingredients: IngredientData[]) => {
    const counts = { Healthy: 0, Moderate: 0, Unhealthy: 0 };
    ingredients.forEach(({ healthStatus }) => {
      if (healthStatus === 2) counts.Healthy++;
      else if (healthStatus === 1) counts.Moderate++;
      else counts.Unhealthy++;
    });
    return counts;
  };

  const counts = countByHealthStatus(ingredientData);

  const data = [
    { name: 'Unhealthy', value: counts.Unhealthy },
    { name: 'Moderate', value: counts.Moderate },
    { name: 'Healthy', value: counts.Healthy },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <ResponsiveContainer width={500} height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthBarChart;