"use client"
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface IngredientData {
  name: string;
  healthStatus: number; // 0, 1, or 2
}

interface Props {
  ingredientData: IngredientData[];
}

const COLORS = ['#00C49F', '#FFBB28', '#FF4C4C']; // Healthy, Moderate, Unhealthy

const HealthPieChart: React.FC<Props> = ({ ingredientData }) => {
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
    { name: 'Healthy', value: counts.Healthy },
    { name: 'Moderate', value: counts.Moderate },
    { name: 'Unhealthy', value: counts.Unhealthy },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default HealthPieChart;