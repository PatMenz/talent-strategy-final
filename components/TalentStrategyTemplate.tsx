import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TalentStrategyTemplate() {
  return (
    <div className="grid gap-6 p-6 max-w-4xl mx-auto text-slate-800">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Strategic Positioning Framework</h1>
      <h2 className="text-lg text-muted-foreground mb-8">
        For Senior Public Sector Leaders Entering the Private and Civic Market
      </h2>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">1. Strategic Skill Transfer Map</h3>
          <p className="text-sm text-slate-700">
            See where your public sector experience creates leverage in the private and civic sectors:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
            <li>Systemic Change Leadership</li>
            <li>Executive Capability Building</li>
            <li>Equity, Compliance, and Culture Reform</li>
            <li>Policy, Budget, and Performance Integration</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">2. Sector Demand Archetypes</h3>
          <p className="text-sm mb-3 text-slate-700">Your experience aligns with these market roles:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Transformation Architect:</strong> Redesign systems inside consulting firms or as a PE operating partner</li>
            <li><strong>Capability Builder:</strong> Drive leadership development in scaling, mission-driven enterprises</li>
            <li><strong>Trust Translator:</strong> Operate across public-private partnerships or NGO ecosystems</li>
            <li><strong>Policy Integrator:</strong> Lead change in foundations, think tanks, and civic intermediaries</li>
            <li><strong>Execution Advisor:</strong> Step into high-trust interim or transition roles during reorgs or crises</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">3. Market Activation Strategy</h3>
          <p className="text-sm mb-3 text-slate-700">Our partnership will follow this structured approach:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li><strong>Positioning Phase:</strong> Translate your narrative into market-ready language, build tailored materials, and identify strategic targets.</li>
            <li><strong>Engagement Phase:</strong> Open private dialogues with consulting firms, civic innovation investors, and mission-aligned enterprises.</li>
            <li><strong>Conversion Phase:</strong> Shape executive or advisory roles around your strengths and secure high-leverage engagements.</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">4. Strategic Translation Summary</h3>
          <p className="text-sm text-slate-700">
            You're not transitioning out of government—you're stepping into system-level leadership where transformation, credibility, and execution intersect. This framework will translate your experience into influence, not just placement.
          </p>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Button className="text-base px-6 py-2">
          Let's Identify Your Fit <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
