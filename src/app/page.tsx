import { Button, Input } from "@haventlyguard/lab6-package";

export default function Home() {
  const buttonClick = () => {
    console.log("ok")
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Button variant="danger" size="md" type="button" onClick={()=>console.log("opa")} > дети</Button>
    </div>
  );
}
