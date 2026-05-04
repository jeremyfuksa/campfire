import type { Meta } from "@storybook/react";
import { ChevronRight, Folder, Star, User } from "lucide-react";
import { ListGroup, ListGroupItem } from "./list-group";

const meta = {
  title: "Components/ListGroup",
  component: ListGroup,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ListGroup>;

export default meta;

export const Default = {
  render: () => (
    <ListGroup className="w-80">
      <ListGroupItem>First item</ListGroupItem>
      <ListGroupItem>Second item</ListGroupItem>
      <ListGroupItem>Third item</ListGroupItem>
    </ListGroup>
  ),
};

export const WithIcons = {
  render: () => (
    <ListGroup className="w-80">
      <ListGroupItem icon={<User size={16} />}>Profile</ListGroupItem>
      <ListGroupItem icon={<Star size={16} />}>Favorites</ListGroupItem>
      <ListGroupItem icon={<Folder size={16} />}>Projects</ListGroupItem>
    </ListGroup>
  ),
};

export const Interactive = {
  render: () => (
    <ListGroup className="w-80">
      <ListGroupItem
        icon={<User size={16} />}
        action={<ChevronRight size={16} />}
        onClick={() => alert("Profile clicked")}
      >
        Profile
      </ListGroupItem>
      <ListGroupItem
        icon={<Star size={16} />}
        action={<ChevronRight size={16} />}
        active
        onClick={() => alert("Favorites clicked")}
      >
        Favorites (active)
      </ListGroupItem>
      <ListGroupItem
        icon={<Folder size={16} />}
        action={<ChevronRight size={16} />}
        disabled
      >
        Projects (disabled)
      </ListGroupItem>
    </ListGroup>
  ),
};
