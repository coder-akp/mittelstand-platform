import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const { t } = useTranslation();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tools')
      .then(response => {
        setTools(response.data);
      })
      .catch(error => console.error("Error fetching tools:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-4xl font-bold text-center p-5">
        {t("welcome")}
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.map(tool => (
          <section key={tool.id} className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold">{tool.name}</h2>
            <p>{tool.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
