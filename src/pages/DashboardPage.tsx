import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecentSales } from "@/components/recent-sales";
import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const dashboardContent = {
  dashboard: {
    title: "Painel central",
    tabs: {
      overview: "Resumo",
      analytics: "Análises",
      reports: "Relatórios",
      notifications: "Notificações",
    },
    cards: {
      totalRevenue: {
        title: "Receita total",
        value: "R$ 231.890,45",
        change: "+20,1% em relação ao mês passado",
      },
      subscriptions: {
        title: "Assinaturas",
        value: "+2.350",
        change: "+180,1% em relação ao mês passado",
      },
      sales: {
        title: "Vendas",
        value: "+12.234",
        change: "+19% em relação ao mês passado",
      },
      activeNow: {
        title: "Online agora",
        value: "+573",
        change: "+201 desde a última hora",
      },
    },
    recentSales: {
      title: "Vendas Recentes",
      description: "Você fez 265 vendas este mês.",
    },
  },
  averageChart: {
    today: "Hoje",
    steps: "pontos",
    dateRange: "01/01/2024 - 07/01/2024",
    averageSteps: "Média de pontos",
    totalSteps: "53.305",
    stepsToGoal: "12.584",
    footerDescription: {
      part1: "Nos últimos 7 dias, você atingiu",
      part2: "pontos.",
      part3: "Você precisa de",
      part4: "mais pontos para atingir sua meta.",
    },
    chartData: [
      { date: "2024-01-01", steps: 2000 },
      { date: "2024-01-02", steps: 2100 },
      { date: "2024-01-03", steps: 2200 },
      { date: "2024-01-04", steps: 1300 },
      { date: "2024-01-05", steps: 1400 },
      { date: "2024-01-06", steps: 2500 },
      { date: "2024-01-07", steps: 1600 },
    ],
  },
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
};

export function AverageChart() {
  return (
    <Card>
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>{dashboardContent.averageChart.today}</CardDescription>
        <CardTitle className="text-4xl tabular-nums">
          12.584{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            {dashboardContent.averageChart.steps}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            steps: {
              label: dashboardContent.averageChart.steps,
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <BarChart
            accessibilityLayer
            margin={{
              left: -4,
              right: -4,
            }}
            data={dashboardContent.averageChart.chartData}
          >
            <Bar
              dataKey="steps"
              fill="var(--color-steps)"
              radius={5}
              fillOpacity={0.6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("pt-BR", {
                  weekday: "short",
                });
              }}
            />
            <ChartTooltip
              defaultIndex={2}
              content={
                <ChartTooltipContent
                  hideIndicator
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                  }}
                />
              }
              cursor={false}
            />
            <ReferenceLine
              y={1200}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              strokeWidth={1}
            >
              <Label
                position="insideBottomLeft"
                value={dashboardContent.averageChart.averageSteps}
                offset={10}
                fill="hsl(var(--foreground))"
              />
              <Label
                position="insideTopLeft"
                value="12.343"
                className="text-lg"
                fill="hsl(var(--foreground))"
                offset={10}
                startOffset={100}
              />
            </ReferenceLine>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          {dashboardContent.averageChart.footerDescription.part1}{" "}
          <span className="font-medium text-foreground">
            {dashboardContent.averageChart.totalSteps}
          </span>{" "}
          {dashboardContent.averageChart.footerDescription.part2}
        </CardDescription>
        <CardDescription>
          {dashboardContent.averageChart.footerDescription.part3}{" "}
          <span className="font-medium text-foreground">
            {dashboardContent.averageChart.stepsToGoal}
          </span>{" "}
          {dashboardContent.averageChart.footerDescription.part4}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {dashboardContent.dashboard.title}
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">
                {dashboardContent.dashboard.tabs.overview}
              </TabsTrigger>
              <TabsTrigger value="analytics">
                {dashboardContent.dashboard.tabs.analytics}
              </TabsTrigger>
              <TabsTrigger value="reports">
                {dashboardContent.dashboard.tabs.reports}
              </TabsTrigger>
              <TabsTrigger value="notifications">
                {dashboardContent.dashboard.tabs.notifications}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dashboardContent.dashboard.cards.totalRevenue.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {dashboardContent.dashboard.cards.totalRevenue.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardContent.dashboard.cards.totalRevenue.change}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dashboardContent.dashboard.cards.subscriptions.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {dashboardContent.dashboard.cards.subscriptions.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardContent.dashboard.cards.subscriptions.change}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dashboardContent.dashboard.cards.sales.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {dashboardContent.dashboard.cards.sales.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardContent.dashboard.cards.sales.change}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dashboardContent.dashboard.cards.activeNow.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {dashboardContent.dashboard.cards.activeNow.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardContent.dashboard.cards.activeNow.change}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                  <AverageChart />
                </div>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>
                      {dashboardContent.dashboard.recentSales.title}
                    </CardTitle>
                    <CardDescription>
                      {dashboardContent.dashboard.recentSales.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
