import './globals.css';
'use client'; // Dit component heeft client-side interactiviteit nodig voor de simulator.

import React, { useState, useEffect } from 'react';
// import Image from 'next/image'; // Uncomment indien u afbeeldingen zoals een logo wilt toevoegen

export default function Home() {
  const [co2Emission, setCo2Emission] = useState<number>(100); // Standaardwaarde in ton CO2
  const [numProjects, setNumProjects] = useState<number>(10); // Standaard