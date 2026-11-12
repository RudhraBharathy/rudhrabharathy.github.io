const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function parseMonth(value: string) {
  const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(value);

  if (!match) {
    throw new Error(`Invalid experience month: ${value}`);
  }

  return { year: Number(match[1]), month: Number(match[2]) };
}

function formatMonth(value: string) {
  const { year, month } = parseMonth(value);
  return monthYearFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatExperienceDateRange(start: string, end: string | null) {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : "Present"}`;
}

export function formatExperienceDuration(
  start: string,
  end: string | null,
  now = new Date(),
) {
  const startMonth = parseMonth(start);
  const endMonth = end
    ? parseMonth(end)
    : { year: now.getFullYear(), month: now.getMonth() + 1 };
  const totalMonths =
    (endMonth.year - startMonth.year) * 12 +
    endMonth.month -
    startMonth.month +
    1;

  if (totalMonths < 1) {
    throw new Error(`Experience end month precedes start month: ${start}`);
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return parts.join(" ");
}
