import { useParams } from "react-router-dom";

export default function ProjectIdPage() {
  const { id } = useParams();

  return <div>Project {id}</div>;
}
