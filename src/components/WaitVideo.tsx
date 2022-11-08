import { ArrowRight } from "phosphor-react";

export function WaitVideo(){
  return (
    <div className="flex-1 flex  justify-center mt-20 gap-7 text-2xl">
        <span>Selecione uma aula</span>
        <ArrowRight weight="bold" className="text-green-500 text-4xl animate-bounce"/>
    </div>
  )
}