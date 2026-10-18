import './globals.css';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, LightBulbIcon, CurrencyEuroIcon, ChartBarIcon, ServerStackIcon } from '@heroicons/react/24/outline';

// --- Client Component for Interactive Dashboard ---
interface CalculationResult {
  co2ReductieTon: number;
  geschatteSubsidieEuro: number;
  terugverdientijdJaar: number;
  jaarlijkseBesparingEuro: number;
}

const CO2CalculatorDashboard: React.FC = () => {
  const [vierkanteMeters, setVierkanteMeters] = useState<number | ''>('');
  const [isolatieType, setIsolatieType] = useState<string>('dak');
  const [energieLabelVoor, setEnergieLabelVoor] = useState<string>('C');
  const [energieLabelNa, setEnergieLabelNa] = useState<string>('A');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const energieLabels = ['G', 'F', 'E', 'D', 'C', 'B', 'A', 'A+', 'A++'];
  const isolatieTypes = [
    { value: 'dak', label: 'Dakisolatie' },
    { value: 'spouwmuur', label: 'Spouwmuurisolatie' },
    { value: 'vloer', label: 'Vloerisolatie' },
    { value: 'gevel', label: 'Gevelisolatie' },
    { value: 'glas', label: 'HR++ Glas' },
  ];

  const calculateCO2Reduction = useMemo(() => {
    return (
      m2: number,
      isoType: string,
      labelVoor: string,
      labelNa: string
    ): CalculationResult => {
      // Vereenvoudigde logica voor demonstratie
      // In een echte app zou dit veel complexer zijn, mogelijk met externe API's of gedetailleerde modellen.
      const m2Factor = m2 > 0 ? m2 : 1;
      let co2Factor = 0;
      let subsidiePerM2 = 0;
      let kostenPerM2 = 0;
      let jaarlijkseBesparingPerM2 = 0;

      switch (isoType) {
        case 'dak':
          co2Factor = 0.008; // ton CO2 per m2
          subsidiePerM2 = 30; // euro
          kostenPerM2 = 70; // euro
          jaarlijkseBesparingPerM2 = 8; // euro
          break;
        case 'spouwmuur':
          co2Factor = 0.005;
          subsidiePerM2 = 15;
          kostenPerM2 = 25;
          jaarlijkseBesparingPerM2 = 5;
          break;
        case 'vloer':
          co2Factor = 0.006;
          subsidiePerM2 = 11;
          kostenPerM2 = 40;
          jaarlijkseBesparingPerM2 = 6;
          break;
        case 'gevel':
          co2Factor = 0.012;
          subsidiePerM2 = 40;
          kostenPerM2 = 120;
          jaarlijkseBesparingPerM2 = 12;
          break;
        case 'glas':
          co2Factor = 0.007;
          subsidiePerM2 = 50; // per m2 glas
          kostenPerM2 = 100; // per m2 glas
          jaarlijkseBesparingPerM2 = 7;
          break;
        default:
          break;
      }

      const labelIndexVoor = energieLabels.indexOf(labelVoor);
      const labelIndexNa = energieLabels.indexOf(labelNa);
      const labelVerbeteringFactor = Math.max(0, labelIndexNa - labelIndexVoor);

      // Zorg dat labelNa niet lager is dan labelVoor
      if (labelIndexNa < labelIndexVoor) {
        return {
          co2ReductieTon: 0,
          geschatteSubsidieEuro: 0,
          terugverdientijdJaar: 0,
          jaarlijkseBesparingEuro: 0,
        };
      }

      const co2ReductieTon = m2Factor * co2Factor * (1 + labelVerbeteringFactor * 0.2); // Extra boost voor labelverbetering
      const geschatteSubsidieEuro = m2Factor * subsidiePerM2 * (1 + labelVerbeteringFactor * 0.1);
      const totaleKosten = m2Factor * kostenPerM2;
      const jaarlijkseBesparingEuro = m2Factor * jaarlijkseBesparingPerM2 * (1 + labelVerbeteringFactor * 0.15);
      const nettoInvestering = totaleKosten - geschatteSubsidieEuro;
      const terugverdientijdJaar = jaarlijkseBesparingEuro > 0 ? nettoInvestering / jaarlijkseBesparingEuro : 0;

      return {
        co2ReductieTon: parseFloat(co2ReductieTon.toFixed(2)),
        geschatteSubsidieEuro: parseFloat(geschatteSubsidieEuro.toFixed(2)),
        terugverdientijdJaar: parseFloat(terugverdientijdJaar > 0 ? terugverdientijdJaar.toFixed(1) : '0'),
        jaarlijkseBesparingEuro: parseFloat(jaarlijkseBesparingEuro.toFixed(2)),
      };
    };
  }, [energieLabels]);

  const handleCalculate = async () => {
    if (vierkanteMeters === '' || vierkanteMeters <= 0) {
      alert('Vul een geldig aantal vierkante meters in.');
      return;
    }

    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const calculated = calculateCO2Reduction(
      vierkanteMeters as number,
      isolatieType,
      energieLabelVoor,
      energieLabelNa
    );
    setResult(calculated);
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
      <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">CO2 Reductie & Subsidie Calculator</h3>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Bereken snel en eenvoudig de potentiële CO2-reductie en geschatte subsidie voor uw bouwprojecten.
        Vul de gegevens in en zie direct de impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <label htmlFor="vierkanteMeters" className="block text-sm font-medium text-gray-700 mb-1">
            Oppervlakte (m²)
          </label>
          <input
            type="number"
            id="vierkanteMeters"
            value={vierkanteMeters}
            onChange={(e) => setVierkanteMeters(e.target.value === '' ? '' : Math.max(0, parseFloat(e.target.value)))}
            placeholder="Bijv. 150"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="isolatieType" className="block text-sm font-medium text-gray-700 mb-1">
            Type isolatie
          </label>
          <select
            id="isolatieType"
            value={isolatieType}
            onChange={(e) => setIsolatieType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            {isolatieTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="energieLabelVoor" className="block text-sm font-medium text-gray-700 mb-1">
            Energie label (huidig)
          </label>
          <select
            id="energieLabelVoor"
            value={energieLabelVoor}
            onChange={(e) => setEnergieLabelVoor(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            {energieLabels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="energieLabelNa" className="block text-sm font-medium text-gray-700 mb-1">
            Energie label (na verbetering)
          </label>
          <select
            id="energieLabelNa"
            value={energieLabelNa}
            onChange={(e) => setEnergieLabelNa(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            {energieLabels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleCalculate}
          disabled={loading || vierkanteMeters === '' || vierkanteMeters <= 0}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Berekenen...' : 'Bereken Impact'}
        </button>
      </div>

      {result && (
        <div className="mt-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Uw Resultaten</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-100 text-center">
              <LightBulbIcon className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-500">Geschatte CO2 Reductie