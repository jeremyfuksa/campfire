import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent } from "./card";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const slides = ["First", "Second", "Third", "Fourth", "Fifth"];

export const Default: Story = {
  render: () => (
    <Carousel className="w-72">
      <CarouselContent>
        {slides.map((label) => (
          <CarouselItem key={label}>
            <Card>
              <CardContent className="flex items-center justify-center aspect-square text-3xl font-semibold">
                {label}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleVisible: Story = {
  render: () => (
    <Carousel className="w-96" opts={{ align: "start" }}>
      <CarouselContent className="-ml-2">
        {slides.map((label) => (
          <CarouselItem key={label} className="pl-2 basis-1/3">
            <Card>
              <CardContent className="flex items-center justify-center aspect-square text-xl font-semibold">
                {label}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-56" opts={{ align: "start" }}>
      <CarouselContent className="h-72">
        {slides.map((label) => (
          <CarouselItem key={label} className="basis-1/2">
            <Card>
              <CardContent className="flex items-center justify-center h-full text-2xl font-semibold">
                {label}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
