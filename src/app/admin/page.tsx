"use client";

import { useMemo, useState, useEffect } from "react";
import { Users, Sparkles, Bug, Clock, TrendingUp, UserCheck, Send, Crown, Gift, Zap } from "lucide-react";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { useAdminData } from "./layout";
import MetricCard from "@/components/admin/MetricCard";
import SimpleChart from "@/components/admin/SimpleChart";

interface OnboardingQuotas {
  betaSpots: { total: number; claimed: number };
  foundersPass: { total: number; sold: number; price: number };
}

export default function AdminDashboard() {
  const { users, betaInterests, bugReports, db } = useAdminData();
  const [quotas, setQuotas] = useState<OnboardingQuotas | null>(null);

  // Fetch onboarding quotas
  useEffect(() => {
    const fetchQuotas = async () => {
      try {
        const quotaRef = doc(db, "onboarding_config", "quotas");
        const quotaDoc = await getDoc(quotaRef);
        if (quotaDoc.exists()) {
          const data = quotaDoc.data();
          setQuotas({
            betaSpots: data.betaSpots || { total: 30, claimed: 0 },
            foundersPass: data.foundersPass || { total: 300, sold: 0, price: 990 },
          });
        } else {
          // Use defaults if document doesn't exist
          setQuotas({
            betaSpots: { total: 30, claimed: 0 },
            foundersPass: { total: 300, sold: 0, price: 990 },
          });
        }
      } catch (err) {
        console.error("Error fetching quotas:", err);
      }
    };
    fetchQuotas();
  }, [db]);

  // Calculate trial users
  const trialUsers = useMemo(() => {
    return betaInterests.filter(b => b.userType === "trial").length;
  }, [betaInterests]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);

    const getDate = (timestamp: Timestamp | string) => {
      if (!timestamp) return new Date(0);
      return timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp);
    };

    // Today's new items
    const newToday = betaInterests.filter(b => getDate(b.createdAt) >= today).length +
      users.filter(u => getDate(u.registeredAt) >= today).length;

    // This week's items
    const thisWeekBeta = betaInterests.filter(b => getDate(b.createdAt) >= weekAgo).length;
    const lastWeekBeta = betaInterests.filter(b => {
      const d = getDate(b.createdAt);
      return d >= twoWeeksAgo && d < weekAgo;
    }).length;

    const thisWeekUsers = users.filter(u => getDate(u.registeredAt) >= weekAgo).length;
    const lastWeekUsers = users.filter(u => {
      const d = getDate(u.registeredAt);
      return d >= twoWeeksAgo && d < weekAgo;
    }).length;

    // Bug status
    const newBugs = bugReports.filter(b => b.status === 'new').length;
    const inProgressBugs = bugReports.filter(b => b.status === 'in-progress').length;

    // Conversion rates
    const invited = betaInterests.filter(b => b.status === 'invited').length;
    const registered = betaInterests.filter(b => b.status === 'registered').length;

    return {
      newToday,
      betaTotal: betaInterests.length,
      betaTrend: thisWeekBeta - lastWeekBeta,
      usersTotal: users.length,
      usersTrend: thisWeekUsers - lastWeekUsers,
      bugsNew: newBugs,
      bugsInProgress: inProgressBugs,
      bugsTotal: bugReports.length,
      invited,
      registered,
    };
  }, [users, betaInterests, bugReports]);

  // Generate chart data for last 7 days
  const chartData = useMemo(() => {
    const days = 7;
    const data = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);

      const getDate = (timestamp: Timestamp | string) => {
        if (!timestamp) return new Date(0);
        return timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp);
      };

      const count = betaInterests.filter(b => {
        const d = getDate(b.createdAt);
        return d >= date && d < nextDate;
      }).length + users.filter(u => {
        const d = getDate(u.registeredAt);
        return d >= date && d < nextDate;
      }).length;

      data.push({
        label: date.toLocaleDateString('nb-NO', { weekday: 'short' }),
        value: count,
      });
    }

    return data;
  }, [betaInterests, users]);

  // Calculate conversion funnel
  const funnel = useMemo(() => {
    const interested = betaInterests.filter(b => !b.status || b.status === 'interested').length;
    const invited = betaInterests.filter(b => b.status === 'invited').length;
    const registered = betaInterests.filter(b => b.status === 'registered').length;
    const total = betaInterests.length || 1;

    return {
      interested: { count: interested, percent: Math.round((interested / total) * 100) },
      invited: { count: invited, percent: Math.round((invited / total) * 100) },
      registered: { count: registered, percent: Math.round((registered / total) * 100) },
    };
  }, [betaInterests]);

  return (
    <div className="space-y-8">
      {/* Onboarding Status */}
      {quotas && (
        <div className="bg-gradient-to-r from-charcoal to-charcoal-dark rounded-squircle p-6 text-white">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-salmon-300" />
            Onboarding Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Beta */}
            <div className="bg-white/10 rounded-squircle-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-listo-300" />
                <span className="text-sm font-medium text-white/80">Free Beta</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold">{quotas.betaSpots.claimed}</span>
                <span className="text-white/60">/ {quotas.betaSpots.total}</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-listo-400 rounded-full"
                  style={{ width: `${(quotas.betaSpots.claimed / quotas.betaSpots.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-white/50 mt-2">
                {quotas.betaSpots.total - quotas.betaSpots.claimed} plasser igjen
              </p>
            </div>

            {/* Founders Pass */}
            <div className="bg-white/10 rounded-squircle-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-4 h-4 text-salmon-300" />
                <span className="text-sm font-medium text-white/80">Founders Pass</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold">{quotas.foundersPass.sold}</span>
                <span className="text-white/60">/ {quotas.foundersPass.total}</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-salmon-400 rounded-full"
                  style={{ width: `${(quotas.foundersPass.sold / quotas.foundersPass.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-white/50 mt-2">
                💰 {(quotas.foundersPass.sold * quotas.foundersPass.price).toLocaleString("no-NO")} NOK omsetning
              </p>
            </div>

            {/* Trial Users */}
            <div className="bg-white/10 rounded-squircle-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-magic-300" />
                <span className="text-sm font-medium text-white/80">Prøveperioder</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold">{trialUsers}</span>
                <span className="text-white/60">aktive</span>
              </div>
              <p className="text-xs text-white/50 mt-4">
                14-dagers prøveperiode
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Beta-interesserte"
          value={metrics.betaTotal}
          icon={Sparkles}
          iconBgColor="bg-magic-100"
          iconColor="text-magic-600"
          trend={metrics.betaTrend}
          trendLabel="denne uken"
          href="/admin/beta"
        />
        <MetricCard
          title="Registrerte brukere"
          value={metrics.usersTotal}
          icon={Users}
          iconBgColor="bg-listo-100"
          iconColor="text-listo-600"
          trend={metrics.usersTrend}
          trendLabel="denne uken"
          href="/admin/users"
        />
        <MetricCard
          title="Nye bugs"
          value={metrics.bugsNew}
          icon={Bug}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
          trendLabel={`${metrics.bugsInProgress} under arbeid`}
          href="/admin/bugs"
        />
        <MetricCard
          title="Nye i dag"
          value={metrics.newToday}
          icon={Clock}
          iconBgColor="bg-salmon-100"
          iconColor="text-salmon-600"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity chart */}
        <div className="bg-white rounded-squircle shadow-lg p-6 border border-charcoal/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-charcoal flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-listo-500" />
              Aktivitet siste 7 dager
            </h3>
            <span className="text-sm text-charcoal-light">
              {chartData.reduce((sum, d) => sum + d.value, 0)} totalt
            </span>
          </div>
          <SimpleChart data={chartData} height={160} color="#22c55e" />
        </div>

        {/* Conversion funnel */}
        <div className="bg-white rounded-squircle shadow-lg p-6 border border-charcoal/5">
          <h3 className="font-semibold text-charcoal flex items-center gap-2 mb-4">
            <UserCheck className="w-5 h-5 text-magic-500" />
            Beta-konvertering
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-charcoal-light">Interessert</div>
              <div className="flex-1 bg-cream-100 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-end pr-3 text-sm font-medium text-white"
                  style={{ width: `${Math.max(funnel.interested.percent, 10)}%` }}
                >
                  {funnel.interested.count}
                </div>
              </div>
              <div className="w-12 text-right text-sm text-charcoal-light">
                {funnel.interested.percent}%
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-charcoal-light flex items-center gap-1">
                <Send className="w-3 h-3" /> Invitert
              </div>
              <div className="flex-1 bg-cream-100 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-end pr-3 text-sm font-medium text-white"
                  style={{ width: `${Math.max(funnel.invited.percent, 10)}%` }}
                >
                  {funnel.invited.count}
                </div>
              </div>
              <div className="w-12 text-right text-sm text-charcoal-light">
                {funnel.invited.percent}%
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-charcoal-light flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> Registrert
              </div>
              <div className="flex-1 bg-cream-100 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-end pr-3 text-sm font-medium text-white"
                  style={{ width: `${Math.max(funnel.registered.percent, 10)}%` }}
                >
                  {funnel.registered.count}
                </div>
              </div>
              <div className="w-12 text-right text-sm text-charcoal-light">
                {funnel.registered.percent}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform distribution from bugs */}
      {bugReports.length > 0 && (
        <div className="bg-white rounded-squircle shadow-lg p-6 border border-charcoal/5">
          <h3 className="font-semibold text-charcoal flex items-center gap-2 mb-4">
            <Bug className="w-5 h-5 text-red-500" />
            Bug-fordeling per platform
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {(['ios', 'android', 'web'] as const).map(platform => {
              const count = bugReports.filter(b => b.deviceInfo?.platform === platform).length;
              const percent = Math.round((count / bugReports.length) * 100);
              return (
                <div key={platform} className="text-center p-4 bg-cream-50 rounded-squircle-sm">
                  <p className="text-2xl font-bold text-charcoal">{count}</p>
                  <p className="text-sm text-charcoal-light capitalize">{platform}</p>
                  <p className="text-xs text-charcoal/50">{percent}%</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

