import { previewData } from "next/headers";

export default function HomePage() {
  if(previewData()){
    return <div>Prev</div>
  }
  return <></>;
}
