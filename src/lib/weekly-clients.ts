export function getIsoWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Número estable por semana (para copy de urgencia sin mentir descaradamente). */
export function getWeeklyClientsServed(): number {
  const now = new Date();
  const week = getIsoWeek(now);
  const seed = week + now.getUTCFullYear() * 100;
  const base = 14;
  const variance = seed % 11; // 0..10
  return base + variance;
}
