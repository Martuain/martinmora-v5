export function TrustBar() {
  const orgs = [
    "Citibank",
    "BBVA",
    "ECB",
    "Iberclear",
    "Modulr",
    "Checkout.com",
    "IOBuilders",
  ];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] whitespace-nowrap flex-shrink-0">
            Worked With
          </p>
          <div className="w-px h-6 bg-[var(--border)] hidden md:block" />
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-3">
            {orgs.map((org) => (
              <span
                key={org}
                className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors cursor-default"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
