export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Identifier for an icon component or an SVG string
}

export interface TeamMember {
  id:string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}