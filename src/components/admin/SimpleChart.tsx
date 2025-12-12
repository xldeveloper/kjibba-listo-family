interface DataPoint {
    label: string;
    value: number;
}

interface SimpleChartProps {
    data: DataPoint[];
    height?: number;
    color?: string;
    showLabels?: boolean;
}

export default function SimpleChart({
    data,
    height = 120,
    color = "#22c55e",
    showLabels = true,
}: SimpleChartProps) {
    if (data.length === 0) {
        return (
            <div
                className="flex items-center justify-center text-charcoal-light text-sm"
                style={{ height }}
            >
                Ingen data
            </div>
        );
    }

    const maxValue = Math.max(...data.map(d => d.value), 1);
    const padding = 40;
    const chartWidth = 100;
    const chartHeight = 100;

    // Create path for the line
    const points = data.map((d, i) => {
        const x = padding + (i / (data.length - 1 || 1)) * (chartWidth - padding * 2);
        const y = chartHeight - padding - (d.value / maxValue) * (chartHeight - padding * 2);
        return { x, y, ...d };
    });

    const linePath = points
        .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
        .join(' ');

    // Create gradient fill path
    const areaPath = linePath +
        ` L ${points[points.length - 1]?.x || padding} ${chartHeight - padding}` +
        ` L ${padding} ${chartHeight - padding} Z`;

    return (
        <div className="w-full" style={{ height }}>
            <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
                    <line
                        key={i}
                        x1={padding}
                        y1={chartHeight - padding - ratio * (chartHeight - padding * 2)}
                        x2={chartWidth - padding}
                        y2={chartHeight - padding - ratio * (chartHeight - padding * 2)}
                        stroke="#e5e5e5"
                        strokeWidth="0.5"
                    />
                ))}

                {/* Area fill */}
                <path d={areaPath} fill="url(#areaGradient)" />

                {/* Line */}
                <path
                    d={linePath}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Data points */}
                {points.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="3"
                        fill="white"
                        stroke={color}
                        strokeWidth="2"
                    />
                ))}

                {/* Labels */}
                {showLabels && points.filter((_, i) => i === 0 || i === points.length - 1 || i % Math.ceil(points.length / 5) === 0).map((p, i) => (
                    <text
                        key={i}
                        x={p.x}
                        y={chartHeight - padding + 12}
                        textAnchor="middle"
                        fontSize="8"
                        fill="#737373"
                    >
                        {p.label}
                    </text>
                ))}
            </svg>
        </div>
    );
}
