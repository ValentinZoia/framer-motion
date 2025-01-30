import { FC } from "react";


interface Props{
    text:string;
}

const NuevoCompo: FC<Props> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default NuevoCompo