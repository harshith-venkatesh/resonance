import { PageHeader } from "@/components/view/page-header";
import { HeroPattern } from "../components/hero-pattern";
import { DashboardHeader } from "@/components/view/dashboard-header";
import { TextInputPanel } from "@/features/text-to-speech/components/text-input-panel";
import { QuickActionsPanel } from "../components/quick-action-panel";

export function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
}
