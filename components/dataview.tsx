"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HealthPieChart from "./healthpiechart"
import HealthBarChart from './healthbarchart'; // 🔥 New import

interface IngredientRow {
  Ingredients: string;
  "Healthy status": number;
}

const DataView: React.FC = () => {
  const [data, setData] = useState<IngredientRow[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const formattedData = data.map((row) => ({
    name: row.Ingredients,
    healthStatus: row["Healthy status"]
  }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Health Status Distribution</h2>
      <HealthPieChart ingredientData={formattedData} />
      <HealthBarChart ingredientData={formattedData} /> {/* 🔥 New chart added */}
    </div>
  );
};

export default DataView;