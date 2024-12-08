import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-4xl font-bold text-center p-5">
        {t("welcome")}
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <section className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">{t("digitalTools")}</h2>
          <p>{t("explore digital tools to improve business")}</p>
        </section>

        <section className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">{t("cybersecurity")}</h2>
          <p>{t("improve your company's cybersecurity posture")}</p>
        </section>

        <section className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">{t("successionPlanning")}</h2>
          <p>{t("plan for future leadership and succession")}</p>
        </section>
      </div>
    </div>
  );
}

export default App;
