"use client";

import React, { useState, use } from 'react';
import { Nosifer } from 'next/font/google';

// --- Interfaces ---
interface Member {
  id: number | string;
  name: string;
}
interface TeamData {
  teamName: string;
  members: Member[];
}
type MealStatus = {
  breakfast: boolean; lunch: boolean; dinner: boolean; snacks: boolean;
};

// --- Mock Data ---
const MOCK_TEAM_DATA: TeamData = {
  teamName: "The Static Team",
  members: [
    { id: 101, name: "Alice Smith" },
    { id: 102, name: "Bob Johnson" },
    { id: 103, name: "Charlie Brown" },
  ],
};

// --- Font Setup ---
const nosifer = Nosifer({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// --- Initialization Function ---
const initializeFoodStatus = (members: Member[]): Record<string | number, MealStatus> => {
  const initialStatus: Record<string | number, MealStatus> = {};
  members.forEach(member => {
    initialStatus[member.id] = { breakfast: false, lunch: false, dinner: false, snacks: false };
  });
  return initialStatus;
};

export default function FoodDistributionPage({ params }: { params: Promise<{ teamCode: string }> }) {
  const resolvedParams = use(params);
  const { teamCode } = resolvedParams;

  // --- State Hooks ---
  const teamData = MOCK_TEAM_DATA;
  const [foodStatus, setFoodStatus] = useState<Record<string | number, MealStatus>>(
    initializeFoodStatus(MOCK_TEAM_DATA.members)
  );

  // --- Handler ---
  const handleFoodToggle = (memberId: string | number, mealType: keyof MealStatus) => {
    const newStatus = !foodStatus[memberId]?.[mealType];
    setFoodStatus(prevStatus => {
      const currentMemberStatus = prevStatus[memberId] || { breakfast: false, lunch: false, dinner: false, snacks: false };
      return {
        ...prevStatus,
        [memberId]: { ...currentMemberStatus, [mealType]: newStatus },
      };
    });
    console.log(`Toggled ${mealType} for member ${memberId} to ${newStatus} (Static - No backend call)`);
  };

  // --- Render logic ---
  const mealTypes: (keyof MealStatus)[] = ['lunch', 'dinner', 'snacks','breakfast'];

  // --- Inline Styles (Corrected) ---
  const pageStyle: React.CSSProperties = {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '40px auto',
    fontFamily: 'var(--font-geist-sans)',
    backgroundColor: '#111',
    color: '#ccc',
    borderRadius: '12px',
    border: '1px solid #333',
    boxShadow: '0 5px 20px rgba(255, 5, 0, 0.1)',
  };
  const titleStyle: React.CSSProperties = {
    textAlign: 'center', marginBottom: '20px', color: '#FF0500',
    letterSpacing: '1px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  };
  const subTitleStyle: React.CSSProperties = {
    textAlign: 'center', marginBottom: '40px', color: '#FF8C00', fontWeight: 300,
  };
  const tableStyle: React.CSSProperties = {
    width: '100%', borderCollapse: 'collapse', marginTop: '30px', backgroundColor: '#0d0d0d',
  };
  const thStyle: React.CSSProperties = {
    border: '1px solid #444', padding: '15px 10px', /* Increased padding */
    textAlign: 'center', color: '#eee', backgroundColor: '#222',
    textTransform: 'capitalize', fontWeight: 600,
  };
  const tdStyle: React.CSSProperties = {
    border: '1px solid #444', padding: '15px 10px', /* Increased padding */
    textAlign: 'center', verticalAlign: 'middle', /* Center vertically */
  };
  const memberNameCellStyle: React.CSSProperties = {
    ...tdStyle, textAlign: 'left', color: '#e2e8f0',
  };
  const checkboxStyle: React.CSSProperties = {
    width: '18px', height: '18px', cursor: 'pointer', accentColor: '#FF0500',
    verticalAlign: 'middle', /* Align checkbox with text */
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle} className={nosifer.className}>Food Distribution Log</h1>
      <h2 style={subTitleStyle}>Team: {teamData.teamName} (Code: {teamCode})</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            {/* Header for Member Name */}
            <th style={{ ...thStyle, textAlign: 'left', width: '30%' }}>Member Name</th>
            {/* Headers for Meals */}
            {mealTypes.map(meal => (
              <th key={meal} style={thStyle}>{meal}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamData.members.map((member) => {
            const memberId = member.id;
            const currentStatus = foodStatus[memberId] || { breakfast: false, lunch: false, dinner: false, snacks: false };
            return (
              <tr key={memberId}>
                {/* Member Name Cell */}
                <td style={memberNameCellStyle}>{member.name}</td>
                {/* Checkbox Cells for Meals */}
                {mealTypes.map(meal => (
                  <td key={meal} style={tdStyle}>
                    <input
                      type="checkbox"
                      id={`food-${memberId}-${meal}`}
                      checked={!!currentStatus[meal]}
                      onChange={() => handleFoodToggle(memberId, meal)}
                      style={checkboxStyle}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}