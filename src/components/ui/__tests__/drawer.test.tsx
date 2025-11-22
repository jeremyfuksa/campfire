import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "../drawer";

describe("Drawer", () => {
  it("renders trigger", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
      </Drawer>
    );
    expect(screen.getByText("Open Drawer")).toBeInTheDocument();
  });

  it("opens drawer on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    await user.click(screen.getByText("Open"));
    expect(await screen.findByText("Drawer Title")).toBeInTheDocument();
  });
});
