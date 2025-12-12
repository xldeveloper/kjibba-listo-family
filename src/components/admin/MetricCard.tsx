import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
    title: string;
    value: number | string;
    icon: LucideIcon;
    iconBgColor: string;
    iconColor: string;
    trend?: number;
    trendLabel?: string;
    href?: string;
}

export default function MetricCard({
    title,
    value,
    icon: Icon,
    iconBgColor,
    iconColor,
    trend,
    trendLabel,
    href,
}: MetricCardProps) {
    const content = (
        <div className="bg-white rounded-squircle shadow-lg p-6 border border-charcoal/5 hover:shadow-xl transition-all group">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <div>
                        <p className="text-sm text-charcoal-light">{title}</p>
                        <p className="text-3xl font-bold text-charcoal">{value}</p>
                    </div>
                </div>
                {href && (
                    <ArrowRight className="w-5 h-5 text-charcoal/20 group-hover:text-charcoal/50 group-hover:translate-x-1 transition-all" />
                )}
            </div>

            {trend !== undefined && (
                <div className="mt-4 pt-4 border-t border-charcoal/5 flex items-center gap-2">
                    {trend > 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : trend < 0 ? (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                    ) : (
                        <Minus className="w-4 h-4 text-charcoal-light" />
                    )}
                    <span className={`text-sm font-medium ${trend > 0 ? "text-green-600" : trend < 0 ? "text-red-600" : "text-charcoal-light"
                        }`}>
                        {trend > 0 ? "+" : ""}{trend}
                    </span>
                    {trendLabel && (
                        <span className="text-sm text-charcoal-light">{trendLabel}</span>
                    )}
                </div>
            )}
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}
