export default interface ILibrary {
  map(arg0: (library: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  location: string;
  description: string;
  opens: string;
  closes: string;
  rating: number;
  noOfRatings: number;
  imageUrl: string;
}
