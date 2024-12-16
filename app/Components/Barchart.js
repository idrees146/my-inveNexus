"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "/components/ui/chart";
import React from "react";

export function Component() {
  const [orders, setOrders] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/getOrders");
        const data = await response.json();

        if (data.success) {
          setOrders(data.data);
        } else {
          console.log("Couldn't fetch the data successfully");
        }
      } catch (error) {
        console.log("There was an error fetching the data from the database: " + error);
      }finally{
        setloading(false)
      }
    }

    fetchOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      // Group orders by day of the week
      const weeklyData = Array(7).fill(0); // Initialize with 0 for 7 days

      orders.forEach((order) => {
        const orderDate = new Date(order.date); // Ensure the `timestamp` exists in your schema
        const dayIndex = orderDate.getDay(); // Sunday (0) to Saturday (6)
        const price = Number(order.price) || 0; // Convert price to a number and handle invalid values
        weeklyData[dayIndex] += price;
      });

      // Map weekly data to chart format
      const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const dynamicChartData = daysOfWeek.map((day, index) => ({
        day,
        Transactions: weeklyData[index],
      }));

      setChartData(dynamicChartData);
    }
  }, [orders]);

  const chartConfig = {
    Transactions: {
      label: "Transactions",
      color: "hsl(var(--chart-3))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Report in PKR</CardTitle>
        <CardDescription>Weekly Sales Report</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>

        {loading &&
                                <div className='flex justify-center w-[100%] '>

                                    <img className='' width={70} src="/newanim.gif" alt="" />


                                </div>}

                                
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // Abbreviate day names
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Transactions" fill="var(--color-Transactions)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Store data for current week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total products sold within a week in PKR
        </div>
      </CardFooter>
    </Card>
  );
}
