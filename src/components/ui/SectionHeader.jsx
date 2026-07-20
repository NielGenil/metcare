function SectionHeader({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-2xl font-bold text-slate-900 lg:text-3xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 sm:text-lg leading-8 text-slate-600 ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;