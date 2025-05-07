
import React from "react";

export default function Legal() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md text-gray-900 dark:text-white">
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-bold text-cyan-700 dark:text-cyan-400">ATABUY</div>
        </div>
      </header>

      <main className="pt-24 space-y-12 max-w-4xl mx-auto">
        <section>
          <h1 className="text-3xl font-bold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-lg">
            Hier stehen Ihre allgemeinen Geschäftsbedingungen. Sie regeln unter anderem die Bedingungen für
            Käufe, Rückgaben, Lieferungen und Haftung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Widerrufsrecht</h2>
          <p className="text-lg">
            Kunden haben das Recht, innerhalb von 14 Tagen ohne Angabe von Gründen den Kaufvertrag zu widerrufen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Datenschutzerklärung</h2>
          <p className="text-lg">
            Der Schutz Ihrer Daten ist uns wichtig. Diese Erklärung beschreibt, wie wir personenbezogene Daten
            sammeln, verwenden und schützen.
          </p>
        </section>

        <section className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-xl font-bold mb-2">Impressum</h2>
          <p className="text-lg">
            ATABUY GmbH<br/>
            Musterstraße 123<br/>
            12345 Musterstadt<br/>
            Deutschland<br/>
            <br/>
            Geschäftsführer: Max Mustermann<br/>
            E-Mail: info@atabuy.de<br/>
            USt-ID: DE123456789
          </p>
        </section>
      </main>
    </div>
  );
}
