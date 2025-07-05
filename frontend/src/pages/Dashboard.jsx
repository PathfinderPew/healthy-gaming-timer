import { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get('/session/stats').then(({ data }) => setStats(data));
  }, []);

  if (!stats) return <p>Loading…</p>;

  return (
    <main className="centered">
      <h2>Today</h2>
      <p>Time played: {Math.round(stats.todaySeconds / 60)} min</p>
      <p>Goals completed: {stats.goalsCompleted}</p>
      {/* basic UI — replace with nicer cards/charts later */}
    </main>
  );
}
